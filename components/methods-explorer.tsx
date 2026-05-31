'use client'

import { useMemo, useState } from 'react'
import { methods } from '@/lib/methods'
import type { MethodCategory, ClinicalStatus } from '@/lib/types'
import {
  categoryLabels,
  clinicalStatusLabels,
  gradeOrder,
} from '@/lib/labels'
import { MethodCard } from '@/components/method-card'
import { cn } from '@/lib/utils'

const categories = Object.keys(categoryLabels) as MethodCategory[]
const statuses = Object.keys(clinicalStatusLabels) as ClinicalStatus[]

type SortKey = 'grade-desc' | 'grade-asc' | 'name'

export function MethodsExplorer() {
  const [category, setCategory] = useState<MethodCategory | 'all'>('all')
  const [status, setStatus] = useState<ClinicalStatus | 'all'>('all')
  const [sort, setSort] = useState<SortKey>('grade-desc')

  const filtered = useMemo(() => {
    const list = methods.filter((m) => {
      const okCat = category === 'all' || m.category === category
      const okStatus =
        status === 'all' || m.evidenceProfile.clinicalStatus === status
      return okCat && okStatus
    })
    return [...list].sort((a, b) => {
      if (sort === 'name') return a.name.localeCompare(b.name, 'pl')
      const ga = gradeOrder[a.evidenceProfile.grade]
      const gb = gradeOrder[b.evidenceProfile.grade]
      return sort === 'grade-desc' ? gb - ga : ga - gb
    })
  }, [category, status, sort])

  return (
    <div>
      <div className="space-y-5 rounded-xl border border-border bg-secondary/50 p-5">
        {/* Category filter */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Kategoria
          </p>
          <div className="flex flex-wrap gap-2">
            <FilterChip
              active={category === 'all'}
              onClick={() => setCategory('all')}
            >
              Wszystkie
            </FilterChip>
            {categories.map((c) => (
              <FilterChip
                key={c}
                active={category === c}
                onClick={() => setCategory(c)}
              >
                {categoryLabels[c]}
              </FilterChip>
            ))}
          </div>
        </div>

        {/* Status filter */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Status kliniczny
          </p>
          <div className="flex flex-wrap gap-2">
            <FilterChip active={status === 'all'} onClick={() => setStatus('all')}>
              Wszystkie
            </FilterChip>
            {statuses.map((s) => (
              <FilterChip
                key={s}
                active={status === s}
                onClick={() => setStatus(s)}
              >
                {clinicalStatusLabels[s]}
              </FilterChip>
            ))}
          </div>
        </div>

        {/* Sort */}
        <div className="flex flex-wrap items-center gap-3">
          <label
            htmlFor="sort"
            className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
          >
            Sortuj
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="grade-desc">Pewność dowodów: malejąco</option>
            <option value="grade-asc">Pewność dowodów: rosnąco</option>
            <option value="name">Nazwa A–Z</option>
          </select>
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
        {filtered.length}{' '}
        {filtered.length === 1 ? 'metoda' : 'metod(y)'} spełnia kryteria
      </p>

      <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((m) => (
          <MethodCard key={m.slug} method={m} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-muted-foreground">
          Brak metod dla wybranych filtrów.
        </p>
      )}
    </div>
  )
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'rounded-full border px-3 py-1.5 text-sm font-medium transition-colors',
        active
          ? 'border-primary bg-primary text-primary-foreground'
          : 'border-border bg-background text-foreground/70 hover:border-accent/50 hover:text-foreground'
      )}
    >
      {children}
    </button>
  )
}
