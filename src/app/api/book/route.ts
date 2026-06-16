import { NextResponse } from "next/server";
import { Resend } from "resend";

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

  const { RESEND_API_KEY, BOOKING_TO } = process.env;

  if (!RESEND_API_KEY || !BOOKING_TO) {
    return NextResponse.json(
      { ok: false, fallbackToMailto: true, error: "Email not configured" },
      { status: 503 }
    );
  }

  const resend = new Resend(RESEND_API_KEY);

  const subject = `Bokningsförfrågan, Successifier.se · ${body.company ? body.company + ", " : ""}${body.name}`;

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

  const { error } = await resend.emails.send({
    from: "Successifier.se <no-reply@successifier.se>",
    to: BOOKING_TO,
    replyTo: body.email,
    subject,
    text,
  });

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
