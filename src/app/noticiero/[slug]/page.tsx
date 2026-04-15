import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { NOTICIAS, NOTICIAS_BY_SLUG, DEPENDENCIA_BADGE_MAP } from '@/constants/noticias'
import { TRAMITES_BY_SLUG } from '@/constants/tramites'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return NOTICIAS.map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const n = NOTICIAS_BY_SLUG[slug]
  if (!n) return {}
  return {
    title: n.titulo,
    description: n.subtitulo,
  }
}

export default async function NoticiaPage({ params }: Props) {
  const { slug } = await params
  const n = NOTICIAS_BY_SLUG[slug]
  if (!n) notFound()

  const badgeClass = DEPENDENCIA_BADGE_MAP[n.dependencia] ?? 'bg-white/10 text-white/60 border border-white/10'

  // Related: other noticias (same dependencia first, else most recent)
  const related = [
    ...NOTICIAS.filter((r) => r.dependencia === n.dependencia && r.slug !== n.slug),
    ...NOTICIAS.filter((r) => r.dependencia !== n.dependencia && r.slug !== n.slug),
  ].slice(0, 3)

  const tramite = n.ctaSlug ? TRAMITES_BY_SLUG[n.ctaSlug] : null

  return (
    <div className="min-h-screen bg-[#0C1A2E]">
      {/* Header */}
      <div className="bg-[#0C1A2E] border-b border-white/[0.06] py-14">
        <div className="max-w-7xl mx-auto px-5">
          <nav className="text-xs text-white/30 font-dm mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-white/60 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/noticiero" className="hover:text-white/60 transition-colors">Noticiero</Link>
            <span>/</span>
            <span className="text-white/60 line-clamp-1">{n.titulo}</span>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span className={`text-xs font-syne font-bold px-2.5 py-1 rounded-full ${badgeClass}`}>
              {n.dependencia}
            </span>
            <span className="text-xs text-white/30 font-dm">{n.fecha}</span>
          </div>

          <h1 className="font-syne font-extrabold text-3xl lg:text-5xl text-white leading-tight mb-4 max-w-3xl">
            {n.titulo}
          </h1>
          <p className="text-white/50 text-lg font-dm leading-relaxed max-w-2xl">{n.subtitulo}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Article body */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 lg:p-8">
              <div className="space-y-5">
                {n.cuerpo.map((parrafo, i) => (
                  <p key={i} className="text-white/70 font-dm leading-relaxed text-base">
                    {parrafo}
                  </p>
                ))}
              </div>
            </div>

            {/* CTA block */}
            <div className="bg-[#F59E0B]/[0.08] border border-[#F59E0B]/20 rounded-2xl p-6">
              <p className="font-syne font-bold text-white text-base mb-4 leading-snug">
                {n.cta}
              </p>
              {tramite ? (
                <Link
                  href={`/tramites/${n.ctaSlug}`}
                  className="inline-flex items-center gap-2 bg-[#F59E0B] text-[#0C1A2E] font-syne font-bold text-sm px-5 py-3 rounded-xl hover:bg-[#FCD34D] transition-colors"
                >
                  {tramite.nombre} →
                </Link>
              ) : (
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-[#F59E0B] text-[#0C1A2E] font-syne font-bold text-sm px-5 py-3 rounded-xl hover:bg-[#FCD34D] transition-colors"
                >
                  Habla con tramto →
                </Link>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick info */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
              <div className="text-xs text-white/30 font-dm uppercase tracking-widest mb-3">Dependencia</div>
              <span className={`text-xs font-syne font-bold px-2.5 py-1 rounded-full ${badgeClass}`}>
                {n.dependencia}
              </span>
              <div className="text-xs text-white/30 font-dm uppercase tracking-widest mt-4 mb-2">Publicado</div>
              <div className="text-sm text-white/60 font-dm">{n.fecha}</div>
            </div>

            {/* Related tramite */}
            {tramite && (
              <div className="bg-[#F59E0B]/[0.08] border border-[#F59E0B]/20 rounded-2xl p-5">
                <div className="text-xs text-white/30 font-dm uppercase tracking-widest mb-3">Trámite relacionado</div>
                <Link href={`/tramites/${n.ctaSlug}`} className="group">
                  <div className="font-syne font-bold text-white text-sm mb-1 group-hover:text-[#F59E0B] transition-colors leading-snug">
                    {tramite.nombre}
                  </div>
                  <div className="text-xs text-white/40 font-dm">
                    ⚡ {tramite.honorarioTramto}
                  </div>
                </Link>
              </div>
            )}

            {/* Other articles */}
            {related.length > 0 && (
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
                <div className="text-xs text-white/30 font-dm uppercase tracking-widest mb-4">Más noticias</div>
                <div className="space-y-4">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/noticiero/${r.slug}`} className="group flex items-start gap-3">
                      <span className="text-[#F59E0B] text-xs mt-0.5 group-hover:translate-x-0.5 transition-transform">→</span>
                      <div>
                        <div className="text-sm text-white/60 font-dm group-hover:text-white transition-colors leading-snug mb-1">
                          {r.titulo}
                        </div>
                        <div className="text-xs text-white/30 font-dm">{r.dependencia} · {r.fecha}</div>
                      </div>
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
