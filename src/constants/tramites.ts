import type { Tramite } from '@/types'

export const TRAMITES: Tramite[] = [
  // ─── SAT ────────────────────────────────────────────────────────────────
  {
    slug: 'csf',
    nombre: 'Constancia de Situación Fiscal (CSF)',
    dependencia: 'SAT',
    categoria: 'tramto-ejecuta',
    derechoOficial: '$0 MXN (gratuito)',
    honorarioTramto: '$99–$150 MXN',
    tiempo: '3–5 minutos',
    documentos: ['RFC', 'Contraseña SAT'],
    descripcion:
      'Tu banco la pide. Tu arrendador la pide. Tu nuevo trabajo la pide. La CSF es el trámite más solicitado de México — y es completamente gratis. Nosotros te la descargamos en 5 minutos.',
    pasos: [
      'Compártenos tu RFC y contraseña SAT',
      'Entramos al portal del SAT por ti',
      'Descargamos tu CSF actualizada',
      'Te la enviamos en PDF a tu correo',
    ],
  },
  {
    slug: 'opinion-cumplimiento',
    nombre: 'Opinión de Cumplimiento SAT',
    dependencia: 'SAT',
    categoria: 'tramto-ejecuta',
    derechoOficial: '$0 MXN (gratuito)',
    honorarioTramto: '$99–$150 MXN',
    tiempo: '5 minutos',
    documentos: ['RFC', 'Contraseña SAT'],
    descripcion:
      '¿Tu cliente o proveedor te pidió demostrar que estás al corriente con el SAT? Eso es la Opinión de Cumplimiento. Tiene vigencia de 3 meses y tramto te la saca al instante.',
    pasos: [
      'Compártenos tu RFC y contraseña SAT',
      'Consultamos tu estatus en el SAT',
      'Descargamos tu opinión positiva',
      'La recibes en tu correo en minutos',
    ],
  },
  {
    slug: 'fiel-primera-vez',
    nombre: 'FIEL — Primera vez (presencial)',
    dependencia: 'SAT',
    categoria: 'tramto-asesora',
    derechoOficial: '$0 MXN (gratuito)',
    honorarioTramto: '$199–$350 MXN',
    tiempo: '1–2 días hábiles',
    documentos: [
      'INE vigente',
      'CURP',
      'Comprobante de domicilio',
      'Correo electrónico',
      'Memoria USB',
    ],
    descripcion:
      'La FIEL (o e.firma) es tu firma digital ante el gobierno. La primera vez tienes que ir al SAT en persona — pero tramto te prepara todo para que vayas una sola vez, bien preparado, sin que te regresen.',
    pasos: [
      'Revisamos y validamos tus documentos',
      'Agendamos tu cita en el SAT más cercano',
      'Te enviamos el checklist exacto de qué llevar',
      'Vas al SAT y sales con tu FIEL lista',
    ],
  },
  {
    slug: 'fiel-renovacion',
    nombre: 'FIEL — Renovación en línea',
    dependencia: 'SAT',
    categoria: 'tramto-ejecuta',
    derechoOficial: '$0 MXN (gratuito)',
    honorarioTramto: '$199–$299 MXN',
    tiempo: '30 minutos',
    documentos: [
      'e.firma vencida (menos de 1 año)',
      'Contraseña SAT',
      'Correo electrónico',
    ],
    descripcion:
      '¿Tu FIEL venció hace menos de un año? Buenas noticias — se puede renovar 100% en línea. tramto lo hace por ti sin que tengas que pisar el SAT.',
    pasos: [
      'Confirmamos que tu FIEL lleva menos de 1 año vencida',
      'Nos compartes tus credenciales SAT',
      'Ejecutamos la renovación en línea',
      'Recibes tu nueva FIEL en tu correo',
    ],
  },
  {
    slug: 'declaracion-resico',
    nombre: 'Declaración Mensual RESICO',
    dependencia: 'SAT',
    categoria: 'tramto-ejecuta',
    derechoOficial: '$0 MXN (gratuito)',
    honorarioTramto: '$199–$299 MXN/mes',
    tiempo: 'Mismo día',
    documentos: ['RFC', 'Contraseña SAT', 'Ingresos del mes'],
    descripcion:
      'Si estás en el régimen RESICO (Régimen Simplificado de Confianza), tienes que declarar tus ingresos antes del día 17 de cada mes. tramto te lo recuerda el día 10 y lo presenta por ti. Sin drama mensual.',
    pasos: [
      'Te avisamos el día 10 de cada mes',
      'Nos mandas tus ingresos del mes',
      'Presentamos tu declaración ante el SAT',
      'Recibes el acuse de presentación',
    ],
  },

  // ─── IMSS ────────────────────────────────────────────────────────────────
  {
    slug: 'semanas-imss',
    nombre: 'Semanas Cotizadas + Vigencia IMSS',
    dependencia: 'IMSS',
    categoria: 'tramto-ejecuta',
    derechoOficial: '$0 MXN (gratuito)',
    honorarioTramto: 'Incluido en suscripción',
    tiempo: '2 minutos',
    documentos: ['NSS (Número de Seguridad Social)'],
    descripcion:
      '¿Sabes cuántas semanas tienes cotizadas en el IMSS? ¿Tu cobertura médica está vigente? La mayoría no lo sabe. tramto te lo dice en segundos.',
    pasos: [
      'Compártenos tu NSS',
      'Consultamos el portal del IMSS',
      'Recibes tu resumen de semanas y vigencia',
      'Te avisamos si algo está por vencer',
    ],
  },
  {
    slug: 'nss',
    nombre: 'NSS — Número de Seguridad Social',
    dependencia: 'IMSS',
    categoria: 'tramto-ejecuta',
    derechoOficial: '$0 MXN (gratuito)',
    honorarioTramto: 'Incluido en suscripción',
    tiempo: '2 minutos',
    documentos: ['CURP'],
    descripcion:
      'Tu NSS es como tu matrícula ante el IMSS. Lo necesitas para prácticamente todo lo relacionado con seguridad social. tramto te lo consigue en segundos.',
    pasos: [
      'Compártenos tu CURP',
      'Consultamos el IMSS',
      'Recibes tu NSS al instante',
    ],
  },

  // ─── INFONAVIT ──────────────────────────────────────────────────────────
  {
    slug: 'saldo-infonavit',
    nombre: 'Saldo INFONAVIT / Subcuenta de Vivienda',
    dependencia: 'INFONAVIT',
    categoria: 'tramto-ejecuta',
    derechoOficial: '$0 MXN (gratuito)',
    honorarioTramto: 'Incluido en suscripción',
    tiempo: '2 minutos',
    documentos: ['NSS', 'Datos personales'],
    descripcion:
      '¿Sabes cuánto tienes ahorrado en tu INFONAVIT? La mayoría de los trabajadores no lo sabe. tramto te lo muestra — y si quieres, te dice cuánto crédito podrías pedir hoy.',
    pasos: [
      'Compártenos tu NSS y datos personales',
      'Consultamos tu cuenta INFONAVIT',
      'Recibes tu saldo y semanas cotizadas',
      'Simulador de crédito incluido',
    ],
  },

  // ─── VEHICULAR CDMX ─────────────────────────────────────────────────────
  {
    slug: 'verificacion-vehicular',
    nombre: 'Verificación Vehicular CDMX',
    dependencia: 'SEDEMA',
    categoria: 'tramto-asesora',
    derechoOficial: '$395–$480 MXN (SEDEMA)',
    honorarioTramto: '$199–$299 MXN',
    tiempo: '1 día',
    documentos: [
      'Tarjeta de circulación vigente',
      'Tenencia al corriente',
      'INE',
    ],
    descripcion:
      'La verificación vence cada 6 meses según la terminación de tu placa. tramto te avisa 30 días antes, te dice qué módulo tiene menos fila y te prepara todo lo que tienes que llevar. Tú solo vas y listo.',
    pasos: [
      'Registras tu placa y datos del vehículo',
      'tramto detecta tu próxima fecha de verificación',
      'Agendamos cita en el módulo más cercano',
      'Recibes checklist exacto y monto a pagar',
    ],
  },
  {
    slug: 'licencia-conducir',
    nombre: 'Licencia de Conducir Permanente CDMX',
    dependencia: 'SEMOVI',
    categoria: 'tramto-asesora',
    derechoOficial: '$550–$800 MXN (SEMOVI)',
    honorarioTramto: '$199–$350 MXN',
    tiempo: '1 día',
    documentos: [
      'INE vigente',
      'CURP',
      'Comprobante de domicilio',
      'Examen médico (en módulo)',
      'Licencia anterior (si es renovación)',
    ],
    descripcion:
      'El 80% de las personas van mal preparadas al módulo de licencias. Sin documentos, sin cita, sin saber el costo. tramto te agenda la cita, te prepara el checklist exacto y te avisa con 60 días de anticipación cuando está por vencer.',
    pasos: [
      'Dinos si es primera vez o renovación',
      'Agendamos tu cita en SEMOVI',
      'Recibes checklist exacto y monto',
      'Vas al módulo bien preparado',
    ],
  },

  // ─── SRE ────────────────────────────────────────────────────────────────
  {
    slug: 'pasaporte',
    nombre: 'Pasaporte — Primera vez o Renovación',
    dependencia: 'SRE',
    categoria: 'tramto-asesora',
    derechoOficial: '$1,530–$2,550 MXN (SRE)',
    honorarioTramto: '$299–$499 MXN',
    tiempo: '1–3 días hábiles',
    documentos: [
      'Acta de nacimiento',
      'CURP',
      'INE',
      'Fotografías (medidas exactas)',
      'Pago de derechos',
      'Pasaporte anterior (si es renovación)',
    ],
    descripcion:
      'Conseguir cita para pasaporte en la SRE puede ser una odisea. tramto la agenda por ti, valida que tus documentos estén correctos antes de que vayas y te avisa 6 meses antes de que tu pasaporte venza. Sin sorpresas en la ventanilla.',
    pasos: [
      'Dinos si es primera vez o renovación',
      'Validamos tu documentación antes de ir',
      'Agendamos tu cita en la delegación más conveniente',
      'Vas con todo listo — sin que te regresen',
    ],
  },

  // ─── IMPI ────────────────────────────────────────────────────────────────
  {
    slug: 'registro-marca',
    nombre: 'Registro de Marca ante el IMPI',
    dependencia: 'IMPI',
    categoria: 'tramto-ejecuta',
    derechoOficial: '$3,126 MXN por clase (IMPI)',
    honorarioTramto: '$1,374–$2,374 MXN',
    notaCosto: 'Total aproximado $4,500–$5,500 MXN por clase',
    tiempo: '4–8 meses (proceso IMPI)',
    documentos: [
      'RFC o CURP',
      'INE',
      'Nombre o logotipo de la marca',
      'Descripción de productos/servicios',
      'e.firma SAT',
    ],
    descripcion:
      'Registrar tu marca es la diferencia entre tener un negocio protegido y uno que cualquiera puede copiar. tramto hace la búsqueda previa en MARCANET, identifica la Clase de Niza correcta, presenta la solicitud y te da seguimiento hasta el título oficial.',
    pasos: [
      'Búsqueda previa en MARCANET (verifica disponibilidad)',
      'Identificamos la Clase de Niza correcta para tu negocio',
      'Presentamos la solicitud ante el IMPI con tu e.firma',
      'Seguimiento mensual hasta que tengas tu título (4–8 meses)',
    ],
  },
  {
    slug: 'declaracion-uso-marca',
    nombre: 'Declaración de Uso de Marca IMPI',
    dependencia: 'IMPI',
    categoria: 'tramto-ejecuta',
    derechoOficial: '$1,142 MXN por clase (IMPI)',
    honorarioTramto: '$658–$1,058 MXN',
    notaCosto: 'Total aproximado $1,800–$2,200 MXN',
    tiempo: '1–3 días hábiles',
    documentos: [
      'Título de registro de marca vigente',
      'Evidencia de uso (facturas, fotos, website)',
      'e.firma SAT',
    ],
    descripcion:
      '¿Ya tienes tu marca registrada? Bien. Pero hay algo que mucha gente no sabe: entre el año 3 y 4 del registro tienes que declarar que la estás usando — o pierdes tu registro. tramto te avisa con 90 días de anticipación y lo hace por ti.',
    pasos: [
      'tramto verifica tu fecha límite de declaración',
      'Reúnes evidencia de que usas la marca',
      'Presentamos la declaración ante el IMPI',
      'Recibes tu acuse de presentación',
    ],
  },

  // ─── DENUNCIA DIGITAL ────────────────────────────────────────────────────
  {
    slug: 'denuncia-digital',
    nombre: 'Denuncia Digital CDMX',
    dependencia: 'FGJ',
    categoria: 'tramto-asesora',
    derechoOficial: '$0 MXN (gratuito)',
    honorarioTramto: '$199–$299 MXN',
    tiempo: '30–60 minutos',
    documentos: [
      'INE o e.firma o Llave Única CDMX',
      'Datos del delito y fecha',
      'Evidencia si existe',
    ],
    descripcion:
      '¿Te robaron el celular? ¿Sufriste un fraude? ¿Daño a tu propiedad? Poner una denuncia formal no tiene que ser un martirio. tramto te dice exactamente qué aplica y te guía paso a paso en el portal oficial.',
    pasos: [
      'tramto identifica si tu delito aplica para denuncia digital',
      'Te preparamos todos los datos que necesitas tener a la mano',
      'Te acompañamos paso a paso en el portal oficial',
      'Obtienes tu número de folio de la denuncia',
    ],
    delitosAplican: [
      'Robo sin violencia',
      'Robo de celular',
      'Robo de autopartes',
      'Fraude',
      'Abuso de confianza',
      'Daño a la propiedad',
      'Usurpación de identidad',
      'Violencia familiar (sin violencia física)',
    ],
  },

  // ─── CERTIFICACIÓN ──────────────────────────────────────────────────────
  {
    slug: 'certificacion-documentos',
    nombre: 'Certificación de Documentos Oficiales',
    dependencia: 'SEP',
    categoria: 'tramto-asesora',
    derechoOficial: '$90–$500 MXN según documento',
    honorarioTramto: '$299–$599 MXN',
    tiempo: '1–5 días hábiles',
    documentos: ['Documento original a certificar', 'INE', 'CURP', 'Comprobante de domicilio'],
    descripcion:
      'Necesitas una copia con validez oficial de un documento importante. Acta de nacimiento, título, certificado, constancia. tramto identifica dónde se certifica cada documento y lo gestiona por ti.',
    pasos: [
      'Dinos qué documento necesitas certificar',
      'Identificamos la dependencia correcta',
      'Gestionamos la solicitud y el pago de derechos',
      'Recibes tu copia certificada con sello oficial',
    ],
    documentosCertifica: [
      'Actas de nacimiento, matrimonio, divorcio, defunción',
      'Títulos universitarios y cédula profesional (SEP)',
      'Certificados de estudios',
      'Constancias de no antecedentes penales',
      'Documentos fiscales (SAT)',
    ],
  },

  // ─── APOSTILLA ──────────────────────────────────────────────────────────
  {
    slug: 'apostilla',
    nombre: 'Apostilla de Documentos',
    dependencia: 'SRE',
    categoria: 'tramto-asesora',
    derechoOficial: '$200–$2,048 MXN según documento',
    honorarioTramto: '$800–$1,500 MXN',
    tiempo: '1–5 días hábiles',
    documentos: [
      'Documento original o copia certificada',
      'INE',
      'Pago de derechos',
    ],
    descripcion:
      'La apostilla es el sello que hace que tus documentos mexicanos sean válidos en 128 países. Pero hay un detalle que muy poca gente sabe: no todos los documentos se apostillan en el mismo lugar. tramto identifica exactamente dónde va el tuyo y lo coordina por ti.',
    pasos: [
      'Nos dices qué documento necesitas apostillar',
      'Identificamos si es federal o estatal',
      'Coordinamos el trámite en la autoridad correcta',
      'Recibes tu documento apostillado',
    ],
  },

  // ─── TRADUCCIÓN OFICIAL ─────────────────────────────────────────────────
  {
    slug: 'traduccion-oficial',
    nombre: 'Traducción Oficial por Perito Traductor',
    dependencia: 'SEP',
    categoria: 'tramto-coordina',
    derechoOficial: 'N/A',
    honorarioTramto: '$250–$800 MXN/página',
    tiempo: '24–72 horas',
    documentos: [
      'Documento a traducir (PDF o escaneado)',
      'Idioma destino',
    ],
    descripcion:
      'Para trámites migratorios, académicos, legales o ante embajadas, necesitas una traducción oficial firmada por un perito traductor certificado por el Tribunal Superior de Justicia. tramto te conecta con el perito correcto y coordina todo.',
    pasos: [
      'Nos envías tu documento escaneado',
      'Cotizamos según páginas e idioma',
      'Perito certificado realiza la traducción',
      'Recibes tu traducción firmada y sellada en 24–72 hrs',
    ],
    idiomasDisponibles: ['Inglés', 'Francés', 'Alemán', 'Italiano', 'Portugués'],
    documentosTraduceEjemplos: [
      'Actas del Registro Civil',
      'Títulos universitarios y certificados académicos',
      'Contratos y documentos legales',
      'Documentos migratorios',
      'Poderes notariales',
      'Documentos médicos',
    ],
  },

  // ─── DIVORCIO EXPRESS ────────────────────────────────────────────────────
  {
    slug: 'divorcio-express',
    nombre: 'Divorcio Express (Administrativo)',
    dependencia: 'Notaría',
    categoria: 'tramto-coordina',
    derechoOficial: '$1,518 MXN (Registro Civil CDMX)',
    honorarioTramto: '$1,500–$2,500 MXN',
    tiempo: '1–4 semanas',
    documentos: [
      'Actas de nacimiento de ambos',
      'Acta de matrimonio',
      'INE de ambos',
      'CURP de ambos',
    ],
    descripcion:
      'Para divorcios de mutuo acuerdo y sin complicaciones, existe el divorcio express. tramto verifica si aplica en tu caso, te conecta con un notario aliado certificado en CDMX y coordina todo el proceso. Sin que tengas que buscar abogado.',
    pasos: [
      'Confirmamos que aplica divorcio express en tu caso',
      'tramto conecta con notario aliado en CDMX',
      'Preparación y revisión de documentación',
      'Firma ante notario y obtención del acta',
    ],
  },

  // ─── PROFECO ─────────────────────────────────────────────────────────────
  {
    slug: 'queja-profeco',
    nombre: 'Queja o Denuncia ante PROFECO',
    dependencia: 'PROFECO',
    categoria: 'tramto-asesora',
    derechoOficial: '$0 MXN (gratuito)',
    honorarioTramto: '$199–$399 MXN',
    tiempo: '15–30 min para presentar. Respuesta en 10 días hábiles.',
    documentos: [
      'INE digitalizada por ambos lados',
      'Comprobante de compra',
      'Contrato (si aplica)',
      'Evidencia del problema',
      'Nombre del proveedor',
    ],
    descripcion:
      '¿El restaurante no te respetó la garantía? ¿La tienda te cobró de más? ¿El servicio de internet nunca llegó a la velocidad prometida? Para eso existe la PROFECO — y tramto te ayuda a presentar tu queja de forma correcta para que tengas resultado.',
    pasos: [
      'tramto evalúa si tu caso procede ante PROFECO',
      'Preparamos tu documentación y evidencia',
      'Te guiamos paso a paso en Concilianet',
      'Seguimiento hasta la audiencia de conciliación',
    ],
  },

  // ─── CONDUSEF ────────────────────────────────────────────────────────────
  {
    slug: 'queja-condusef',
    nombre: 'Queja o Reclamación ante CONDUSEF',
    dependencia: 'CONDUSEF',
    categoria: 'tramto-asesora',
    derechoOficial: '$0 MXN (gratuito)',
    honorarioTramto: '$199–$399 MXN',
    tiempo: '30–60 min para presentar. Banco responde en 45 días hábiles.',
    documentos: [
      'INE',
      'CURP',
      'Estados de cuenta',
      'Contratos o pólizas',
      'Descripción del cargo, monto y fecha',
    ],
    descripcion:
      '¿Tu banco te cobró algo que no reconoces? ¿Tu seguro no quiso pagar el siniestro? ¿Tu AFORE tiene un cargo raro? Para problemas con servicios financieros existe la CONDUSEF. tramto te guía en el Portal de Queja Electrónica y el sistema genera automáticamente el escrito de reclamación para el banco.',
    pasos: [
      'tramto evalúa si tu caso procede ante CONDUSEF',
      'Reúnes estados de cuenta y evidencia',
      'Te guiamos en el Portal de Queja Electrónica',
      'Recibes folio y escrito de reclamación automático',
      'Seguimiento hasta resolución (máx 45 días hábiles)',
    ],
  },
]

