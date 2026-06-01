import type { Metadata } from 'next'
import Link from 'next/link'
import { Dumbbell, Salad, Moon, Brain, Clock } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { DisclaimerBox } from '@/components/disclaimer-box'

export const metadata: Metadata = {
  title: 'Styl życia w onkologii',
  description:
    'Aktywność fizyczna, dieta, sen, stres i post w kontekście onkologii — z uczciwą oceną dowodów. Bez diet cudownych i obietnic.',
}

const topics = [
  {
    icon: Dumbbell,
    title: 'Aktywność fizyczna',
    grade: 'Najmocniejsze dowody',
    body: 'Regularny, dostosowany wysiłek ma najlepiej udokumentowane korzyści: redukcja zmęczenia, poprawa jakości życia i sprawności, a w wybranych nowotworach niższe ryzyko nawrotu. Rodzaj i intensywność dobiera się indywidualnie.',
    href: '/metody/aktywnosc-fizyczna',
  },
  {
    icon: Salad,
    title: 'Dieta i odżywianie',
    grade: 'Dobre dowody (prewencja, zdrowie ogólne)',
    body: 'Wzorzec śródziemnomorski ma najlepsze dane w prewencji pierwotnej i ochronie sercowo-naczyniowej. W trakcie leczenia priorytetem jest zapobieganie niedożywieniu i wsparcie dietetyka — nie restrykcyjne „diety antynowotworowe”.',
    href: '/metody/dieta-srodziemnomorska',
  },
  {
    icon: Moon,
    title: 'Sen',
    grade: 'Dobre dowody (CBT-I)',
    body: 'Zaburzenia snu są częste i pogłębiają zmęczenie. Terapia poznawczo-behawioralna bezsenności (CBT-I) jest metodą pierwszego wyboru; pomocne są też higiena snu i techniki relaksacyjne.',
    href: '/co-pomaga/bezsennosc',
  },
  {
    icon: Brain,
    title: 'Stres i wsparcie psychiczne',
    grade: 'Dobre dowody (umysł–ciało)',
    body: 'Interwencje oparte na uważności, joga i wsparcie psychoonkologiczne zmniejszają lęk i poprawiają jakość życia. To uznane elementy opieki wspomagającej.',
    href: '/metody/mbsr-mbcr',
  },
  {
    icon: Clock,
    title: 'Post i diety naśladujące post',
    grade: 'Obszar badań',
    body: 'Post przerywany i diety naśladujące post są badane pod kątem metabolizmu i tolerancji leczenia. Dane kliniczne są wczesne i niejednoznaczne; w trakcie aktywnego leczenia post może być ryzykowny i wymaga nadzoru — nie należy go podejmować samodzielnie.',
  },
]

export default function StylZyciaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Styl życia"
        title="Styl życia w onkologii"
        description="Codzienne wybory mają znaczenie — ale z zachowaniem proporcji i bez obietnic. Poniżej obszary z najlepszymi dowodami oraz te, które wciąż są badane."
      />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {topics.map((t) => {
            const Icon = t.icon
            return (
              <section key={t.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="font-serif text-xl font-semibold text-primary">{t.title}</h2>
                      <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-foreground/70">
                        {t.grade}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/80">{t.body}</p>
                    {t.href && (
                      <Link href={t.href} className="mt-3 inline-block text-sm font-medium text-accent hover:underline">
                        Zobacz szczegóły →
                      </Link>
                    )}
                  </div>
                </div>
              </section>
            )
          })}
        </div>
        <DisclaimerBox className="mt-10" />
      </div>
    </>
  )
}
