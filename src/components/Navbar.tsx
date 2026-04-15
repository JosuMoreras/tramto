'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { TICKER_ITEMS } from '@/constants/tramites'

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-0 font-poppins font-bold text-xl tracking-[-0.02em]">
      <span className="text-[#F59E0B]">t</span>
      <span className="text-white">ramto</span>
    </Link>
  )
}

const NAV_LINKS = [
  { href: '/tramites', label: 'Trámites' },
  { href: '/noticiero', label: 'Noticiero' },
  { href: '/empresas', label: 'Empresas' },
  { href: '/contacto', label: 'Contacto' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* TICKER */}
      <div className="bg-[#0C1A2E] border-b border-white/[0.06] overflow-hidden py-2">
        <div className="flex whitespace-nowrap animate-[ticker_40s_linear_infinite] hover:[animation-play-state:paused]">
          {/* Duplicate for seamless loop */}
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="text-[#F59E0B] text-xs font-medium px-4 font-dm shrink-0">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#0C1A2E]/95 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between gap-6">
          <Logo />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium font-dm transition-colors duration-150 ${
                    active ? 'text-white' : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contacto"
              className="bg-[#F59E0B] text-[#0C1A2E] font-syne font-bold text-[13px] px-5 py-2 rounded-lg hover:bg-[#FCD34D] transition-all duration-200 hover:-translate-y-px"
            >
              Solicitar trámite →
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-[#0C1A2E] border-t border-white/[0.06] px-5 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white/70 font-syne font-semibold text-lg hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="mt-2 bg-[#F59E0B] text-[#0C1A2E] font-syne font-bold text-sm px-5 py-3 rounded-xl text-center hover:bg-[#FCD34D] transition-colors"
            >
              Solicitar trámite →
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}
