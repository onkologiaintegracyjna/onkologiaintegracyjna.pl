import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { Activity, Microscope, Droplet, ScanLine, HeartPulse, Info, FlaskConical, Stethoscope } from 'lucide-react'
import { PMIDLink } from '@/components/pmid-link'

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
            <h3 className="font-serif text-base font-semibold text-primary">Dlaczego CSC mogą być ważniejsze niż sama liczba CTC</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              Nie wszystkie krążące komórki są równie groźne. Większość CTC ginie w krwiobiegu lub nie jest
              zdolna do utworzenia przerzutu. Kluczowa wydaje się mniejszościowa subpopulacja o cechach
              macierzystych — komórki macierzyste nowotworu (CSC). To właśnie im przypisuje się trzy
              najważniejsze role:
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" /><span><strong>Przerzutowość</strong> — to CSC mają zdolność „zasiedlania” odległych tkanek i inicjowania nowych ognisk choroby.</span></li>
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" /><span><strong>Oporność na chemioterapię</strong> — CSC bywają mniej wrażliwe na klasyczne cytostatyki i mogą przetrwać leczenie, które zniszczyło masę guza. Bywa, że chemioterapia redukuje guz, ale względnie wzbogaca pulę opornych CSC.</span></li>
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" /><span><strong>Nawroty</strong> — przetrwałe CSC wiąże się z późnymi wznowami, czasem po latach pozornego zdrowia.</span></li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80">
              Mechanizmy, które za tym stoją, są coraz lepiej opisane. CSC potrafią przejść tzw.
              przejście nabłonkowo-mezenchymalne (EMT), które ułatwia im wniknięcie do naczyń i przeżycie
              w krwiobiegu. Ich oporność na chemioterapię wiąże się m.in. z nadekspresją błonowych
              transporterów ABC (wypompowujących leki z komórki), aktywnością szlaków Wnt/β-katenina i
              Notch oraz sprawniejszą naprawą DNA. Część CSC może też wejść w stan uśpienia
              (quiescence) — przestają się dzielić, przez co są niewidoczne dla terapii działających na
              komórki dzielące się, a po miesiącach lub latach mogą się reaktywować.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              CSC rozpoznaje się po markerach takich jak CD44+/CD24−, ALDH1, CD133 czy EpCAM — przy czym
              zestaw markerów różni się między nowotworami i nie jest w pełni ujednolicony. To jedna z
              biologicznych trudności całego pola.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              Dlatego dla części badaczy bardziej informacyjna od jednorazowej liczby CTC bywa
              <strong> dynamika w czasie</strong> — czy poziom komórek (zwłaszcza frakcji CSC) rośnie, czy
              spada w kolejnych pomiarach. Trend bywa cenniejszy niż pojedynczy wynik (analogicznie do
              śledzenia PSA w czasie w raku prostaty). To jednak nadal obszar badań, a nie ustalony
              standard postępowania.
            </p>
          </div>

          <div className="mt-5 rounded-xl border border-border bg-card p-5">
            <h3 className="font-serif text-base font-semibold text-primary">Co czyni maintrac interesującym — i gdzie są granice dowodów</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              Zainteresowanie metodą maintrac wynika z dwóch cech, których nie oferują typowe testy CTC:
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" aria-hidden="true" /><span><strong>Próba monitorowania frakcji CSC i jej dynamiki</strong> — metoda jest pozycjonowana jako narzędzie do śledzenia zmian w czasie, w tym subpopulacji o cechach macierzystych. Wiele standardowych testów koncentruje się na zliczaniu CTC, a nie na charakterystyce CSC.</span></li>
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" aria-hidden="true" /><span><strong>Test chemiowrażliwości</strong> — oferowana jest ocena, jak izolowane komórki reagują na poszczególne leki, jako próba przewidzenia szansy odpowiedzi na leczenie i indywidualizacji terapii.</span></li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              To koncepcyjnie atrakcyjne kierunki. Trzeba jednak uczciwie powiedzieć, gdzie kończą się
              dowody: testy chemiowrażliwości oznaczane z krwi <strong>nie są obecnie zwalidowanym,
              rekomendowanym w wytycznych narzędziem</strong> do wyboru chemioterapii — wynik z probówki
              nie zawsze przekłada się na odpowiedź w organizmie. Podobnie monitorowanie CSC tą metodą ma
              węższą walidację niż zliczanie CTC testem CellSearch. Dlatego maintrac warto traktować jako
              <strong> uzupełniające źródło informacji do rozmowy z onkologiem</strong>, a nie jako
              samodzielną podstawę decyzji o leczeniu.
            </p>
          </div>

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

          {/* Tabela porównawcza */}
          <div className="mt-5 overflow-x-auto rounded-xl border border-border">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-left text-primary-foreground">
                  <th className="px-3 py-3 font-medium">Cecha</th>
                  <th className="px-3 py-3 font-medium">CellSearch</th>
                  <th className="px-3 py-3 font-medium">maintrac</th>
                  <th className="px-3 py-3 font-medium">stemtrac</th>
                  <th className="px-3 py-3 font-medium">ctDNA</th>
                </tr>
              </thead>
              <tbody className="align-top">
                <tr className="border-t border-border">
                  <td className="px-3 py-2 font-medium text-foreground">Co mierzy</td>
                  <td className="px-3 py-2 text-foreground/80">Liczbę CTC (EpCAM+)</td>
                  <td className="px-3 py-2 text-foreground/80">Liczbę żywych komórek krążących</td>
                  <td className="px-3 py-2 text-foreground/80">Liczbę sfer CSC zdolnych do podziału</td>
                  <td className="px-3 py-2 text-foreground/80">Fragmenty DNA nowotworu</td>
                </tr>
                <tr className="border-t border-border even:bg-secondary/30">
                  <td className="px-3 py-2 font-medium text-foreground">Na jakie pytanie odpowiada</td>
                  <td className="px-3 py-2 text-foreground/80">Ile komórek krąży?</td>
                  <td className="px-3 py-2 text-foreground/80">Jak zmienia się ich liczba w czasie?</td>
                  <td className="px-3 py-2 text-foreground/80">Które komórki są zdolne do przerzutów?</td>
                  <td className="px-3 py-2 text-foreground/80">Jakie mutacje są obecne?</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-3 py-2 font-medium text-foreground">Status</td>
                  <td className="px-3 py-2 text-foreground/80">Aprobata FDA, CE</td>
                  <td className="px-3 py-2 text-foreground/80">Komercyjna; węższa walidacja</td>
                  <td className="px-3 py-2 text-foreground/80">Komercyjna; ograniczona walidacja</td>
                  <td className="px-3 py-2 text-foreground/80">W części wskazań już zwalidowana</td>
                </tr>
                <tr className="border-t border-border even:bg-secondary/30">
                  <td className="px-3 py-2 font-medium text-foreground">Kluczowy sygnał</td>
                  <td className="px-3 py-2 text-foreground/80">Liczba (np. ≥5 w stadium IV)</td>
                  <td className="px-3 py-2 text-foreground/80">Trend (wzrost/spadek)</td>
                  <td className="px-3 py-2 text-foreground/80">Liczba sfer + reakcja na leki</td>
                  <td className="px-3 py-2 text-foreground/80">Pojawienie się / zanik mutacji</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-3 py-2 font-medium text-foreground">Czas oczekiwania</td>
                  <td className="px-3 py-2 text-foreground/80">~2 dni</td>
                  <td className="px-3 py-2 text-foreground/80">~1–2 dni</td>
                  <td className="px-3 py-2 text-foreground/80">2–3 tygodnie (hodowla)</td>
                  <td className="px-3 py-2 text-foreground/80">dni</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            To narzędzia uzupełniające, nie konkurencyjne. Różnią się tym, co mierzą i jak mocno są
            zwalidowane.
          </p>

          {/* Stemtrac */}
          <div className="mt-5 rounded-xl border border-border bg-card p-5">
            <h3 className="flex items-center gap-2 font-serif text-base font-semibold text-primary">
              <FlaskConical className="h-4 w-4 text-accent" aria-hidden="true" />
              stemtrac — próba oceny aktywnej frakcji CSC
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              stemtrac to rozszerzenie maintrac, które zadaje pytanie: czy we krwi są komórki zdolne do
              aktywnego podziału i tworzenia przerzutów? Komórki izolowane z próbki krwi hoduje się przez
              2–3 tygodnie; te o cechach macierzystych tworzą kuliste skupiska (sfery, tzw. mammosphere
              assay), a wynik podaje się jako liczbę sfer na mililitr. U osób zdrowych takie sfery zwykle
              nie wyrastają.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              Koncepcyjnie jest to atrakcyjne, bo celuje w „najgroźniejszą” subpopulację. Trzeba jednak
              powiedzieć wprost: <strong>przełożenie wyniku na decyzje kliniczne u konkretnego pacjenta
              jest słabiej udokumentowane</strong> niż dla CellSearch. Opisywane progi (np. powyżej ok.
              300 sfer/ml jako sygnał do pogłębionej diagnostyki obrazowej) nie są progami zatwierdzonymi
              przez agencje regulacyjne. To narzędzie z obszaru badań i indywidualnej oceny, nie standard.
            </p>
          </div>

          {/* Co mówią opublikowane badania maintrac */}
          <div className="mt-5 rounded-xl border border-border bg-card p-5">
            <h3 className="font-serif text-base font-semibold text-primary">Co mówią opublikowane badania</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              W recenzowanych czasopismach ukazały się prace z użyciem maintrac, m.in.:
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" /><span>Rak piersi wczesny (n=165, obserwacja mediana ~9 lat): wzrost liczby krążących komórek nabłonkowych w trakcie radioterapii uzupełniającej był związany z istotnie gorszym przeżyciem wolnym od choroby (p=0,004; Curr Oncol 2023) <PMIDLink pmid="36661670" />.</span></li>
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" /><span>Rak jelita grubego (n=22): metoda pozwoliła wykryć i charakteryzować krążące komórki niezależnie od stadium choroby — badanie proof-of-principle (Mol Clin Oncol 2021) <PMIDLink pmid="34462657" />.</span></li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Wartość metody leży w seryjnym pomiarze dynamiki — automatyzację metody wspierał projekt UE
              (Horizon 2020). Ograniczenie: większość danych pochodzi z jednego ośrodka (Bayreuth), co
              zmniejsza niezależną walidację, a metoda nie ma aprobaty FDA jak CellSearch.
            </p>
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

          <div className="mt-8 rounded-xl border border-border bg-card p-5">
            <h3 className="font-serif text-base font-semibold text-primary">ctDNA i choroba resztkowa (MRD) — najszybciej rozwijający się kierunek</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              Osobno od zliczania komórek (CTC) rozwija się wykrywanie krążącego DNA nowotworowego
              (ctDNA) — tzw. genetyczna biopsja płynna. Pozwala ocenić tzw. chorobę resztkową (MRD):
              ślad nowotworu pozostały po leczeniu, niewidoczny w obrazowaniu. To dziś jeden z
              najmocniej udokumentowanych obszarów, zwłaszcza w raku jelita grubego:
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-grade-high" aria-hidden="true" />Badanie DYNAMIC (rak okrężnicy II stopnia): strategia oparta na ctDNA pozwoliła ograniczyć chemioterapię uzupełniającą bez pogorszenia przeżycia wolnego od nawrotu.</li>
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-grade-high" aria-hidden="true" />Program GALAXY/CIRCULATE-Japan (duża kohorta): dodatni ctDNA po operacji okazał się silnym predyktorem nawrotu, a trwała ujemność wiązała się z bardzo dobrym rokowaniem.</li>
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-grade-moderate" aria-hidden="true" />Wytyczne (m.in. NCCN, 2025) zaczęły uznawać dodatni ctDNA za czynnik wysokiego ryzyka nawrotu, choć rutynowe stosowanie poza ośrodkami referencyjnymi i badaniami wciąż bywa ograniczane.</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Ważne rozróżnienie: ctDNA (genetyczny ślad nowotworu) to inna metoda niż maintrac/CTC
              (zliczanie i charakterystyka żywych komórek). Mają różny poziom walidacji i nie należy ich
              ze sobą utożsamiać. W raku piersi i innych nowotworach ctDNA jest intensywnie badane, ale
              dane są słabsze niż w raku jelita grubego.
            </p>
          </div>
        </section>

        {/* Kiedy zapytać o biopsję płynną */}
        <section className="mt-12">
          <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-primary">
            <Stethoscope className="h-5 w-5 text-accent" aria-hidden="true" />
            Kiedy warto zapytać onkologa o biopsję płynną
          </h2>
          <p className="mt-3 leading-relaxed text-foreground/80">
            To nie są wskazania „dla każdego” ani podstawa do samodzielnych decyzji. To sytuacje, w
            których rozmowa z onkologiem o monitorowaniu komórkowym (CTC/CSC) lub genetycznym (ctDNA)
            może mieć sens:
          </p>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-foreground/80">
            <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />Gdy standardowe markery są mało informacyjne (np. rak potrójnie ujemny bez dobrego markera serologicznego).</li>
            <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />Gdy zależy Ci na wczesnym sygnale o reaktywacji choroby — dynamika komórek krążących bywa wcześniejsza niż obraz w TK (obszar badań).</li>
            <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />Przy decyzji o intensywności leczenia w zaawansowanym raku piersi — badanie STIC CTC pokazało, że oparcie decyzji chemioterapia vs hormonoterapia na liczbie CTC (CellSearch) dało lepsze wyniki niż sam osąd kliniczny.</li>
            <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />Jako uzupełniająca ocena frakcji CSC przy planowaniu terapii celowanych lub udziału w badaniach.</li>
          </ul>

          <div className="mt-5 rounded-xl border border-border bg-card p-5 text-sm leading-relaxed text-foreground/80">
            <h3 className="font-serif text-base font-semibold text-primary">Powiązanie z metodami celującymi w CSC</h3>
            <p className="mt-2">
              Komórki macierzyste nowotworu są dokładnie tym celem, na który ukierunkowane są niektóre
              badane substancje opisane w tym serwisie — przede wszystkim{' '}
              <Link href="/metody/salinomycyna" className="text-accent hover:underline">salinomycyna</Link>, a także{' '}
              <Link href="/metody/niskie-dawki-naltreksonu" className="text-accent hover:underline">LDN</Link>.
              Teoretycznie monitorowanie frakcji CSC mogłoby służyć do oceny, czy taka interwencja
              zmniejsza pulę tych komórek. Trzeba jednak powiedzieć wprost: to nadal obszar badań, a nie
              praktyka kliniczna — żadna z tych substancji nie ma dowodów skuteczności u ludzi, a
              monitorowanie CSC nie jest zwalidowanym narzędziem do oceny terapii.
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
      </div>
    </>
  )
}
