import Link from 'next/link'

const LINKS = {
  tramites: [
    { href: '/tramites/csf', label: 'CSF — Situación Fiscal' },
    { href: '/tramites/declaracion-resico', label: 'Declaración RESICO' },
    { href: '/tramites/verificacion-vehicular', label: 'Verificación vehicular' },
    { href: '/tramites/registro-marca', label: 'Registro de marca' },
    { href: '/tramites/pasaporte', label: 'Pasaporte' },
    { href: '/tramites', label: 'Ver todos →' },
  ],
  empresa: [
    { href: '/empresas', label: 'tramto para empresas' },
    { href: '/noticiero', label: 'Noticiero gubernamental' },
    { href: '/contacto', label: 'Contacto' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#080F1A] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="font-poppins font-bold text-2xl tracking-[-0.02em] mb-4 inline-block">
              <span className="text-[#F59E0B]">t</span>
              <span className="text-white">ramto</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mt-3">
              Todo en regla. Monitorea, entiende y resuelve tus trámites gubernamentales sin filas, sin sorpresas, sin coyotes.
            </p>
            <p className="text-white/20 text-xs mt-4">
              by Viatra · CDMX, México
            </p>
          </div>

          {/* Trámites */}
          <div>
            <h4 className="font-syne font-bold text-xs text-white/30 uppercase tracking-widest mb-4">
              Trámites
            </h4>
            <ul className="space-y-2.5">
              {LINKS.tramites.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/40 hover:text-[#F59E0B] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-syne font-bold text-xs text-white/30 uppercase tracking-widest mb-4">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              {LINKS.empresa.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/40 hover:text-[#F59E0B] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            © 2026 tramto — Todos los derechos reservados
          </p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="text-xs text-white/20 hover:text-white/50 transition-colors">
              Privacidad
            </Link>
            <Link href="/terminos" className="text-xs text-white/20 hover:text-white/50 transition-colors">
              Términos
            </Link>
            <Link href="/contacto" className="text-xs text-white/20 hover:text-white/50 transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
