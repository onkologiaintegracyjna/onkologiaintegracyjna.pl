import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Method } from '@/lib/types'
import { categoryLabels } from '@/lib/labels'
import { GradeBadge, ClinicalStatusBadge, EvidenceTypeBadge } from '@/components/badges'

export function MethodCard({ method }: { method: Method }) {
  return (
    <Link
      href={`/metody/${method.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-accent/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
        {categoryLabels[method.category]}
      </p>
      <h3 className="mt-1.5 font-serif text-lg font-semibold text-primary">
        {method.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {method.shortDescription}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <EvidenceTypeBadge type={method.evidenceProfile.evidenceType} compact />
        <GradeBadge grade={method.evidenceProfile.grade} />
        <ClinicalStatusBadge status={method.evidenceProfile.clinicalStatus} />
      </div>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
        Zobacz profil dowodowy
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  )
}
