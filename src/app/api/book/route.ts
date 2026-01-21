import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type Payload = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
};

export async function POST(req: Request) {
  let body: Payload;

  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    BOOKING_TO,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !BOOKING_TO) {
    return NextResponse.json(
      { ok: false, fallbackToMailto: true, error: "SMTP not configured" },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true" || SMTP_SECURE === "1",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const subject = `Bokningsförfrågan — Successifier.se — ${body.company ? body.company + " — " : ""}${body.name}`;

  const text = [
    `Namn: ${body.name}`,
    body.company ? `Företag: ${body.company}` : null,
    `Email: ${body.email}`,
    body.phone ? `Telefon: ${body.phone}` : null,
    "",
    "Meddelande:",
    body.message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await transporter.sendMail({
      from: SMTP_USER,
      to: BOOKING_TO,
      replyTo: body.email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Failed to send email";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
