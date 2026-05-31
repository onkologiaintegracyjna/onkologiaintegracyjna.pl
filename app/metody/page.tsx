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
      </section>
    </>
  )
}
