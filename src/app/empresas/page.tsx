'use client'

import { useState } from 'react'
import Link from 'next/link'
import { VENCIMIENTOS, DEPENDENCIAS_EMPRESA } from '@/constants/vencimientos'

const ARGUMENTOS = [
  {
    icon: '⏰',
    titulo: 'Nunca más un vencimiento perdido',
    descripcion: 'Te avisamos 30 días antes de cada obligación fiscal, laboral y municipal. Tus socios estarán al tanto también.',
  },
  {
    icon: '📋',
    titulo: 'Trámites sin salir de la oficina',
    descripcion: 'Desde la CSF y CFDI hasta registros de marca — tramto los ejecuta por ti. Tú apruebas, nosotros hacemos el trabajo.',
  },
  {
    icon: '⚖️',
    titulo: 'Cumplimiento laboral resuelto',
    descripcion: 'IMSS, INFONAVIT, STPS, REPSE, NOM-035 — te decimos qué te aplica y lo gestionamos.',
  },
  {
    icon: '💰',
    titulo: 'Precio fijo, sin sorpresas',
    descripcion: 'Sabes exactamente cuánto pagas. Sin honorarios ocultos, sin "el trámite salió más caro de lo esperado".',
  },
  {
    icon: '🤝',
    titulo: 'Un equipo, no un chatbot',
    descripcion: 'Personas reales que conocen la normativa mexicana. Respuesta el mismo día.',
  },
]

const PLANES = [
  {
    nombre: 'Básico',
    precio: '$1,490',
    periodo: '/mes',
    descripcion: 'Para negocios unipersonales o muy pequeños.',
    items: ['Hasta 3 trámites/mes', 'Alertas de vencimientos', 'Soporte por WhatsApp', 'Sin empleados a cargo'],
    cta: 'Empezar',
    destacado: false,
  },
  {
    nombre: 'Empresas',
    precio: '$3,990',
    periodo: '/mes',
    descripcion: 'El más elegido por empresas de 3–20 empleados.',
    items: ['Trámites ilimitados', 'IMSS + INFONAVIT incluidos', 'Nómina timbrada', 'Gestor asignado', 'Reportes mensuales'],
    cta: 'Lo quiero',
    destacado: true,
  },
  {
    nombre: 'Corporativo',
    precio: 'A la medida',
    periodo: '',
    descripcion: 'Para empresas de más de 20 empleados o con necesidades específicas.',
    items: ['Todo el plan Empresas', 'Integración contable', 'Multi-RFC', 'SLA garantizado', 'Onboarding dedicado'],
    cta: 'Hablar con ventas',
    destacado: false,
  },
]

const SEVERIDAD_CLASSES: Record<string, string> = {
  alta:  'bg-red-500/15 text-red-400 border border-red-500/30',
  media: 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30',
  baja:  'bg-green-500/15 text-green-400 border border-green-500/30',
}

