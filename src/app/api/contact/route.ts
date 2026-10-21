import { contactSchema } from "@/lib/contact";
import { sendMail } from "@/lib/mailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { ok: false, error: "Please check the form", fields: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const data = parsed.data;
  // Honeypot filled: pretend success so bots don't retry.
  if (data.website) return Response.json({ ok: true });

  const rows: [string, string | undefined][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Company", data.company],
    ["Inquiry", data.inquiry],
  ];
  const text = rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\n${data.message}`;

  try {
    const { simulated } = await sendMail({
      subject: `New enquiry from ${data.name}${data.inquiry ? ` · ${data.inquiry}` : ""}`,
      text,
      replyTo: data.email,
    });
    return Response.json({ ok: true, simulated });
  } catch (err) {
    console.error("[contact] send failed", err);
    return Response.json({ ok: false, error: "Could not send your message. Please email us directly." }, { status: 502 });
  }
}
