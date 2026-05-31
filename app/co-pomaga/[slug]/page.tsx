import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, Phone, Ban, Stethoscope } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { GradeBadge, EvidenceTypeBadge } from '@/components/badges'
import { PatientClinicianToggle } from '@/components/patient-clinician-toggle'
import { DisclaimerBox } from '@/components/disclaimer-box'
import { getSymptom, getAllSymptomSlugs } from '@/lib/symptoms'

export function generateStaticParams() {
  return getAllSymptomSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const s = getSymptom(slug)
  if (!s) return { title: 'Nie znaleziono' }
  return { title: s.metaTitle, description: s.intro.slice(0, 155) }
}

export default async function SymptomPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const s = getSymptom(slug)
  if (!s) notFound()

  return (
    <>
      <PageHeader eyebrow="Opieka wspomagająca · objaw" title={s.title} description={s.intro} />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <nav aria-label="Ścieżka" className="mb-8 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link href="/co-pomaga" className="hover:text-accent">Co pomaga</Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span className="text-foreground">{s.title}</span>
        </nav>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-primary">Co to jest</h2>
          <p className="mt-3 leading-relaxed text-foreground/80">{s.whatIsIt}</p>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-primary">Co ma dowody</h2>
          <p className="mt-3 leading-relaxed text-foreground/80">
            Poniższe metody są opisywane jako wspomagające — obok standardowego leczenia, nie zamiast niego.
          </p>
          <div className="mt-6 space-y-4">
            {s.evidence.map((e) => (
              <div key={e.name} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-serif text-lg font-semibold text-primary">{e.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    <GradeBadge grade={e.grade} />
                    <EvidenceTypeBadge type={e.type} />
                  </div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-primary">Czego unikać</h2>
          <ul className="mt-4 space-y-3">
            {s.avoid.map((t) => (
              <li
                key={t}
                className="flex gap-3 rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm leading-relaxed text-foreground/80"
              >
                <Ban className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-xl border border-accent/30 bg-accent/5 p-6">
          <h2 className="flex items-center gap-2 font-serif text-xl font-semibold text-primary">
            <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
            Kiedy do lekarza
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">{s.whenDoctor}</p>
        </section>

        <section className="mt-12">
          <PatientClinicianToggle>
            <p>{s.clinical}</p>
          </PatientClinicianToggle>
        </section>

        <DisclaimerBox className="mt-12" />
      </div>
    </>
  )
}
