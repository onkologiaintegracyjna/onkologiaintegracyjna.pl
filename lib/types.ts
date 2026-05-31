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
}
