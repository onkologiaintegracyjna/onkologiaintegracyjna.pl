import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { GradeBadge, EvidenceTypeBadge, ClinicalStatusBadge } from '@/components/badges'
import { DisclaimerBox } from '@/components/disclaimer-box'
import type { GradeLevel, EvidenceType, ClinicalStatus } from '@/lib/types'
import { gradeLabels } from '@/lib/labels'

export const metadata: Metadata = {
  title: 'Jak czytać dowody',
  description:
    'Wyjaśnienie skali GRADE, typów danych i statusów klinicznych używanych na stronie. Dlaczego niska pewność dowodów nie zawsze oznacza brak skuteczności.',
}

const grades: { g: GradeLevel; desc: string }[] = [
  { g: 'high', desc: 'Jesteśmy bardzo pewni, że prawdziwy efekt jest zbliżony do oszacowania. Dane zwykle z wielu spójnych badań RCT lub metaanaliz.' },
  { g: 'moderate', desc: 'Jesteśmy umiarkowanie pewni — prawdziwy efekt prawdopodobnie jest zbliżony, ale możliwa jest różnica.' },
  { g: 'low', desc: 'Pewność ograniczona — prawdziwy efekt może istotnie różnić się od oszacowania.' },
  { g: 'very-low', desc: 'Bardzo mała pewność — prawdziwy efekt może być całkowicie inny. Często dane wyłącznie przedkliniczne.' },
]

const types: { t: EvidenceType; desc: string }[] = [
  { t: 'meta-analysis', desc: 'Metaanaliza — łączy wyniki wielu badań; przy dobrej jakości najwyższy poziom dowodów klinicznych.' },
  { t: 'rct', desc: 'Badanie randomizowane (RCT) — uczestnicy losowo przydzieleni do grup; mocna kontrola błędów.' },
  { t: 'observational', desc: 'Badanie obserwacyjne — obserwacja bez randomizacji; podatne na czynniki zakłócające.' },
  { t: 'preclinical', desc: 'Dane przedkliniczne — badania in vitro lub na zwierzętach; nie dowodzą skuteczności u ludzi.' },
  { t: 'case-report', desc: 'Opis przypadku — pojedyncze obserwacje; sygnał, nie dowód.' },
]

const statuses: { s: ClinicalStatus; desc: string }[] = [
  { s: 'guideline-supported', desc: 'Uwzględniona w wytycznych klinicznych dla wybranych wskazań.' },
  { s: 'supportive-care', desc: 'Stosowana jako opieka wspomagająca obok leczenia podstawowego.' },
  { s: 'off-label-adjunct', desc: 'Stosowana poza zarejestrowanym wskazaniem jako uzupełnienie — wymaga nadzoru.' },
  { s: 'experimental', desc: 'Obszar badań; brak podstaw do rutynowego stosowania.' },
  { s: 'not-recommended', desc: 'Brak rekomendacji lub rekomendacja przeciw w wytycznych.' },
]

export default function JakCzytacPage() {
  return (
    <>
      <PageHeader
        eyebrow="Metodologia"
        title="Jak czytać dowody"
        description="Każda metoda na stronie ma profil dowodowy. Poniżej wyjaśniamy, co oznaczają używane oznaczenia — i dlaczego „niska pewność" nie zawsze znaczy „nie działa"."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <section>
          <h2 className="font-serif text-2xl font-semibold text-primary">Pewność dowodów (GRADE)</h2>
          <p className="mt-3 leading-relaxed text-foreground/80">
            GRADE to międzynarodowy system oceny pewności dowodów. Mówi, na ile możemy ufać oszacowaniu efektu — nie samej „sile działania".
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

        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-primary">Typ danych</h2>
          <div className="mt-6 space-y-3">
            {types.map(({ t, desc }) => (
              <div key={t} className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-start sm:gap-4">
                <div className="shrink-0"><EvidenceTypeBadge type={t} /></div>
                <p className="text-sm leading-relaxed text-foreground/80">{desc}</p>
              </div>
            ))}
          </div>
        </section>

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

        <section className="mt-12 rounded-xl border border-accent/30 bg-accent/5 p-6">
          <h2 className="font-serif text-xl font-semibold text-primary">
            Dlaczego niska pewność nie zawsze znaczy „nie działa"
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            Pewność dowodów zależy od jakości i liczby badań, a te zależą od finansowania. Duże badania III fazy kosztują dziesiątki–setki milionów i zwykle finansuje je przemysł, który inwestuje tam, gdzie jest patent. Substancje nieopatentowane (witaminy, zioła, leki generyczne) rzadko mają sponsora dla takich badań — dlatego ich dowody bywają słabsze, co nie jest tożsame z brakiem działania. Działa to też w drugą stronę: brak dużych badań to także brak potwierdzenia bezpieczeństwa i skuteczności. Dlatego oceniamy każdą metodę jawnie, podając czego brakuje.
          </p>
        </section>

        <DisclaimerBox className="mt-12" />
      </div>
    </>
  )
}
