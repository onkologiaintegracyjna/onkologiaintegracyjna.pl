import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { GradeBadge, EvidenceTypeBadge, ClinicalStatusBadge } from '@/components/badges'
import { DisclaimerBox } from '@/components/disclaimer-box'
import type { GradeLevel, EvidenceType, ClinicalStatus } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Jak czytać dowody',
  description:
    'Dlaczego oceniamy metody pięcioma wymiarami, a nie jednym. Skala GRADE, typy danych A/B/C/P i statusy kliniczne — oparte na NCI PDQ i wytycznych SIO-ASCO.',
}

const dimensions = [
  { n: '1', name: 'Sygnał efektu', desc: 'Co konkretnie pokazują badania i jak duży jest efekt. Pochodzi wprost z publikacji (z PMID).' },
  { n: '2', name: 'Typ danych (A/B/C/P)', desc: 'Na jak mocnych badaniach metoda się opiera — od metaanaliz po dane przedkliniczne. Skala oparta na NCI PDQ.' },
  { n: '3', name: 'Pewność dowodów (GRADE)', desc: 'Jak bardzo jesteśmy pewni oszacowania efektu. Zachowujemy pełną skalę GRADE.' },
  { n: '4', name: 'Status kliniczny', desc: 'Jak metoda jest realnie używana — od wytycznych po obszar eksperymentalny. Oparte na SIO-ASCO.' },
  { n: '5', name: 'Bilans i luka dowodowa', desc: 'Bezpieczeństwo, ryzyko i to, czego w badaniach brakuje. Wymiar obowiązkowy przy każdej metodzie.' },
]

const letters: { l: 'A' | 'B' | 'C' | 'P'; type: EvidenceType; desc: string }[] = [
  { l: 'A', type: 'meta-analysis', desc: 'Wiele badań randomizowanych (RCT) lub metaanaliza je łącząca — najmocniejsze dane kliniczne.' },
  { l: 'B', type: 'rct', desc: 'Pojedyncze RCT lub duże badanie nierandomizowane (np. kohortowe).' },
  { l: 'C', type: 'observational', desc: 'Małe badania, rejestry, serie przypadków lub opinia ekspertów — sygnał wymagający potwierdzenia.' },
  { l: 'P', type: 'preclinical', desc: 'Dane przedkliniczne (in vitro, modele zwierzęce) lub mechanistyczne. Oznacza „obiecujący mechanizm, brak danych klinicznych" — nie jest dowodem skuteczności u ludzi.' },
]

const grades: { g: GradeLevel; desc: string }[] = [
  { g: 'high', desc: 'Jesteśmy bardzo pewni, że prawdziwy efekt jest zbliżony do oszacowania.' },
  { g: 'moderate', desc: 'Jesteśmy umiarkowanie pewni — prawdziwy efekt prawdopodobnie jest zbliżony, ale możliwa jest różnica.' },
  { g: 'low', desc: 'Pewność ograniczona — prawdziwy efekt może istotnie różnić się od oszacowania.' },
  { g: 'very-low', desc: 'Bardzo mała pewność — prawdziwy efekt może być całkowicie inny.' },
]

const statuses: { s: ClinicalStatus; desc: string }[] = [
  { s: 'guideline-supported', desc: 'Uwzględniona w wytycznych klinicznych (ASCO-SIO, MASCC, ESMO) dla wybranych wskazań.' },
  { s: 'supportive-care', desc: 'Uznana w opiece wspomagającej, choć nie jako leczenie przeciwnowotworowe.' },
  { s: 'off-label-adjunct', desc: 'Lek zarejestrowany, stosowany poza wskazaniem jako uzupełnienie — wymaga nadzoru.' },
  { s: 'experimental', desc: 'Sygnał badawczy, bez dojrzałych danych klinicznych. Brak podstaw do rutynowego stosowania.' },
  { s: 'not-recommended', desc: 'Dowody przeciw lub poważne ryzyko.' },
]

