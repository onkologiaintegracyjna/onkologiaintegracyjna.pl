import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { DisclaimerBox } from '@/components/disclaimer-box'
import { Quote, Layers, Banknote, FileWarning, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'EBM, finansowanie badań i off-label',
  description:
    'Czym naprawdę jest medycyna oparta na dowodach (EBM) wg jej twórców, dlaczego brak badań nie znaczy brak skuteczności, jak finansowanie kształtuje dowody oraz czym jest off-label i rejestracja warunkowa.',
}

const pyramid = [
  { lvl: '1', name: 'Metaanaliza / przegląd systematyczny RCT', note: 'Najwyższy poziom — synteza wielu badań z randomizacją' },
  { lvl: '2', name: 'Pojedyncze RCT', note: 'Randomizowane badanie z grupą kontrolną' },
  { lvl: '3', name: 'Badanie kohortowe', note: 'Obserwacyjne, prospektywne' },
  { lvl: '4', name: 'Badanie kliniczno-kontrolne', note: 'Retrospektywne' },
  { lvl: '5', name: 'Opis przypadku, opinia eksperta, dane przedkliniczne', note: 'Sygnał — nie dowód skuteczności' },
]

export default function EbmPage() {
  return (
    <>
      <PageHeader
        eyebrow="Metodologia i kontekst"
        title="EBM, finansowanie badań i off-label"
        description="Medycyna oparta na dowodach (EBM) to fundament tej strony. Warto jednak rozumieć, czym EBM jest naprawdę według jej twórców — i dlaczego brak mocnych badań nie zawsze znaczy brak skuteczności."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Czym jest EBM */}
        <section>
          <h2 className="font-serif text-2xl font-semibold text-primary">Czym jest EBM</h2>
          <p className="mt-3 leading-relaxed text-foreground/80">
            EBM (Evidence-Based Medicine, medycyna oparta na dowodach) to podejście, w którym decyzje
            kliniczne opiera się na najlepszych dostępnych dowodach naukowych. Dowody porządkuje się
            w hierarchię — od metaanaliz badań z randomizacją (najmocniejsze) po opisy przypadków
            i dane z laboratorium (najsłabsze). System oceny pewności tych dowodów to m.in. GRADE,
            stosowany przez ESMO, ASCO, NCCN, NICE i WHO.
          </p>
        </section>

        {/* Intencja twórców */}
        <section className="mt-12 rounded-xl border border-accent/30 bg-accent/5 p-6">
          <h2 className="flex items-center gap-2 font-serif text-xl font-semibold text-primary">
            <Quote className="h-5 w-5 text-accent" aria-hidden="true" />
            Co naprawdę mieli na myśli twórcy EBM
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            David Sackett, jeden z twórców EBM, w klasycznym artykule z 1996 r. (BMJ) zdefiniował ją
            jako „sumienne, jednoznaczne i rozważne wykorzystanie aktualnie najlepszych dowodów” — ale
            podkreślił, że EBM łączy <strong>trzy</strong> elementy: dowody naukowe, doświadczenie
            kliniczne lekarza oraz <strong>wartości i preferencje pacjenta</strong>. Sackett wprost
            ostrzegał, że EBM „nie jest książką kucharską” i nie może zostać sprowadzona do mechanicznego
            stosowania samych wyników badań. Pisał, że bez doświadczenia klinicznego praktyka ryzykuje
            „tyranię dowodów”, bo nawet doskonały dowód z badania może być nieadekwatny dla konkretnego
            pacjenta.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            To istotne, bo w debacie publicznej EBM bywa używane odwrotnie do intencji twórców — jako
            narzędzie do binarnego „zgodne / niezgodne z wiedzą medyczną”, bez gradacji i bez miejsca na
            indywidualną sytuację pacjenta. To wypaczenie pierwotnej idei.
          </p>
        </section>

        {/* Hierarchia */}
        <section className="mt-12">
          <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-primary">
            <Layers className="h-5 w-5 text-accent" aria-hidden="true" />
            Hierarchia dowodów
          </h2>
          <div className="mt-5 space-y-2">
            {pyramid.map((p) => (
              <div key={p.lvl} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-xs font-semibold text-primary-foreground">
                  {p.lvl}
                </span>
                <div>
                  <p className="text-sm font-medium text-primary">{p.name}</p>
                  <p className="text-sm text-muted-foreground">{p.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Finansowanie */}
        <section className="mt-12">
          <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-primary">
            <Banknote className="h-5 w-5 text-accent" aria-hidden="true" />
            Dlaczego brak badań nie znaczy brak skuteczności
          </h2>
          <p className="mt-3 leading-relaxed text-foreground/80">
            Wysoki poziom dowodów wymaga dużych badań III fazy. Takie badanie kosztuje dziesiątki do
            setek milionów dolarów i niemal zawsze finansuje je sponsor liczący na zwrot — zwykle
            producent leku objętego patentem. Tu pojawia się systemowy problem: substancje, których
            nie da się opatentować — witaminy, zioła, naturalne metabolity, stare leki generyczne
            badane w nowym wskazaniu (off-label) — rzadko znajdują sponsora gotowego sfinansować
            badanie III fazy. Nie ma bowiem perspektywy zwrotu inwestycji.
          </p>
          <p className="mt-3 leading-relaxed text-foreground/80">
            Skutek: obiecująca substancja może na zawsze utknąć na „niskiej pewności dowodów” — nie
            dlatego, że nie działa, lecz dlatego, że nikt nie sfinansował badania, które by to
            rozstrzygnęło. Zdarza się też, że badania są <strong>przerywane z powodu braku
            finansowania</strong>, a nie braku efektu. To realne ograniczenie, o którym warto wiedzieć,
            czytając zdanie „brak dowodów”.
          </p>
          <div className="mt-5 rounded-xl border border-warn-border bg-warn-bg p-4 text-sm leading-relaxed text-foreground/80">
            <strong className="font-semibold text-warn">Uczciwie w obie strony:</strong> brak mocnych
            badań to także brak potwierdzenia skuteczności i pełnego bezpieczeństwa. „Niezbadane” nie
            znaczy „skuteczne” — znaczy „nie wiemy”. Dlatego przy każdej metodzie pokazujemy jawnie,
            czego brakuje, zamiast przesądzać w którąkolwiek stronę.
          </div>
        </section>

        {/* Off-label i rejestracja warunkowa */}
        <section className="mt-12">
          <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-primary">
            <FileWarning className="h-5 w-5 text-accent" aria-hidden="true" />
            Off-label i rejestracja warunkowa — także w „klasycznej” onkologii
          </h2>
          <p className="mt-3 leading-relaxed text-foreground/80">
            Wbrew obiegowej opinii, znaczna część leczenia onkologicznego nie opiera się na najwyższym
            poziomie dowodów dla danego wskazania:
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/80">
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span><strong>Off-label:</strong> według różnych szacunków 30–50% leczenia onkologicznego prowadzi się poza zarejestrowanym wskazaniem — na podstawie doświadczenia i konsensusu ekspertów, a nie pełnego RCT dla tego wskazania.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span><strong>Accelerated approval (FDA):</strong> leki dopuszcza się na podstawie tzw. punktów zastępczych (np. odsetek odpowiedzi), zanim wykazano wydłużenie przeżycia. Część z nich później wycofano, gdy badania potwierdzające wypadły negatywnie.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span><strong>Conditional marketing authorisation (EMA):</strong> dopuszczenie warunkowe na niekompletnych danych, z obowiązkiem ich uzupełnienia po rejestracji.</span>
            </li>
          </ul>
          <p className="mt-4 leading-relaxed text-foreground/80">
            Nie jest to zarzut wobec onkologii — w wielu sytuacjach takie ścieżki są uzasadnione, bo
            pacjenci nie mogą czekać. Chodzi o uczciwy obraz: poziom dowodów bywa zróżnicowany po obu
            stronach, a teza „naturalne = niezbadane, lek systemowy = w pełni udowodniony” jest
            uproszczeniem.
          </p>
        </section>

        {/* Paradoks dowodowy */}
        <section className="mt-12">
          <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-primary">
            <Scale className="h-5 w-5 text-accent" aria-hidden="true" />
            Paradoks dowodowy — przykład
          </h2>
          <p className="mt-3 leading-relaxed text-foreground/80">
            Najlepiej widać to na zestawieniu. Bywa, że metoda integracyjna z badaniem II fazy
            pokazującym wydłużenie przeżycia jest publicznie nazywana „pseudomedycyną”, podczas gdy
            zarejestrowany lek z badaniami III fazy nie pokazującymi przewagi w przeżyciu pozostaje w
            standardzie. To nie znaczy, że któraś strona jest „zła” — to znaczy, że <strong>tę samą
            miarę dowodową trzeba stosować równo</strong>.
          </p>
          <div className="mt-5 overflow-x-auto rounded-xl border border-border">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-secondary text-left">
                  <th className="px-4 py-2 font-medium text-primary">Przykład</th>
                  <th className="px-4 py-2 font-medium text-primary">Poziom dowodów</th>
                  <th className="px-4 py-2 font-medium text-primary">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border align-top">
                  <td className="px-4 py-2 text-foreground">Witamina C dożylna w raku trzustki (RCT II: wydłużenie przeżycia)</td>
                  <td className="px-4 py-2 text-foreground/80">RCT fazy II z istotnym wynikiem</td>
                  <td className="px-4 py-2 text-muted-foreground">Bywa nazywana „pseudomedycyną”</td>
                </tr>
                <tr className="border-t border-border align-top">
                  <td className="px-4 py-2 text-foreground">Wybrane leki onkologiczne z accelerated approval</td>
                  <td className="px-4 py-2 text-foreground/80">Punkt zastępczy; część bez przewagi w przeżyciu</td>
                  <td className="px-4 py-2 text-muted-foreground">Zarejestrowane i refundowane</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Przykład ilustracyjny pokazujący asymetrię stosowania kryterium dowodowego — nie jest to
            ocena bezpieczeństwa ani zachęta do jakiejkolwiek terapii.
          </p>
        </section>

        <section className="mt-12 rounded-xl border border-border bg-secondary/50 p-6 text-sm leading-relaxed text-foreground/80">
          <p>
            Wniosek nie brzmi „dowody nie mają znaczenia”. Brzmi: czytaj dowody świadomie — sprawdzaj
            poziom (typ danych, GRADE), pytaj, czy „brak dowodów” oznacza wynik negatywny, czy brak
            zbadania, i pamiętaj, że EBM w zamyśle twórców obejmuje też doświadczenie lekarza i Twoje
            wartości.{' '}
            <Link href="/jak-czytac-dowody" className="text-accent hover:underline">
              Zobacz, jak czytamy dowody na tej stronie →
            </Link>
          </p>
        </section>

        <DisclaimerBox className="mt-12" />
      </div>
    </>
  )
}
