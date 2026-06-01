import type { GradeLevel, EvidenceType } from '@/lib/types'

export interface SymptomEvidence {
  name: string
  grade: GradeLevel
  type: EvidenceType
  text: string
}

export interface Symptom {
  slug: string
  title: string
  metaTitle: string
  intro: string
  whatIsIt: string
  evidence: SymptomEvidence[]
  avoid: string[]
  whenDoctor: string
  clinical: string
}

/**
 * Podstrony objawów. (Nudności mają osobną, rozszerzoną stronę statyczną.)
 * Treści edukacyjne — bez dawek, obok leczenia konwencjonalnego.
 */
export const symptoms: Symptom[] = [
  {
    slug: 'zmeczenie',
    title: 'Zmęczenie onkologiczne (fatigue)',
    metaTitle: 'Zmęczenie onkologiczne (fatigue)',
    intro:
      'Zmęczenie związane z chorobą nowotworową (cancer-related fatigue) to uporczywe poczucie wyczerpania nieproporcjonalne do wysiłku, które nie ustępuje po odpoczynku. Należy do najczęstszych i najbardziej obciążających objawów.',
    whatIsIt:
      'Zmęczenie onkologiczne ma wiele przyczyn: sama choroba, leczenie (chemioterapia, radioterapia), niedokrwistość, zaburzenia snu, ból, stres. Najważniejsze jest wykluczenie odwracalnych przyczyn (np. niedokrwistości, niedoczynności tarczycy) przez zespół leczący.',
    evidence: [
      {
        name: 'Aktywność fizyczna',
        grade: 'high',
        type: 'meta-analysis',
        text: 'Najmocniejsze dowody w łagodzeniu zmęczenia onkologicznego. Wytyczne ASCO-SIO wskazują wysiłek jako interwencję pierwszego wyboru, dostosowaną do możliwości pacjenta.',
      },
      {
        name: 'Uważność (MBSR/MBCR), joga',
        grade: 'moderate',
        type: 'rct',
        text: 'Interwencje umysł–ciało zmniejszają zmęczenie i poprawiają jakość życia w wybranych badaniach.',
      },
      {
        name: 'Akupunktura',
        grade: 'moderate',
        type: 'rct',
        text: 'Dane sugerują korzyść objawową jako uzupełnienie standardowej opieki.',
      },
    ],
    avoid: [
      'Całkowitego unikania ruchu — bezczynność zwykle nasila zmęczenie.',
      'Suplementów „na energię” bez konsultacji — możliwe interakcje z leczeniem.',
      'Ignorowania odwracalnych przyczyn (niedokrwistość, niedoczynność tarczycy, depresja).',
    ],
    whenDoctor:
      'Zgłoś nagłe nasilenie zmęczenia, duszność, kołatanie serca, zawroty głowy lub objawy depresji. Mogą wskazywać na odwracalną przyczynę wymagającą leczenia.',
    clinical:
      'Wytyczne ASCO-SIO 2024 rekomendują aktywność fizyczną jako interwencję pierwszego wyboru w cancer-related fatigue; interwencje oparte na uważności i akupunktura mają sygnał korzyści. Najpierw należy wykluczyć odwracalne przyczyny.',
  },
  {
    slug: 'neuropatia',
    title: 'Neuropatia po chemioterapii (CIPN)',
    metaTitle: 'Neuropatia po chemioterapii (CIPN)',
    intro:
      'Neuropatia obwodowa indukowana chemioterapią (CIPN) objawia się drętwieniem, mrowieniem, pieczeniem lub bólem dłoni i stóp. Pojawia się przy niektórych cytostatykach (np. taksany, pochodne platyny, alkaloidy barwinka).',
    whatIsIt:
      'CIPN wynika z uszkodzenia nerwów obwodowych przez chemioterapię. Nasilenie zależy od leku i dawki. Część objawów ustępuje po zakończeniu leczenia, część może się utrzymywać. Profilaktyka i leczenie są ograniczone — dlatego ważne jest zgłaszanie objawów wcześnie.',
    evidence: [
      {
        name: 'Aktywność fizyczna / ćwiczenia równoważne',
        grade: 'moderate',
        type: 'rct',
        text: 'Dane sugerują zmniejszenie objawów i poprawę funkcji; wskazywane jako element opieki wspomagającej.',
      },
      {
        name: 'Akupunktura',
        grade: 'low',
        type: 'rct',
        text: 'Wyniki niejednoznaczne; część badań sygnalizuje korzyść objawową, jakość dowodów ograniczona.',
      },
    ],
    avoid: [
      'Wysokich dawek witamin (np. B6) bez kontroli — nadmiar może sam wywołać neuropatię.',
      'Bagatelizowania objawów — wczesne zgłoszenie pozwala dostosować leczenie onkologiczne.',
      'Suplementów antyoksydacyjnych „chroniących nerwy” — dane są niespójne, a timing względem chemii bywa istotny.',
    ],
    whenDoctor:
      'Zgłoś szybko narastające drętwienie, osłabienie siły mięśni, trudności z chodzeniem lub zapinaniem guzików. Zespół leczący może zmodyfikować dawkę chemioterapii.',
    clinical:
      'Profilaktyka farmakologiczna CIPN ma ograniczone dowody (ASCO). Wśród metod wspomagających ćwiczenia mają najlepszy sygnał; akupunktura — dane niejednoznaczne. Duloksetyna pozostaje opcją o najlepszych dowodach w bólowej CIPN (decyzja lekarza).',
  },
  {
    slug: 'bol-nowotworowy',
    title: 'Ból nowotworowy',
    metaTitle: 'Ból nowotworowy',
    intro:
      'Ból jest częstym objawem w chorobie nowotworowej i jest skutecznie leczony zgodnie z drabiną analgetyczną. Metody integracyjne mogą uzupełniać leczenie przeciwbólowe, nie zastępując go.',
    whatIsIt:
      'Ból nowotworowy może mieć różne mechanizmy (receptorowy, neuropatyczny, mieszany). Podstawą jest farmakoterapia dobrana przez zespół leczący. Metody wspomagające adresują wybrane komponenty bólu i jakość życia.',
    evidence: [
      {
        name: 'Akupunktura',
        grade: 'moderate',
        type: 'meta-analysis',
        text: 'Rekomendowana w wytycznych ASCO-SIO 2022 dla bólu nowotworowego oraz bólu stawów po inhibitorach aromatazy.',
      },
      {
        name: 'Masaż',
        grade: 'moderate',
        type: 'rct',
        text: 'Wytyczne wskazują masaż jako wsparcie w bólu, zwłaszcza w opiece paliatywnej.',
      },
      {
        name: 'Techniki umysł–ciało (uważność, hipnoza, muzykoterapia)',
        grade: 'low',
        type: 'rct',
        text: 'Mogą wspierać radzenie sobie z bólem i redukować cierpienie obok leczenia farmakologicznego.',
      },
    ],
    avoid: [
      'Rezygnacji z leków przeciwbólowych na rzecz wyłącznie metod „naturalnych”.',
      'Samodzielnej modyfikacji dawek opioidów.',
      'Ziół o działaniu na krzepnięcie bez konsultacji (ryzyko interakcji).',
    ],
    whenDoctor:
      'Zgłoś ból nowy, gwałtownie narastający, ból przebijający lub niereagujący na dotychczasowe leczenie, a także objawy neurologiczne. Wymagają pilnej oceny.',
    clinical:
      'Wytyczne ASCO-SIO 2022 (ból) rekomendują akupunkturę i masaż jako uzupełnienie. Podstawą pozostaje analgezja zgodna z wytycznymi; metody integracyjne adresują wybrane komponenty bólu i jakość życia.',
  },
  {
    slug: 'lek',
    title: 'Lęk',
    metaTitle: 'Lęk w chorobie nowotworowej',
    intro:
      'Lęk jest naturalną reakcją na diagnozę i leczenie onkologiczne, ale gdy jest nasilony lub utrwalony, wymaga wsparcia. Dostępne są skuteczne metody psychologiczne i wspomagające.',
    whatIsIt:
      'Lęk może dotyczyć diagnozy, badań, leczenia i przyszłości. Psychoonkologia oferuje sprawdzone interwencje. Metody umysł–ciało stanowią wartościowe uzupełnienie, a w razie potrzeby stosuje się leczenie specjalistyczne.',
    evidence: [
      {
        name: 'Uważność (MBSR/MBCR)',
        grade: 'moderate',
        type: 'rct',
        text: 'Rekomendowana w wytycznych ASCO-SIO 2023 dla lęku i depresji; redukuje stres i poprawia jakość życia.',
      },
      {
        name: 'Joga',
        grade: 'moderate',
        type: 'rct',
        text: 'Dane wskazują korzyść w redukcji lęku i poprawie samopoczucia.',
      },
      {
        name: 'Hipnoza, muzykoterapia',
        grade: 'low',
        type: 'rct',
        text: 'Mogą zmniejszać lęk okołozabiegowy i wspierać radzenie sobie z emocjami.',
      },
    ],
    avoid: [
      'Izolowania się i odkładania rozmowy z psychoonkologiem.',
      'Samoleczenia preparatami uspokajającymi bez konsultacji (interakcje).',
      'Traktowania metod umysł–ciało jako zamiennika leczenia, gdy jest ono wskazane.',
    ],
    whenDoctor:
      'Zgłoś nasilony, uporczywy lęk, napady paniki, bezsenność lub myśli rezygnacyjne. Dostępne jest skuteczne wsparcie — warto po nie sięgnąć wcześnie.',
    clinical:
      'Wytyczne ASCO-SIO 2023 (lęk/depresja) rekomendują interwencje oparte na uważności oraz jogę. Metody umysł–ciało uzupełniają opiekę psychoonkologiczną i, gdy wskazane, leczenie farmakologiczne.',
  },
  {
    slug: 'bezsennosc',
    title: 'Bezsenność i zaburzenia snu',
    metaTitle: 'Bezsenność i zaburzenia snu',
    intro:
      'Zaburzenia snu są częste w trakcie i po leczeniu onkologicznym. Wpływają na zmęczenie, nastrój i jakość życia. Dostępne są skuteczne metody niefarmakologiczne.',
    whatIsIt:
      'Bezsenność może wynikać z lęku, bólu, objawów wazomotorycznych, leków i zaburzeń rytmu dobowego. Złotym standardem leczenia jest terapia poznawczo-behawioralna bezsenności (CBT-I).',
    evidence: [
      {
        name: 'Terapia poznawczo-behawioralna bezsenności (CBT-I)',
        grade: 'high',
        type: 'meta-analysis',
        text: 'Najlepiej udokumentowana metoda leczenia bezsenności, także u pacjentów onkologicznych.',
      },
      {
        name: 'Uważność, techniki relaksacyjne',
        grade: 'moderate',
        type: 'rct',
        text: 'Wspierają higienę snu i redukują pobudzenie utrudniające zasypianie.',
      },
      {
        name: 'Aktywność fizyczna',
        grade: 'moderate',
        type: 'rct',
        text: 'Regularny wysiłek poprawia jakość snu i zmniejsza zmęczenie w ciągu dnia.',
      },
    ],
    avoid: [
      'Długotrwałego stosowania leków nasennych bez nadzoru.',
      'Kofeiny i ekranów przed snem; nieregularnego rytmu dobowego.',
      'Melatoniny i ziół nasennych bez konsultacji (interakcje z leczeniem).',
    ],
    whenDoctor:
      'Zgłoś przewlekłą bezsenność, nasilone objawy wazomotoryczne zaburzające sen lub objawy depresji. Skuteczne leczenie jest dostępne.',
    clinical:
      'CBT-I jest interwencją pierwszego wyboru w bezsenności u pacjentów onkologicznych. Metody umysł–ciało i aktywność fizyczna stanowią wsparcie; farmakoterapia — decyzja lekarza.',
  },
  {
    slug: 'zaburzenia-poznawcze',
    title: 'Zaburzenia poznawcze („chemo-brain”)',
    metaTitle: 'Zaburzenia poznawcze po leczeniu („chemo-brain”)',
    intro:
      'Część pacjentów zgłasza trudności z pamięcią, koncentracją i tempem myślenia w trakcie lub po leczeniu — potocznie „chemo-brain” (cancer-related cognitive impairment).',
    whatIsIt:
      'Przyczyny są wieloczynnikowe: leczenie, zmęczenie, zaburzenia snu, stres, leki. Objawy zwykle są łagodne do umiarkowanych i często się poprawiają. Pomocna jest ocena i rehabilitacja poznawcza.',
    evidence: [
      {
        name: 'Aktywność fizyczna',
        grade: 'moderate',
        type: 'rct',
        text: 'Dane sugerują korzyść dla funkcji poznawczych i zmęczenia.',
      },
      {
        name: 'Trening poznawczy / rehabilitacja',
        grade: 'moderate',
        type: 'rct',
        text: 'Ustrukturyzowane ćwiczenia poznawcze mogą poprawiać codzienne funkcjonowanie.',
      },
      {
        name: 'Uważność',
        grade: 'low',
        type: 'rct',
        text: 'Może wspierać uwagę i radzenie sobie z obciążeniem poznawczym.',
      },
    ],
    avoid: [
      'Suplementów „na pamięć” bez dowodów i bez konsultacji.',
      'Przeciążania i braku przerw — zmęczenie nasila objawy.',
      'Ignorowania zaburzeń snu i nastroju, które pogarszają funkcje poznawcze.',
    ],
    whenDoctor:
      'Zgłoś nasilone lub szybko postępujące zaburzenia, które utrudniają codzienne funkcjonowanie — wymagają oceny i wykluczenia innych przyczyn.',
    clinical:
      'W cancer-related cognitive impairment dowody wspierają aktywność fizyczną i rehabilitację poznawczą; interwencje uważności mają sygnał korzyści. Ważna jest optymalizacja snu, nastroju i zmęczenia.',
  },
  {
    slug: 'obrzek-limfatyczny',
    title: 'Obrzęk limfatyczny',
    metaTitle: 'Obrzęk limfatyczny po leczeniu onkologicznym',
    intro:
      'Obrzęk limfatyczny to gromadzenie się chłonki, najczęściej w kończynie, po operacji węzłów chłonnych lub radioterapii. Wczesne rozpoznanie i leczenie poprawiają rokowanie.',
    whatIsIt:
      'Standardem jest kompleksowa terapia przeciwobrzękowa (CDT): drenaż limfatyczny, kompresjoterapia, ćwiczenia i pielęgnacja skóry. Metody wspomagające uzupełniają tę terapię.',
    evidence: [
      {
        name: 'Kompleksowa terapia przeciwobrzękowa (CDT)',
        grade: 'high',
        type: 'meta-analysis',
        text: 'Podstawa leczenia obrzęku limfatycznego — kompresja, drenaż, ćwiczenia, pielęgnacja skóry.',
      },
      {
        name: 'Ćwiczenia z oporem',
        grade: 'moderate',
        type: 'rct',
        text: 'Bezpieczne i korzystne; nie nasilają obrzęku, gdy są właściwie prowadzone.',
      },
      {
        name: 'Akupunktura',
        grade: 'low',
        type: 'rct',
        text: 'Dane ograniczone; unikać nakłuwania zajętej kończyny.',
      },
    ],
    avoid: [
      'Nakłuwania, pomiarów ciśnienia i urazów zajętej kończyny.',
      'Przegrzewania (sauna, gorące okłady) bez konsultacji.',
      'Rezygnacji z kompresjoterapii zaleconej przez fizjoterapeutę.',
    ],
    whenDoctor:
      'Zgłoś nagły wzrost obrzęku, zaczerwienienie, ocieplenie, ból lub gorączkę — mogą wskazywać na infekcję (różę) wymagającą pilnego leczenia.',
    clinical:
      'CDT pozostaje standardem w obrzęku limfatycznym. Trening oporowy jest bezpieczny i korzystny. Metody integracyjne odgrywają rolę pomocniczą; kluczowa jest profilaktyka infekcji.',
  },
  {
    slug: 'wsparcie-zywieniowe',
    title: 'Wsparcie żywieniowe i kacheksja',
    metaTitle: 'Wsparcie żywieniowe i kacheksja onkologiczna',
    intro:
      'Niedożywienie i kacheksja (utrata masy ciała i mięśni) pogarszają tolerancję leczenia i rokowanie. Wczesna interwencja żywieniowa jest istotnym elementem opieki.',
    whatIsIt:
      'Kacheksja onkologiczna to złożony zespół metaboliczny, którego nie odwraca samo zwiększenie kalorii. Podstawą jest opieka dietetyka klinicznego, leczenie objawów utrudniających jedzenie i aktywność fizyczna.',
    evidence: [
      {
        name: 'Interwencja dietetyczna (poradnictwo, żywienie medyczne)',
        grade: 'high',
        type: 'meta-analysis',
        text: 'Wczesne poradnictwo dietetyczne poprawia stan odżywienia i jakość życia.',
      },
      {
        name: 'Aktywność fizyczna / trening oporowy',
        grade: 'moderate',
        type: 'rct',
        text: 'Wspiera utrzymanie masy mięśniowej w połączeniu z odpowiednim odżywieniem.',
      },
      {
        name: 'Kwasy omega-3 (EPA/DHA)',
        grade: 'low',
        type: 'meta-analysis',
        text: 'W kacheksji sygnał wpływu na utrzymanie masy ciała w wybranych podgrupach; dane wymagają potwierdzenia.',
      },
    ],
    avoid: [
      'Restrykcyjnych „diet antynowotworowych” grożących niedożywieniem.',
      'Długich głodówek w trakcie aktywnego leczenia bez nadzoru.',
      'Suplementów wysokodawkowych bez konsultacji (interakcje, obciążenie).',
    ],
    whenDoctor:
      'Zgłoś niezamierzony spadek masy ciała, utratę apetytu, trudności w połykaniu lub uporczywe nudności — wymagają wsparcia żywieniowego i leczenia objawowego.',
    clinical:
      'Wczesna interwencja żywieniowa i aktywność fizyczna są podstawą w niedożywieniu i kacheksji. Omega-3 mają sygnał korzyści w wybranych podgrupach. Kluczowe jest leczenie objawów ograniczających przyjmowanie pokarmu.',
  },
]

export function getSymptom(slug: string): Symptom | undefined {
  return symptoms.find((s) => s.slug === slug)
}

export function getAllSymptomSlugs(): string[] {
  return symptoms.map((s) => s.slug)
}
