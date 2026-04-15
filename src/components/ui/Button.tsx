import Link from 'next/link'

type Variant = 'primary' | 'ghost' | 'outline-gold'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  children: React.ReactNode
}

interface LinkButtonProps {
  href: string
  variant?: Variant
  size?: Size
  children: React.ReactNode
  className?: string
  external?: boolean
}

const variants: Record<Variant, string> = {
  primary:
    'bg-[#F59E0B] text-[#0C1A2E] font-syne font-bold rounded-xl hover:bg-[#FCD34D] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(245,158,11,0.3)] inline-flex items-center gap-2',
  ghost:
    'bg-transparent text-white/70 font-syne font-semibold rounded-xl border border-white/15 hover:border-white/35 hover:text-white transition-all duration-200 inline-flex items-center gap-2',
  'outline-gold':
    'bg-transparent text-[#F59E0B] font-syne font-bold rounded-xl border border-[#F59E0B]/40 hover:bg-[#F59E0B]/10 transition-all duration-200 inline-flex items-center gap-2',
}

const sizes: Record<Size, string> = {
  sm: 'text-sm px-4 py-2',
  md: 'text-sm px-6 py-3',
  lg: 'text-base px-8 py-4',
}

export function Button({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) {
  return (
    <button className={`${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export function LinkButton({ href, variant = 'primary', size = 'md', children, className = '', external }: LinkButtonProps) {
  const cls = `${variants[variant]} ${sizes[size]} ${className}`
  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
  }
  return <Link href={href} className={cls}>{children}</Link>
}
