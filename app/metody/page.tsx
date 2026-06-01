import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { MethodsExplorer } from '@/components/methods-explorer'

export const metadata: Metadata = {
  title: 'Metody i substancje',
  description:
    'Przeglądaj metody i substancje wspomagające leczenie onkologiczne. Filtruj po kategorii i statusie klinicznym, sortuj po pewności dowodów (GRADE).',
}

export default function MetodyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Katalog"
        title="Metody i substancje"
        description="Każda pozycja ma profil dowodowy: pewność (GRADE), typ danych i status kliniczny. Filtruj i sortuj, aby porównać metody."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <MethodsExplorer />
        <p className="mt-10 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          Ocena oparta na uznanych systemach: NCI PDQ Levels of Evidence for
          Integrative, Alternative, and Complementary Therapies (cancer.gov) oraz
          wytycznych SIO-ASCO (ascopubs.org), z zachowaniem skali GRADE.{' '}
          <a href="/jak-czytac-dowody" className="text-accent hover:underline">
            Jak czytać dowody?
          </a>
        </p>
      </section>
    </>
  )
}
