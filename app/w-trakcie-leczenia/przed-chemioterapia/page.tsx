import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, MessageCircle } from 'lucide-react'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: 'Przed chemioterapią — poradnik',
  description:
    'Jak przygotować się przed rozpoczęciem chemioterapii i o co warto zapytać zespół leczący. Treści edukacyjne, nie zalecenia.',
}

const checklist = [
  'Zapytaj o spodziewane objawy i o przepisaną profilaktykę przeciwwymiotną.',
  'Przekaż listę wszystkich przyjmowanych leków, suplementów i ziół — mogą wchodzić w interakcje.',
  'Zapytaj, które metody wspomagające są bezpieczne w Twoim schemacie leczenia.',
  'Ustal, z kim i jak się kontaktować przy nasilonych objawach.',
  'Zapytaj o wsparcie żywieniowe i bezpieczny zakres aktywności fizycznej.',
]

export default function PrzedChemioterapiaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Poradnik praktyczny"
        title="Przed chemioterapią"
        description="Dobre przygotowanie i otwarta rozmowa z zespołem leczącym pomagają przejść przez leczenie spokojniej. Poniżej lista zagadnień, które warto poruszyć."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <nav aria-label="Ścieżka" className="mb-8 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link href="/w-trakcie-leczenia" className="hover:text-accent">
            W trakcie leczenia
          </Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span className="text-foreground">Przed chemioterapią</span>
        </nav>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-primary">
            O co warto zapytać
          </h2>
          <ul className="mt-5 space-y-3">
            {checklist.map((t, i) => (
              <li
                key={t}
                className="flex gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm leading-relaxed text-foreground/80 shadow-sm"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-xs font-semibold text-accent">
                  {i + 1}
                </span>
                {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 rounded-xl border border-accent/30 bg-accent/5 p-6">
          <h2 className="flex items-center gap-2 font-serif text-xl font-semibold text-primary">
            <MessageCircle className="h-5 w-5 text-accent" aria-hidden="true" />
            Porozmawiaj z onkologiem
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            Wszystkie decyzje dotyczące leczenia i metod wspomagających podejmuj
            wspólnie z lekarzem prowadzącym. Ten poradnik ma charakter
            informacyjny i nie zastępuje konsultacji medycznej.
          </p>
        </section>
      </div>
    </>
  )
}
