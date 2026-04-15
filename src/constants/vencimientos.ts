import type { Vencimiento } from '@/types'

export const VENCIMIENTOS: Vencimiento[] = [
  // SAT
  { obligacion: 'Declaración IVA + ISR', dependencia: 'SAT', frecuencia: 'Mensual', fechaLimite: 'Día 17', consecuencia: 'Multa + recargos', severidad: 'alta' },
  { obligacion: 'Declaración anual PM', dependencia: 'SAT', frecuencia: 'Anual', fechaLimite: '31 de marzo', consecuencia: 'Multa hasta $87,000 MXN', severidad: 'alta' },
  { obligacion: 'CFDI nómina timbrado', dependencia: 'SAT', frecuencia: 'Por pago', fechaLimite: 'Al pagar', consecuencia: 'No deducible', severidad: 'alta' },
  { obligacion: 'Contabilidad electrónica', dependencia: 'SAT', frecuencia: 'Mensual', fechaLimite: 'Día 25', consecuencia: 'Multa', severidad: 'media' },
  { obligacion: 'Opinión de cumplimiento', dependencia: 'SAT', frecuencia: 'Trimestral', fechaLimite: 'Según vencimiento', consecuencia: 'Pérdida de contratos', severidad: 'media' },
  // IMSS
  { obligacion: 'Cuotas patronales SUA', dependencia: 'IMSS', frecuencia: 'Bimestral', fechaLimite: 'Día 17 post-bimestre', consecuencia: 'Multa + capitales constitutivos', severidad: 'alta' },
  { obligacion: 'Alta/baja de trabajadores', dependencia: 'IMSS', frecuencia: 'Por evento', fechaLimite: '5 días hábiles', consecuencia: 'Multa por trabajador', severidad: 'alta' },
  { obligacion: 'Prima de riesgo', dependencia: 'IMSS', frecuencia: 'Anual', fechaLimite: 'Febrero', consecuencia: 'Multa', severidad: 'media' },
  // INFONAVIT
  { obligacion: 'Aportaciones patronales', dependencia: 'INFONAVIT', frecuencia: 'Bimestral', fechaLimite: 'Día 17 post-bimestre', consecuencia: 'Multa + recargos', severidad: 'alta' },
  { obligacion: 'Amortizaciones créditos', dependencia: 'INFONAVIT', frecuencia: 'Mensual', fechaLimite: 'Con nómina', consecuencia: 'Retención ilegal', severidad: 'alta' },
  // STPS
  { obligacion: 'NOM-035 implementación', dependencia: 'STPS', frecuencia: 'Anual', fechaLimite: 'Octubre', consecuencia: 'Multa hasta $422,010 MXN', severidad: 'alta' },
  { obligacion: 'REPSE renovación', dependencia: 'STPS', frecuencia: 'Anual', fechaLimite: 'Aniversario del registro', consecuencia: 'Cancelación de contratos', severidad: 'alta' },
  { obligacion: 'Reglamento Interior de Trabajo', dependencia: 'STPS', frecuencia: 'Una vez', fechaLimite: 'Al primer empleado', consecuencia: 'Multa', severidad: 'media' },
  // IMPI
  { obligacion: 'Registro de marca', dependencia: 'IMPI', frecuencia: 'Una vez', fechaLimite: 'Antes de que otro la registre', consecuencia: 'Pérdida de la marca', severidad: 'alta' },
  { obligacion: 'Declaración de uso de marca', dependencia: 'IMPI', frecuencia: 'Años 3–4', fechaLimite: 'Entre año 3 y 4 del registro', consecuencia: 'Cancelación del registro', severidad: 'alta' },
  { obligacion: 'Renovación de marca', dependencia: 'IMPI', frecuencia: 'Cada 10 años', fechaLimite: 'Antes del vencimiento', consecuencia: 'Pérdida del registro', severidad: 'media' },
  // Municipal/CDMX
  { obligacion: 'Licencia de funcionamiento', dependencia: 'Alcaldía', frecuencia: 'Anual', fechaLimite: 'Varía por giro', consecuencia: 'Clausura', severidad: 'alta' },
  { obligacion: 'Predial del local', dependencia: 'SAF CDMX', frecuencia: 'Semestral', fechaLimite: 'Marzo y septiembre', consecuencia: 'Recargo 2% mensual', severidad: 'media' },
  { obligacion: 'Aviso de apertura', dependencia: 'Alcaldía', frecuencia: 'Una vez', fechaLimite: 'Al abrir', consecuencia: 'Multa', severidad: 'media' },
]

export const DEPENDENCIAS_EMPRESA = [
  'Todos',
  'SAT',
  'IMSS',
  'INFONAVIT',
  'STPS',
  'IMPI',
  'Alcaldía',
  'SAF CDMX',
]
