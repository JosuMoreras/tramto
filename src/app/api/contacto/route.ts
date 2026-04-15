import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'morerasjosu@gmail.com'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await req.json()
    const { nombre, email, telefono, tramite, mensaje } = body

    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
    }

    // Email to tramto team
    await resend.emails.send({
      from: 'tramto <noreply@tramto.com>',
      to: CONTACT_EMAIL,
      subject: `Nueva solicitud${tramite ? `: ${tramite}` : ''} — ${nombre}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="color: #F59E0B; margin-bottom: 24px;">Nueva solicitud de tramto</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 120px;">Nombre</td>
              <td style="padding: 8px 0; font-weight: 600;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${telefono ? `
            <tr>
              <td style="padding: 8px 0; color: #666;">Teléfono</td>
              <td style="padding: 8px 0;">${telefono}</td>
            </tr>` : ''}
            ${tramite ? `
            <tr>
              <td style="padding: 8px 0; color: #666;">Trámite</td>
              <td style="padding: 8px 0;">${tramite}</td>
            </tr>` : ''}
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
            <p style="margin: 0; color: #666; font-size: 13px; margin-bottom: 8px;">Mensaje:</p>
            <p style="margin: 0; white-space: pre-wrap;">${mensaje}</p>
          </div>
        </div>
      `,
    })

    // Confirmation email to user
    await resend.emails.send({
      from: 'tramto <noreply@tramto.com>',
      to: email,
      subject: 'Recibimos tu mensaje — tramto',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="color: #F59E0B;">Hola, ${nombre} 👋</h2>
          <p>Recibimos tu mensaje${tramite ? ` sobre <strong>${tramite}</strong>` : ''} y te respondemos hoy mismo (si es día hábil antes de las 6pm).</p>
          <p style="color: #666; font-size: 14px;">Esto es lo que nos enviaste:</p>
          <div style="padding: 16px; background: #f5f5f5; border-radius: 8px; margin: 16px 0;">
            <p style="margin: 0; white-space: pre-wrap; color: #444; font-size: 14px;">${mensaje}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <p style="font-size: 12px; color: #999;">
            tramto · CDMX, México<br />
            Este es un correo automático, pero alguien real está leyendo tu mensaje.
          </p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/contacto]', err)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
