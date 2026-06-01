import type { Metadata } from 'next'
import { FileText } from 'lucide-react'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: 'Artykuły',
  description:
    'Artykuły eksperckie o onkologii integracyjnej — referencyjne, z bibliografią. Sekcja w przygotowaniu.',
}

export default function ArtykulyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Baza wiedzy"
        title="Artykuły"
        description="Pogłębione, referencyjne artykuły z bibliografią. Każdy będzie opisywać stan wiedzy ze źródłami — bez rekomendacji klinicznych dla konkretnych pacjentów."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center rounded-xl border border-dashed border-border bg-secondary/40 px-6 py-16 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
            <FileText className="h-6 w-6" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-serif text-xl font-semibold text-primary">
            Sekcja w przygotowaniu
          </h2>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            Pracujemy nad artykułami eksperckimi. W międzyczasie zajrzyj do sekcji{' '}
            <a href="/metody" className="text-accent hover:underline">Metody i substancje</a> oraz{' '}
            <a href="/co-pomaga" className="text-accent hover:underline">Co pomaga przy leczeniu</a>.
          </p>
        </div>
      </div>
    </>
  )
}
