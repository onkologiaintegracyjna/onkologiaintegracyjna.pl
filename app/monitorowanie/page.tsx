import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { DisclaimerBox } from '@/components/disclaimer-box'
import { Activity, Microscope, Droplet, ScanLine, HeartPulse, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Monitorowanie i czujność po leczeniu',
  description:
    'Dlaczego po leczeniu onkologicznym warto zachować czujność: remisja a wyleczenie, badania kontrolne (obrazowe, krew, markery) i ich częstotliwość, oraz krążące komórki nowotworowe (CTC/CSC) i metody takie jak maintrac — z uczciwą oceną dowodów.',
}

const imaging = [
  { name: 'Tomografia komputerowa (TK)', value: 'Wykrywa zmiany przerzutowe i wznowy w narządach; podstawowe badanie w wielu nowotworach.', freq: 'Zwykle co 3–6 miesięcy w pierwszych latach, potem rzadziej — wg typu nowotworu i ryzyka.' },
  { name: 'Rezonans magnetyczny (MR)', value: 'Lepszy dla tkanek miękkich, mózgu, wątroby, miednicy; bez promieniowania jonizującego.', freq: 'Wg wskazania i lokalizacji — często naprzemiennie lub uzupełniająco do TK.' },
  { name: 'PET-TK', value: 'Obrazuje aktywność metaboliczną — pomaga odróżnić bliznę od aktywnej choroby, wykrywa rozsiew.', freq: 'W wybranych sytuacjach (podejrzenie wznowy, ocena po leczeniu), nie rutynowo co kontrolę.' },
  { name: 'USG', value: 'Szybkie, dostępne, bez promieniowania; ocena węzłów, wątroby, tarczycy, piersi.', freq: 'Często jako badanie uzupełniające, zależnie od nowotworu.' },
]

const blood = [
  { name: 'Morfologia + biochemia', value: 'Ogólny stan, funkcja wątroby i nerek, niedokrwistość, stan zapalny.', freq: 'Przy każdej kontroli; częściej w trakcie leczenia.' },
  { name: 'Markery nowotworowe', value: 'Np. CA 15-3 (pierś), CA 125 (jajnik), CEA (jelito), PSA (prostata), AFP (wątroba). Pomocnicze — rosnący trend bywa wczesnym sygnałem, ale wynik prawidłowy nie wyklucza choroby.', freq: 'Zależnie od nowotworu, zwykle co kontrolę; istotny jest trend, nie pojedynczy wynik.' },
  { name: 'LDH, CRP', value: 'Nieswoiste wskaźniki obciążenia nowotworem i stanu zapalnego — pomocnicze w monitorowaniu.', freq: 'Wg wskazania.' },
]

