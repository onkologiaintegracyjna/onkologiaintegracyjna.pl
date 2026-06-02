import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { redFlags, questionGroups, trustedSources } from '@/lib/resources'

export const metadata: Metadata = {
  title: 'Jak rozpoznać wiarygodną informację',
  description:
    'Sygnały ostrzegawcze fałszywych obietnic, gotowe pytania do lekarza i terapeuty oraz lista wiarygodnych, recenzowanych baz wiedzy o onkologii integracyjnej.',
}

export default function WiarygodnoscPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dla pacjentów"
        title="Jak rozpoznać wiarygodną informację"
        description="W internecie krąży wiele obietnic „cudownych” terapii onkologicznych. Tutaj znajdziesz proste narzędzia, by oddzielić rzetelną wiedzę od marketingu: sygnały ostrzegawcze, pytania do zadania i sprawdzone źródła."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">

        <section>
          <h2 className="font-serif text-2xl font-semibold text-primary">Sygnały ostrzegawcze</h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground/70">
            Im więcej z poniższych punktów pasuje do danej oferty czy artykułu, tym ostrożniej należy je traktować.
          </p>
          <div className="mt-5 space-y-3">
            {redFlags.map((r, i) => (
              <div key={i} className="rounded-xl border border-destructive/25 bg-destructive/5 p-4">
                <p className="font-medium text-primary">⚠ {r.flag}</p>
                <p className="mt-1 text-sm leading-relaxed text-foreground/75">{r.why}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-primary">Pytania, które warto zadać</h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground/70">
            Możesz wydrukować tę listę i zabrać na wizytę. Świadoma rozmowa to najlepsza ochrona.
          </p>
          {questionGroups.map((g, i) => (
            <div key={i} className="mt-5 rounded-xl border border-border bg-card p-5">
              <h3 className="font-medium text-primary">{g.title}</h3>
              <p className="mt-1 text-sm text-foreground/70">{g.intro}</p>
              <ul className="mt-3 space-y-2">
                {g.questions.map((q, j) => (
                  <li key={j} className="flex gap-2 text-sm leading-relaxed text-foreground/80">
                    <span className="mt-1 shrink-0 text-accent" aria-hidden="true">→</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-primary">Wiarygodne źródła i bazy</h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground/70">
            Tu możesz samodzielnie sprawdzić informacje. To recenzowane, niezależne zasoby instytucji onkologicznych i badawczych (w większości anglojęzyczne).
          </p>
          <div className="mt-5 space-y-3">
            {trustedSources.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                 className="block rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/50">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-medium text-primary">{s.name}</span>
                  <span className="shrink-0 rounded-full border border-border px-2 py-0.5 text-xs text-foreground/60">{s.lang}</span>
                </div>
                <p className="mt-0.5 text-xs font-medium text-accent">{s.org}</p>
                <p className="mt-1 text-sm leading-relaxed text-foreground/75">{s.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <p className="mt-12 rounded-xl border border-accent/30 bg-accent/5 p-5 text-sm leading-relaxed text-foreground/80">
          Zobacz też, jak czytamy i oceniamy dowody na tej stronie:{' '}
          <Link href="/jak-czytac-dowody" className="font-medium text-accent hover:underline">Jak czytać dowody</Link>{' '}oraz{' '}
          <Link href="/ebm" className="font-medium text-accent hover:underline">EBM — medycyna oparta na dowodach</Link>.
        </p>
      </div>
    </>
  )
}
