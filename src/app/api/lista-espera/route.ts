import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'morerasjosu@gmail.com'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await req.json()
    const { email } = body

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }

    // Notify team
    await resend.emails.send({
      from: 'tramto <noreply@tramto.com>',
      to: CONTACT_EMAIL,
      subject: `Nueva inscripción a lista de espera — ${email}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #F59E0B;">Nueva inscripción</h2>
          <p>Email: <strong>${email}</strong></p>
        </div>
      `,
    })

    // Confirmation to user
    await resend.emails.send({
      from: 'tramto <noreply@tramto.com>',
      to: email,
      subject: 'Estás en la lista — tramto',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="color: #F59E0B;">¡Ya estás en la lista! 🎉</h2>
          <p>Te avisamos en cuanto abramos acceso completo. Mientras tanto, si tienes un trámite urgente escríbenos a <a href="mailto:hola@tramto.com">hola@tramto.com</a>.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <p style="font-size: 12px; color: #999;">tramto · CDMX, México</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/lista-espera]', err)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