export default function JakCzytacPage() {
  return (
    <>
      <PageHeader
        eyebrow="Metodologia"
        title="Jak czytać dowody"
        description="Każda metoda na stronie ma profil dowodowy złożony z pięciu wymiarów. Pokazujemy pięć, a nie jeden, bo jeden wskaźnik wprowadza w błąd."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Trzy kluczowe komunikaty */}
        <section className="rounded-xl border border-accent/30 bg-accent/5 p-6">
          <h2 className="font-serif text-xl font-semibold text-primary">Trzy rzeczy, które warto wiedzieć</h2>
          <ol className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/80">
            <li><strong>Pokazujemy pięć wymiarów, nie jeden</strong> — bo jeden wskaźnik nie odda różnicy między „nie wiemy" a „nie działa".</li>
            <li><strong>GRADE mierzy pewność dowodów, nie skuteczność.</strong> Niska pewność nie oznacza braku działania — oznacza, że brakuje mocnych badań.</li>
            <li><strong>Ograniczona baza badań ma różne przyczyny</strong> — w tym brak finansowania badań nad substancjami nieopatentowanymi. Nie przesądza to ani o skuteczności, ani o jej braku.</li>
          </ol>
        </section>

        {/* 5 wymiarów */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-primary">Pięć wymiarów profilu dowodowego</h2>
          <div className="mt-6 space-y-3">
            {dimensions.map((d) => (
              <div key={d.n} className="flex gap-4 rounded-xl border border-border bg-card p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-xs font-semibold text-primary-foreground">
                  {d.n}
                </span>
                <div>
                  <p className="font-serif text-base font-semibold text-primary">{d.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/80">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typ danych A/B/C/P */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-primary">Typ danych (A / B / C / P)</h2>
          <p className="mt-3 leading-relaxed text-foreground/80">
            Litera mówi, na jak mocnych badaniach opiera się metoda. To uproszczona, czytelna prezentacja poziomów dowodów NCI PDQ. Litera <strong>P</strong> (fiolet) jest osobna celowo: pozwala uczciwie pokazać metodę przedkliniczną, nie udając, że ma dowody kliniczne, ani nie „skreślając" jej.
          </p>
          <div className="mt-6 space-y-3">
            {letters.map(({ l, type, desc }) => (
              <div key={l} className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-start sm:gap-4">
                <div className="flex shrink-0 items-center gap-2">
                  <EvidenceTypeBadge type={type} compact />
                  <EvidenceTypeBadge type={type} />
                </div>
                <p className="text-sm leading-relaxed text-foreground/80">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GRADE */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-primary">Pewność dowodów (GRADE)</h2>
          <p className="mt-3 leading-relaxed text-foreground/80">
            GRADE to międzynarodowy standard oceny pewności dowodów. Zachowujemy go w całości — jako jeden z wymiarów, nie jedyny.
          </p>
          <div className="mt-6 space-y-3">
            {grades.map(({ g, desc }) => (
              <div key={g} className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-start sm:gap-4">
                <div className="shrink-0"><GradeBadge grade={g} /></div>
                <p className="text-sm leading-relaxed text-foreground/80">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Status kliniczny */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-primary">Status kliniczny</h2>
          <div className="mt-6 space-y-3">
            {statuses.map(({ s, desc }) => (
              <div key={s} className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-start sm:gap-4">
                <div className="shrink-0"><ClinicalStatusBadge status={s} /></div>
                <p className="text-sm leading-relaxed text-foreground/80">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dlaczego nie jeden wskaźnik */}
        <section className="mt-12 rounded-xl border border-accent/30 bg-accent/5 p-6">
          <h2 className="font-serif text-xl font-semibold text-primary">
            Dlaczego niska pewność nie zawsze oznacza brak skuteczności
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            Pewność dowodów zależy od jakości i liczby badań, a te zależą od finansowania. Duże badania III fazy kosztują dziesiątki–setki milionów i zwykle finansuje je sponsor liczący na zwrot z patentu. Substancje nieopatentowane — witaminy, zioła, leki generyczne, naturalne metabolity — rzadko mają takiego sponsora, więc ich dowody bywają słabsze. To nie jest to samo co brak działania. Działa to też w drugą stronę: brak mocnych badań to także brak potwierdzenia skuteczności i pełnego profilu bezpieczeństwa. Dlatego przy każdej metodzie pokazujemy jawnie, czego brakuje.
          </p>
        </section>

        {/* Atrybucja */}
        <section className="mt-12 rounded-xl border border-border bg-secondary/50 p-6">
          <h2 className="font-serif text-base font-semibold text-primary">Na czym opieramy ocenę</h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground/80">
            Nie tworzymy własnej skali. Składamy czytelny obraz z uznanych systemów:
          </p>
          <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-foreground/80">
            <li>• NCI PDQ — Levels of Evidence for Integrative, Alternative, and Complementary Therapies (cancer.gov)</li>
            <li>• SIO-ASCO Guidelines (ascopubs.org)</li>
            <li>• GRADE Working Group</li>
          </ul>
        </section>

        <p className="mt-8 text-sm">
          <Link href="/metody" className="font-medium text-accent hover:underline">
            Przejdź do katalogu metod →
          </Link>
        </p>

        <DisclaimerBox className="mt-12" />
      </div>
    </>
  )
}
