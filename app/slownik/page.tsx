import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { DisclaimerBox } from '@/components/disclaimer-box'
import { glossary } from '@/lib/glossary'

export const metadata: Metadata = {
  title: 'Słownik pojęć',
  description:
    'Słownik najważniejszych pojęć onkologii integracyjnej i oceny dowodów — od adiuwantu po wytyczne kliniczne.',
}

export default function SlownikPage() {
  const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term, 'pl'))
  return (
    <>
      <PageHeader
        eyebrow="Słownik"
        title="Słownik pojęć"
        description="Krótkie, przystępne wyjaśnienia terminów używanych na stronie — medycznych i metodologicznych."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <dl className="space-y-6">
          {sorted.map((t) => (
            <div key={t.term} className="border-b border-border pb-6 last:border-0">
              <dt className="font-serif text-lg font-semibold text-primary">{t.term}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-foreground/80">{t.definition}</dd>
            </div>
          ))}
        </dl>
        <DisclaimerBox className="mt-12" />
      </div>
    </>
  )
}
