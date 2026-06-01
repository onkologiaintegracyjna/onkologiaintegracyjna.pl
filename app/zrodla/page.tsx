import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PMIDLink } from '@/components/pmid-link'
import { methods } from '@/lib/methods'

export const metadata: Metadata = {
  title: 'Źródła i bibliografia',
  description:
    'Pełna bibliografia metod opisanych na stronie — z identyfikatorami PMID/DOI i odniesieniami do wytycznych. Linki prowadzą do PubMed.',
}

export default function ZrodlaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Bibliografia"
        title="Źródła i bibliografia"
        description="Każda metoda na stronie opiera się na źródłach pierwotnych. Poniżej zbiorcza lista publikacji i wytycznych, pogrupowana według metody."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {methods.map((m) => (
            <section key={m.slug}>
              <h2 className="font-serif text-lg font-semibold text-primary">{m.name}</h2>
              <ul className="mt-3 space-y-2">
                {m.references.map((r, i) => (
                  <li key={i} className="text-sm leading-relaxed text-foreground/80">
                    {r.title} <span className="text-muted-foreground">({r.year})</span>
                    {r.note && <span className="text-muted-foreground"> — {r.note}</span>}
                    <span className="ml-2 inline-flex flex-wrap items-center gap-2 align-middle">
                      {r.pmid && <PMIDLink pmid={r.pmid} />}
                      {r.doi && (
                        <a
                          href={`https://doi.org/${r.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-accent hover:underline"
                        >
                          DOI: {r.doi}
                        </a>
                      )}
                      {r.guideline && (
                        <span className="rounded border border-border bg-secondary px-1.5 py-0.5 text-xs text-foreground/70">
                          {r.guideline}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}
