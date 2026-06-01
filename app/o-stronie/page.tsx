import type { Metadata } from 'next'
import { Mail, ShieldCheck, Target, BookMarked } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { DisclaimerBox } from '@/components/disclaimer-box'

export const metadata: Metadata = {
  title: 'O stronie',
  description:
    'Misja, standard dowodowy i zasady redakcyjne serwisu Onkologia Integracyjna oraz dane kontaktowe.',
}

const evidenceStandard = [
  'Źródło pierwotne — PMID, DOI lub wytyczna (ASCO-SIO, ESMO, NCCN, NCI, MASCC). Nigdy z drugiej ręki.',
  'Typ danych i faza — od metaanalizy i RCT po dane przedkliniczne.',
  'Pewność dowodów w skali GRADE — od wysokiej do bardzo niskiej.',
  'Status kliniczny — od wytycznych po obszar eksperymentalny.',
  'Luka dowodowa — jasne wskazanie, czego brakuje.',
]

export default function OStroniePage() {
  return (
    <>
      <PageHeader
        eyebrow="O serwisie"
        title="O stronie"
        description="Onkologia Integracyjna to serwis edukacyjny o metodach wspomagających leczenie onkologiczne — oparty na dowodach, dla pacjentów i dla lekarzy."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <section>
          <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-primary">
            <Target className="h-5 w-5 text-accent" aria-hidden="true" />
            Misja
          </h2>
          <p className="mt-3 leading-relaxed text-foreground/80">
            Dostarczamy rzetelnych, źródłowych informacji o onkologii integracyjnej — łączeniu metod wspomagających o udokumentowanej wartości z leczeniem konwencjonalnym. Naszą trzecią drogą między pseudomedycyną a hurtowym odrzucaniem wszystkiego jest uczciwa, jawna gradacja dowodów. Opisujemy stan wiedzy; nie zalecamy terapii konkretnym pacjentom.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-primary">
            <ShieldCheck className="h-5 w-5 text-accent" aria-hidden="true" />
            Standard dowodowy
          </h2>
          <p className="mt-3 leading-relaxed text-foreground/80">
            Każda metoda opisana na stronie ma pełny profil dowodowy złożony z pięciu elementów:
          </p>
          <ul className="mt-4 space-y-2.5">
            {evidenceStandard.map((t) => (
              <li key={t} className="flex gap-2 text-sm leading-relaxed text-foreground/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-primary">
            <BookMarked className="h-5 w-5 text-accent" aria-hidden="true" />
            Zasady redakcyjne
          </h2>
          <ul className="mt-4 space-y-2.5">
            {[
              'Opis wiedzy, nie zalecenie terapii dla konkretnego pacjenta.',
              'Zawsze obok leczenia konwencjonalnego, nigdy zamiast.',
              'Bez obietnic wyleczenia i języka „cudów”.',
              'Obszar eksperymentalny wyraźnie oznaczony.',
              'Disclaimer medyczny na każdej stronie.',
            ].map((t) => (
              <li key={t} className="flex gap-2 text-sm leading-relaxed text-foreground/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-xl border border-accent/30 bg-accent/5 p-6">
          <h2 className="flex items-center gap-2 font-serif text-xl font-semibold text-primary">
            <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
            Kontakt
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            Pytania i uwagi:{' '}
            <a href="mailto:kontakt@onkologiaintegracyjna.pl" className="font-medium text-accent hover:underline">
              kontakt@onkologiaintegracyjna.pl
            </a>
          </p>
        </section>

        <DisclaimerBox className="mt-12" />
      </div>
    </>
  )
}
