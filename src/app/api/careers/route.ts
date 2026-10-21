import { applicationSchema, RESUME_EXTENSIONS, RESUME_MAX_BYTES } from "@/lib/contact";
import { sendMail } from "@/lib/mailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const field = (k: string) => String(form.get(k) ?? "");
  const parsed = applicationSchema.safeParse({
    role: field("role"),
    name: field("name"),
    email: field("email"),
    phone: field("phone"),
    linkedin: field("linkedin"),
    message: field("message"),
    website: field("website"),
  });
  if (!parsed.success) {
    return Response.json(
      { ok: false, error: "Please check the form", fields: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }
  const data = parsed.data;
  if (data.website) return Response.json({ ok: true });

  const resume = form.get("resume");
  const resumeError = (msg: string) =>
    Response.json({ ok: false, error: "Please check the form", fields: { resume: [msg] } }, { status: 422 });
  if (!(resume instanceof File) || resume.size === 0) return resumeError("Please attach your resume");
  const ext = resume.name.slice(resume.name.lastIndexOf(".")).toLowerCase();
  if (!RESUME_EXTENSIONS.includes(ext)) return resumeError("Resume must be a PDF, DOC or DOCX file");
  if (resume.size > RESUME_MAX_BYTES) return resumeError("Resume must be 5 MB or smaller");

  const text = [
    `Role:     ${data.role}`,
    `Name:     ${data.name}`,
    `Email:    ${data.email}`,
    `Phone:    ${data.phone}`,
    `LinkedIn: ${data.linkedin || "—"}`,
    "",
    data.message || "(no message)",
  ].join("\n");

  try {
    const { simulated } = await sendMail({
      subject: `Application · ${data.role} · ${data.name}`,
      text,
      replyTo: data.email,
      to: process.env.CAREERS_TO || undefined,
      attachments: [
        { filename: resume.name, content: Buffer.from(await resume.arrayBuffer()), contentType: resume.type || undefined },
      ],
    });
    return Response.json({ ok: true, simulated });
  } catch (err) {
    console.error("[careers] send failed", err);
    return Response.json({ ok: false, error: "Could not submit your application. Please email us your resume." }, { status: 502 });
  }
}
