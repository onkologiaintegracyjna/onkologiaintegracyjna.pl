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

export function EvidenceTypeBadge({
  type,
  className,
}: {
  type: EvidenceType
  className?: string
}) {
  return (
    <span className={cn(base, 'border-border bg-secondary text-foreground/80', className)}>
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
