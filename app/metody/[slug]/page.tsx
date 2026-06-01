import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, Phone, Microscope, FlaskConical, ShieldAlert, BookText } from 'lucide-react'
import { getMethod, getAllMethodSlugs } from '@/lib/methods'
import { gradeLabels, evidenceTypeLabels, clinicalStatusLabels } from '@/lib/labels'
import {
  GradeBadge,
  EvidenceTypeBadge,
  ClinicalStatusBadge,
  CategoryBadge,
} from '@/components/badges'
import { PMIDLink } from '@/components/pmid-link'
import { PatientClinicianToggle } from '@/components/patient-clinician-toggle'
import { DisclaimerBox } from '@/components/disclaimer-box'
import { ExperimentalWarning } from '@/components/experimental-warning'

export function generateStaticParams() {
  return getAllMethodSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const method = getMethod(slug)
  if (!method) return { title: 'Nie znaleziono metody' }
  return {
    title: method.name,
    description: method.shortDescription,
  }
}

function ReferenceItem({
  r,
}: {
  r: { pmid?: string; doi?: string; guideline?: string; title: string; year: number; note?: string }
}) {
  return (
    <li className="rounded-lg border border-border bg-card p-4">
      <p className="text-sm font-medium text-foreground">
        {r.title} <span className="text-muted-foreground">({r.year})</span>
      </p>
      {r.note && <p className="mt-1 text-sm text-muted-foreground">{r.note}</p>}
      <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
        {r.pmid && <PMIDLink pmid={r.pmid} />}
        {r.doi && (
          <a
            href={`https://doi.org/${r.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-accent hover:underline"
          >
            DOI: {r.doi}
          </a>
        )}
        {r.guideline && (
          <span className="rounded-md border border-border bg-secondary px-2 py-0.5 text-xs text-foreground/70">
            wytyczne: {r.guideline}
          </span>
        )}
      </div>
    </li>
  )
}

export default async function MethodPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const method = getMethod(slug)
  if (!method) notFound()

  const ep = method.evidenceProfile

  return (
    <>
      <div className="border-b border-border bg-secondary/50">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          <nav aria-label="Ścieżka" className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/metody" className="hover:text-accent">Metody i substancje</Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="text-foreground">{method.name}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2">
            <CategoryBadge category={method.category} />
            <ClinicalStatusBadge status={ep.clinicalStatus} />
          </div>
          <h1 className="mt-3 font-serif text-3xl font-semibold text-primary sm:text-4xl">
            {method.name}
          </h1>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {method.shortDescription}
          </p>

          {/* Profil dowodowy */}
          <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Profil dowodowy
              </p>
              <Link href="/jak-czytac-dowody" className="text-xs text-muted-foreground underline-offset-2 hover:text-accent hover:underline">
                Co znaczą te oceny?
              </Link>
            </div>
            <dl className="mt-4 grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Sygnał efektu
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-foreground/80">
                  {ep.effectSignal}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Pewność dowodów
                </dt>
                <dd className="mt-1.5 flex items-center gap-2">
                  <GradeBadge grade={ep.grade} />
                  <span className="text-sm text-muted-foreground">
                    {gradeLabels[ep.grade]}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Typ danych
                </dt>
                <dd className="mt-1.5">
                  <EvidenceTypeBadge type={ep.evidenceType} />
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Status kliniczny
                </dt>
                <dd className="mt-1.5">
                  <ClinicalStatusBadge status={ep.clinicalStatus} />
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Luka dowodowa
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-foreground/80">
                  {ep.evidenceGap}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {method.experimental && (
          <div className="mb-10">
            <ExperimentalWarning />
          </div>
        )}

        <section>
          <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-primary">
            <Microscope className="h-5 w-5 text-accent" aria-hidden="true" />
            Jak działa
          </h2>
          <p className="mt-3 leading-relaxed text-foreground/80">{method.howItWorks}</p>
        </section>

        <section className="mt-12">
          <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-primary">
            <FlaskConical className="h-5 w-5 text-accent" aria-hidden="true" />
            Co mówią badania
          </h2>
          <p className="mt-3 leading-relaxed text-foreground/80">{method.research}</p>
        </section>

        <section className="mt-12 rounded-xl border border-border bg-secondary/40 p-6">
          <h2 className="flex items-center gap-2 font-serif text-xl font-semibold text-primary">
            <ShieldAlert className="h-5 w-5 text-accent" aria-hidden="true" />
            Bezpieczeństwo i przeciwwskazania
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">{method.safety}</p>
        </section>

        <section className="mt-12 rounded-xl border border-accent/30 bg-accent/5 p-6">
          <h2 className="flex items-center gap-2 font-serif text-xl font-semibold text-primary">
            <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
            Jak rozmawiać z lekarzem
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">{method.talkToDoctor}</p>
        </section>

        <section className="mt-12">
          <PatientClinicianToggle>
            <p>
              Pewność dowodów: <strong>{gradeLabels[ep.grade]}</strong> · typ danych:{' '}
              <strong>{evidenceTypeLabels[ep.evidenceType]}</strong> · status:{' '}
              <strong>{clinicalStatusLabels[ep.clinicalStatus]}</strong>.
            </p>
            <p className="mt-3">{ep.effectSignal}</p>
            <p className="mt-2 text-muted-foreground">Luka dowodowa: {ep.evidenceGap}</p>
          </PatientClinicianToggle>
        </section>

        <section className="mt-12">
          <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-primary">
            <BookText className="h-5 w-5 text-accent" aria-hidden="true" />
            Źródła
          </h2>
          <ul className="mt-4 space-y-3">
            {method.references.map((r, i) => (
              <ReferenceItem key={i} r={r} />
            ))}
          </ul>
        </section>

        <p className="mt-12 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          Ocena oparta na NCI PDQ Levels of Evidence for Integrative Therapies
          (cancer.gov) oraz wytycznych SIO-ASCO (ascopubs.org), z zachowaniem skali
          GRADE.{' '}
          <Link href="/jak-czytac-dowody" className="text-accent hover:underline">
            Jak czytać dowody?
          </Link>
        </p>

        <DisclaimerBox className="mt-8" />
      </article>
    </>
  )
}