export const TRAMITES_BY_SLUG = Object.fromEntries(
  TRAMITES.map((t) => [t.slug, t])
)

export const TRAMITES_BY_DEPENDENCIA = TRAMITES.reduce<Record<string, Tramite[]>>(
  (acc, t) => {
    if (!acc[t.dependencia]) acc[t.dependencia] = []
    acc[t.dependencia].push(t)
    return acc
  },
  {}
)

export const CATEGORIA_LABELS: Record<string, { label: string; color: string; emoji: string }> = {
  'tramto-ejecuta':  { label: 'tramto lo ejecuta solo',    color: 'text-success', emoji: '🟢' },
  'tramto-asesora':  { label: 'tramto asesora y gestiona', color: 'text-gold',    emoji: '🟡' },
  'tramto-coordina': { label: 'tramto coordina con aliado', color: 'text-danger',  emoji: '🔴' },
}

export const DEPENDENCIA_LABELS: Record<string, { label: string; badgeClass: string }> = {
  SAT:       { label: 'SAT',       badgeClass: 'badge-sat' },
  IMSS:      { label: 'IMSS',      badgeClass: 'badge-imss' },
  INFONAVIT: { label: 'INFONAVIT', badgeClass: 'badge-infonavit' },
  SEDEMA:    { label: 'SEDEMA',    badgeClass: 'badge-sedema' },
  SEMOVI:    { label: 'SEMOVI',    badgeClass: 'badge-sedema' },
  SRE:       { label: 'SRE',       badgeClass: 'badge-sre' },
  IMPI:      { label: 'IMPI',      badgeClass: 'badge-impi' },
  FGJ:       { label: 'FGJ CDMX',  badgeClass: 'badge-fgj' },
  PROFECO:   { label: 'PROFECO',   badgeClass: 'badge-profeco' },
  CONDUSEF:  { label: 'CONDUSEF',  badgeClass: 'badge-condusef' },
  Notaría:   { label: 'Notaría',   badgeClass: 'badge-general' },
  SEP:       { label: 'SEP',       badgeClass: 'badge-general' },
}

export const TICKER_ITEMS = [
  '👀 El SAT actualizó los requisitos de la CSF — checa si la tuya está al día · ',
  '🚗 Verificación vehicular CDMX: nuevos módulos con horario extendido · ',
  '📋 RESICO: el día 17 se acerca — ¿ya tienes tu declaración lista? · ',
  '🏷️ IMPI reduce tiempos para registro de marca — ahora en 4 meses · ',
  '🏠 INFONAVIT lanza crédito para trabajadores independientes — aquí los detalles · ',
  '📢 SRE abre citas de pasaporte en 5 delegaciones de CDMX · ',
  '⚠️ REPSE: si tu empresa subcontrata, verifica que esté vigente · ',
]
