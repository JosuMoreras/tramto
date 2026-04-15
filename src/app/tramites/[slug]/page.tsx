import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { TRAMITES, TRAMITES_BY_SLUG, CATEGORIA_LABELS, DEPENDENCIA_LABELS } from '@/constants/tramites'
import { DependenciaBadge, CategoriaBadge } from '@/components/ui/Badge'
import { SolicitudForm } from '@/components/ui/SolicitudForm'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return TRAMITES.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tramite = TRAMITES_BY_SLUG[slug]
  if (!tramite) return {}
  return {
    title: tramite.nombre,
    description: tramite.descripcion,
  }
}

const DONDE_QUEJARME_SLUGS = ['queja-profeco', 'queja-condusef', 'denuncia-digital']

export default async function TramitePage({ params }: Props) {
  const { slug } = await params
  const t = TRAMITES_BY_SLUG[slug]
  if (!t) notFound()

  const catInfo = CATEGORIA_LABELS[t.categoria]
  const showDondeQuejarme = DONDE_QUEJARME_SLUGS.includes(t.slug)

  // Related tramites (same dependencia, different slug)
  const related = TRAMITES.filter((r) => r.dependencia === t.dependencia && r.slug !== t.slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-[#0C1A2E]">
      {/* Header */}
      <div className="bg-[#0C1A2E] border-b border-white/[0.06] py-14">
        <div className="max-w-7xl mx-auto px-5">
          {/* Breadcrumb */}
          <nav className="text-xs text-white/30 font-dm mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-white/60 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/tramites" className="hover:text-white/60 transition-colors">Trámites</Link>
            <span>/</span>
            <span className="text-white/60">{t.nombre}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <DependenciaBadge dependencia={t.dependencia} size="md" />
            <CategoriaBadge categoria={t.categoria} size="md" />
          </div>

          <h1 className="font-syne font-extrabold text-3xl lg:text-5xl text-white leading-tight mb-4">
            {t.nombre}
          </h1>
          <p className="text-white/50 text-lg font-dm leading-relaxed max-w-2xl">{t.descripcion}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">

            {/* COSTOS — siempre visible y destacado */}
            <div className="bg-[#F59E0B]/[0.08] border border-[#F59E0B]/20 rounded-2xl p-6">
              <h2 className="font-syne font-bold text-sm text-[#F59E0B] uppercase tracking-widest mb-4">💰 Costos</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60 font-dm">🏛️ Derecho oficial (gobierno)</span>
                  <span className="font-syne font-bold text-white">{t.derechoOficial}</span>
                </div>
                <div className="h-px bg-white/[0.08]" />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60 font-dm">⚡ Honorario tramto</span>
                  <span className="font-syne font-bold text-[#F59E0B]">{t.honorarioTramto}</span>
                </div>
                {t.notaCosto && (
                  <div className="text-xs text-white/40 font-dm pt-1">{t.notaCosto}</div>
                )}
              </div>
              <p className="text-xs text-white/30 font-dm mt-4 pt-4 border-t border-white/[0.08] leading-relaxed">
                El trámite en sí es gratis ante el gobierno — tramto cobra por orientarte y/o ejecutar el trámite por ti.
              </p>
            </div>

            {/* Tiempo */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
              <h2 className="font-syne font-bold text-sm text-white/40 uppercase tracking-widest mb-3">⏱ Tiempo estimado</h2>
              <p className="font-syne font-bold text-2xl text-white">{t.tiempo}</p>
            </div>

            {/* Documentos */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
              <h2 className="font-syne font-bold text-sm text-white/40 uppercase tracking-widest mb-5">📋 Documentos requeridos</h2>
              <ul className="space-y-3">
                {t.documentos.map((doc) => (
                  <li key={doc} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full border border-[#F59E0B]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    </span>
                    <span className="text-sm text-white/70 font-dm leading-relaxed">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pasos */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
              <h2 className="font-syne font-bold text-sm text-white/40 uppercase tracking-widest mb-6">🚀 Cómo funciona</h2>
              <ol className="space-y-5">
                {t.pasos.map((paso, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#F59E0B] flex items-center justify-center font-syne font-bold text-sm text-[#0C1A2E] shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-sm text-white/70 font-dm leading-relaxed pt-1">{paso}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Extras según el tipo de trámite */}
            {t.delitosAplican && (
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
                <h2 className="font-syne font-bold text-sm text-white/40 uppercase tracking-widest mb-5">✅ Delitos que aplican</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {t.delitosAplican.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-sm text-white/60 font-dm">
                      <span className="text-[#10B981]">✓</span> {d}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {t.documentosCertifica && (
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
                <h2 className="font-syne font-bold text-sm text-white/40 uppercase tracking-widest mb-5">📂 Documentos que tramto certifica</h2>
                <ul className="space-y-2">
                  {t.documentosCertifica.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-white/60 font-dm">
                      <span className="text-[#F59E0B]">→</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {t.idiomasDisponibles && (
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
                <h2 className="font-syne font-bold text-sm text-white/40 uppercase tracking-widest mb-4">🌍 Idiomas disponibles</h2>
                <div className="flex flex-wrap gap-2">
                  {t.idiomasDisponibles.map((i) => (
                    <span key={i} className="text-xs px-3 py-1.5 bg-white/[0.06] border border-white/[0.10] rounded-full text-white/70 font-dm">{i}</span>
                  ))}
                </div>
              </div>
            )}

            {/* ¿A dónde me quejo? */}
            {showDondeQuejarme && (
              <div className="bg-[#1E3A5F]/40 border border-[#1E3A5F] rounded-2xl p-6">
                <h2 className="font-syne font-bold text-lg text-white mb-2">¿No sabes a dónde ir? Te lo decimos.</h2>
                <p className="text-white/40 text-sm font-dm mb-6">La confusión más común: ¿PROFECO, CONDUSEF o Fiscalía?</p>
                <div className="space-y-3">
                  {[
                    { problema: 'Tienda, restaurante, telecom, producto', donde: 'PROFECO', slug: 'queja-profeco', color: 'text-cyan-400' },
                    { problema: 'Banco, tarjeta, seguro, AFORE, crédito', donde: 'CONDUSEF', slug: 'queja-condusef', color: 'text-indigo-400' },
                    { problema: 'Delito (robo, fraude penal)', donde: 'Denuncia Digital CDMX', slug: 'denuncia-digital', color: 'text-red-400' },
                    { problema: 'Trámite del gobierno', donde: 'tramto directamente', slug: null, color: 'text-[#F59E0B]' },
                  ].map((row) => (
                    <div key={row.donde} className="flex items-center gap-4 bg-white/[0.04] rounded-xl px-4 py-3">
                      <span className="text-sm text-white/50 font-dm flex-1">{row.problema}</span>
                      <span className={`text-sm font-syne font-bold ${row.color} shrink-0`}>→ {row.donde}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Formulario */}
            <SolicitudForm tramiteNombre={t.nombre} tramiteSlug={t.slug} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categoría info */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
              <div className="text-xs text-white/30 font-dm uppercase tracking-widest mb-2">Tipo de trámite</div>
              <div className="font-syne font-bold text-white text-sm">{catInfo.emoji} {catInfo.label}</div>
            </div>

            {/* CTA secundario */}
            <div className="bg-[#F59E0B]/[0.08] border border-[#F59E0B]/20 rounded-2xl p-5">
              <p className="font-syne font-bold text-white text-sm mb-3">¿Tienes dudas?</p>
              <p className="text-white/40 text-xs font-dm mb-4 leading-relaxed">
                Cuéntanos tu situación y te respondemos hoy mismo.
              </p>
              <Link href="/contacto" className="block text-center bg-[#F59E0B] text-[#0C1A2E] font-syne font-bold text-sm py-3 rounded-xl hover:bg-[#FCD34D] transition-colors">
                Habla con nosotros →
              </Link>
            </div>

            {/* Trámites relacionados */}
            {related.length > 0 && (
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
                <div className="text-xs text-white/30 font-dm uppercase tracking-widest mb-4">Trámites relacionados</div>
                <div className="space-y-3">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/tramites/${r.slug}`}
                      className="flex items-start gap-3 group">
                      <span className="text-[#F59E0B] text-xs mt-0.5 group-hover:translate-x-0.5 transition-transform">→</span>
                      <span className="text-sm text-white/60 font-dm group-hover:text-white transition-colors leading-snug">{r.nombre}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
