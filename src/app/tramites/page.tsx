import type { Metadata } from 'next'
import Link from 'next/link'
import { TRAMITES, CATEGORIA_LABELS } from '@/constants/tramites'
import { DependenciaBadge, CategoriaBadge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Catálogo de trámites',
  description: 'Todos los trámites gubernamentales que tramto resuelve por ti. SAT, IMSS, INFONAVIT, SRE, IMPI y más.',
}

const DEPENDENCIAS = ['Todos', 'SAT', 'IMSS', 'INFONAVIT', 'SEDEMA', 'SEMOVI', 'SRE', 'IMPI', 'FGJ', 'PROFECO', 'CONDUSEF', 'Notaría', 'SEP']

export default function TramitesPage() {
  return (
    <div className="min-h-screen bg-[#0C1A2E]">
      {/* Header */}
      <div className="bg-[#0C1A2E] border-b border-white/[0.06] py-16">
        <div className="max-w-7xl mx-auto px-5">
          <nav className="text-xs text-white/30 font-dm mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-white/60 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-white/60">Trámites</span>
          </nav>
          <h1 className="font-syne font-extrabold text-4xl lg:text-5xl text-white mb-4">
            Catálogo de trámites
          </h1>
          <p className="text-white/40 text-lg font-dm max-w-xl leading-relaxed">
            Todos los trámites que tramto resuelve, asesora o coordina por ti.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-12">
        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-10 p-4 bg-white/[0.03] rounded-xl border border-white/[0.06]">
          <span className="text-xs text-white/30 font-dm self-center mr-1">Categorías:</span>
          {Object.entries(CATEGORIA_LABELS).map(([key, val]) => (
            <span key={key} className="text-xs font-dm text-white/50">
              {val.emoji} <span className="text-white/70">{val.label}</span>
            </span>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TRAMITES.map((t) => (
            <Link
              key={t.slug}
              href={`/tramites/${t.slug}`}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/[0.14] transition-all duration-200 group flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <DependenciaBadge dependencia={t.dependencia} />
                <CategoriaBadge categoria={t.categoria} />
              </div>
              <h3 className="font-syne font-bold text-white text-base leading-snug mb-2 group-hover:text-[#F59E0B] transition-colors">
                {t.nombre}
              </h3>
              <p className="text-white/40 text-xs leading-relaxed font-dm line-clamp-3 flex-1 mb-4">
                {t.descripcion}
              </p>
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-[11px] text-white/30 font-dm">🏛️ {t.derechoOficial}</div>
                  <div className="text-[11px] text-[#F59E0B] font-dm font-semibold">⚡ {t.honorarioTramto}</div>
                </div>
                <div className="text-xs text-white/30 font-dm">⏱ {t.tiempo}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
