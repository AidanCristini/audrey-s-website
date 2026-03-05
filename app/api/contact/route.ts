import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Champs requis manquants.' },
        { status: 400 }
      )
    }

    // ── Resend integration ──
    // 1. Install Resend:  npm install resend
    // 2. Add your API key to .env.local:  RESEND_API_KEY=re_xxxx
    // 3. Uncomment the code below and remove the placeholder response.
    const { Resend } = require('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'Site Web <onboarding@resend.dev>',
      to: 'contact@audrey-greffe.fr',
      replyTo: email,
      subject: subject || `Nouveau message de ${name}`,
      html: `
        <h2>Nouveau message depuis le site</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Objet :</strong> ${subject || '(non renseigné)'}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi.' },
      { status: 500 }
    )
  }
}
