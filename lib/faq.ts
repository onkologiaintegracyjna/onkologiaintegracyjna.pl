export interface FaqItem {
  q: string
  a: string
  link?: { href: string; label: string }
}
export interface FaqSection {
  title: string
  items: FaqItem[]
}

export const faq: FaqSection[] = [
  {
    title: 'Podstawy i bezpieczeństwo',
    items: [
      {
        q: 'Czym jest onkologia integracyjna?',
        a: 'To dziedzina oparta na dowodach naukowych, która łączy metody wspomagające (techniki umysł–ciało, wybrane naturalne produkty, styl życia) z konwencjonalnym leczeniem nowotworów. Kluczowe słowo to „z”: metody integracyjne stosuje się obok leczenia standardowego, nigdy zamiast niego.',
        link: { href: '/standardy', label: 'Organizacje i standardy' },
      },
      {
        q: 'Czy to jest alternatywa dla chemioterapii lub radioterapii?',
        a: 'Nie. Onkologia integracyjna nie zastępuje leczenia onkologicznego. Różni się tym od medycyny alternatywnej (która proponuje metody zamiast leczenia) i od pseudomedycyny (która obiecuje efekty bez dowodów). Metody integracyjne mają wspierać tolerancję leczenia i jakość życia.',
      },
      {
        q: 'Czy metody wspomagające są bezpieczne w trakcie leczenia?',
        a: 'Część jest bezpieczna i ma wytyczne (np. aktywność fizyczna, akupunktura, uważność), ale nie wszystkie — niektóre zioła i suplementy wchodzą w interakcje z chemioterapią lub wpływają na krzepnięcie. Dlatego o każdej metodzie warto porozmawiać z onkologiem przed jej rozpoczęciem.',
        link: { href: '/w-trakcie-leczenia', label: 'Poradniki: w trakcie leczenia' },
      },
      {
        q: 'Czy suplementy mogą osłabić działanie chemii lub radioterapii?',
        a: 'To realna, choć nie zawsze docenianą obawa. Część chemio- i radioterapii działa przez stres oksydacyjny, a wysokie dawki antyoksydantów przyjmowane w tym samym czasie mogą teoretycznie osłabiać ten mechanizm. Dlatego dobór i rozłożenie w czasie suplementów powinien ustalić lekarz prowadzący — „naturalne” nie znaczy „neutralne”.',
        link: { href: '/szlaki', label: 'Mechanizmy i szlaki' },
      },
      {
        q: 'Jak rozmawiać o tym z onkologiem?',
        a: 'Przygotuj listę wszystkiego, co przyjmujesz (leki, suplementy, zioła). Pytaj wprost o interakcje, o to, co jest bezpieczne w Twoim schemacie i czego unikać w dniach podania chemii. Każda karta metody na stronie ma sekcję „Jak rozmawiać z lekarzem” z konkretnymi pytaniami.',
        link: { href: '/metody', label: 'Metody i substancje' },
      },
    ],
  },
  {
    title: 'Dowody i wiarygodność',
    items: [
      {
        q: 'Co oznacza „niska pewność dowodów”? Czy to znaczy, że coś nie działa?',
        a: 'Nie. Skala GRADE mierzy, na ile jesteśmy pewni oszacowania efektu — a nie samą siłę działania. „Niska pewność” najczęściej znaczy „brakuje dużych, mocnych badań”, a nie „udowodniono, że nie działa”. Działa to też w drugą stronę: brak badań to także brak potwierdzenia skuteczności.',
        link: { href: '/jak-czytac-dowody', label: 'Jak czytać dowody' },
      },
      {
        q: 'Dlaczego naturalne substancje mają mniej badań?',
        a: 'Duże badania III fazy kosztują dziesiątki–setki milionów i zwykle finansuje je sponsor liczący na zwrot z patentu. Substancji nieopatentowanych (witaminy, zioła, stare leki) trudno opatentować, więc rzadko mają sponsora takich badań. To tworzy lukę dowodową niezależną od samego potencjału — nie przesądza ani o skuteczności, ani o jej braku.',
        link: { href: '/ebm', label: 'EBM i finansowanie badań' },
      },
      {
        q: 'Czy „off-label” to to samo co pseudomedycyna?',
        a: 'Nie. Off-label to stosowanie zarejestrowanego leku poza zatwierdzonym wskazaniem — to legalna i częsta praktyka także w „klasycznej” onkologii (szacunkowo 30–50% leczenia). Pseudomedycyna to obietnice bez dowodów. To dwie różne rzeczy, których nie należy mylić.',
        link: { href: '/ebm', label: 'EBM i off-label' },
      },
      {
        q: 'Jak rozpoznać oszustwo albo „cudowny lek na raka”?',
        a: 'Sygnały ostrzegawcze: obietnica wyleczenia lub „przełomu”, zniechęcanie do leczenia konwencjonalnego, brak źródeł lub powoływanie się tylko na pojedyncze historie, sprzedaż produktu. Wiarygodna informacja ma źródło (PMID/DOI), pochodzi z recenzowanego czasopisma i nie obiecuje pewnego efektu.',
        link: { href: '/standardy', label: 'Gdzie sprawdzić źródło' },
      },
    ],
  },
  {
    title: 'Co realnie pomaga',
    items: [
      {
        q: 'Co pomaga na nudności, zmęczenie i neuropatię po chemioterapii?',
        a: 'Najmocniejsze dowody: aktywność fizyczna na zmęczenie (rekomendacja pierwszego wyboru), akupunktura i akupresura przy nudnościach oraz bólu, uważność (MBSR) na lęk i sen. Przy neuropatii (CIPN) dane są skromniejsze — pomocne bywają ćwiczenia. Zawsze obok standardowego leczenia objawowego.',
        link: { href: '/co-pomaga', label: 'Co pomaga przy leczeniu' },
      },
      {
        q: 'Brać suplementy w trakcie chemioterapii — tak czy nie?',
        a: 'Decyzja należy do onkologa. Część suplementów jest neutralna, część może wchodzić w interakcje lub wpływać na skuteczność leczenia (zwłaszcza wysokie dawki antyoksydantów i timing względem chemii/RT). Najbezpieczniej: nie zaczynaj niczego „na własną rękę” w trakcie aktywnego leczenia bez konsultacji.',
        link: { href: '/w-trakcie-leczenia/w-trakcie-chemioterapii', label: 'W trakcie chemioterapii' },
      },
      {
        q: 'Czy dieta ma znaczenie?',
        a: 'Tak, ale z proporcją. Najlepsze dane ma wzorzec śródziemnomorski (prewencja, zdrowie ogólne) i aktywność fizyczna. W trakcie leczenia priorytetem jest zapobieganie niedożywieniu i opieka dietetyka — restrykcyjne „diety antynowotworowe” mogą zaszkodzić, zwłaszcza przy kacheksji.',
        link: { href: '/styl-zycia', label: 'Styl życia w onkologii' },
      },
      {
        q: 'Co po zakończeniu leczenia — czy mam się czymś monitorować?',
        a: 'Tak — trzymaj się planu kontroli onkologicznych (badania obrazowe, krew, markery). „Remisja” nie zawsze znaczy całkowite wyleczenie, dlatego nadzór i czujność są standardem. To nie powód do nieufności wobec lekarza, lecz do aktywnego uczestnictwa w obserwacji.',
        link: { href: '/monitorowanie', label: 'Monitorowanie po leczeniu' },
      },
    ],
  },
  {
    title: 'Trudne pytania',
    items: [
      {
        q: 'Czy witamina C dożylna, salinomycyna albo iwermektyna leczą raka?',
        a: 'Nie ma dowodów, by którakolwiek z nich była skutecznym samodzielnym leczeniem nowotworu u ludzi. Witamina C dożylna jest badana jako uzupełnienie (wyniki niejednoznaczne); salinomycyna, iwermektyna i fenbendazol mają sygnały głównie z badań laboratoryjnych, bez potwierdzenia klinicznego. ASCO odradza stosowanie iwermektyny i fenbendazolu jako leczenia raka poza badaniami.',
        link: { href: '/metody', label: 'Profile dowodowe metod' },
      },
      {
        q: 'Co z badaniem maintrac / krążącymi komórkami nowotworowymi?',
        a: 'Monitorowanie krążących komórek (CTC/CSC) to obiecujący, ale wciąż rozwijany obszar. Maintrac jest metodą komercyjną o węższej walidacji niż test CellSearch z aprobatą FDA i nie jest standardem w wytycznych. Może być uzupełniającym źródłem informacji do rozmowy z onkologiem — nie podstawą samodzielnych decyzji o leczeniu.',
        link: { href: '/monitorowanie', label: 'CTC, CSC i maintrac' },
      },
      {
        q: 'Czy mogę zrezygnować z leczenia onkologicznego na rzecz metod naturalnych?',
        a: 'Stanowczo odradzamy. Rezygnacja ze skutecznego leczenia na rzecz metod o niepotwierdzonej skuteczności wiąże się z realnym ryzykiem progresji choroby i utraty szansy na wyleczenie. Metody integracyjne mają wartość jako uzupełnienie, nie zamiennik. Wszystkie decyzje podejmuj z lekarzem prowadzącym.',
      },
      {
        q: 'Czy ta strona zaleca mi konkretne terapie?',
        a: 'Nie. Strona ma charakter wyłącznie edukacyjny — opisuje stan wiedzy i jakość dowodów, nie zaleca terapii ani dawek konkretnym pacjentom. Służy do świadomej rozmowy z lekarzem, a nie do samodzielnego leczenia.',
        link: { href: '/o-stronie', label: 'O stronie' },
      },
    ],
  },
]
