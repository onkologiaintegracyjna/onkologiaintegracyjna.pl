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

/**
 * Mapowanie typu danych na literę skali opartej na NCI PDQ (A/B/C/P).
 * A — wiele RCT / metaanaliza · B — pojedyncze RCT / duże nierandomizowane
 * C — małe badania / rejestry / serie przypadków · P — przedkliniczne / mechanistyczne
 */
export const evidenceTypeLetter: Record<EvidenceType, 'A' | 'B' | 'C' | 'P'> = {
  'meta-analysis': 'A',
  rct: 'B',
  observational: 'C',
  'case-report': 'C',
  preclinical: 'P',
}

export const evidenceLetterLabels: Record<'A' | 'B' | 'C' | 'P', string> = {
  A: 'A — wiele RCT lub metaanaliza',
  B: 'B — pojedyncze RCT lub duże badanie nierandomizowane',
  C: 'C — małe badania, rejestry lub serie przypadków',
  P: 'P — dane przedkliniczne lub mechanistyczne (brak danych klinicznych)',
}

export const redoxLabels: Record<'pro-oxidant' | 'antioxidant' | 'context-dependent', string> = {
  'pro-oxidant': 'prooksydacyjna',
  antioxidant: 'antyoksydacyjna',
  'context-dependent': 'zależna od kontekstu',
}

export const redoxDescriptions: Record<'pro-oxidant' | 'antioxidant' | 'context-dependent', string> = {
  'pro-oxidant':
    'Działa przez zwiększanie stresu oksydacyjnego (reaktywne formy tlenu) — tym mechanizmem część badań tłumaczy efekt przeciwnowotworowy.',
  antioxidant:
    'Działa przez zmniejszanie stresu oksydacyjnego (neutralizowanie reaktywnych form tlenu) — chroni komórki przed utlenianiem.',
  'context-dependent':
    'Działa różnie zależnie od stężenia i kontekstu — w jednych warunkach antyoksydacyjnie, w innych prooksydacyjnie.',
}

export const kindLabels: Record<string, string> = {
  grzyby: 'Grzyby lecznicze',
  rosliny: 'Rośliny i zioła',
  witaminy: 'Witaminy i suplementy',
  leki: 'Leki repurposed',
  fizykalne: 'Metody fizykalne',
  'styl-zycia': 'Styl życia i dieta',
}
