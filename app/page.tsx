import Link from 'next/link'
import {
  ArrowRight,
  HeartPulse,
  FlaskConical,
  Stethoscope,
  ShieldCheck,
  FileText,
  Check,
  X,
} from 'lucide-react'

const entryCards = [
  {
    href: '/co-pomaga',
    title: 'Co pomaga przy leczeniu',
    description:
      'Opieka wspomagająca objawowo — nudności, zmęczenie, ból, lęk, neuropatia. Tu znajdują się najmocniejsze dowody.',
    icon: HeartPulse,
  },
  {
    href: '/w-trakcie-leczenia',
    title: 'W trakcie chemioterapii',
    description:
      'Praktyczne poradniki: przed, w trakcie i po leczeniu — co warto wiedzieć i o co zapytać onkologa.',
    icon: Stethoscope,
  },
  {
    href: '/metody',
    title: 'Metody i substancje',
    description:
      'Przeglądaj metody z profilem dowodowym: pewność GRADE, typ danych i status kliniczny.',
    icon: FlaskConical,
  },
]

const trustSources = ['PMID', 'ASCO-SIO', 'NCI PDQ', 'Cochrane', 'MASCC', 'ESMO']

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Onkologia integracyjna · serwis edukacyjny
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-balance font-serif text-4xl font-semibold leading-tight text-primary sm:text-5xl">
            Wiedza oparta na dowodach o onkologii integracyjnej
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Metody wspomagające leczenie onkologiczne z rzetelną, jawną oceną
            pewności dowodów — dla pacjentów i dla lekarzy.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/co-pomaga"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Co pomaga przy leczeniu
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/jak-czytac-dowody"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              Jak czytamy dowody
            </Link>
          </div>
        </div>
      </section>

      {/* Entry cards */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {entryCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-accent/50 hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <card.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-serif text-xl font-semibold text-primary">
                {card.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                Przejdź
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust section */}
      <section className="border-y border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <ShieldCheck
            className="mx-auto h-8 w-8 text-accent-foreground/90"
            aria-hidden="true"
          />
          <h2 className="mt-4 font-serif text-2xl font-semibold sm:text-3xl">
            Każda informacja ma źródło
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty leading-relaxed text-primary-foreground/80">
            Opieramy się na zweryfikowanych danych — identyfikatory PMID,
            wytyczne ASCO-SIO, NCI, przeglądy Cochrane oraz MASCC.
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {trustSources.map((s) => (
              <li
                key={s}
                className="rounded-full border border-primary-foreground/20 px-3 py-1 font-mono text-xs uppercase tracking-wide text-primary-foreground/90"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Czym jest / czym nie jest */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-semibold text-primary sm:text-3xl">
            Czym jest, a czym nie jest onkologia integracyjna
          </h2>
          <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            Onkologia integracyjna opisuje stan wiedzy o metodach wspomagających.
            Nie zastępuje leczenia i nie zaleca terapii konkretnym pacjentom.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-grade-high/30 bg-grade-high-bg/50 p-6">
            <h3 className="flex items-center gap-2 font-serif text-lg font-semibold text-grade-high">
              <Check className="h-5 w-5" aria-hidden="true" />
              Czym jest
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/80">
              {[
                'Metody wspomagające stosowane obok leczenia konwencjonalnego.',
                'Jawna ocena pewności dowodów (skala GRADE) dla każdej metody.',
                'Opis stanu wiedzy oparty na badaniach i wytycznych.',
                'Wsparcie rozmowy pacjenta z lekarzem prowadzącym.',
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-grade-high"
                    aria-hidden="true"
                  />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-6">
            <h3 className="flex items-center gap-2 font-serif text-lg font-semibold text-destructive">
              <X className="h-5 w-5" aria-hidden="true" />
              Czym nie jest
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/80">
              {[
                'Nie jest alternatywą dla leczenia onkologicznego.',
                'Nie zaleca terapii ani dawek konkretnym pacjentom.',
                'Nie jest serwisem sprzedażowym ani doradczym.',
                'Nie obiecuje wyleczenia ani „przełomów”.',
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <X
                    className="mt-0.5 h-4 w-4 shrink-0 text-destructive"
                    aria-hidden="true"
                  />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/zrodla"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            Zobacz pełną bibliografię i źródła
          </Link>
        </div>
      </section>
    </>
  )
}
