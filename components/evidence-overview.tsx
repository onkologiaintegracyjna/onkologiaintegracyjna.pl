'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { methods } from '@/lib/methods'
import { gradeOrder, evidenceTypeLetter, categoryLabels, clinicalStatusLabels, gradeLabels } from '@/lib/labels'
import type { GradeLevel } from '@/lib/types'

const gradeStars: Record<GradeLevel, number> = { high: 4, moderate: 3, low: 2, 'very-low': 1 }
const gradeColor: Record<GradeLevel, string> = {
  high: 'text-grade-high',
  moderate: 'text-grade-moderate',
  low: 'text-grade-low',
  'very-low': 'text-grade-verylow',
}
const letterColor: Record<'A' | 'B' | 'C' | 'P', string> = {
  A: 'bg-etype-a-bg text-etype-a',
  B: 'bg-etype-b-bg text-etype-b',
  C: 'bg-etype-c-bg text-etype-c',
  P: 'bg-etype-p-bg text-etype-p',
}

function Stars({ grade }: { grade: GradeLevel }) {
  const n = gradeStars[grade]
  return (
    <span className="inline-flex items-center gap-2" aria-label={`Pewność dowodów (GRADE): ${gradeLabels[grade]}`}>
      <span className="tracking-tight" aria-hidden="true">
        <span className={gradeColor[grade]}>{'★'.repeat(n)}</span>
        <span className="text-muted-foreground/40">{'☆'.repeat(4 - n)}</span>
      </span>
      <span className="text-xs text-muted-foreground">{gradeLabels[grade]}</span>
    </span>
  )
}

type SortKey = 'grade' | 'name' | 'type'

export function EvidenceOverview() {
  const [sort, setSort] = useState<SortKey>('grade')

  const rows = useMemo(() => {
    return [...methods].sort((a, b) => {
      if (sort === 'name') return a.name.localeCompare(b.name, 'pl')
      if (sort === 'type')
        return evidenceTypeLetter[a.evidenceProfile.evidenceType].localeCompare(
          evidenceTypeLetter[b.evidenceProfile.evidenceType]
        )
      return gradeOrder[b.evidenceProfile.grade] - gradeOrder[a.evidenceProfile.grade]
    })
  }, [sort])

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
        <span className="text-muted-foreground">Sortuj:</span>
        {([['grade', 'wg dowodów'], ['type', 'wg typu danych'], ['name', 'alfabetycznie']] as [SortKey, string][]).map(
          ([k, label]) => (
            <button
              key={k}
              type="button"
              onClick={() => setSort(k)}
              aria-pressed={sort === k}
              className={
                'rounded-full border px-3 py-1 text-xs font-medium transition-colors ' +
                (sort === k
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-background text-foreground/70 hover:border-accent/50')
              }
            >
              {label}
            </button>
          )
        )}
      </div>

      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-primary text-left text-primary-foreground">
              <th className="px-3 py-3 font-medium">Metoda</th>
              <th className="px-3 py-3 font-medium">Kategoria</th>
              <th className="px-3 py-3 text-center font-medium">Typ danych</th>
              <th className="px-3 py-3 font-medium">Pewność (GRADE)</th>
              <th className="px-3 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((m) => {
              const letter = evidenceTypeLetter[m.evidenceProfile.evidenceType]
              return (
                <tr key={m.slug} className="border-t border-border even:bg-secondary/30">
                  <td className="px-3 py-2">
                    <Link href={`/metody/${m.slug}`} className="font-medium text-foreground hover:text-accent hover:underline">
                      {m.name}
                    </Link>
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">{categoryLabels[m.category]}</td>
                  <td className="px-3 py-2 text-center">
                    <span className={`inline-flex h-6 w-6 items-center justify-center rounded-md text-xs font-semibold ${letterColor[letter]}`} title={`Typ danych: ${letter}`}>
                      {letter}
                    </span>
                  </td>
                  <td className="px-3 py-2"><Stars grade={m.evidenceProfile.grade} /></td>
                  <td className="px-3 py-2 text-muted-foreground">{clinicalStatusLabels[m.evidenceProfile.clinicalStatus]}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
        <span><strong className="text-foreground">Typ danych:</strong> A = metaanaliza/wiele RCT · B = pojedyncze RCT · C = małe badania · P = przedkliniczne</span>
        <span><strong className="text-foreground">★</strong> = pewność dowodów GRADE (4 = wysoka, 1 = bardzo niska)</span>
      </div>
    </div>
  )
}
