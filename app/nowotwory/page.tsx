import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { cancers } from '@/lib/cancers'

export const metadata: Metadata = {
  title: 'Według nowotworu',
  description:
    'Podejście integracyjne według typu nowotworu: standard leczenia, metody wspomagające z dowodami i częste objawy. Wzór: Comprehensive Integrative Oncology (Elsevier 2026).',
}

export default function NowotworyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Według nowotworu"
        title="Integracyjne podejście wg typu nowotworu"
        description="Dla każdego nowotworu: krótko o standardzie leczenia, co integracyjnie ma dowody i jakie objawy są częste. Treści edukacyjne — leczenie prowadzi zespół onkologiczny."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cancers.map((c) => (
            <Link
              key={c.slug}
              href={`/nowotwory/${c.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-accent/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <h2 className="font-serif text-lg font-semibold text-primary">{c.name}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{c.intro}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                Zobacz podejście
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
