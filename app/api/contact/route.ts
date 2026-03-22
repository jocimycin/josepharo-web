import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO_EMAIL = 'hello@josepharo.me'
const FROM_JOSEPH = 'Joseph Aro <onboarding@resend.dev>'

// Auto-reply body tailored to each inquiry type
function autoReplyBody(name: string, type: string): { subject: string; html: string; text: string } {
  const greeting = `Hi ${name.split(' ')[0]},`

  const bodies: Record<string, { subject: string; body: string }> = {
    'Consulting & Technical Advisory': {
      subject: 'Thanks for reaching out — Consulting Inquiry Received',
      body: `Thank you for getting in touch about a consulting or technical advisory engagement. I have received your message and will review the details shortly.\n\nI work across geospatial intelligence, remote sensing, hydrography, UAV field operations, and spatial data systems. If your project involves any of these domains, I look forward to understanding the challenge and exploring how I can help.\n\nI typically respond within 48 hours. If your matter is urgent, feel free to follow up directly.`,
    },
    'Research & Academic Collaboration': {
      subject: 'Thanks for reaching out — Research Collaboration Inquiry Received',
      body: `Thank you for reaching out about a potential research or academic collaboration. I have received your message and will be in touch shortly.\n\nI am interested in applied research spanning geospatial intelligence, hydrography, earth observation, climate-linked spatial systems, and decision-support design. I look forward to learning more about your work and how our interests might align.\n\nI typically respond within 48 hours.`,
    },
    'Speaking & Workshops': {
      subject: 'Thanks for reaching out — Speaking Inquiry Received',
      body: `Thank you for considering me for a speaking engagement or workshop. I have received your message and will follow up shortly.\n\nI speak on geospatial intelligence, remote sensing, hydrography, data strategy, UAV field operations, and the challenge of translating complex spatial data into real-world decisions. I am open to keynotes, panels, workshops, guest lectures, and institutional presentations.\n\nI look forward to discussing the event and exploring whether there is a good fit.`,
    },
    'Geospatial Systems Design': {
      subject: 'Thanks for reaching out — Systems Design Inquiry Received',
      body: `Thank you for your interest in geospatial systems design. I have received your message and will be in touch shortly.\n\nI design and lead geospatial workflows that connect data acquisition, earth observation, modelling, analytics, and decision communication. My approach is systems-led — starting from the decision context and working backwards into data, methods, and architecture.\n\nI look forward to understanding more about what you are building.`,
    },
    'Remote Sensing & Hydrographic Projects': {
      subject: 'Thanks for reaching out — Remote Sensing / Hydrographic Project Inquiry Received',
      body: `Thank you for reaching out about a remote sensing or hydrographic project. I have received your message and will follow up shortly.\n\nI have extensive experience in multispectral and hyperspectral analysis, LiDAR, bathymetric surveys, hydrodynamic modelling, and field-to-intelligence workflows across mining, waterways, infrastructure, and environmental contexts.\n\nI look forward to learning more about your project.`,
    },
  }

  const match = bodies[type] ?? {
    subject: 'Thanks for reaching out — Message Received',
    body: `Thank you for getting in touch. I have received your message and will respond within 48 hours.\n\nI work across geospatial intelligence, remote sensing, hydrography, UAV field operations, and spatial data strategy. If your inquiry relates to any of these areas, I look forward to the conversation.`,
  }

  const text = `${greeting}\n\n${match.body}\n\nBest regards,\nJoseph Aro\nGeospatial Intelligence · Remote Sensing · Hydrography\nbidex99@gmail.com\nBC, Canada · Lagos, Nigeria`

  const html = `
    <div style="font-family: Georgia, serif; max-width: 560px; color: #1a1a1a; line-height: 1.7;">
      <p style="margin-bottom:16px;">${greeting}</p>
      ${match.body
        .split('\n\n')
        .map((p) => `<p style="margin-bottom:16px;">${p.replace(/\n/g, '<br>')}</p>`)
        .join('')}
      <p style="margin-bottom: 4px;">Best regards,</p>
      <p style="margin-bottom: 4px; font-weight: 600;">Joseph Aro</p>
      <p style="font-size:13px; color:#666; margin-top:0;">Geospatial Intelligence · Remote Sensing · Hydrography<br>
      BC, Canada · Lagos, Nigeria</p>
      <hr style="border:none; border-top:1px solid #eee; margin: 24px 0;">
      <p style="font-size:11px; color:#999;">This is an automated confirmation. Your message has been received and Joseph will follow up directly.</p>
    </div>
  `

  return { subject: match.subject, html, text }
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Email service not configured. Please email bidex99@gmail.com directly.' }, { status: 503 })
  }

  const resend = new Resend(apiKey)

  try {
    const body = await req.json()
    const { name, email, org, type, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    // 1 — Notify Joseph
    const notifyResult = await resend.emails.send({
      from: FROM_JOSEPH,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[josepharo.me] ${type || 'Inquiry'} from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        org ? `Organisation: ${org}` : '',
        `Inquiry type: ${type || 'Not specified'}`,
        '',
        `Message:\n${message}`,
      ]
        .filter(Boolean)
        .join('\n'),
      html: `
        <div style="font-family: sans-serif; max-width: 560px; color: #1a1a1a;">
          <h2 style="margin-bottom:24px; font-weight:600;">New message from josepharo.me</h2>
          <table cellpadding="0" cellspacing="0" style="width:100%; border-collapse:collapse;">
            <tr><td style="padding:8px 0; border-bottom:1px solid #eee; font-size:13px; color:#666; width:130px;">Name</td><td style="padding:8px 0; border-bottom:1px solid #eee; font-size:14px;">${name}</td></tr>
            <tr><td style="padding:8px 0; border-bottom:1px solid #eee; font-size:13px; color:#666;">Email</td><td style="padding:8px 0; border-bottom:1px solid #eee; font-size:14px;"><a href="mailto:${email}">${email}</a></td></tr>
            ${org ? `<tr><td style="padding:8px 0; border-bottom:1px solid #eee; font-size:13px; color:#666;">Organisation</td><td style="padding:8px 0; border-bottom:1px solid #eee; font-size:14px;">${org}</td></tr>` : ''}
            <tr><td style="padding:8px 0; border-bottom:1px solid #eee; font-size:13px; color:#666;">Type</td><td style="padding:8px 0; border-bottom:1px solid #eee; font-size:14px;">${type || '—'}</td></tr>
          </table>
          <div style="margin-top:24px; padding:16px; background:#f9f9f9; border-radius:4px; font-size:14px; line-height:1.6; white-space:pre-wrap;">${message}</div>
          <p style="margin-top:24px; font-size:12px; color:#999;">Sent from josepharo.me · Reply directly to respond to ${name}.</p>
        </div>
      `,
    })

    if (notifyResult.error) {
      console.error('Resend notify error:', notifyResult.error)
      return NextResponse.json({ error: 'Failed to send. Please email bidex99@gmail.com directly.' }, { status: 500 })
    }

    // 2 — Auto-reply to sender
    const reply = autoReplyBody(name, type)
    await resend.emails.send({
      from: FROM_JOSEPH,
      to: email,
      subject: reply.subject,
      text: reply.text,
      html: reply.html,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
