'use client'

import { useState } from 'react'
import { Button } from './Button'

interface SolicitudFormProps {
  tramiteNombre: string
  tramiteSlug: string
}

export function SolicitudForm({ tramiteNombre, tramiteSlug }: SolicitudFormProps) {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    privacidad: false,
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, tramite: tramiteNombre, tramiteSlug }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ nombre: '', email: '', telefono: '', mensaje: '', privacidad: false })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-green-500/10 border border-green-500/30 p-8 text-center">
        <div className="text-3xl mb-3">✅</div>
        <p className="font-syne font-bold text-lg text-white mb-1">Listo. Te contactamos hoy mismo.</p>
        <p className="text-white/50 text-sm">Revisa tu correo — te enviamos una confirmación.</p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-6 md:p-8">
      <h3 className="font-syne font-bold text-xl text-white mb-2">Solicitar este trámite</h3>
      <p className="text-white/50 text-sm mb-6">
        Nos escribes, nosotros te contactamos hoy mismo. Sin compromiso.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-white/50 font-medium mb-1.5 block">Nombre completo *</label>
            <input
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
              className="w-full bg-white/[0.07] border border-white/[0.12] rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-yellow-400/40 transition-colors"
            />
          </div>
          <div>
            <label className="text-xs text-white/50 font-medium mb-1.5 block">Email *</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="tu@correo.com"
              className="w-full bg-white/[0.07] border border-white/[0.12] rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-yellow-400/40 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="text-xs text-white/50 font-medium mb-1.5 block">Teléfono / WhatsApp *</label>
          <input
            name="telefono"
            type="tel"
            value={form.telefono}
            onChange={handleChange}
            required
            placeholder="+52 55 1234 5678"
            className="w-full bg-white/[0.07] border border-white/[0.12] rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-yellow-400/40 transition-colors"
          />
        </div>

        <div>
          <label className="text-xs text-white/50 font-medium mb-1.5 block">Trámite</label>
          <input
            value={tramiteNombre}
            disabled
            className="w-full bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-3 text-white/40 text-sm cursor-not-allowed"
          />
        </div>

        <div>
          <label className="text-xs text-white/50 font-medium mb-1.5 block">Mensaje adicional (opcional)</label>
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            rows={3}
            placeholder="Cuéntanos un poco más sobre tu situación..."
            className="w-full bg-white/[0.07] border border-white/[0.12] rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-yellow-400/40 transition-colors resize-none"
          />
        </div>

        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            name="privacidad"
            type="checkbox"
            checked={form.privacidad}
            onChange={handleChange}
            required
            className="mt-0.5 w-4 h-4 rounded accent-yellow-400"
          />
          <span className="text-xs text-white/40 group-hover:text-white/60 transition-colors leading-relaxed">
            Leí el aviso de privacidad y acepto el tratamiento de mis datos personales por tramto.
          </span>
        </label>

        {status === 'error' && (
          <p className="text-red-400 text-sm">Hubo un error. Intenta de nuevo o escríbenos directamente.</p>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full justify-center"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Enviando...' : 'Enviar solicitud →'}
        </Button>
      </form>
    </div>
  )
}
