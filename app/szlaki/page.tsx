import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { NeutralityBanner } from '@/components/neutrality-banner'
import { DisclaimerBox } from '@/components/disclaimer-box'
import { pathways, pathwayEvidenceLabels } from '@/lib/pathways'

export const metadata: Metadata = {
  title: 'Mechanizmy i szlaki',
  description:
    'Co bada nauka: szlaki molekularne istotne w onkologii i substancje badane pod ich kątem — z uczciwą gradacją dowodów. Sekcja informacyjna, nie zalecenie.',
}

const evClass: Record<string, string> = {
  preclinical: 'border-warn-border bg-warn-bg text-warn',
  'early-clinical': 'border-grade-moderate/30 bg-grade-moderate-bg text-grade-moderate',
  clinical: 'border-grade-high/30 bg-grade-high-bg text-grade-high',
}

export default function SzlakiPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mechanizmy"
        title="Mechanizmy i szlaki"
        description="Przegląd szlaków molekularnych badanych w onkologii i substancji, które są w tym kontekście testowane. Celem jest pokazanie, co bada nauka — z jawnym statusem dowodów."
      />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <NeutralityBanner className="mb-10" />

        <div className="space-y-6">
          {pathways.map((p) => (
            <section
              key={p.slug}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="font-serif text-xl font-semibold text-primary">
                    {p.name}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Cel: {p.target}
                  </p>
                </div>
                <span
                  className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${evClass[p.evidence]}`}
                >
                  Dowody: {pathwayEvidenceLabels[p.evidence]}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                {p.why}
              </p>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Badane substancje
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.substances.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-foreground/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-border bg-secondary/50 p-6 text-sm leading-relaxed text-foreground/80">
          <p>
            Powyższe zestawienie pokazuje kierunki badań, a nie gotowe terapie.
            „Badana substancja" nie oznacza skuteczności potwierdzonej klinicznie.
            Wiele z wymienionych substancji ma działanie zależne od kontekstu i może
            wchodzić w interakcje z chemio- lub radioterapią — w tym potencjalnie
            osłabiać ich działanie. Pełny profil dowodowy każdej substancji znajdziesz
            w sekcji „Metody i substancje".
          </p>
        </div>

        <DisclaimerBox className="mt-10" />
      </div>
    </>
  )
}
