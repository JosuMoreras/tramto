import Link from 'next/link'
import { TRAMITES } from '@/constants/tramites'
import { NOTICIAS } from '@/constants/noticias'
import { DependenciaBadge, CategoriaBadge } from '@/components/ui/Badge'

const PLANES = [
  {
    nombre: 'Ciudadano Light',
    precio: '$99',
    periodo: 'MXN / mes',
    features: ['Health Score ciudadano', 'Hasta 10 alertas activas', 'Bóveda 5 documentos', 'Guía ciudadana completa', 'Noticiero gubernamental'],
    featured: false,
    badge: null,
  },
  {
    nombre: 'Ciudadano Pro',
    precio: '$150',
    periodo: 'MXN / mes',
    features: ['Todo lo de Light', 'Alertas ilimitadas', 'Bóveda 15 documentos', '1 trámite express incluido', 'Soporte por WhatsApp'],
    featured: false,
    badge: null,
  },
  {
    nombre: 'Emprendedor',
    precio: '$299',
    periodo: 'MXN / mes',
    features: ['Todo lo de Pro', 'Perfil RFC + personas físicas', 'Alertas SAT ilimitadas', '2 trámites express/mes', 'Soporte prioritario'],
    featured: true,
    badge: 'Más popular',
  },
  {
    nombre: 'PYME',
    precio: '$799',
    periodo: 'MXN / mes',
    features: ['Todo lo de Emprendedor', 'Perfil empresarial completo', 'IMSS + INFONAVIT empresa', 'Tabla de vencimientos', 'Gestor asignado'],
    featured: false,
    badge: null,
  },
]

const PASOS = [
  { num: '1', titulo: 'Elige tu trámite', desc: 'Te explicamos exactamente qué es, qué cuesta y qué necesitas. Sin letra chiquita.' },
  { num: '2', titulo: 'Comparte lo que necesitamos', desc: 'Tus datos, de forma segura. Sin rollos.' },
  { num: '3', titulo: 'Nosotros lo resolvemos', desc: 'Tú recibes el resultado en tu correo. Así de sencillo.' },
]

const GRUPOS = [
  { label: 'SAT', slugs: ['csf', 'opinion-cumplimiento', 'fiel-primera-vez', 'fiel-renovacion', 'declaracion-resico'] },
  { label: 'IMSS', slugs: ['semanas-imss', 'nss'] },
  { label: 'INFONAVIT', slugs: ['saldo-infonavit'] },
  { label: 'Vehicular CDMX', slugs: ['verificacion-vehicular', 'licencia-conducir'] },
  { label: 'SRE', slugs: ['pasaporte'] },
  { label: 'IMPI — Marcas', slugs: ['registro-marca', 'declaracion-uso-marca'] },
  { label: 'Legal y más', slugs: ['denuncia-digital', 'certificacion-documentos', 'apostilla', 'traduccion-oficial', 'divorcio-express', 'queja-profeco', 'queja-condusef'] },
]

const TRAMITES_MAP = Object.fromEntries(TRAMITES.map((t) => [t.slug, t]))