export default function MonitorowaniePage() {
  return (
    <>
      <PageHeader
        eyebrow="Po leczeniu"
        title="Monitorowanie i czujność po leczeniu"
        description="Zakończenie leczenia to nie koniec opieki, lecz początek obserwacji. Wyjaśniamy, dlaczego warto zachować czujność, jakie badania kontrolne mają jaką wartość i jak często się je wykonuje."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Remisja vs wyleczenie */}
        <section>
          <h2 className="font-serif text-2xl font-semibold text-primary">Remisja to nie zawsze to samo co wyleczenie</h2>
          <p className="mt-3 leading-relaxed text-foreground/80">
            W onkologii słowo „wyleczenie” bywa używane ostrożnie. Częściej mówi się o <strong>remisji</strong> —
            braku wykrywalnych oznak choroby. To bardzo dobra wiadomość, ale nie zawsze oznacza, że w
            organizmie nie pozostała ani jedna komórka nowotworowa. Choroba resztkowa, niewykrywalna
            dostępnymi badaniami, może istnieć i z czasem dać nawrót. Dlatego po leczeniu prowadzi się
            zaplanowaną obserwację.
          </p>
          <p className="mt-3 leading-relaxed text-foreground/80">
            To nie powód do nieufności wobec zespołu leczącego — przeciwnie. <strong>Nadzór onkologiczny
            i regularne kontrole są standardem opieki</strong> właśnie dlatego, że medycyna wie o ryzyku
            nawrotu. Najlepszą postawą jest aktywne uczestnictwo: trzymanie się planu kontroli, zgłaszanie
            nowych objawów i rozmowa z onkologiem o tym, jak długo i jak często powinna trwać obserwacja w
            Twoim przypadku. Czujność i zaufanie do lekarza nie wykluczają się — uzupełniają.
          </p>
        </section>

        {/* Badania obrazowe */}
        <section className="mt-12">
          <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-primary">
            <ScanLine className="h-5 w-5 text-accent" aria-hidden="true" />
            Badania obrazowe — co dają i jak często
          </h2>
          <div className="mt-5 overflow-x-auto rounded-xl border border-border">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-secondary text-left">
                  <th className="px-4 py-2 font-medium text-primary">Badanie</th>
                  <th className="px-4 py-2 font-medium text-primary">Co daje</th>
                  <th className="px-4 py-2 font-medium text-primary">Jak często</th>
                </tr>
              </thead>
              <tbody>
                {imaging.map((r) => (
                  <tr key={r.name} className="border-t border-border align-top">
                    <td className="px-4 py-2 font-medium text-foreground">{r.name}</td>
                    <td className="px-4 py-2 text-foreground/80">{r.value}</td>
                    <td className="px-4 py-2 text-muted-foreground">{r.freq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Częstotliwość jest orientacyjna i zależy od typu oraz stopnia zaawansowania nowotworu —
            ustala ją onkolog wg wytycznych. Nie każde badanie wykonuje się rutynowo (np. PET-TK i
            promieniowanie TK mają swoje ograniczenia).
          </p>
        </section>

        {/* Badania krwi */}
        <section className="mt-12">
          <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-primary">
            <Droplet className="h-5 w-5 text-accent" aria-hidden="true" />
            Badania krwi i markery — co dają i jak często
          </h2>
          <div className="mt-5 overflow-x-auto rounded-xl border border-border">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-secondary text-left">
                  <th className="px-4 py-2 font-medium text-primary">Badanie</th>
                  <th className="px-4 py-2 font-medium text-primary">Co daje</th>
                  <th className="px-4 py-2 font-medium text-primary">Jak często</th>
                </tr>
              </thead>
              <tbody>
                {blood.map((r) => (
                  <tr key={r.name} className="border-t border-border align-top">
                    <td className="px-4 py-2 font-medium text-foreground">{r.name}</td>
                    <td className="px-4 py-2 text-foreground/80">{r.value}</td>
                    <td className="px-4 py-2 text-muted-foreground">{r.freq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Markery nowotworowe są pomocnicze, nie rozstrzygające: prawidłowy wynik nie wyklucza choroby,
            a podwyższony nie zawsze oznacza nawrót. Liczy się trend w czasie i interpretacja w kontekście
            obrazowania oraz objawów.
          </p>
        </section>

        {/* CTC / CSC */}
        <section className="mt-12">
          <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-primary">
            <Microscope className="h-5 w-5 text-accent" aria-hidden="true" />
            Krążące komórki nowotworowe (CTC i CSC)
          </h2>
          <p className="mt-3 leading-relaxed text-foreground/80">
            Z guza mogą uwalniać się do krwiobiegu pojedyncze komórki nowotworowe — tzw. krążące komórki
            nowotworowe (CTC, circulating tumor cells), a wśród nich komórki o cechach macierzystych (CSC),
            które wiąże się z opornością na leczenie i nawrotami. Obecność CTC opisywano u części pacjentów
            także w okresach bez wykrywalnej choroby. To tłumaczy, dlaczego obserwacja po leczeniu ma sens.
          </p>
          <p className="mt-3 leading-relaxed text-foreground/80">
            Badania nad CTC to dynamicznie rozwijający się obszar onkologii (tzw. biopsja płynna). Ich rola
            w rutynowym monitorowaniu wciąż jest ustalana — z różną siłą dowodów w zależności od metody i
            nowotworu.
          </p>

          <div className="mt-5 rounded-xl border border-border bg-card p-5">
            <h3 className="font-serif text-base font-semibold text-primary">Metody wykrywania CTC — różny poziom walidacji</h3>
            <ul className="mt-3 space-y-3 text-sm leading-relaxed text-foreground/80">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-grade-high" aria-hidden="true" />
                <span><strong>CellSearch</strong> — jedyny test CTC z aprobatą FDA dla wybranych wskazań (m.in. rak piersi, jelita grubego, prostaty z przerzutami), gdzie liczba CTC ma udokumentowane znaczenie rokownicze.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" aria-hidden="true" />
                <span><strong>maintrac</strong> — komercyjna metoda monitorowania CTC (oferowana głównie w Niemczech), opisywana jako czulsza i nadająca się do śledzenia zmian w czasie. Ma jednak <strong>węższą walidację kliniczną</strong> niż CellSearch i nie jest powszechnie uznanym standardem. Wynik wymaga ostrożnej interpretacji i kontekstu klinicznego.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-grade-moderate" aria-hidden="true" />
                <span><strong>ctDNA (biopsja płynna genetyczna)</strong> — wykrywanie krążącego DNA nowotworowego; szybko rozwijający się kierunek, w części wskazań już z dużą wartością.</span>
              </li>
            </ul>
          </div>

          <div className="mt-5 rounded-xl border border-warn-border bg-warn-bg p-4 text-sm leading-relaxed text-foreground/80">
            <span className="flex items-center gap-2 font-semibold text-warn">
              <Info className="h-4 w-4" aria-hidden="true" /> Uczciwie o monitorowaniu CTC
            </span>
            <p className="mt-2">
              Śledzenie CTC/CSC bywa wartościowym uzupełnieniem obserwacji, ale nie zastępuje standardowych
              badań kontrolnych ani decyzji onkologa. Metody komercyjne różnią się jakością i walidacją —
              warto wybierać te o udokumentowanej wiarygodności i interpretować wyniki razem z lekarzem, a
              nie samodzielnie. Sam dodatni wynik nie jest podstawą do paniki ani do zmiany leczenia.
            </p>
          </div>
        </section>

        {/* Postawa */}
        <section className="mt-12">
          <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-primary">
            <HeartPulse className="h-5 w-5 text-accent" aria-hidden="true" />
            Czujność bez lęku — praktyczna postawa
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-foreground/80">
            <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />Trzymaj się ustalonego planu kontroli — nie odwołuj wizyt, gdy czujesz się dobrze.</li>
            <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />Zgłaszaj nowe, utrzymujące się objawy zamiast czekać do następnej kontroli.</li>
            <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />Pytaj onkologa, jak długo powinna trwać obserwacja i jakie badania są zasadne w Twoim przypadku.</li>
            <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />Dbaj o styl życia o udowodnionym wpływie — aktywność fizyczną, odżywienie, sen.</li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Zobacz też:{' '}
            <Link href="/co-pomaga" className="text-accent hover:underline">Co pomaga przy leczeniu</Link>{' '}
            oraz{' '}
            <Link href="/styl-zycia" className="text-accent hover:underline">Styl życia w onkologii</Link>.
          </p>
        </section>

        <DisclaimerBox className="mt-12" />
      </div>
    </>
  )
}
