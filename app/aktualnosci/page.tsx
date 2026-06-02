import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { PMIDLink } from '@/components/pmid-link'
import { Calendar, FlaskConical, BookOpen, Presentation, FileText } from 'lucide-react'
import { updates, categoryLabels } from '@/lib/updates'
import type { UpdateCategory } from '@/lib/updates'

export const metadata: Metadata = {
  title: 'Co nowego w dowodach',
  description:
    'Kwartalny przegląd najnowszych badań, aktualizacji wytycznych i zmian na stronie w onkologii integracyjnej — zawsze ze źródłami.',
}

const catIcon: Record<UpdateCategory, typeof FlaskConical> = {
  badanie: FlaskConical,
  wytyczne: BookOpen,
  konferencja: Presentation,
  strona: FileText,
}
const catStyle: Record<UpdateCategory, string> = {
  badanie: 'border-grade-moderate/30 bg-grade-moderate-bg text-grade-moderate',
  wytyczne: 'border-grade-high/30 bg-grade-high-bg text-grade-high',
  konferencja: 'border-accent/30 bg-accent/10 text-accent',
  strona: 'border-border bg-secondary text-foreground/70',
}

export default function AktualnosciPage() {
  return (
    <>
      <PageHeader
        eyebrow="Co nowego w dowodach"
        title="Przegląd kwartalny"
        description="Raz na kwartał zbieramy najważniejsze nowe badania, aktualizacje wytycznych i zmiany na stronie. To nie newsy — każdy wpis ma źródło i trzyma ten sam standard oceny dowodów co reszta serwisu."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {updates.map((u, i) => {
            const Icon = catIcon[u.category]
            return (
              <article key={i} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${catStyle[u.category]}`}>
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {categoryLabels[u.category]}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {u.period}
                  </span>
                </div>
                <h2 className="mt-3 font-serif text-xl font-semibold text-primary">{u.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">{u.body}</p>
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                  {u.refs?.map((r, j) => (
                    <span key={j} className="inline-flex items-center gap-2">
                      {r.pmid && <PMIDLink pmid={r.pmid} />}
                      {r.doi && (
                        <a href={`https://doi.org/${r.doi}`} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-accent hover:underline">
                          DOI: {r.doi}
                        </a>
                      )}
                      {r.url && !r.pmid && !r.doi && (
                        <a href={r.url} className="text-xs text-accent hover:underline">{r.label ?? r.url}</a>
                      )}
                      {r.label && (r.pmid || r.doi) && (
                        <span className="text-xs text-muted-foreground">{r.label}</span>
                      )}
                    </span>
                  ))}
                  {u.methodSlug && (
                    <Link href={`/metody/${u.methodSlug}`} className="text-sm font-medium text-accent hover:underline">
                      Zobacz kartę metody →
                    </Link>
                  )}
                </div>
              </article>
            )
          })}
        </div>

        <p className="mt-10 rounded-xl border border-border bg-secondary/50 p-5 text-sm leading-relaxed text-muted-foreground">
          Przegląd aktualizujemy kwartalnie. Uwzględniamy publikacje recenzowane, zmiany w wytycznych
          (ASCO-SIO, ESMO, NCCN, MASCC), rejestracje (FDA/EMA) oraz istotne zmiany w treści serwisu.
          Nie publikujemy treści marketingowych ani niezweryfikowanych doniesień.
        </p>
      </div>
    </>
  )
}
