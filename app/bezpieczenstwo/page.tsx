import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { safetyPoints } from '@/lib/resources'

export const metadata: Metadata = {
  title: 'Bezpieczeństwo suplementów i metod naturalnych',
  description:
    'Dlaczego „naturalne” nie znaczy „bezpieczne”, jak suplementy mogą wpływać na leczenie onkologiczne i dlaczego w trakcie terapii należy je stosować wyłącznie za zgodą lekarza.',
}

export default function BezpieczenstwoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dla pacjentów"
        title="„Naturalne” nie znaczy „bezpieczne”"
        description="Suplementy i zioła to aktywne substancje, które mogą wchodzić w interakcje z leczeniem onkologicznym. Oto, co warto wiedzieć, zanim sięgniesz po cokolwiek w trakcie terapii."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {safetyPoints.map((p, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-5">
              <h2 className="font-serif text-xl font-semibold text-primary">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-accent/30 bg-accent/5 p-5">
          <h2 className="font-medium text-primary">Złota zasada</h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground/80">
            Zawsze informuj zespół leczący o wszystkim, co przyjmujesz — także o witaminach i ziołach.
            Nie zaczynaj nowych suplementów „na własną rękę” w trakcie aktywnego leczenia bez konsultacji.
          </p>
        </div>

        <p className="mt-8 text-sm leading-relaxed text-foreground/70">
          Więcej o mechanizmach (m.in. równowaga pro- i antyoksydacyjna):{' '}
          <Link href="/szlaki" className="font-medium text-accent hover:underline">Mechanizmy i szlaki</Link>.
          Jak weryfikować informacje:{' '}
          <Link href="/wiarygodnosc" className="font-medium text-accent hover:underline">Jak rozpoznać wiarygodną informację</Link>.
        </p>
      </div>
    </>
  )
}
