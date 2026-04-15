import type { Noticia } from '@/types'

export const NOTICIAS: Noticia[] = [
  {
    slug: 'sat-csf-actualizada-2026',
    titulo: 'El SAT cambió la CSF — y puede que la tuya ya esté desactualizada',
    subtitulo:
      'Desde enero tiene nuevos campos obligatorios. Si la tienes guardada del año pasado, probablemente ya no sirve.',
    dependencia: 'SAT',
    fecha: '15 enero 2026',
    cuerpo: [
      'Si tu banco, arrendador o cliente te pidió la CSF en los últimos meses y la rechazaron — no es tu culpa. El SAT actualizó el formato y muchas constancias viejas ya no son válidas.',
      'Los cambios más importantes: ahora incluye el régimen fiscal actual y la actividad económica principal. Si cambiaste de régimen en 2025 y no actualizaste tu CSF, la que tienes guardada tiene datos incorrectos.',
      'Descárgala de nuevo en el portal del SAT y verifica que los datos coincidan con tu situación actual. ¿No sabes cómo? Eso es exactamente para lo que existe tramto.',
    ],
    cta: '¿Necesitas actualizar tu CSF? La descargamos por ti en 5 minutos →',
    ctaSlug: 'csf',
  },
  {
    slug: 'infonavit-credito-independientes-2026',
    titulo: 'INFONAVIT abre crédito para trabajadores independientes',
    subtitulo:
      'Por primera vez, los freelances y trabajadores por cuenta propia pueden acceder a crédito de vivienda.',
    dependencia: 'INFONAVIT',
    fecha: '8 enero 2026',
    cuerpo: [
      'Si trabajas por tu cuenta y siempre pensaste que el INFONAVIT no era para ti — eso está cambiando. A partir de 2026, trabajadores independientes con aportaciones voluntarias mínimas de 6 meses ya pueden acceder a crédito de vivienda.',
      'Para calificar necesitas hacer aportaciones voluntarias directamente en el portal de INFONAVIT por al menos 6 meses consecutivos. tramto puede ayudarte a empezar ese proceso desde hoy.',
    ],
    cta: '¿Quieres saber si calificas? tramto te hace el cálculo →',
    ctaSlug: 'saldo-infonavit',
  },
  {
    slug: 'verificacion-vehicular-cdmx-2026',
    titulo: 'Verificación vehicular CDMX: 3 módulos nuevos y horarios extendidos',
    subtitulo: 'Más módulos, más horarios — menos pretextos para no verificar.',
    dependencia: 'SEDEMA',
    fecha: '3 enero 2026',
    cuerpo: [
      'La SEDEMA habilitó 3 nuevos módulos de verificación en Iztapalapa, Gustavo A. Madero y Xochimilco para 2026. Los horarios se extienden hasta las 19:00 hrs de lunes a sábado.',
      '¿Cuándo te toca a ti? Depende de la terminación de tu placa. tramto te avisa 30 días antes y te dice qué módulo tiene menos fila en ese momento.',
    ],
    cta: '¿Cuándo vence tu verificación? tramto te lo dice →',
    ctaSlug: 'verificacion-vehicular',
  },
  {
    slug: 'impi-tiempos-registro-marca-2026',
    titulo: 'IMPI anuncia que registros de marca ahora tardan 4 meses',
    subtitulo: 'La digitalización del proceso redujo el tiempo a la mitad.',
    dependencia: 'IMPI',
    fecha: '20 diciembre 2025',
    cuerpo: [
      'Si pensabas que registrar tu marca tardaba 8 meses o más, buenas noticias. El IMPI completó la digitalización de su proceso de registro y las resoluciones ahora tardan aproximadamente 4 meses en condiciones normales.',
      'Esto significa que si empiezas hoy, en 4 meses puedes tener el símbolo ® sobre tu marca. tramto hace todo el proceso por ti — búsqueda previa, solicitud y seguimiento.',
    ],
    cta: '¿Tu marca todavía no está registrada? Es momento →',
    ctaSlug: 'registro-marca',
  },
  {
    slug: 'sre-citas-pasaporte-cdmx-2026',
    titulo: 'SRE abre más citas de pasaporte en 5 delegaciones de CDMX',
    subtitulo:
      'Enero y febrero tienen disponibilidad. Si necesitas pasaporte pronto, este es el momento.',
    dependencia: 'SRE',
    fecha: '18 diciembre 2025',
    cuerpo: [
      'La SRE liberó disponibilidad de citas para enero y febrero 2026 en 5 delegaciones de CDMX: Benito Juárez, Cuauhtémoc, Miguel Hidalgo, Coyoacán y Tlalpan.',
      'Las citas se agotan rápido. Si tu pasaporte está por vencer o necesitas uno nuevo, tramto puede agendarte la cita y validar tu documentación antes de que vayas para que no te regresen.',
    ],
    cta: '¿Necesitas pasaporte? tramto agenda tu cita →',
    ctaSlug: 'pasaporte',
  },
  {
    slug: 'imss-semanas-pension-2026',
    titulo: 'IMSS: esto necesitas para pensionarte en 2026',
    subtitulo:
      'Las reglas cambiaron en 2023. ¿Sabes cuántas semanas tienes y cuántas te faltan?',
    dependencia: 'IMSS',
    fecha: '10 diciembre 2025',
    cuerpo: [
      'Muchos trabajadores siguen creyendo que necesitan 500 semanas para pensionarse. Eso ya cambió. Las nuevas reglas del IMSS requieren al menos 1,000 semanas cotizadas para 2026, con un aumento gradual hasta 1,250 semanas para años posteriores.',
      '¿Sabes cuántas semanas tienes? tramto te lo dice en segundos con solo tu NSS — y te hace el cálculo de cuánto tiempo te falta si quieres jubilarte.',
    ],
    cta: '¿Cuántas semanas tienes en el IMSS? tramto te lo dice →',
    ctaSlug: 'semanas-imss',
  },
]

export const NOTICIAS_BY_SLUG = Object.fromEntries(NOTICIAS.map((n) => [n.slug, n]))

export const DEPENDENCIA_BADGE_MAP: Record<string, string> = {
  SAT:       'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30',
  IMSS:      'bg-green-500/15 text-green-400 border border-green-500/30',
  INFONAVIT: 'bg-blue-500/15 text-blue-400 border border-blue-500/30',
  SRE:       'bg-purple-500/15 text-purple-400 border border-purple-500/30',
  SEDEMA:    'bg-emerald-600/15 text-emerald-400 border border-emerald-600/30',
  IMPI:      'bg-orange-500/15 text-orange-400 border border-orange-500/30',
  FGJ:       'bg-red-500/15 text-red-400 border border-red-500/30',
  PROFECO:   'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30',
  CONDUSEF:  'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30',
}
