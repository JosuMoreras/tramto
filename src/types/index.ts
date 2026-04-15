export type Dependencia =
  | 'SAT'
  | 'IMSS'
  | 'INFONAVIT'
  | 'SEDEMA'
  | 'SEMOVI'
  | 'SRE'
  | 'IMPI'
  | 'FGJ'
  | 'PROFECO'
  | 'CONDUSEF'
  | 'Notaría'
  | 'SEP'

export type Categoria =
  | 'tramto-ejecuta'   // 🟢
  | 'tramto-asesora'   // 🟡
  | 'tramto-coordina'  // 🔴

export interface Tramite {
  slug: string
  nombre: string
  dependencia: Dependencia
  categoria: Categoria
  derechoOficial: string
  honorarioTramto: string
  notaCosto?: string
  tiempo: string
  documentos: string[]
  descripcion: string
  pasos: string[]
  delitosAplican?: string[]
  documentosCertifica?: string[]
  idiomasDisponibles?: string[]
  documentosTraduceEjemplos?: string[]
}

export interface Noticia {
  slug: string
  titulo: string
  subtitulo: string
  dependencia: Dependencia
  fecha: string
  cuerpo: string[]
  cta: string
  ctaSlug?: string
}

export type SeveridadVencimiento = 'alta' | 'media' | 'baja'

export interface Vencimiento {
  obligacion: string
  dependencia: string
  frecuencia: string
  fechaLimite: string
  consecuencia: string
  severidad: SeveridadVencimiento
}
