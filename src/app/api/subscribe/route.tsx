import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string" || !email.includes("@"))
      return NextResponse.json({ ok: false, error: "Email invalide" }, { status: 400 });

    // ---- Option A: Brevo (Sendinblue) ----
    // Variables à ajouter dans Vercel:
    // BREVO_API_KEY = xxxxx
    // BREVO_LIST_ID = 123  (numérique)
    if (process.env.BREVO_API_KEY && process.env.BREVO_LIST_ID) {
      const brevo = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          listIds: [Number(process.env.BREVO_LIST_ID)],
          updateEnabled: true,
        }),
      });
      if (!brevo.ok && brevo.status !== 400) { // 400 = déjà inscrit
        const err = await brevo.text();
        return NextResponse.json({ ok: false, error: err }, { status: 500 });
      }
      return NextResponse.json({ ok: true });
    }

    // ---- Option B: Mailchimp ----
    // Variables à ajouter dans Vercel:
    // MAILCHIMP_API_KEY = xxxx-usXX
    // MAILCHIMP_SERVER_PREFIX = usXX
    // MAILCHIMP_AUDIENCE_ID = xxxxxx
    if (
      process.env.MAILCHIMP_API_KEY &&
      process.env.MAILCHIMP_SERVER_PREFIX &&
      process.env.MAILCHIMP_AUDIENCE_ID
    ) {
      const url = `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`;
      const mc = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
        },
        body: JSON.stringify({ email_address: email, status: "subscribed" }),
      });
      if (!mc.ok && mc.status !== 400) {
        const err = await mc.text();
        return NextResponse.json({ ok: false, error: err }, { status: 500 });
      }
      return NextResponse.json({ ok: true });
    }

    // Si aucun ESP n'est configuré, on répond ok (dev)
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
