'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { searchIndex } from '@/lib/search-index'

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

export default function SzukajPage() {
  const [q, setQ] = useState('')
  const query = normalize(q.trim())

  const results = useMemo(() => {
    if (query.length < 2) return []
    const terms = query.split(/\s+/)
    return searchIndex
      .map((e) => {
        const hay = normalize(`${e.title} ${e.text} ${e.kind}`)
        const titleHay = normalize(e.title)
        let score = 0
        for (const t of terms) {
          if (!hay.includes(t)) return null
          if (titleHay.includes(t)) score += 2
          else score += 1
        }
        return { entry: e, score }
      })
      .filter((x): x is { entry: typeof searchIndex[number]; score: number } => x !== null)
      .sort((a, b) => b.score - a.score)
      .slice(0, 40)
  }, [query])

  return (
    <>
      <PageHeader
        eyebrow="Wyszukiwarka"
        title="Szukaj na stronie"
        description="Wpisz hasło — metodę, substancję, objaw lub pojęcie. Przeszukujemy wszystkie metody, poradniki, pojęcia i podstrony."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <input
            type="search"
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="np. kurkumina, neuropatia, GRADE, komórki macierzyste…"
            aria-label="Szukaj na stronie"
            className="w-full rounded-xl border border-border bg-card py-3 pl-12 pr-4 text-base text-foreground outline-none focus:border-accent"
          />
        </div>

        {query.length >= 2 && (
          <p className="mt-4 text-sm text-muted-foreground">
            {results.length === 0
              ? 'Brak wyników. Spróbuj innego hasła.'
              : `Wyniki: ${results.length}`}
          </p>
        )}

        <div className="mt-4 space-y-2">
          {results.map(({ entry }) => (
            <Link
              key={`${entry.kind}-${entry.href}-${entry.title}`}
              href={entry.href}
              className="block rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/50"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-medium text-primary">{entry.title}</span>
                <span className="shrink-0 rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">{entry.kind}</span>
              </div>
            </Link>
          ))}
        </div>

        {query.length < 2 && (
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Wskazówka: szukaj po nazwie (np. „melatonina”), objawie (np. „zmęczenie”) lub skrócie
            (np. „CINV”, „GRADE”). Możesz też przejrzeć{' '}
            <Link href="/slownik" className="font-medium text-accent hover:underline">słownik pojęć</Link>.
          </p>
        )}
      </div>
    </>
  )
}
