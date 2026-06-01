import { cn } from '@/lib/utils'
import type {
  GradeLevel,
  EvidenceType,
  ClinicalStatus,
  MethodCategory,
} from '@/lib/types'
import {
  gradeLabels,
  evidenceTypeLabels,
  evidenceTypeLetter,
  evidenceLetterLabels,
  clinicalStatusLabels,
  categoryLabels,
} from '@/lib/labels'

const base =
  'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium leading-5'

const gradeStyles: Record<GradeLevel, string> = {
  high: 'border-grade-high/30 bg-grade-high-bg text-grade-high',
  moderate: 'border-grade-moderate/30 bg-grade-moderate-bg text-grade-moderate',
  low: 'border-grade-low/30 bg-grade-low-bg text-grade-low',
  'very-low': 'border-grade-verylow/30 bg-grade-verylow-bg text-grade-verylow',
}

export function GradeBadge({
  grade,
  className,
}: {
  grade: GradeLevel
  className?: string
}) {
  return (
    <span
      className={cn(base, gradeStyles[grade], className)}
      title={`Pewność dowodów (GRADE): ${gradeLabels[grade]}`}
    >
      <span
        aria-hidden="true"
        className={cn(
          'h-1.5 w-1.5 rounded-full',
          grade === 'high' && 'bg-grade-high',
          grade === 'moderate' && 'bg-grade-moderate',
          grade === 'low' && 'bg-grade-low',
          grade === 'very-low' && 'bg-grade-verylow'
        )}
      />
      GRADE: {gradeLabels[grade]}
    </span>
  )
}

const letterStyles: Record<'A' | 'B' | 'C' | 'P', string> = {
  A: 'border-etype-a/30 bg-etype-a-bg text-etype-a',
  B: 'border-etype-b/30 bg-etype-b-bg text-etype-b',
  C: 'border-etype-c/30 bg-etype-c-bg text-etype-c',
  P: 'border-etype-p-border bg-etype-p-bg text-etype-p',
}

/**
 * Odznaka typu danych. Domyślnie pokazuje literę A/B/C/P (skala oparta na NCI PDQ)
 * wraz z opisem słownym. Wariant `compact` pokazuje samą literę (np. do sidebaru/kart).
 */
export function EvidenceTypeBadge({
  type,
  compact = false,
  className,
}: {
  type: EvidenceType
  compact?: boolean
  className?: string
}) {
  const letter = evidenceTypeLetter[type]
  const title = `Typ danych: ${evidenceLetterLabels[letter]}`

  if (compact) {
    return (
      <span
        className={cn(
          'inline-flex h-5 w-5 items-center justify-center rounded-md border text-xs font-semibold',
          letterStyles[letter],
          className
        )}
        title={title}
        aria-label={title}
      >
        {letter}
      </span>
    )
  }

  return (
    <span className={cn(base, letterStyles[letter], className)} title={title}>
      <span
        aria-hidden="true"
        className="flex h-4 w-4 items-center justify-center rounded text-[10px] font-bold"
      >
        {letter}
      </span>
      {evidenceTypeLabels[type]}
    </span>
  )
}

const statusStyles: Record<ClinicalStatus, string> = {
  'guideline-supported': 'border-grade-high/30 bg-grade-high-bg text-grade-high',
  'supportive-care': 'border-accent/30 bg-accent/10 text-accent',
  'off-label-adjunct': 'border-grade-moderate/30 bg-grade-moderate-bg text-grade-moderate',
  experimental: 'border-warn-border bg-warn-bg text-warn',
  'not-recommended': 'border-destructive/30 bg-destructive/10 text-destructive',
}

export function ClinicalStatusBadge({
  status,
  className,
}: {
  status: ClinicalStatus
  className?: string
}) {
  return (
    <span className={cn(base, statusStyles[status], className)}>
      {clinicalStatusLabels[status]}
    </span>
  )
}

export function CategoryBadge({
  category,
  className,
}: {
  category: MethodCategory
  className?: string
}) {
  return (
    <span
      className={cn(
        base,
        'border-border bg-background text-muted-foreground',
        className
      )}
    >
      {categoryLabels[category]}
    </span>
  )
}
