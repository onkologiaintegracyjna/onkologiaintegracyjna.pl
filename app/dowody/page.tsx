import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, ListTree, Library, Info, ArrowRight } from 'lucide-react'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: 'Dowody i wiedza',
  description:
    'Centrum wiedzy: jak czytać dowody, słownik pojęć, pełna bibliografia oraz informacje o stronie i jej standardzie dowodowym.',
}

const cards = [
  { href: '/jak-czytac-dowody', icon: BookOpen, title: 'Jak czytać dowody', desc: 'Skala GRADE, typy danych i statusy kliniczne — wyjaśnione prosto.' },
  { href: '/ebm', icon: BookOpen, title: 'EBM i finansowanie badań', desc: 'Czym naprawdę jest medycyna oparta na dowodach, off-label, rejestracja warunkowa i paradoks dowodowy.' },
  { href: '/monitorowanie', icon: BookOpen, title: 'Monitorowanie po leczeniu', desc: 'Czujność po leczeniu: badania kontrolne, markery, CTC/CSC i maintrac z uczciwą oceną.' },
  { href: '/slownik', icon: ListTree, title: 'Słownik pojęć', desc: 'Najważniejsze terminy medyczne i metodologiczne.' },
  { href: '/zrodla', icon: Library, title: 'Źródła i bibliografia', desc: 'Pełna lista publikacji z PMID/DOI i odniesieniami do wytycznych.' },
  { href: '/o-stronie', icon: Info, title: 'O stronie', desc: 'Misja, standard dowodowy i informacje kontaktowe.' },
]

export default function DowodyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dowody i wiedza"
        title="Dowody i wiedza"
        description="Wszystko, co pomaga krytycznie czytać treści na tej stronie: metodologia, definicje i źródła."
      />
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((c) => {
            const Icon = c.icon
            return (
              <Link
                key={c.href}
                href={c.href}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-accent/50 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="mt-4 font-serif text-lg font-semibold text-primary">{c.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Otwórz
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}