const DEP_BADGE: Record<string, string> = {
  SAT: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
  INFONAVIT: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  SEDEMA: 'bg-emerald-600/15 text-emerald-400 border-emerald-600/30',
  IMPI: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
  SRE: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
  IMSS: 'bg-green-500/15 text-green-400 border-green-500/30',
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#0C1A2E] overflow-hidden min-h-[88vh] flex items-center">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1E3A5F]/40 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#F59E0B]/[0.04] blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
              <span className="text-[#F59E0B] text-xs font-semibold tracking-wider uppercase font-dm">Infraestructura cívica · CDMX</span>
            </div>

            <h1 className="font-syne font-extrabold text-5xl lg:text-6xl text-white leading-[1.05] mb-6">
              tu gobierno,<br />
              <span className="text-[#F59E0B]">bajo control.</span>
            </h1>

            <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-lg font-dm font-light">
              Sabemos que los trámites duelen. Las filas, los documentos, los portales que no cargan, los gestores que cobran lo que quieren.{' '}
              <span className="text-white/70">tramto lo resuelve.</span>{' '}
              Sin coyotes. Sin sorpresas. Sin que tengas que saber de leyes.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/tramites" className="bg-[#F59E0B] text-[#0C1A2E] font-syne font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-[#FCD34D] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(245,158,11,0.3)]">
                Ver trámites →
              </Link>
              <Link href="/contacto" className="bg-transparent text-white/70 font-syne font-semibold text-sm px-7 py-3.5 rounded-xl border border-white/15 hover:border-white/35 hover:text-white transition-all">
                Habla con nosotros
              </Link>
            </div>

            <div className="flex gap-8 mt-12 pt-10 border-t border-white/[0.08]">
              {[['20+','trámites disponibles'],['8','dependencias cubiertas'],['CDMX','primero · LATAM después']].map(([n,l]) => (
                <div key={l}>
                  <div className="font-syne font-extrabold text-2xl text-[#F59E0B]">{n}</div>
                  <div className="text-xs text-[#94A3B8] mt-1 font-dm">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero preview card */}
          <div className="hidden lg:block">
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
              <div className="bg-white/[0.05] px-5 py-3.5 flex items-center gap-2 border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                  {['#FF5F57','#FEBC2E','#28C840'].map(c => <span key={c} className="w-2.5 h-2.5 rounded-full" style={{background:c}} />)}
                </div>
                <span className="text-[11px] font-syne font-semibold text-[#94A3B8] mx-auto tracking-wide">TRAMTO — TRÁMITES</span>
              </div>
              <div className="p-5 space-y-2">
                {TRAMITES.slice(0,5).map((t) => (
                  <Link key={t.slug} href={`/tramites/${t.slug}`}
                    className="flex items-center justify-between bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-3 hover:bg-white/[0.08] transition-colors group">
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#F59E0B] transition-colors font-dm">{t.nombre}</div>
                      <div className="text-xs text-[#94A3B8] mt-0.5 font-dm">⏱ {t.tiempo}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <DependenciaBadge dependencia={t.dependencia} />
                      <span className="text-white/20 group-hover:text-[#F59E0B] transition-colors">→</span>
                    </div>
                  </Link>
                ))}
                <Link href="/tramites" className="flex items-center justify-center text-xs text-[#F59E0B] font-semibold py-2 hover:text-[#FCD34D] transition-colors font-dm">
                  Ver todos los trámites →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRÁMITES */}
      <section id="tramites" className="py-24 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-[#1E3A5F] uppercase tracking-widest mb-4 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-[#F59E0B] before:rounded font-dm">
                Catálogo de trámites
              </span>
              <h2 className="font-syne font-extrabold text-3xl lg:text-4xl text-[#0C1A2E] leading-tight mb-3">
                ¿Qué necesitas resolver hoy?
              </h2>
              <p className="text-[#64748B] max-w-xl font-dm leading-relaxed text-sm">
                De la CSF que te pidió tu banco a la verificación que olvidaste agendar. Del registro de tu marca al divorcio que nadie quería hacer. tramto lo tiene.
              </p>
            </div>
            <Link href="/tramites" className="shrink-0 text-sm font-syne font-bold text-[#1E3A5F] border border-[#1E3A5F]/20 px-5 py-2.5 rounded-xl hover:bg-[#1E3A5F] hover:text-white transition-all">
              Ver catálogo →
            </Link>
          </div>

          <div className="space-y-12">
            {GRUPOS.map((grupo) => {
              const tramites = grupo.slugs.map(s => TRAMITES_MAP[s]).filter(Boolean)
              return (
                <div key={grupo.label}>
                  <h3 className="font-syne font-bold text-xs text-[#94A3B8] uppercase tracking-widest mb-4">{grupo.label}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {tramites.map((t) => (
                      <Link key={t.slug} href={`/tramites/${t.slug}`}
                        className="bg-white border border-[#0C1A2E]/10 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(12,26,46,0.12)] transition-all duration-200 group">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <h4 className="font-syne font-bold text-sm text-[#0C1A2E] leading-snug group-hover:text-[#1E3A5F]">{t.nombre}</h4>
                          <CategoriaBadge categoria={t.categoria} />
                        </div>
                        <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2 mb-4 font-dm">{t.descripcion}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-[#F59E0B] font-dm">⚡ {t.honorarioTramto}</span>
                          <span className="text-xs text-[#94A3B8] font-dm">⏱ {t.tiempo}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <span className="inline-flex items-center gap-2 text-xs font-bold text-[#1E3A5F] uppercase tracking-widest mb-4 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-[#F59E0B] before:rounded font-dm">Cómo funciona</span>
          <h2 className="font-syne font-extrabold text-3xl lg:text-4xl text-[#0C1A2E] mb-16">Sin complicaciones.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-[#F59E0B]/40 to-transparent" />
            {PASOS.map((p) => (
              <div key={p.num} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#F59E0B] flex items-center justify-center font-syne font-extrabold text-xl text-[#0C1A2E] mx-auto mb-5 relative z-10 shadow-[0_0_0_6px_white]">{p.num}</div>
                <h3 className="font-syne font-bold text-lg text-[#0C1A2E] mb-3">{p.titulo}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed max-w-[240px] mx-auto font-dm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTICIERO */}
      <section className="py-24 bg-[#0C1A2E]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-[#F59E0B] uppercase tracking-widest mb-4 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-[#F59E0B] before:rounded font-dm">Noticiero gubernamental</span>
              <h2 className="font-syne font-extrabold text-3xl text-white mb-3">Lo que cambió esta semana en el gobierno.</h2>
              <p className="text-white/40 max-w-lg text-sm font-dm leading-relaxed">
                Monitoreamos el SAT, el IMSS, el INFONAVIT y más — para que tú no tengas que hacerlo.
              </p>
            </div>
            <Link href="/noticiero" className="shrink-0 text-sm font-syne font-bold text-[#F59E0B] border border-[#F59E0B]/30 px-5 py-2.5 rounded-xl hover:bg-[#F59E0B]/10 transition-all">
              Ver noticiero →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {NOTICIAS.slice(0,3).map((n) => (
              <Link key={n.slug} href={`/noticiero/${n.slug}`}
                className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/[0.14] transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border font-dm ${DEP_BADGE[n.dependencia] ?? 'bg-white/10 text-white/60 border-white/15'}`}>
                    {n.dependencia}
                  </span>
                  <span className="text-xs text-white/30 font-dm">{n.fecha}</span>
                </div>
                <h3 className="font-syne font-bold text-base text-white leading-snug mb-2 group-hover:text-[#F59E0B] transition-colors">{n.titulo}</h3>
                <p className="text-white/40 text-sm leading-relaxed line-clamp-2 font-dm">{n.subtitulo}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="py-24 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-[#1E3A5F] uppercase tracking-widest mb-4 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-[#F59E0B] before:rounded font-dm">Planes</span>
            <h2 className="font-syne font-extrabold text-3xl lg:text-4xl text-[#0C1A2E] mb-4">Precios fijos. Sin sorpresas.</h2>
            <p className="text-[#64748B] max-w-lg mx-auto font-dm text-sm">Nada de "depende" ni cotizaciones que nunca llegan. Sabes cuánto pagas antes de empezar. Siempre.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PLANES.map((plan) => (
              <div key={plan.nombre} className={`relative rounded-2xl p-7 border transition-all hover:-translate-y-1 ${plan.featured ? 'bg-[#0C1A2E] border-[#2A4E7F] shadow-[0_20px_50px_rgba(12,26,46,0.35)]' : 'bg-white border-[#0C1A2E]/10 hover:shadow-[0_16px_40px_rgba(12,26,46,0.10)]'}`}>
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-[#0C1A2E] text-[10px] font-syne font-extrabold px-3.5 py-1 rounded-full whitespace-nowrap">
                    {plan.badge.toUpperCase()}
                  </div>
                )}
                <div className={`font-syne text-xs font-bold uppercase tracking-widest mb-2 ${plan.featured ? 'text-[#F59E0B]' : 'text-[#1E3A5F]'}`}>{plan.nombre}</div>
                <div className={`font-syne font-extrabold text-3xl mb-1 ${plan.featured ? 'text-white' : 'text-[#0C1A2E]'}`}>{plan.precio}</div>
                <div className="text-xs text-[#94A3B8] mb-5 font-dm">{plan.periodo}</div>
                <div className={`h-px mb-5 ${plan.featured ? 'bg-white/10' : 'bg-[#0C1A2E]/10'}`} />
                <ul className="space-y-2.5 mb-7">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-xs font-dm ${plan.featured ? 'text-white/60' : 'text-[#64748B]'}`}>
                      <span className={`font-bold ${plan.featured ? 'text-[#F59E0B]' : 'text-[#10B981]'}`}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href="/contacto" className={`block text-center font-syne font-bold text-[13px] py-3 rounded-xl transition-all ${plan.featured ? 'bg-[#F59E0B] text-[#0C1A2E] hover:bg-[#FCD34D]' : 'bg-[#F0F4F8] text-[#0C1A2E] border border-[#0C1A2E]/10 hover:bg-[#0C1A2E] hover:text-white'}`}>
                  Empezar →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-[#0C1A2E] text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-[#F59E0B]/[0.05] blur-[100px]" />
        </div>
        <div className="relative max-w-2xl mx-auto px-5">
          <h2 className="font-syne font-extrabold text-3xl lg:text-5xl text-white mb-5 leading-tight">
            ¿Quieres ser de los primeros<br />
            <span className="text-[#F59E0B]">en tramto?</span>
          </h2>
          <p className="text-white/40 mb-10 font-dm leading-relaxed">
            Déjanos tu correo y te avisamos cuando abramos el acceso. Sin spam, sin compromisos.
          </p>
          <form action="/api/lista-espera" method="POST" className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" name="email" required placeholder="tu@correo.com"
              className="flex-1 bg-white/[0.07] border border-white/[0.12] rounded-xl px-5 py-3.5 text-white placeholder-white/30 text-sm outline-none focus:border-[#F59E0B]/40 transition-colors font-dm" />
            <button type="submit"
              className="bg-[#F59E0B] text-[#0C1A2E] font-syne font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-[#FCD34D] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(245,158,11,0.3)] whitespace-nowrap">
              Unirme →
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
