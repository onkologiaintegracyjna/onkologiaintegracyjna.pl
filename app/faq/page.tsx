import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { faq } from '@/lib/faq'

export const metadata: Metadata = {
  title: 'Najczęstsze pytania (FAQ)',
  description:
    'Odpowiedzi na najczęstsze pytania pacjentów o onkologię integracyjną: bezpieczeństwo, dowody, co realnie pomaga i trudne tematy — zawsze z odesłaniem do źródeł.',
}

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dla pacjentów"
        title="Najczęstsze pytania"
        description="Krótkie, uczciwe odpowiedzi na pytania, które najczęściej zadają pacjenci i ich bliscy. Każda odsyła do strony ze szczegółami i źródłami. To treści edukacyjne — nie zastępują rozmowy z lekarzem."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {faq.map((section) => (
          <section key={section.title} className="mt-10 first:mt-0">
            <h2 className="font-serif text-2xl font-semibold text-primary">{section.title}</h2>
            <div className="mt-4 space-y-3">
              {section.items.map((item, i) => (
                <details key={i} className="group rounded-xl border border-border bg-card p-0 shadow-sm">
                  <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 font-medium text-primary marker:content-none">
                    <span>{item.q}</span>
                    <span className="ml-2 shrink-0 text-accent transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-foreground/80">
                    <p>{item.a}</p>
                    {item.link && (
                      <Link href={item.link.href} className="mt-3 inline-block text-sm font-medium text-accent hover:underline">
                        {item.link.label} →
                      </Link>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}

        <p className="mt-10 rounded-xl border border-accent/30 bg-accent/5 p-5 text-sm leading-relaxed text-foreground/80">
          Nie znalazłeś odpowiedzi? Najważniejsze decyzje dotyczące leczenia i metod wspomagających
          podejmuj zawsze z lekarzem prowadzącym. Ta strona pomaga przygotować się do takiej rozmowy.
        </p>
      </div>
    </>
  )
}
