'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactoPage() {
  const [estado, setEstado] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
    privacidad: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement
    setForm((prev) => ({
      ...prev,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEstado('loading')

    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, tramite: form.asunto }),
      })

      if (res.ok) {
        setEstado('success')
      } else {
        setEstado('error')
      }
    } catch {
      setEstado('error')
    }
  }

  return (
    <div className="min-h-screen bg-[#0C1A2E]">
      {/* Header */}
      <div className="bg-[#0C1A2E] border-b border-white/[0.06] py-16">
        <div className="max-w-7xl mx-auto px-5">
          <nav className="text-xs text-white/30 font-dm mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-white/60 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-white/60">Contacto</span>
          </nav>
          <h1 className="font-syne font-extrabold text-4xl lg:text-5xl text-white mb-4">
            Escríbenos
          </h1>
          <p className="text-white/40 text-lg font-dm max-w-xl leading-relaxed">
            Cuéntanos qué necesitas y te respondemos hoy mismo. Sin formularios complicados. Sin robots.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            {estado === 'success' ? (
              <div className="bg-[#10B981]/[0.08] border border-[#10B981]/20 rounded-2xl p-10 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h2 className="font-syne font-bold text-white text-2xl mb-2">¡Lo recibimos!</h2>
                <p className="text-white/50 font-dm text-base mb-6">
                  Te respondemos en menos de 24 horas. Revisa también tu spam por si acaso.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm text-[#F59E0B] font-dm hover:underline"
                >
                  ← Volver al inicio
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 lg:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/40 font-dm uppercase tracking-widest mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                      className="w-full bg-white/[0.06] border border-white/[0.10] rounded-xl px-4 py-3 text-white text-sm font-dm placeholder-white/25 focus:outline-none focus:border-[#F59E0B]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 font-dm uppercase tracking-widest mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@correo.com"
                      className="w-full bg-white/[0.06] border border-white/[0.10] rounded-xl px-4 py-3 text-white text-sm font-dm placeholder-white/25 focus:outline-none focus:border-[#F59E0B]/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/40 font-dm uppercase tracking-widest mb-2">
                      Teléfono (opcional)
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+52 55 0000 0000"
                      className="w-full bg-white/[0.06] border border-white/[0.10] rounded-xl px-4 py-3 text-white text-sm font-dm placeholder-white/25 focus:outline-none focus:border-[#F59E0B]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 font-dm uppercase tracking-widest mb-2">
                      ¿Sobre qué trámite?
                    </label>
                    <select
                      name="asunto"
                      value={form.asunto}
                      onChange={handleChange}
                      className="w-full bg-white/[0.06] border border-white/[0.10] rounded-xl px-4 py-3 text-white text-sm font-dm focus:outline-none focus:border-[#F59E0B]/50 transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#0C1A2E]">Selecciona (opcional)</option>
                      <option value="CSF" className="bg-[#0C1A2E]">CSF — Situación Fiscal</option>
                      <option value="Declaración RESICO" className="bg-[#0C1A2E]">Declaración RESICO</option>
                      <option value="Verificación vehicular" className="bg-[#0C1A2E]">Verificación vehicular</option>
                      <option value="Registro de marca" className="bg-[#0C1A2E]">Registro de marca</option>
                      <option value="Pasaporte" className="bg-[#0C1A2E]">Pasaporte</option>
                      <option value="IMSS" className="bg-[#0C1A2E]">Trámite IMSS</option>
                      <option value="INFONAVIT" className="bg-[#0C1A2E]">Trámite INFONAVIT</option>
                      <option value="Empresas" className="bg-[#0C1A2E]">tramto para empresas</option>
                      <option value="Otro" className="bg-[#0C1A2E]">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/40 font-dm uppercase tracking-widest mb-2">
                    Cuéntanos *
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="¿Qué necesitas? ¿Cuál es tu situación? Mientras más detalle nos des, mejor te podemos ayudar."
                    className="w-full bg-white/[0.06] border border-white/[0.10] rounded-xl px-4 py-3 text-white text-sm font-dm placeholder-white/25 focus:outline-none focus:border-[#F59E0B]/50 transition-colors resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="privacidad"
                    id="privacidad"
                    checked={form.privacidad}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 accent-[#F59E0B]"
                  />
                  <label htmlFor="privacidad" className="text-xs text-white/30 font-dm leading-relaxed">
                    Acepto la{' '}
                    <Link href="/privacidad" className="text-white/50 hover:text-[#F59E0B] transition-colors underline">
                      política de privacidad
                    </Link>
                    . tramto usará tus datos solo para responderte.
                  </label>
                </div>

                {estado === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-sm text-red-400 font-dm">
                    Algo salió mal. Intenta de nuevo o escríbenos directo a{' '}
                    <a href="mailto:hola@tramto.com" className="underline">hola@tramto.com</a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={estado === 'loading'}
                  className="w-full bg-[#F59E0B] text-[#0C1A2E] font-syne font-bold py-3.5 rounded-xl hover:bg-[#FCD34D] transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                >
                  {estado === 'loading' ? 'Enviando...' : 'Enviar mensaje →'}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar info */}
          <div className="space-y-6">
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
              <h3 className="font-syne font-bold text-white text-sm mb-4">¿Cuándo respondemos?</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#10B981]">✓</span>
                  <p className="text-sm text-white/50 font-dm leading-relaxed">
                    Lunes a viernes antes de las 6pm: respondemos el mismo día.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#10B981]">✓</span>
                  <p className="text-sm text-white/50 font-dm leading-relaxed">
                    Fines de semana: el siguiente lunes hábil.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F59E0B]/[0.08] border border-[#F59E0B]/20 rounded-2xl p-5">
              <h3 className="font-syne font-bold text-white text-sm mb-2">¿Necesitas tu trámite ya?</h3>
              <p className="text-white/40 text-xs font-dm leading-relaxed mb-4">
                Ve directo al trámite que necesitas y solicítalo ahí. Es más rápido.
              </p>
              <Link
                href="/tramites"
                className="block text-center text-xs font-syne font-bold text-[#F59E0B] border border-[#F59E0B]/30 py-2.5 rounded-xl hover:bg-[#F59E0B]/10 transition-colors"
              >
                Ver catálogo →
              </Link>
            </div>

            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
              <h3 className="font-syne font-bold text-white text-sm mb-3">¿Eres empresa?</h3>
              <p className="text-white/40 text-xs font-dm leading-relaxed mb-4">
                Tenemos planes específicos para equipos. Desde $1,490/mes.
              </p>
              <Link
                href="/empresas"
                className="block text-center text-xs font-syne font-bold text-white/60 border border-white/20 py-2.5 rounded-xl hover:border-white/40 transition-colors"
              >
                Ver planes empresa →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
