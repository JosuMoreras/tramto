import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'tramto — tu gobierno, bajo control.',
    template: '%s | tramto',
  },
  description:
    'Tramto resuelve, asesora y gestiona tus trámites gubernamentales. Sin filas. Sin sorpresas. Sin coyotes.',
  metadataBase: new URL('https://tramto.com'),
  openGraph: {
    title: 'tramto — tu gobierno, bajo control.',
    description: 'Tramito resuelve, asesora y gestiona tus trámites gubernamentales.',
    siteName: 'tramto',
    locale: 'es_MX',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full flex flex-col bg-[#0C1A2E] text-white antialiased font-dm">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
