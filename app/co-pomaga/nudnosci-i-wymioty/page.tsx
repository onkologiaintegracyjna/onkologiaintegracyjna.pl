import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Phone, Ban } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { GradeBadge, EvidenceTypeBadge } from '@/components/badges'
import { PMIDLink } from '@/components/pmid-link'
import { PatientClinicianToggle } from '@/components/patient-clinician-toggle'
import { DisclaimerBox } from '@/components/disclaimer-box'

export const metadata: Metadata = {
  title: 'Nudności i wymioty po chemioterapii (CINV)',
  description:
    'Co to jest CINV, jakie metody wspomagające mają dowody, czego unikać i kiedy zgłosić się do lekarza. Treści edukacyjne oparte na wytycznych ASCO-SIO i MASCC.',
}

const evidence = [
  {
    name: 'Akupunktura / akupresura punktu P6',
    grade: 'moderate' as const,
    type: 'meta-analysis' as const,
    text: 'Dane sugerują redukcję nudności w wybranych wskazaniach, jako uzupełnienie standardowej profilaktyki przeciwwymiotnej.',
  },
  {
    name: 'Imbir (jako uzupełnienie)',
    grade: 'low' as const,
    type: 'rct' as const,
    text: 'Część badań sygnalizuje korzyść objawową; jakość dowodów jest niska i wymaga potwierdzenia.',
  },
  {
    name: 'Techniki umysł–ciało (relaksacja, oddech)',
    grade: 'low' as const,
    type: 'rct' as const,
    text: 'Mogą wspierać radzenie sobie z nudnościami antycypacyjnymi obok leczenia farmakologicznego.',
  },
]

export default function CinvPage() {
  return (
    <>
      <PageHeader
        eyebrow="Opieka wspomagająca · objaw"
        title="Nudności i wymioty po chemioterapii (CINV)"
        description="CINV (chemotherapy-induced nausea and vomiting) to jedno z najczęstszych działań niepożądanych chemioterapii. Standardem są leki przeciwwymiotne — metody wspomagające stosuje się obok nich, nigdy zamiast."
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {/* breadcrumb */}
        <nav aria-label="Ścieżka" className="mb-8 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link href="/co-pomaga" className="hover:text-accent">
            Co pomaga
          </Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span className="text-foreground">Nudności i wymioty</span>
        </nav>

        {/* Co to jest */}
        <section className="prose-section">
          <h2 className="font-serif text-2xl font-semibold text-primary">
            Co to jest
          </h2>
          <p className="mt-3 leading-relaxed text-foreground/80">
            Nudności i wymioty mogą pojawić się w różnym czasie po podaniu
            chemioterapii — jako reakcja ostra, opóźniona lub antycypacyjna.
            Współczesna profilaktyka przeciwwymiotna (zgodna z wytycznymi ASCO i
            MASCC) jest skuteczna u większości pacjentów. Metody wspomagające
            mogą uzupełniać tę profilaktykę w wybranych sytuacjach.
          </p>
        </section>

        {/* Co ma dowody */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-primary">
            Co ma dowody
          </h2>
          <p className="mt-3 leading-relaxed text-foreground/80">
            Poniższe metody są opisywane jako wspomagające — obok standardowego
            leczenia przeciwwymiotnego, nie zamiast niego.
          </p>
          <div className="mt-6 space-y-4">
            {evidence.map((e) => (
              <div
                key={e.name}
                className="rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-serif text-lg font-semibold text-primary">
                    {e.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <GradeBadge grade={e.grade} />
                    <EvidenceTypeBadge type={e.type} />
                  </div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {e.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Czego unikać */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-primary">
            Czego unikać
          </h2>
          <ul className="mt-4 space-y-3">
            {[
              'Rezygnacji z zaleconej profilaktyki przeciwwymiotnej na rzecz „naturalnych” metod.',
              'Suplementów ziołowych bez konsultacji — możliwe interakcje z chemioterapią.',
              'Opóźniania kontaktu z zespołem leczącym przy nasilonych objawach.',
            ].map((t) => (
              <li
                key={t}
                className="flex gap-3 rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm leading-relaxed text-foreground/80"
              >
                <Ban
                  className="mt-0.5 h-4 w-4 shrink-0 text-destructive"
                  aria-hidden="true"
                />
                {t}
              </li>
            ))}
          </ul>
        </section>

        {/* Kiedy do lekarza */}
        <section className="mt-12 rounded-xl border border-accent/30 bg-accent/5 p-6">
          <h2 className="flex items-center gap-2 font-serif text-xl font-semibold text-primary">
            <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
            Kiedy do lekarza
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            Skontaktuj się z zespołem leczącym, gdy wymioty są nasilone lub
            uporczywe, uniemożliwiają picie płynów i przyjmowanie leków, pojawiają
            się objawy odwodnienia, gorączka lub gdy mimo profilaktyki objawy nie
            ustępują. To informacje ogólne — indywidualne zalecenia ustala lekarz
            prowadzący.
          </p>
        </section>

        {/* Warstwa kliniczna */}
        <section className="mt-12">
          <PatientClinicianToggle>
            <p>
              Profilaktyka CINV powinna być dobrana do emetogenności schematu
              (wytyczne ASCO/MASCC/NCCN). Metody integracyjne pozycjonowane są jako
              uzupełnienie, nie substytut farmakoterapii.
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>
                Akupunktura / stymulacja P6 — metaanalizy sugerują efekt w
                wybranych populacjach; heterogeniczność protokołów{' '}
                <PMIDLink pmid="23152229" />.
              </li>
              <li>
                Imbir — RCT o niskiej jakości dowodów, niespójne wyniki; ostrożność
                przy lekach przeciwkrzepliwych.
              </li>
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">
              Identyfikatory PMID podane przykładowo; pełna bibliografia w sekcji
              Źródła.
            </p>
          </PatientClinicianToggle>
        </section>

        <DisclaimerBox className="mt-12" />
      </div>
    </>
  )
}
