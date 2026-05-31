import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, Stethoscope, Sparkles, ClipboardList } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { DisclaimerBox } from '@/components/disclaimer-box'
import { getCancer, getAllCancerSlugs } from '@/lib/cancers'

export function generateStaticParams() {
  return getAllCancerSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const c = getCancer(slug)
  if (!c) return { title: 'Nie znaleziono' }
  return { title: c.metaTitle, description: c.intro.slice(0, 155) }
}

export default async function CancerPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const c = getCancer(slug)
  if (!c) notFound()

  return (
    <>
      <PageHeader eyebrow="Według nowotworu" title={c.name} description={c.intro} />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <nav aria-label="Ścieżka" className="mb-8 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link href="/nowotwory" className="hover:text-accent">Według nowotworu</Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span className="text-foreground">{c.name}</span>
        </nav>

        <section>
          <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-primary">
            <Stethoscope className="h-5 w-5 text-accent" aria-hidden="true" />
            Standard leczenia
          </h2>
          <p className="mt-3 leading-relaxed text-foreground/80">{c.conventional}</p>
        </section>

        <section className="mt-12">
          <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-primary">
            <Sparkles className="h-5 w-5 text-accent" aria-hidden="true" />
            Co integracyjnie ma dowody
          </h2>
          <ul className="mt-4 space-y-2.5">
            {c.integrative.map((t) => (
              <li key={t} className="flex gap-2 text-sm leading-relaxed text-foreground/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-primary">
            <ClipboardList className="h-5 w-5 text-accent" aria-hidden="true" />
            Częste objawy do wsparcia
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {c.commonSymptoms.map((s) => (
              <span key={s} className="rounded-md border border-border bg-secondary px-2.5 py-1 text-sm text-foreground/80">
                {s}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Sposoby łagodzenia tych objawów opisano w sekcji{' '}
            <Link href="/co-pomaga" className="text-accent hover:underline">Co pomaga przy leczeniu</Link>.
          </p>
        </section>

        <DisclaimerBox className="mt-12" />
      </div>
    </>
  )
}
