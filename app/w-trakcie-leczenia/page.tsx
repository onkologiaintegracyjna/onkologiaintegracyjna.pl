import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: 'W trakcie leczenia — poradniki praktyczne',
  description:
    'Praktyczne poradniki dla pacjentów: przed chemioterapią, w trakcie, podczas radioterapii i immunoterapii, okołooperacyjnie oraz po leczeniu.',
}

const guides = [
  {
    href: '/w-trakcie-leczenia/przed-chemioterapia',
    title: 'Przed chemioterapią',
    description: 'O co zapytać i jak się przygotować przed rozpoczęciem leczenia.',
    available: true,
  },
  {
    href: '/w-trakcie-leczenia/w-trakcie-chemioterapii',
    title: 'W trakcie chemioterapii',
    description: 'Co warto wiedzieć o objawach i wsparciu w trakcie cykli.',
  },
  {
    href: '/w-trakcie-leczenia/wzmacnianie-chemioterapii',
    title: 'Czy można „wzmacniać” chemioterapię?',
    description: 'Co mówią dane o łączeniu metod z leczeniem systemowym.',
  },
  {
    href: '/w-trakcie-leczenia/radioterapia',
    title: 'W trakcie radioterapii',
    description: 'Wsparcie objawowe i czego unikać podczas napromieniania.',
  },
  {
    href: '/w-trakcie-leczenia/immunoterapia',
    title: 'Immunoterapia',
    description: 'Specyfika wsparcia przy leczeniu immunologicznym.',
  },
  {
    href: '/w-trakcie-leczenia/okolooperacyjnie',
    title: 'Okołooperacyjnie',
    description: 'Przygotowanie i rekonwalescencja wokół zabiegu.',
  },
  {
    href: '/w-trakcie-leczenia/po-leczeniu',
    title: 'Po leczeniu (survivorship)',
    description: 'Powrót do sprawności i opieka po zakończeniu terapii.',
  },
]

export default function WTrakcieLeczeniaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Poradniki praktyczne"
        title="W trakcie leczenia"
        description="Informujące, nie nakłaniające poradniki na różne etapy leczenia. Każdy kończy się przypomnieniem: najważniejsza jest rozmowa z onkologiem."
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-accent/50 hover:shadow-md"
            >
              <h2 className="font-serif text-lg font-semibold text-primary">
                {g.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {g.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                Czytaj poradnik
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
