import type {
  GradeLevel,
  EvidenceType,
  ClinicalStatus,
  MethodCategory,
} from '@/lib/types'

export const gradeLabels: Record<GradeLevel, string> = {
  high: 'wysoka pewność',
  moderate: 'umiarkowana pewność',
  low: 'niska pewność',
  'very-low': 'bardzo niska pewność',
}

export const gradeShort: Record<GradeLevel, string> = {
  high: 'GRADE: wysoka',
  moderate: 'GRADE: umiarkowana',
  low: 'GRADE: niska',
  'very-low': 'GRADE: bardzo niska',
}

export const gradeOrder: Record<GradeLevel, number> = {
  high: 4,
  moderate: 3,
  low: 2,
  'very-low': 1,
}

export const evidenceTypeLabels: Record<EvidenceType, string> = {
  'meta-analysis': 'metaanaliza',
  rct: 'badanie RCT',
  observational: 'badanie obserwacyjne',
  preclinical: 'dane przedkliniczne',
  'case-report': 'opis przypadku',
}

export const clinicalStatusLabels: Record<ClinicalStatus, string> = {
  'guideline-supported': 'wytyczne',
  'supportive-care': 'opieka wspomagająca',
  'off-label-adjunct': 'off-label / adiuwant',
  experimental: 'eksperymentalna',
  'not-recommended': 'niezalecana',
}

export const categoryLabels: Record<MethodCategory, string> = {
  'supportive-care': 'opieka wspomagająca',
  substance: 'substancja',
  physical: 'metoda fizykalna',
  lifestyle: 'styl życia',
  'mind-body': 'umysł–ciało',
  diagnostic: 'diagnostyka',
  experimental: 'eksperymentalna',
}
