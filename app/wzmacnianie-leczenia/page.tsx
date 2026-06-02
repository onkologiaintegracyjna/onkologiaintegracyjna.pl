import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { PMIDLink } from '@/components/pmid-link'
import { directions, synergyRows, synergyRefs, immuneNote, protectionNote, classificationNote } from '@/lib/synergy'

export const metadata: Metadata = {
  title: 'Wzmacnianie i uwrażliwianie leczenia',
  description:
    'Które substancje są badane pod kątem wzmacniania chemio- i radioterapii, ochrony zdrowych tkanek oraz wpływu na komórki macierzyste nowotworu (CSC) i nawroty — z uczciwym oznaczeniem typu danych i źródłami.',
}

const typeLabel: Record<string, string> = {
  P: 'Przedkliniczne',
  C: 'Małe badania / serie',
  B: 'Pojedyncze RCT / duże badanie',
  A: 'Metaanaliza / wiele RCT',
}
const typeColor: Record<string, string> = {
  P: 'bg-purple-100 text-purple-800 border-purple-300',
  C: 'bg-amber-100 text-amber-800 border-amber-300',
  B: 'bg-sky-100 text-sky-800 border-sky-300',
  A: 'bg-emerald-100 text-emerald-800 border-emerald-300',
}

export default function WzmacnianiePage() {
  return (
    <>
      <PageHeader
        eyebrow="Mechanizmy i dowody"
        title="Wzmacnianie i uwrażliwianie leczenia"
        description="Czy substancje naturalne mogą sprawić, że chemio- i radioterapia działają lepiej — i czy mogą ograniczać nawroty? To realny, ale w większości wczesny obszar badań. Poniżej pokazujemy uczciwie, co wiadomo i jak mocne są dowody."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="rounded-xl border border-destructive/25 bg-destructive/5 p-5">
          <p className="text-sm leading-relaxed text-foreground/80">
            <strong>Zanim przeczytasz dalej.</strong> Większość poniższych danych pochodzi z badań
            laboratoryjnych (komórki, zwierzęta) — to obiecujące sygnały, a nie dowód, że coś
            zadziała u pacjenta. Nie są to zalecenia. Niektóre suplementy mogą też
            <strong> osłabiać </strong> leczenie albo wchodzić w interakcje. O doborze i momencie
            przyjmowania decyduje wyłącznie lekarz prowadzący. Zobacz:{' '}
            <Link href="/bezpieczenstwo" className="font-medium text-accent hover:underline">bezpieczeństwo</Link>{' '}
            i{' '}
            <Link href="/szlaki" className="font-medium text-accent hover:underline">mechanizmy i szlaki</Link>.
          </p>
        </div>

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-semibold text-primary">Trzy kierunki, które bada nauka</h2>
          <div className="mt-4 space-y-3">
            {directions.map((d) => (
              <div key={d.id} className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-serif text-lg font-semibold text-primary">{d.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">{d.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-primary">Substancja po substancji</h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground/70">
            Kolumna „typ danych” mówi, jak mocne są dowody: od przedklinicznych (P, fiolet) po
            badania kliniczne. Kliknij nazwę, by przejść do pełnej karty ze źródłami.
          </p>
          <div className="mt-5 space-y-3">
            {synergyRows.map((r, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  {r.slug ? (
                    <Link href={`/metody/${r.slug}`} className="font-serif text-base font-semibold text-accent hover:underline">
                      {r.substance}
                    </Link>
                  ) : (
                    <span className="font-serif text-base font-semibold text-primary">{r.substance}</span>
                  )}
                  <span className={`shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium ${typeColor[r.dataType]}`}>
                    {r.dataType} · {typeLabel[r.dataType]}
                  </span>
                </div>
                <p className="mt-1 text-xs font-medium text-foreground/60">{r.direction}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">{r.evidence}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-xl border border-accent/30 bg-accent/5 p-5">
          <h2 className="font-serif text-xl font-semibold text-primary">Przykład z najmocniejszymi danymi: kurkumina + paklitaksel</h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground/80">
            Najczęściej przywoływany przykład sensytyzacji to kurkumina. Poza licznymi danymi
            laboratoryjnymi istnieje randomizowane, podwójnie zaślepione badanie kliniczne: u 150
            kobiet z zaawansowanym rakiem piersi dodanie kurkuminy dożylnej do paklitakselu wiązało
            się z wyższym odsetkiem odpowiedzi (51% vs 33%) i lepszą tolerancją leczenia. To
            zachęcający, ale pojedynczy wynik — wymaga potwierdzenia w większych badaniach.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-primary">Pełny obraz: pozostałe metody z naszej bazy</h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground/70">
            Sprawdziliśmy pod tym kątem każdą metodę opisaną na stronie. Część nie „uwrażliwia” guza,
            lecz pełni inne, równie ważne role.
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-serif text-base font-semibold text-primary">Ochrona zdrowych tkanek i leczenie powikłań</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">{protectionNote}</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-serif text-base font-semibold text-primary">Adiuwanty immunologiczne</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">{immuneNote}</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-serif text-base font-semibold text-primary">Inne cele (objawy, profilaktyka, immunoterapia, wczesne badania)</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">{classificationNote}</p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-primary">Czego to NIE znaczy</h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/80">
            <li className="flex gap-2"><span className="mt-1 shrink-0 text-accent" aria-hidden="true">•</span><span>Że można je stosować samodzielnie zamiast leczenia — przeciwnie, sens mają tylko jako ewentualny dodatek, po decyzji lekarza.</span></li>
            <li className="flex gap-2"><span className="mt-1 shrink-0 text-accent" aria-hidden="true">•</span><span>Że „działa w probówce” znaczy „pomoże pacjentowi” — większość sygnałów przedklinicznych nigdy się nie potwierdza klinicznie.</span></li>
            <li className="flex gap-2"><span className="mt-1 shrink-0 text-accent" aria-hidden="true">•</span><span>Że więcej znaczy lepiej — wysokie dawki antyoksydantów w złym momencie mogą osłabiać chemio- i radioterapię.</span></li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-primary">Źródła</h2>
          <ul className="mt-3 space-y-2">
            {synergyRefs.map((r, i) => (
              <li key={i} className="text-sm leading-relaxed text-foreground/80">
                {r.cite}{' '}
                {r.pmid && <PMIDLink pmid={r.pmid} />}
                {r.doi && (
                  <>
                    {' · '}
                    <a href={`https://doi.org/${r.doi}`} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">DOI</a>
                  </>
                )}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </>
  )
}