export default function EmpresasPage() {
  const [filtro, setFiltro] = useState('Todos')

  const vencimientosFiltrados = filtro === 'Todos'
    ? VENCIMIENTOS
    : VENCIMIENTOS.filter((v) => v.dependencia === filtro)

  return (
    <div className="min-h-screen bg-[#0C1A2E]">
      {/* Hero */}
      <div className="bg-[#0C1A2E] border-b border-white/[0.06] py-20">
        <div className="max-w-7xl mx-auto px-5">
          <nav className="text-xs text-white/30 font-dm mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-white/60 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-white/60">tramto para empresas</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-full px-3 py-1.5 mb-6">
              <span className="text-[#F59E0B] text-xs font-syne font-bold uppercase tracking-widest">Para empresas</span>
            </div>
            <h1 className="font-syne font-extrabold text-4xl lg:text-6xl text-white mb-5 leading-tight">
              El área legal y fiscal de tu empresa — sin el costo de una.
            </h1>
            <p className="text-white/50 text-xl font-dm leading-relaxed mb-8">
              tramto monitorea tus obligaciones, ejecuta tus trámites y te avisa antes de que algo venza. Desde $1,490/mes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="bg-[#F59E0B] text-[#0C1A2E] font-syne font-bold px-6 py-3.5 rounded-xl hover:bg-[#FCD34D] transition-colors"
              >
                Hablar con ventas →
              </Link>
              <Link
                href="#planes"
                className="border border-white/20 text-white font-syne font-bold px-6 py-3.5 rounded-xl hover:border-white/40 transition-colors"
              >
                Ver planes
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Por qué tramto */}
      <div className="max-w-7xl mx-auto px-5 py-20">
        <h2 className="font-syne font-extrabold text-3xl text-white mb-12 text-center">
          ¿Por qué tramto para tu empresa?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARGUMENTOS.map((a) => (
            <div key={a.titulo} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
              <div className="text-3xl mb-4">{a.icon}</div>
              <h3 className="font-syne font-bold text-white text-base mb-2">{a.titulo}</h3>
              <p className="text-white/40 text-sm font-dm leading-relaxed">{a.descripcion}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabla de vencimientos */}
      <div className="bg-[#080F1A] border-y border-white/[0.05] py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="mb-10">
            <h2 className="font-syne font-extrabold text-3xl text-white mb-3">
              Calendario de obligaciones empresariales
            </h2>
            <p className="text-white/40 font-dm text-base max-w-xl">
              Todo lo que una empresa en México debe cumplir — con su fecha límite y consecuencia si no lo hace.
            </p>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap gap-2 mb-8">
            {DEPENDENCIAS_EMPRESA.map((dep) => (
              <button
                key={dep}
                onClick={() => setFiltro(dep)}
                className={`text-xs font-syne font-bold px-3 py-1.5 rounded-full transition-colors ${
                  filtro === dep
                    ? 'bg-[#F59E0B] text-[#0C1A2E]'
                    : 'bg-white/[0.06] text-white/50 hover:bg-white/[0.10] hover:text-white'
                }`}
              >
                {dep}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.03]">
                  <th className="text-left text-xs text-white/30 font-syne uppercase tracking-widest px-5 py-4">Obligación</th>
                  <th className="text-left text-xs text-white/30 font-syne uppercase tracking-widest px-5 py-4">Dependencia</th>
                  <th className="text-left text-xs text-white/30 font-syne uppercase tracking-widest px-5 py-4">Frecuencia</th>
                  <th className="text-left text-xs text-white/30 font-syne uppercase tracking-widest px-5 py-4">Fecha límite</th>
                  <th className="text-left text-xs text-white/30 font-syne uppercase tracking-widest px-5 py-4">Si no cumples</th>
                  <th className="text-left text-xs text-white/30 font-syne uppercase tracking-widest px-5 py-4">Riesgo</th>
                </tr>
              </thead>
              <tbody>
                {vencimientosFiltrados.map((v, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/[0.05] last:border-0 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-5 py-4 text-sm text-white font-dm font-medium">{v.obligacion}</td>
                    <td className="px-5 py-4">
                      <span className="text-xs font-syne font-bold text-white/60 bg-white/[0.06] px-2.5 py-1 rounded-full">
                        {v.dependencia}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-white/50 font-dm">{v.frecuencia}</td>
                    <td className="px-5 py-4 text-sm text-white/70 font-dm font-medium">{v.fechaLimite}</td>
                    <td className="px-5 py-4 text-sm text-white/40 font-dm">{v.consecuencia}</td>
                    <td className="px-5 py-4">
                      <span className={`text-xs font-syne font-bold px-2.5 py-1 rounded-full capitalize ${SEVERIDAD_CLASSES[v.severidad]}`}>
                        {v.severidad}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-white/20 font-dm mt-4">
            Información orientativa. Las fechas exactas varían según tu RFC y régimen. tramto te dice lo que aplica para tu empresa.
          </p>
        </div>
      </div>

      {/* Planes */}
      <div id="planes" className="max-w-7xl mx-auto px-5 py-20">
        <h2 className="font-syne font-extrabold text-3xl text-white mb-3 text-center">Planes</h2>
        <p className="text-white/40 font-dm text-center mb-12">Sin contratos anuales forzosos. Cancelas cuando quieres.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANES.map((p) => (
            <div
              key={p.nombre}
              className={`rounded-2xl p-6 flex flex-col ${
                p.destacado
                  ? 'bg-[#F59E0B]/[0.08] border-2 border-[#F59E0B]/40'
                  : 'bg-white/[0.04] border border-white/[0.08]'
              }`}
            >
              {p.destacado && (
                <div className="text-xs font-syne font-bold text-[#F59E0B] uppercase tracking-widest mb-3">
                  ⭐ Más popular
                </div>
              )}
              <h3 className="font-syne font-bold text-white text-xl mb-1">{p.nombre}</h3>
              <p className="text-white/40 text-xs font-dm mb-4">{p.descripcion}</p>
              <div className="mb-6">
                <span className="font-syne font-extrabold text-3xl text-white">{p.precio}</span>
                {p.periodo && <span className="text-white/40 text-sm font-dm">{p.periodo}</span>}
              </div>
              <ul className="space-y-2.5 mb-8 flex-1">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/60 font-dm">
                    <span className="text-[#10B981] mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contacto"
                className={`block text-center font-syne font-bold text-sm py-3 rounded-xl transition-colors ${
                  p.destacado
                    ? 'bg-[#F59E0B] text-[#0C1A2E] hover:bg-[#FCD34D]'
                    : 'border border-white/20 text-white hover:border-white/40'
                }`}
              >
                {p.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA final */}
      <div className="bg-[#080F1A] border-t border-white/[0.05] py-20">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="font-syne font-extrabold text-3xl lg:text-4xl text-white mb-4">
            ¿Listo para dejar de correr detrás del gobierno?
          </h2>
          <p className="text-white/40 font-dm text-lg mb-8">
            Cuéntanos tu empresa y en 24 horas te decimos qué necesitas — y cuánto cuesta.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-[#F59E0B] text-[#0C1A2E] font-syne font-bold px-8 py-4 rounded-xl hover:bg-[#FCD34D] transition-colors text-base"
          >
            Hablar con el equipo →
          </Link>
        </div>
      </div>
    </div>
  )
}
