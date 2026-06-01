import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, Phone, Stethoscope } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { PatientClinicianToggle } from '@/components/patient-clinician-toggle'
import { getGuide, getAllGuideSlugs } from '@/lib/guides'

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const g = getGuide(slug)
  if (!g) return { title: 'Nie znaleziono' }
  return { title: g.metaTitle, description: g.intro.slice(0, 155) }
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const g = getGuide(slug)
  if (!g) notFound()

  return (
    <>
      <PageHeader eyebrow="Poradnik · w trakcie leczenia" title={g.title} description={g.intro} />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <nav aria-label="Ścieżka" className="mb-8 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link href="/w-trakcie-leczenia" className="hover:text-accent">W trakcie leczenia</Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span className="text-foreground">{g.title}</span>
        </nav>

        <div className="space-y-12">
          {g.sections.map((sec) => (
            <section key={sec.heading}>
              <h2 className="font-serif text-2xl font-semibold text-primary">{sec.heading}</h2>
              <p className="mt-3 leading-relaxed text-foreground/80">{sec.body}</p>
              {sec.bullets && (
                <ul className="mt-4 space-y-2">
                  {sec.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm leading-relaxed text-foreground/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-xl border border-accent/30 bg-accent/5 p-6">
          <h2 className="flex items-center gap-2 font-serif text-xl font-semibold text-primary">
            <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
            Porozmawiaj z onkologiem
          </h2>
          <ul className="mt-3 space-y-2">
            {g.doctorQuestions.map((q) => (
              <li key={q} className="flex gap-2 text-sm leading-relaxed text-foreground/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {q}
              </li>
            ))}
          </ul>
        </section>

        {g.clinical && (
          <section className="mt-12">
            <PatientClinicianToggle>
              <p>{g.clinical}</p>
            </PatientClinicianToggle>
          </section>
        )}
      </div>
    </>
  )
}
