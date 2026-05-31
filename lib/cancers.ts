export interface Cancer {
  slug: string
  name: string
  metaTitle: string
  intro: string
  conventional: string
  integrative: string[]
  commonSymptoms: string[]
}

/**
 * Podejście integracyjne wg typu nowotworu (wzór: Comprehensive Integrative Oncology, Elsevier 2026).
 * Krótko o standardzie konwencjonalnym (neutralnie) + co integracyjnie ma dowody + częste objawy.
 * Bez danych jakichkolwiek pacjentów.
 */
export const cancers: Cancer[] = [
  {
    slug: 'rak-piersi',
    name: 'Rak piersi',
    metaTitle: 'Integracyjne podejście — rak piersi',
    intro:
      'Rak piersi to najczęstszy nowotwór u kobiet, o zróżnicowanych podtypach biologicznych. Onkologia integracyjna ma tu szczególnie dużo danych dotyczących opieki wspomagającej.',
    conventional:
      'Standard leczenia zależy od podtypu (hormonozależny, HER2-dodatni, potrójnie ujemny) i stopnia zaawansowania; obejmuje chirurgię, radioterapię, chemioterapię, hormonoterapię, terapie celowane i immunoterapię. Decyzje podejmuje zespół wielodyscyplinarny.',
    integrative: [
      'Aktywność fizyczna — silne dowody na jakość życia i, w wybranych sytuacjach, ryzyko nawrotu.',
      'Akupunktura — rekomendowana m.in. w bólu stawów po inhibitorach aromatazy (AIMSS).',
      'Uważność (MBSR/MBCR) — lęk, sen, jakość życia.',
      'Wsparcie żywieniowe i dieta śródziemnomorska (prewencja pierwotna, zdrowie ogólne).',
    ],
    commonSymptoms: ['Zmęczenie', 'Ból stawów (AIMSS)', 'Lęk', 'Objawy wazomotoryczne', 'Obrzęk limfatyczny'],
  },
  {
    slug: 'rak-pluca',
    name: 'Rak płuca',
    metaTitle: 'Integracyjne podejście — rak płuca',
    intro:
      'Rak płuca obejmuje głównie niedrobnokomórkowego i drobnokomórkowego raka płuca. Wsparcie integracyjne koncentruje się na objawach oddechowych, zmęczeniu i tolerancji leczenia.',
    conventional:
      'Leczenie zależy od typu i zaawansowania: chirurgia, radioterapia, chemioterapia, terapie celowane (zależne od mutacji) i immunoterapia.',
    integrative: [
      'Aktywność fizyczna i rehabilitacja oddechowa — wydolność i jakość życia.',
      'Cordyceps — w badaniach azjatyckich sygnał wsparcia tolerancji chemio-/radioterapii (dane do potwierdzenia).',
      'Akupunktura — wybrane objawy (duszność, nudności, ból).',
      'Wsparcie żywieniowe — przeciwdziałanie niedożywieniu.',
    ],
    commonSymptoms: ['Duszność', 'Zmęczenie', 'Kaszel', 'Utrata masy ciała', 'Lęk'],
  },
  {
    slug: 'rak-jelita-grubego',
    name: 'Rak jelita grubego',
    metaTitle: 'Integracyjne podejście — rak jelita grubego',
    intro:
      'Rak jelita grubego jest jednym z najczęstszych nowotworów. Styl życia ma tu silne dowody w prewencji i po leczeniu.',
    conventional:
      'Leczenie obejmuje chirurgię, chemioterapię (np. schematy oparte na fluoropirymidynach), w wybranych sytuacjach radioterapię i terapie celowane/immunoterapię.',
    integrative: [
      'Aktywność fizyczna — dane na korzyść jakości życia i przeżycia w wybranych sytuacjach.',
      'Dieta bogata w błonnik, wzorzec śródziemnomorski — zdrowie ogólne i prewencja.',
      'Wsparcie żywieniowe i mikrobiom — obszar aktywnych badań.',
      'Metody przeciw nudnościom i neuropatii (przy chemioterapii).',
    ],
    commonSymptoms: ['Neuropatia (CIPN)', 'Zmęczenie', 'Biegunka/zaparcia', 'Zaburzenia żywieniowe'],
  },
  {
    slug: 'rak-prostaty',
    name: 'Rak prostaty',
    metaTitle: 'Integracyjne podejście — rak prostaty',
    intro:
      'Rak prostaty często ma przebieg powolny; wsparcie integracyjne dotyczy m.in. skutków hormonoterapii i jakości życia.',
    conventional:
      'Opcje obejmują aktywny nadzór, chirurgię, radioterapię, hormonoterapię i — w zaawansowanych stadiach — chemioterapię oraz terapie celowane.',
    integrative: [
      'Aktywność fizyczna — łagodzi skutki hormonoterapii (masa mięśniowa, zmęczenie, metabolizm).',
      'Dieta i kontrola masy ciała — zdrowie ogólne i sercowo-naczyniowe.',
      'Wsparcie psychospołeczne — lęk, jakość życia.',
      'Akupunktura — badana m.in. w objawach wazomotorycznych po hormonoterapii.',
    ],
    commonSymptoms: ['Uderzenia gorąca', 'Zmęczenie', 'Utrata masy mięśniowej', 'Zdrowie kości', 'Zdrowie seksualne'],
  },
  {
    slug: 'rak-trzustki',
    name: 'Rak trzustki',
    metaTitle: 'Integracyjne podejście — rak trzustki',
    intro:
      'Rak trzustki jest trudny w leczeniu, a wsparcie żywieniowe i kontrola objawów mają tu duże znaczenie dla jakości życia.',
    conventional:
      'Leczenie obejmuje chirurgię (w operacyjnych przypadkach), chemioterapię i radioterapię; istotne jest leczenie objawowe i żywieniowe.',
    integrative: [
      'Wsparcie żywieniowe (w tym enzymy trzustkowe — decyzja lekarza) — kluczowe dla masy ciała.',
      'Aktywność fizyczna dostosowana — wydolność i jakość życia.',
      'Wsparcie psychospołeczne i kontrola bólu.',
      'Jemioła i witamina C dożylna — badane jako wsparcie (dane niejednoznaczne, wyłącznie z lekarzem).',
    ],
    commonSymptoms: ['Utrata masy ciała / kacheksja', 'Ból', 'Zaburzenia trawienia', 'Zmęczenie'],
  },
  {
    slug: 'nowotwory-osrodkowego-ukladu-nerwowego',
    name: 'Nowotwory OUN (glejaki)',
    metaTitle: 'Integracyjne podejście — nowotwory OUN',
    intro:
      'Nowotwory ośrodkowego układu nerwowego, w tym glejaki, wymagają specjalistycznego leczenia; wsparcie integracyjne dotyczy m.in. objawów i jakości życia.',
    conventional:
      'Leczenie obejmuje chirurgię, radioterapię i chemioterapię; w glejaku wielopostaciowym stosuje się także pola elektryczne TTFields (Optune).',
    integrative: [
      'TTFields (Optune) — zarejestrowana metoda fizykalna z RCT III (to nie CAM).',
      'Boswellia serrata — badana w obrzęku mózgu po radioterapii (RCT II).',
      'Rehabilitacja i aktywność fizyczna — funkcja i jakość życia.',
      'Wsparcie psychospołeczne i poznawcze.',
    ],
    commonSymptoms: ['Obrzęk mózgu (po RT)', 'Zmęczenie', 'Zaburzenia poznawcze', 'Lęk'],
  },
  {
    slug: 'nowotwory-ginekologiczne',
    name: 'Nowotwory ginekologiczne',
    metaTitle: 'Integracyjne podejście — nowotwory ginekologiczne',
    intro:
      'Nowotwory ginekologiczne (jajnik, szyjka macicy, trzon macicy) leczone są wielodyscyplinarnie; wsparcie integracyjne obejmuje objawy leczenia i jakość życia.',
    conventional:
      'Leczenie zależy od typu i zaawansowania: chirurgia, radioterapia (w tym radiochemioterapia), chemioterapia i terapie celowane.',
    integrative: [
      'Akupunktura i metody umysł–ciało — nudności, lęk, objawy wazomotoryczne.',
      'Aktywność fizyczna i rehabilitacja dna miednicy.',
      'Wsparcie w obrzęku limfatycznym kończyn dolnych.',
      'Inhalacje wodorowe — badane pod kątem tolerancji radiochemioterapii (wczesne dane).',
    ],
    commonSymptoms: ['Nudności', 'Zmęczenie', 'Obrzęk limfatyczny', 'Objawy wazomotoryczne', 'Zdrowie seksualne'],
  },
  {
    slug: 'nowotwory-glowy-i-szyi',
    name: 'Nowotwory głowy i szyi',
    metaTitle: 'Integracyjne podejście — nowotwory głowy i szyi',
    intro:
      'Leczenie nowotworów głowy i szyi często wiąże się z nasilonymi objawami w jamie ustnej i gardle; wsparcie integracyjne i żywieniowe ma duże znaczenie.',
    conventional:
      'Leczenie obejmuje chirurgię, radioterapię i radiochemioterapię oraz terapie celowane/immunoterapię.',
    integrative: [
      'Higiena jamy ustnej i opieka nad błonami śluzowymi (zapobieganie i łagodzenie mucositis).',
      'Wsparcie żywieniowe — kluczowe przy trudnościach w połykaniu.',
      'Akupunktura — badana m.in. w suchości jamy ustnej i bólu.',
      'Inhalacje wodorowe — wczesne dane na tolerancję radiochemioterapii.',
    ],
    commonSymptoms: ['Zapalenie błon śluzowych (mucositis)', 'Suchość jamy ustnej', 'Trudności w połykaniu', 'Utrata masy ciała'],
  },
  {
    slug: 'rak-nerki',
    name: 'Rak nerki',
    metaTitle: 'Integracyjne podejście — rak nerki',
    intro:
      'Rak nerkowokomórkowy leczony jest m.in. chirurgicznie i z użyciem terapii celowanych oraz immunoterapii; wsparcie integracyjne dotyczy tolerancji leczenia i jakości życia.',
    conventional:
      'Leczenie obejmuje chirurgię, terapie celowane (inhibitory kinaz) oraz immunoterapię; w wybranych sytuacjach obserwację.',
    integrative: [
      'Aktywność fizyczna — wydolność, zmęczenie, jakość życia.',
      'Wsparcie żywieniowe z uwzględnieniem funkcji nerek (ostrożność z suplementami).',
      'Metody umysł–ciało — lęk i sen.',
      'Czujność wobec interakcji suplementów z terapiami celowanymi.',
    ],
    commonSymptoms: ['Zmęczenie', 'Nadciśnienie (przy terapiach celowanych)', 'Lęk', 'Zaburzenia żywieniowe'],
  },
  {
    slug: 'czerniak-i-nowotwory-skory',
    name: 'Czerniak i nowotwory skóry',
    metaTitle: 'Integracyjne podejście — czerniak i nowotwory skóry',
    intro:
      'Czerniak jest leczony m.in. chirurgicznie oraz immunoterapią i terapiami celowanymi; wsparcie integracyjne uwzględnia specyfikę immunoterapii.',
    conventional:
      'Leczenie obejmuje chirurgię, immunoterapię (inhibitory punktów kontrolnych), terapie celowane (np. BRAF/MEK) oraz radioterapię w wybranych sytuacjach.',
    integrative: [
      'Ostrożność z immunostymulantami w trakcie immunoterapii (możliwe interakcje).',
      'Zdrowy mikrobiom (dieta) — obszar badań nad odpowiedzią na immunoterapię.',
      'Wsparcie psychospołeczne i radzenie sobie ze stresem.',
      'Pielęgnacja skóry przy odczynach (np. przy terapiach celowanych).',
    ],
    commonSymptoms: ['Zmiany skórne / wysypki', 'Zmęczenie', 'Objawy immunozależne', 'Lęk'],
  },
  {
    slug: 'szpiczak-i-nowotwory-krwi',
    name: 'Szpiczak i dyskrazje plazmocytowe',
    metaTitle: 'Integracyjne podejście — szpiczak plazmocytowy',
    intro:
      'Szpiczak plazmocytowy to nowotwór komórek plazmatycznych; wsparcie integracyjne dotyczy m.in. neuropatii, zdrowia kości i jakości życia.',
    conventional:
      'Leczenie obejmuje terapie celowane, immunomodulatory, chemioterapię, w wybranych sytuacjach przeszczepienie komórek krwiotwórczych.',
    integrative: [
      'Aktywność fizyczna dostosowana — z uwzględnieniem zdrowia kości.',
      'Wsparcie w neuropatii (CIPN) towarzyszącej leczeniu.',
      'Uwaga: glutamina parenteralna przeciwwskazana w przeszczepieniu komórek krwiotwórczych (HSCT).',
      'Wsparcie żywieniowe i psychospołeczne.',
    ],
    commonSymptoms: ['Neuropatia (CIPN)', 'Ból kości', 'Zmęczenie', 'Zakażenia (immunosupresja)'],
  },
]

export function getCancer(slug: string): Cancer | undefined {
  return cancers.find((c) => c.slug === slug)
}

export function getAllCancerSlugs(): string[] {
  return cancers.map((c) => c.slug)
}
