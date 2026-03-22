import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO_EMAIL = 'hello@josepharo.me'

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Email service not configured.' }, { status: 503 })
  }

  const resend = new Resend(apiKey)

  try {
    const { email } = await req.json()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 })
    }

    // Notify Joseph of the new subscriber
    await resend.emails.send({
      from: 'Joseph Aro <onboarding@resend.dev>',
      to: TO_EMAIL,
      subject: `[josepharo.me] New subscriber: ${email}`,
      text: `New newsletter subscriber:\n\n${email}\n\nAdd them to your mailing list.`,
    })

    // Send a welcome note to the subscriber
    await resend.emails.send({
      from: 'Joseph Aro <onboarding@resend.dev>',
      to: email,
      subject: "You're subscribed — Field Notes by Joseph Aro",
      text: `Hi,\n\nThanks for subscribing to Field Notes.\n\nWhen I publish something worth reading — on geospatial intelligence, hydrography, remote sensing, or spatial data strategy — you'll get it directly.\n\nNo noise. No spam. Unsubscribe any time by replying to this email.\n\nBest,\nJoseph Aro\nGeospatial Intelligence · BC, Canada / Lagos, Nigeria`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 520px; color: #1a1a1a; line-height: 1.75;">
          <p>Hi,</p>
          <p>Thanks for subscribing to <strong>Field Notes</strong>.</p>
          <p>When I publish something worth reading — on geospatial intelligence, hydrography, remote sensing, or spatial data strategy — you'll get it directly.</p>
          <p>No noise. No spam. Unsubscribe any time by replying to this email.</p>
          <p style="margin-top: 32px;">Best,<br><strong>Joseph Aro</strong><br>
          <span style="font-size: 13px; color: #666;">Geospatial Intelligence · BC, Canada / Lagos, Nigeria</span></p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Newsletter route error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
