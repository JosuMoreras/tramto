import type { Metadata } from 'next'
import Link from 'next/link'
import { NOTICIAS, DEPENDENCIA_BADGE_MAP } from '@/constants/noticias'

export const metadata: Metadata = {
  title: 'Noticiero gubernamental',
  description: 'Cambios en trámites del SAT, IMSS, INFONAVIT y más — explicados en humano por tramto.',
}

export default function NoticieroPage() {
  return (
    <div className="min-h-screen bg-[#0C1A2E]">
      {/* Header */}
      <div className="bg-[#0C1A2E] border-b border-white/[0.06] py-16">
        <div className="max-w-7xl mx-auto px-5">
          <nav className="text-xs text-white/30 font-dm mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-white/60 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-white/60">Noticiero</span>
          </nav>
          <h1 className="font-syne font-extrabold text-4xl lg:text-5xl text-white mb-4">
            Noticiero gubernamental
          </h1>
          <p className="text-white/40 text-lg font-dm max-w-xl leading-relaxed">
            Lo que cambió, lo que vence, lo que te afecta — explicado en humano.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NOTICIAS.map((n) => (
            <Link
              key={n.slug}
              href={`/noticiero/${n.slug}`}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/[0.14] transition-all duration-200 group flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-syne font-bold px-2.5 py-1 rounded-full ${DEPENDENCIA_BADGE_MAP[n.dependencia] ?? 'bg-white/10 text-white/60 border border-white/10'}`}>
                  {n.dependencia}
                </span>
                <span className="text-xs text-white/30 font-dm">{n.fecha}</span>
              </div>
              <h2 className="font-syne font-bold text-white text-base leading-snug mb-3 group-hover:text-[#F59E0B] transition-colors flex-1">
                {n.titulo}
              </h2>
              <p className="text-white/40 text-sm font-dm leading-relaxed line-clamp-3 mb-4">
                {n.subtitulo}
              </p>
              <div className="flex items-center gap-1 text-xs text-[#F59E0B] font-dm font-semibold mt-auto">
                Leer más <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
