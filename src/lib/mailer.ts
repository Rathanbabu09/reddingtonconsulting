import nodemailer from "nodemailer";
import { site } from "@/content/site";

type Mail = {
  subject: string;
  text: string;
  replyTo?: string;
  to?: string;
  attachments?: { filename: string; content: Buffer; contentType?: string }[];
};

export const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

// Sends via SMTP; without SMTP_HOST (local dev) the message is logged and treated as delivered.
export async function sendMail({ subject, text, replyTo, to, attachments }: Mail): Promise<{ simulated: boolean }> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM } = process.env;

  if (!SMTP_HOST) {
    console.log(
      `[mailer] SMTP_HOST not set; not emailed.\nSubject: ${subject}\n` +
        (attachments?.length ? `Files: ${attachments.map((a) => a.filename).join(", ")}\n` : "") +
        text,
    );
    return { simulated: true };
  }

  const port = Number(SMTP_PORT ?? 587);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
  });
  await transporter.sendMail({
    from: `"${site.shortName} Website" <${CONTACT_FROM ?? SMTP_USER ?? site.email}>`,
    to: to ?? CONTACT_TO ?? site.email,
    replyTo,
    subject,
    text,
    html: `<pre style="font-family:inherit;white-space:pre-wrap">${escapeHtml(text)}</pre>`,
    attachments,
  });
  return { simulated: false };
}
