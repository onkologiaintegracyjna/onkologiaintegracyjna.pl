import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { Building2, Award, BookMarked, Database, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Organizacje i standardy',
  description:
    'Międzynarodowe stowarzyszenia onkologii integracyjnej, uznane standardy oceny dowodów (GRADE, NCI PDQ, wytyczne SIO-ASCO), definicja dziedziny oraz wiarygodne źródła.',
}

const orgs = [
  { name: 'Society for Integrative Oncology (SIO)', url: 'https://integrativeonc.org', desc: 'Główne międzynarodowe towarzystwo naukowe onkologii integracyjnej; współautor wytycznych z ASCO.' },
  { name: 'American Society of Clinical Oncology (ASCO)', url: 'https://www.asco.org', desc: 'Największe towarzystwo onkologii klinicznej; wspólnie z SIO publikuje wytyczne dot. metod integracyjnych.' },
  { name: 'National Cancer Institute — PDQ Integrative, Alternative & Complementary Therapies', url: 'https://www.cancer.gov/about-cancer/treatment/cam', desc: 'Rządowa (USA) baza wiedzy z osobną skalą poziomów dowodów dla terapii integracyjnych.' },
  { name: 'Memorial Sloan Kettering — About Herbs', url: 'https://www.mskcc.org/cancer-care/diagnosis-treatment/symptom-management/integrative-medicine/herbs', desc: 'Renomowana, regularnie aktualizowana baza o ziołach i suplementach w onkologii.' },
  { name: 'MD Anderson — Integrative Medicine Program', url: 'https://www.mdanderson.org/patients-family/diagnosis-treatment/care-centers-clinics/integrative-medicine-center.html', desc: 'Jeden z wiodących akademickich ośrodków onkologii integracyjnej.' },
  { name: 'Osher Centers for Integrative Health (Harvard, UCSF i in.)', url: 'https://oshercollaborative.org', desc: 'Sieć akademickich ośrodków medycyny integracyjnej przy czołowych uczelniach.' },
  { name: 'European Society for Medical Oncology (ESMO)', url: 'https://www.esmo.org', desc: 'Europejskie towarzystwo onkologiczne; wytyczne uwzględniające opiekę wspomagającą.' },
  { name: 'MASCC — Multinational Association of Supportive Care in Cancer', url: 'https://www.mascc.org', desc: 'Międzynarodowe towarzystwo opieki wspomagającej w onkologii (m.in. mucositis, CINV).' },
  { name: 'WHO — strategia medycyny tradycyjnej, komplementarnej i integracyjnej', url: 'https://www.who.int/health-topics/traditional-complementary-and-integrative-medicine', desc: 'Globalna strategia WHO 2025–2034: integracja wyłącznie w oparciu o bezpieczeństwo, jakość, skuteczność i EBM.' },
]

const standards = [
  { name: 'GRADE', desc: 'Międzynarodowy system oceny pewności dowodów (wysoka / umiarkowana / niska / bardzo niska), używany przez WHO, ASCO, ESMO, NCCN, Cochrane.', url: 'https://www.gradeworkinggroup.org' },
  { name: 'NCI PDQ — Levels of Evidence for Integrative Therapies', desc: 'Oficjalna skala poziomów dowodów stworzona specjalnie dla terapii integracyjnych; podstawa naszego oznaczenia typu danych A/B/C/P.', url: 'https://www.cancer.gov/publications/pdq/levels-evidence/cam' },
  { name: 'Wytyczne SIO-ASCO', desc: 'Ból nowotworowy (2022), lęk i depresja (2023), zmęczenie (2024), kannabinoidy (2024) — recenzowane wytyczne oceniające metody integracyjne.', url: 'https://ascopubs.org' },
]

const sources = [
  { name: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov', desc: 'Największa darmowa baza publikacji biomedycznych; każdy artykuł ma identyfikator PMID.' },
  { name: 'Cochrane Library', url: 'https://www.cochranelibrary.com', desc: 'Przeglądy systematyczne i metaanalizy najwyższej jakości.' },
  { name: 'ClinicalTrials.gov', url: 'https://clinicaltrials.gov', desc: 'Rejestr badań klinicznych — pozwala sprawdzić, czy i jak dana metoda jest badana u ludzi.' },
]

export default function StandardyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Organizacje i standardy"
        title="Na czym opiera się onkologia integracyjna"
        description="Onkologia integracyjna to uznana, zinstytucjonalizowana dziedzina — z własnymi towarzystwami naukowymi, wytycznymi i standardami oceny dowodów. Poniżej najważniejsze organizacje, standardy i wiarygodne źródła."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Definicja */}
        <section className="rounded-xl border border-accent/30 bg-accent/5 p-6">
          <h2 className="font-serif text-xl font-semibold text-primary">Czym jest onkologia integracyjna</h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            Według definicji Society for Integrative Oncology jest to dziedzina oparta na dowodach
            naukowych, która łączy techniki pracy z umysłem i ciałem, naturalne produkty oraz
            modyfikacje stylu życia z konwencjonalnym leczeniem nowotworów. Kluczowe słowo to
            <strong> „z”</strong>: metody integracyjne stosuje się <strong>obok</strong> leczenia
            standardowego, nigdy zamiast niego. To właśnie odróżnia onkologię integracyjną od medycyny
            alternatywnej (która proponuje metody zamiast leczenia) i od pseudomedycyny (która obiecuje
            efekty bez dowodów).
          </p>
        </section>

        {/* Organizacje */}
        <section className="mt-12">
          <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-primary">
            <Building2 className="h-5 w-5 text-accent" aria-hidden="true" />
            Stowarzyszenia i ośrodki
          </h2>
          <div className="mt-5 space-y-3">
            {orgs.map((o) => (
              <a key={o.name} href={o.url} target="_blank" rel="noopener noreferrer"
                className="group block rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/50">
                <span className="flex items-center gap-1.5 font-serif text-base font-semibold text-primary">
                  {o.name}
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                </span>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{o.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Standardy */}
        <section className="mt-12">
          <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-primary">
            <Award className="h-5 w-5 text-accent" aria-hidden="true" />
            Standardy oceny dowodów
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            Nie tworzymy własnych skal — opieramy się na uznanych systemach. Jak je czytamy, wyjaśnia
            strona{' '}
            <Link href="/jak-czytac-dowody" className="text-accent hover:underline">Jak czytać dowody</Link>.
          </p>
          <div className="mt-5 space-y-3">
            {standards.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                className="group block rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/50">
                <span className="flex items-center gap-1.5 font-serif text-base font-semibold text-primary">
                  {s.name}
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                </span>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Źródła */}
        <section className="mt-12">
          <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-primary">
            <Database className="h-5 w-5 text-accent" aria-hidden="true" />
            Gdzie samodzielnie sprawdzić informację
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            Każde twierdzenie na tej stronie ma źródło. Te same bazy możesz przeszukać samodzielnie —
            warto, zwłaszcza gdy spotkasz w sieci „cudowny lek na raka”.
          </p>
          <div className="mt-5 space-y-3">
            {sources.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                className="group block rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/50">
                <span className="flex items-center gap-1.5 font-serif text-base font-semibold text-primary">
                  {s.name}
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                </span>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </a>
            ))}
          </div>
          <p className="mt-5 flex items-start gap-2 text-sm text-muted-foreground">
            <BookMarked className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            Wskazówka: wiarygodna publikacja ma PMID lub DOI, jest recenzowana i ujawnia konflikt
            interesów. Pojedynczy opis przypadku lub strona sprzedająca produkt to nie to samo co dowód.
          </p>
        </section>
      </div>
    </>
  )
}
