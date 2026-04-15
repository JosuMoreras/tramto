import { DEPENDENCIA_LABELS } from '@/constants/tramites'
import { DEPENDENCIA_BADGE_MAP } from '@/constants/noticias'
import type { Dependencia, Categoria } from '@/types'
import { CATEGORIA_LABELS } from '@/constants/tramites'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md'
}

export function Badge({ children, className = '', size = 'sm' }: BadgeProps) {
  const sizeClass = size === 'sm'
    ? 'text-[11px] px-2.5 py-0.5'
    : 'text-xs px-3 py-1'
  return (
    <span className={`inline-flex items-center rounded-full font-semibold ${sizeClass} ${className}`}>
      {children}
    </span>
  )
}

export function DependenciaBadge({
  dependencia,
  size = 'sm',
}: {
  dependencia: Dependencia | string
  size?: 'sm' | 'md'
}) {
  const info = DEPENDENCIA_LABELS[dependencia]
  const badgeClass = info
    ? info.badgeClass
    : DEPENDENCIA_BADGE_MAP[dependencia] ?? 'bg-white/10 text-white/60 border border-white/15'
  const label = info?.label ?? dependencia
  return (
    <Badge size={size} className={badgeClass}>
      {label}
    </Badge>
  )
}

export function CategoriaBadge({
  categoria,
  size = 'sm',
}: {
  categoria: Categoria
  size?: 'sm' | 'md'
}) {
  const info = CATEGORIA_LABELS[categoria]
  const colorMap: Record<Categoria, string> = {
    'tramto-ejecuta':  'bg-green-500/15 text-green-400 border border-green-500/30',
    'tramto-asesora':  'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30',
    'tramto-coordina': 'bg-red-500/15 text-red-400 border border-red-500/30',
  }
  return (
    <Badge size={size} className={colorMap[categoria]}>
      {info.emoji} {info.label}
    </Badge>
  )
}
