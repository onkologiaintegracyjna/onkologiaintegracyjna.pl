export type GradeLevel = 'high' | 'moderate' | 'low' | 'very-low'

export type EvidenceType =
  | 'meta-analysis'
  | 'rct'
  | 'observational'
  | 'preclinical'
  | 'case-report'

export type ClinicalStatus =
  | 'guideline-supported'
  | 'supportive-care'
  | 'off-label-adjunct'
  | 'experimental'
  | 'not-recommended'

export type MethodKind =
  | 'grzyby'
  | 'rosliny'
  | 'witaminy'
  | 'leki'
  | 'fizykalne'
  | 'styl-zycia'

export type MethodCategory =
  | 'supportive-care'
  | 'substance'
  | 'physical'
  | 'lifestyle'
  | 'mind-body'
  | 'diagnostic'
  | 'experimental'

export interface Reference {
  pmid?: string
  doi?: string
  guideline?: string
  title: string
  year: number
  note?: string
}

export interface EvidenceProfile {
  /** Co sugerują dane — sygnał efektu */
  effectSignal: string
  grade: GradeLevel
  evidenceType: EvidenceType
  clinicalStatus: ClinicalStatus
  /** Czego brakuje w dowodach */
  evidenceGap: string
}

export interface RegulatoryStatus {
  country: string
  status: string
  note?: string
}

export interface MythBuster {
  title: string
  body: string
}

export interface Method {
  slug: string
  name: string
  category: MethodCategory
  shortDescription: string
  evidenceProfile: EvidenceProfile
  howItWorks: string
  research: string
  safety: string
  talkToDoctor: string
  references: Reference[]
  experimental?: boolean
  /** Rodzaj (do filtra w wykazie): grzyby, rośliny/zioła, witaminy/suplementy, leki repurposed, metody fizykalne, styl życia. */
  kind?: MethodKind
  /** Indywidualna, zniuansowana notka dla obszaru eksperymentalnego (zastępuje domyślną). */
  experimentalNote?: string
  /** Różnica mechanistyczna zależna od drogi podania (np. doustnie vs dożylnie). Opcjonalne. */
  administrationRoute?: {
    summary: string
    oral?: string
    iv?: string
  }
  /** Klasa redoks: czy substancja działa pro- czy antyoksydacyjnie (kontekst łączenia metod). */
  redoxClass?: 'pro-oxidant' | 'antioxidant' | 'context-dependent'
  /** Czym jest metoda — przystępne wprowadzenie. */
  whatIsIt?: string
  /** Wskazania kliniczne badane w EBM. */
  indications?: string[]
  /** Przeciwwskazania i istotne interakcje. */
  contraindications?: string
  /** Status regulacyjny w wybranych krajach. */
  regulatory?: RegulatoryStatus[]
  /** Obalenie częstego mitu / błędu argumentacyjnego. */
  mythBuster?: MythBuster
}
