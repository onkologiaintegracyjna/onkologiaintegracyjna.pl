import type { Method } from '@/lib/types'
import { gradeOrder } from '@/lib/labels'

/**
 * Baza metod onkologii integracyjnej — 26 pozycji ze zweryfikowanymi PMID/DOI.
 * Pola publiczne celowo NIE zawierają dawek ani schematów (zasada bezpieczeństwa).
 * Każda metoda: opis stanu wiedzy, nie zalecenie terapii.
 */
export const methods: Method[] = [
  // ===== Substancje farmakologiczne uzupełniające =====
  {
    slug: 'wlewy-dozylne-witaminy-c',
    name: 'Wlewy dożylne witaminy C (IVC)',
    category: 'substance',
    shortDescription:
      'Wysokie dawki kwasu askorbinowego podawane dożylnie, badane jako leczenie wspomagające.',
    evidenceProfile: {
      effectSignal:
        'Metaanaliza 8 RCT (n=2722) raportuje pooled median survival ratio 1,83 (95% CI 1,40–2,40; p<0,001); RCT II PACMAN 2.1 w raku trzustki: OS 16,0 vs 8,3 mies. (HR 0,46).',
      grade: 'moderate',
      evidenceType: 'meta-analysis',
      clinicalStatus: 'off-label-adjunct',
      evidenceGap:
        'Brak akceptacji w głównych wytycznych (ASCO/NCCN/ESMO); heterogeniczność protokołów i populacji; brak rejestracji onkologicznej.',
    },
    howItWorks:
      'W wysokich stężeniach dożylnych witamina C działa jako prooksydant, generując nadtlenek wodoru selektywnie toksyczny dla części komórek nowotworowych w modelach przedklinicznych.',
    research:
      'Metaanaliza 2025 (PMID 40613397) raportuje pooled median survival ratio 1,83 (GRADE moderate, n=2722). RCT II PACMAN 2.1 (PMID 39369582) w raku trzustki: OS 16,0 vs 8,3 mies., HR 0,46. RCT III VITALITY (PMID 35929990) nie wykazał przewagi w pierwszoliniowym leczeniu raka jelita grubego z przerzutami; sygnał w podgrupie RAS-mutant wymaga potwierdzenia. Wyniki przeżyciowe pozostają niejednoznaczne.',
    safety:
      'Obok, nie zamiast standardowego leczenia onkologicznego. Wymaga monitorowania: niedobór G6PD (ryzyko hemolizy), funkcja nerek, kamica szczawianowa.',
    talkToDoctor:
      'Zapytaj o interakcje z chemioterapią, monitorowanie funkcji nerek i oznaczenie G6PD przed rozpoczęciem.',
    references: [
      { pmid: '40613397', title: 'Metaanaliza wlewów dożylnych witaminy C w onkologii', year: 2025, note: 'pooled median survival ratio 1,83 (95% CI 1,40–2,40); n=2722; GRADE moderate' },
      { pmid: '39369582', title: 'PACMAN 2.1 — RCT fazy II, rak trzustki', year: 2024, note: 'OS 16,0 vs 8,3 mies.; HR 0,46' },
      { pmid: '35929990', title: 'VITALITY — RCT fazy III, przerzutowy rak jelita grubego', year: 2022, note: 'brak przewagi w pierwszej linii; sygnał w podgrupie RAS-mutant' },
      { pmid: '26541605', title: 'Yun et al. — mechanizm selektywnej toksyczności (KRAS/BRAF)', year: 2015, note: 'dane przedkliniczne' },
    ],
  },
  {
    slug: 'jemiola',
    name: 'Jemioła / Viscum album (Iscador, Helixor, Abnoba viscum)',
    category: 'substance',
    shortDescription:
      'Preparaty z Viscum album badane jako leczenie wspomagające — głównie poprawa jakości życia.',
    evidenceProfile: {
      effectSignal:
        'RCT III (rak trzustki zaawansowany): OS 4,8 vs 2,7 mies. (p<0,001); przegląd Cochrane wskazuje sygnał korzyści w jakości życia.',
      grade: 'low',
      evidenceType: 'meta-analysis',
      clinicalStatus: 'supportive-care',
      evidenceGap:
        'Heterogeniczność preparatów rynkowych (różne profile lektyn); brak metaanalizy obejmującej przeżycie mimo istnienia RCT III.',
    },
    howItWorks:
      'Wyciągi z jemioły zawierają lektyny i wiskotoksyny o działaniu immunomodulacyjnym; opisywano stymulację odporności wrodzonej w badaniach przedklinicznych i klinicznych.',
    research:
      'Przegląd systematyczny Kienle & Kiene 2010 (PMID 20483874) i Cochrane (Loef & Walach 2020) sygnalizują korzyść w jakości życia bez twardych dowodów dla przeżycia całkowitego. RCT III Tröger 2013 (PMID 23890767) w zaawansowanym raku trzustki: OS 4,8 vs 2,7 mies. (p<0,001, n=220). W Niemczech preparaty obligatoryjnie pokrywane w onkologii paliatywnej.',
    safety:
      'Obok, nie zamiast leczenia standardowego. Stosowanie wymaga wykwalifikowanego lekarza; możliwe reakcje miejscowe i ogólne.',
    talkToDoctor:
      'Zapytaj o dobór preparatu, monitorowanie reakcji i bezpieczeństwo przy immunoterapii.',
    references: [
      { pmid: '20483874', title: 'Kienle & Kiene — przegląd systematyczny jemioły', year: 2010 },
      { doi: '10.1002/14651858.CD007893.pub2', title: 'Cochrane — jemioła w onkologii (QoL)', year: 2020 },
      { pmid: '23890767', title: 'Tröger 2013 — RCT III, rak trzustki', year: 2013, note: 'OS 4,8 vs 2,7 mies. (p<0,001), n=220' },
    ],
  },
  {
    slug: 'kurkumina',
    name: 'Kurkumina',
    category: 'substance',
    shortDescription:
      'Polifenol z kurkumy badany jako składnik wspomagający; dane głównie z badań wczesnofazowych.',
    evidenceProfile: {
      effectSignal:
        'Badania fazy I/II sugerują bezpieczeństwo i wstępny sygnał (np. kurkumina + FOLFOX w raku jelita grubego); wyniki kliniczne ograniczone.',
      grade: 'low',
      evidenceType: 'rct',
      clinicalStatus: 'off-label-adjunct',
      evidenceGap:
        'Brak RCT III; małe próby; problem niskiej biodostępności i standaryzacji preparatów.',
    },
    howItWorks:
      'Opisywane działanie przeciwzapalne i antyoksydacyjne oraz modulacja szlaków STAT3/NF-κB w modelach przedklinicznych; znaczenie kliniczne wymaga potwierdzenia.',
    research:
      'RCT IIa Howells 2019 (PMID 31132111): kurkumina + FOLFOX w raku jelita grubego z przerzutami — bezpieczna, sygnał korzyści (n=27). Badania fazy I (PMID 20859741) potwierdzają bezpieczeństwo przy gemcytabinie. Jakość dowodów niska.',
    safety:
      'Obok, nie zamiast leczenia. Możliwe interakcje z lekami metabolizowanymi przez CYP3A4 i z lekami przeciwkrzepliwymi.',
    talkToDoctor:
      'Zapytaj o możliwe interakcje z chemioterapią i lekami przeciwkrzepliwymi oraz o timing względem leczenia.',
    references: [
      { pmid: '31132111', title: 'Howells 2019 — RCT II, kurkumina + FOLFOX', year: 2019, note: 'n=27; sygnał korzyści' },
      { pmid: '20859741', title: 'Kanai 2011 — faza I, rak trzustki + gemcytabina', year: 2011 },
    ],
  },
  {
    slug: 'melatonina',
    name: 'Melatonina',
    category: 'substance',
    shortDescription:
      'Hormon szyszynki badany jako adiuwant onkologiczny i w zaburzeniach snu u pacjentów.',
    evidenceProfile: {
      effectSignal:
        'Starsze metaanalizy sygnalizują redukcję toksyczności chemioterapii i sygnał korzyści w odpowiedzi; dane wymagają odświeżenia.',
      grade: 'low',
      evidenceType: 'meta-analysis',
      clinicalStatus: 'supportive-care',
      evidenceGap:
        'Heterogeniczność dawek i schematów; brak nowszych RCT III; nie figuruje w aktualnych wytycznych ASCO-SIO.',
    },
    howItWorks:
      'Działanie chronobiologiczne i antyoksydacyjne; w badaniach opisywano wpływ na sen oraz modulację toksyczności leczenia.',
    research:
      'Metaanalizy Seely 2012 (PMID 22019490) i Wang 2012 (PMID 22271210) sygnalizują redukcję rocznej śmiertelności i toksyczności oraz poprawę odpowiedzi w guzach litych jako adiuwant chemioterapii. Sygnał utrzymuje się historycznie, ale brak nowszych dużych RCT.',
    safety:
      'Obok, nie zamiast leczenia. Interakcje z lekami immunosupresyjnymi i przeciwkrzepliwymi.',
    talkToDoctor:
      'Zapytaj o wpływ na sen, interakcje lekowe i zasadność stosowania w Twojej sytuacji.',
    references: [
      { pmid: '22019490', title: 'Seely 2012 — metaanaliza, adiuwant chemioterapii', year: 2012 },
      { pmid: '22271210', title: 'Wang 2012 — metaanaliza, guzy lite', year: 2012 },
    ],
  },
  {
    slug: 'witamina-d',
    name: 'Witamina D',
    category: 'substance',
    shortDescription:
      'Suplementacja cholekalcyferolu — sygnał wpływu na śmiertelność z powodu raka i zdrowie kości.',
    evidenceProfile: {
      effectSignal:
        'Metaanaliza: suplementacja obniża śmiertelność z powodu raka (RR 0,87); RCT III VITAL nie wykazał redukcji zachorowalności (sygnał w późnym follow-up).',
      grade: 'moderate',
      evidenceType: 'meta-analysis',
      clinicalStatus: 'supportive-care',
      evidenceGap:
        'Wpływ głównie na śmiertelność (efekt późny), nie na zachorowalność; brak jednoznacznych wytycznych dawkowych dla onkologii.',
    },
    howItWorks:
      'Witamina D reguluje gospodarkę wapniowo-fosforanową i wpływa na różnicowanie komórek oraz odpowiedź immunologiczną; znaczenie onkologiczne jest przedmiotem badań.',
    research:
      'Metaanaliza Keum 2019 (PMID 30796437): suplementacja obniża śmiertelność z powodu raka (RR 0,87). RCT III VITAL Manson 2019 (PMID 30415629): brak redukcji zachorowalności, sygnał w późnej obserwacji. Korzyść dotyczy raczej śmiertelności niż zapobiegania.',
    safety:
      'Obok leczenia konwencjonalnego. Ryzyko hiperkalcemii przy nadmiarze — wymaga monitorowania stężenia 25(OH)D.',
    talkToDoctor:
      'Zapytaj o oznaczenie 25(OH)D i bezpieczny zakres suplementacji w Twojej sytuacji.',
    references: [
      { pmid: '30796437', title: 'Keum 2019 — metaanaliza śmiertelności', year: 2019, note: 'RR 0,87' },
      { pmid: '30415629', title: 'Manson 2019 (VITAL) — RCT III', year: 2019 },
    ],
  },
  {
    slug: 'omega-3',
    name: 'Kwasy omega-3 (EPA/DHA)',
    category: 'substance',
    shortDescription:
      'Kwasy tłuszczowe omega-3 badane głównie w kontekście kacheksji onkologicznej i tolerancji leczenia.',
    evidenceProfile: {
      effectSignal:
        'Metaanaliza 2024 wskazuje istotny wzrost masy ciała w kacheksji onkologicznej w podgrupach RCT.',
      grade: 'low',
      evidenceType: 'meta-analysis',
      clinicalStatus: 'supportive-care',
      evidenceGap:
        'Heterogeniczność preparatów, dawkowania i czasu terapii; brak RCT III dla większości wskazań poza kacheksją.',
    },
    howItWorks:
      'EPA/DHA modulują procesy zapalne i metabolizm; w kacheksji opisywano wpływ na utrzymanie masy ciała.',
    research:
      'Metaanaliza 2024 (PMID 38220400): omega-3 wiąże się z istotnym wzrostem masy ciała w kacheksji onkologicznej w wybranych podgrupach RCT. Dla pozostałych wskazań dane są ograniczone.',
    safety:
      'Obok leczenia konwencjonalnego. Działanie przeciwzakrzepowe — uwzględnić przy leczeniu przeciwkrzepliwym i okołooperacyjnie.',
    talkToDoctor:
      'Zapytaj o zasadność przy ryzyku niedożywienia oraz o ostrożność przy lekach przeciwkrzepliwych.',
    references: [
      { pmid: '38220400', title: 'Metaanaliza 2024 — omega-3 w kacheksji onkologicznej', year: 2024, note: 'WMD masy ciała dodatni w podgrupach' },
    ],
  },
  {
    slug: 'glutamina',
    name: 'Glutamina',
    category: 'substance',
    shortDescription:
      'Aminokwas badany w zapobieganiu mucositis. Uwaga: przeciwwskazana w wybranym wskazaniu.',
    evidenceProfile: {
      effectSignal:
        'Sygnały sprzeczne; wytyczne MASCC/ISOO 2020 zawierają rekomendację PRZECIWKO parenteralnej glutaminie w przeszczepieniu komórek krwiotwórczych (HSCT).',
      grade: 'low',
      evidenceType: 'meta-analysis',
      clinicalStatus: 'not-recommended',
      evidenceGap:
        'Status silnie zależny od drogi podania, populacji i wskazania — brak jednej ogólnej rekomendacji.',
    },
    howItWorks:
      'Glutamina jest substratem energetycznym dla szybko dzielących się komórek nabłonka; badano jej rolę w ochronie błon śluzowych.',
    research:
      'Wytyczne MASCC/ISOO 2020 (Elad et al., DOI 10.1002/cncr.33100) rekomendują PRZECIWKO parenteralnej glutaminie w HSCT. Przegląd Cochrane (Sayles 2016) wskazuje efekt niejednoznaczny z umiarkowaną korzyścią w wybranych schematach.',
    safety:
      'Obok leczenia konwencjonalnego. Wyraźnie przeciwwskazana parenteralnie w HSCT wg MASCC/ISOO 2020.',
    talkToDoctor:
      'Zapytaj, czy w Twoim wskazaniu i drodze podania istnieje korzyść lub przeciwwskazanie.',
    references: [
      { doi: '10.1002/cncr.33100', title: 'Elad 2020 (MASCC/ISOO) — wytyczne mucositis', year: 2020, note: 'rekomendacja przeciw parenteralnej glutaminie w HSCT' },
      { doi: '10.1002/14651858.CD012162', title: 'Cochrane (Sayles 2016)', year: 2016, note: 'efekt niejednoznaczny' },
    ],
  },
  {
    slug: 'n-acetylocysteina',
    name: 'N-acetylocysteina (NAC)',
    category: 'experimental',
    experimental: true,
    shortDescription:
      'Prekursor glutationu o niejednoznacznym profilu w onkologii — sygnały przedkliniczne budzą wątpliwości.',
    evidenceProfile: {
      effectSignal:
        'Dane przedkliniczne sugerują, że NAC może w pewnych modelach promować progresję nowotworu; dane kliniczne są sporne.',
      grade: 'very-low',
      evidenceType: 'preclinical',
      clinicalStatus: 'experimental',
      evidenceGap:
        'Sprzeczne sygnały przedkliniczne (ochrona zdrowych tkanek vs możliwa promocja progresji); brak jednoznacznych danych klinicznych.',
    },
    howItWorks:
      'NAC zwiększa pulę glutationu i działa antyoksydacyjnie; w modelach z mutacją KRAS opisywano potencjalnie niekorzystny wpływ na progresję.',
    research:
      'Sayin 2014 (Sci Transl Med, PMID 24477002): NAC może promować progresję nowotworu w modelach przedklinicznych. Brak rejestracji onkologicznej; substancja zarejestrowana jako mukolityk i odtrutka paracetamolu.',
    safety:
      'Obszar eksperymentalny w onkologii. Nie stosować jako element leczenia przeciwnowotworowego bez nadzoru — możliwy wpływ na efekt terapii.',
    talkToDoctor:
      'Jeśli przyjmujesz NAC z innych wskazań, poinformuj onkologa — sygnały przedkliniczne są niejednoznaczne.',
    references: [
      { pmid: '24477002', title: 'Sayin 2014 — model przedkliniczny KRAS', year: 2014, note: 'dane przedkliniczne; sygnał ryzyka progresji' },
    ],
  },
  // ===== Konwencjonalne technologie / procedury (nie CAM) =====
  {
    slug: 'hipertermia-rht',
    name: 'Hipertermia lokoregionalna (RHT)',
    category: 'physical',
    shortDescription:
      'Lokoregionalna hipertermia stosowana łącznie z radio-/chemioterapią — metoda z wytycznymi, nie pseudomedycyna.',
    evidenceProfile: {
      effectSignal:
        'RCT III (mięsaki): 10-letni DFS 67% vs 50%; RCT III (rak szyjki): pełna odpowiedź 83% vs 57%, 3-letni OS 51% vs 27%.',
      grade: 'moderate',
      evidenceType: 'rct',
      clinicalStatus: 'guideline-supported',
      evidenceGap:
        'Ograniczona dostępność technologii i standaryzacja; brak pełnej refundacji w Polsce.',
    },
    howItWorks:
      'Kontrolowane podgrzanie tkanki (ok. 40–43°C) zwiększa wrażliwość komórek na radio- i chemioterapię oraz poprawia ukrwienie i utlenowanie guza.',
    research:
      'RCT III Issels 2018 (PMID 29450452, EORTC/ESHO, mięsaki): 10-letni DFS 67% vs 50% (p=0,017). RCT III van der Zee 2000 (PMID 10841125, rak szyjki): CR 83% vs 57%; OS 51% vs 27% w 3 lata. Uwzględniona w wytycznych DEGRO/ESMO dla wybranych wskazań. To lokoregionalna RHT — nie ogólnoustrojowa hipertermia (WBH).',
    safety:
      'Obok, nie zamiast leczenia. Wykonywana w wyspecjalizowanych ośrodkach pod nadzorem; nie mylić z hipertermią ogólnoustrojową.',
    talkToDoctor:
      'Zapytaj, czy w Twoim wskazaniu istnieją dane na połączenie RHT z radio-/chemioterapią i gdzie jest dostępna.',
    references: [
      { pmid: '29450452', title: 'Issels 2018 — RCT III, mięsaki tkanek miękkich', year: 2018, note: 'DFS 67% vs 50% (10 lat)' },
      { pmid: '10841125', title: 'van der Zee 2000 — RCT III, rak szyjki macicy', year: 2000, note: 'OS 51% vs 27% (3 lata)' },
    ],
  },
  {
    slug: 'tlenoterapia-hiperbaryczna',
    name: 'Tlenoterapia hiperbaryczna (HBOT)',
    category: 'physical',
    shortDescription:
      'Tlen pod podwyższonym ciśnieniem — zarejestrowana procedura medyczna, refundowana w wybranych wskazaniach.',
    evidenceProfile: {
      effectSignal:
        'Przegląd Cochrane: HBOT redukuje ryzyko martwicy popromiennej kości i wspomaga gojenie ran popromiennych.',
      grade: 'high',
      evidenceType: 'meta-analysis',
      clinicalStatus: 'guideline-supported',
      evidenceGap:
        'Ograniczona dostępność komór; refundacja tylko dla wybranych wskazań UHMS.',
    },
    howItWorks:
      'Oddychanie 100% tlenem pod zwiększonym ciśnieniem zwiększa utlenowanie niedotlenionych tkanek, wspomagając gojenie i angiogenezę naprawczą.',
    research:
      'Cochrane Bennett 2016 (DOI 10.1002/14651858.CD005005.pub4): HBOT redukuje ryzyko osteoradionekrozy i wspomaga gojenie powikłań popromiennych. UHMS wymienia 14 zatwierdzonych wskazań klinicznych. W Polsce NFZ refunduje wybrane wskazania. To nie tlenoterapia dożylna.',
    safety:
      'Obok leczenia konwencjonalnego. Przeciwwskazania m.in. nieleczona odma; procedura prowadzona w ośrodku hiperbarycznym.',
    talkToDoctor:
      'Zapytaj, czy Twoje wskazanie (np. uszkodzenia popromienne) mieści się w refundowanych wskazaniach UHMS.',
    references: [
      { doi: '10.1002/14651858.CD005005.pub4', title: 'Bennett 2016 (Cochrane) — HBOT', year: 2016 },
      { guideline: 'UHMS', title: 'UHMS — 14 zatwierdzonych wskazań klinicznych', year: 2023 },
    ],
  },
  {
    slug: 'terapia-fotodynamiczna',
    name: 'Terapia fotodynamiczna (PDT)',
    category: 'physical',
    shortDescription:
      'Aktywacja światłem fotosensybilizatora — procedura zarejestrowana przez FDA/EMA w wybranych nowotworach.',
    evidenceProfile: {
      effectSignal:
        'Zatwierdzona dla kilku wskazań onkologicznych; RCT III wykazał redukcję progresji w przełyku Barretta z dysplazją.',
      grade: 'high',
      evidenceType: 'rct',
      clinicalStatus: 'guideline-supported',
      evidenceGap:
        'Ograniczona dostępność technologii; ściśle określone wskazania.',
    },
    howItWorks:
      'Podany fotosensybilizator gromadzi się w tkance, a naświetlenie światłem o odpowiedniej długości generuje reaktywne formy tlenu niszczące komórki w obszarze naświetlania.',
    research:
      'Przegląd Agostinis 2011 (PMID 21617154) omawia mechanizm i wskazania. RCT III Overholt 2007 (PMID 17643434): PDT w przełyku Barretta — redukcja progresji do raka. Porfimer sodu zatwierdzony przez FDA dla 6 wskazań onkologicznych; w Polsce refundacja NFZ dla wybranych wskazań.',
    safety:
      'Obok leczenia konwencjonalnego. Fotouczulenie skóry utrzymuje się przez kilka tygodni — wymaga ochrony przed światłem.',
    talkToDoctor:
      'Zapytaj, czy PDT jest opcją dla Twojego wskazania i jak przygotować się do fotowrażliwości.',
    references: [
      { pmid: '21617154', title: 'Agostinis 2011 — przegląd PDT', year: 2011 },
      { pmid: '17643434', title: 'Overholt 2007 — RCT III, przełyk Barretta', year: 2007 },
    ],
  },
  {
    slug: 'ttfields',
    name: 'TTFields (Optune) — pola elektryczne o przemiennej częstotliwości',
    category: 'physical',
    shortDescription:
      'Pola elektryczne zaburzające podział komórek — urządzenie zarejestrowane przez FDA i z oznaczeniem CE.',
    evidenceProfile: {
      effectSignal:
        'RCT III EF-14 (glejak): OS 20,9 vs 16,0 mies. (HR 0,63; p<0,001); RCT II STELLAR (międzybłoniak): OS 18,2 mies.',
      grade: 'high',
      evidenceType: 'rct',
      clinicalStatus: 'guideline-supported',
      evidenceGap:
        'Brak refundacji NFZ w Polsce (dostępne komercyjnie); konieczność długiego noszenia urządzenia.',
    },
    howItWorks:
      'Naprzemienne pola elektryczne o niskiej intensywności zaburzają tworzenie wrzeciona podziałowego w dzielących się komórkach nowotworowych.',
    research:
      'RCT III Stupp 2017 (PMID 29260225, EF-14): w nowo rozpoznanym glejaku OS 20,9 vs 16,0 mies. (HR 0,63; p<0,001; n=695). RCT II STELLAR Ceresoli 2019 (PMID 31628016): międzybłoniak opłucnej, OS 18,2 mies. z TTFields + chemioterapia. FDA approved (2011–2024), EU CE mark.',
    safety:
      'Obok leczenia konwencjonalnego. Najczęstsze działania niepożądane to podrażnienia skóry pod elektrodami.',
    talkToDoctor:
      'Zapytaj, czy TTFields jest opcją dla Twojego rozpoznania i jak wygląda dostępność w Polsce.',
    references: [
      { pmid: '29260225', title: 'Stupp 2017 (EF-14) — RCT III, glejak', year: 2017, note: 'OS 20,9 vs 16,0 mies.; HR 0,63' },
      { pmid: '31628016', title: 'Ceresoli 2019 (STELLAR) — RCT II, międzybłoniak', year: 2019 },
    ],
  },
  // ===== Medycyna stylu życia (guideline-supported) =====
  {
    slug: 'aktywnosc-fizyczna',
    name: 'Aktywność fizyczna w onkologii',
    category: 'lifestyle',
    shortDescription:
      'Regularny, dostosowany wysiłek fizyczny — najmocniejsza baza dowodowa wśród metod wspomagających.',
    evidenceProfile: {
      effectSignal:
        'Metaanaliza 2026 (13 RCT, n=3282): obniżenie śmiertelności całkowitej HR 0,74; rekomendacja nr 1 ASCO-SIO dla zmęczenia onkologicznego.',
      grade: 'high',
      evidenceType: 'meta-analysis',
      clinicalStatus: 'guideline-supported',
      evidenceGap:
        'Optymalny rodzaj i intensywność wysiłku różnią się między grupami; wymaga indywidualizacji.',
    },
    howItWorks:
      'Wysiłek poprawia wydolność, masę i siłę mięśni, reguluje metabolizm i stan zapalny oraz zmniejsza zmęczenie związane z leczeniem.',
    research:
      'Metaanaliza 2026 (PMID 41894932, 13 RCT, n=3282): obniżenie śmiertelności całkowitej HR 0,74 (umiarkowana pewność). Wytyczne ASCO-SIO 2024 (Bower, PMID 38754041): rekomendacja nr 1 dla zmęczenia. ACSM 2019 (PMID 31626055) i metaanaliza McTiernan 2019 (PMID 31626056): redukcja ryzyka nawrotu raka piersi i jelita.',
    safety:
      'Obok leczenia konwencjonalnego. Program należy dostosować indywidualnie (przerzuty kostne, anemia, kardiotoksyczność).',
    talkToDoctor:
      'Zapytaj o bezpieczny zakres wysiłku w Twojej sytuacji i o możliwość rehabilitacji onkologicznej.',
    references: [
      { pmid: '41894932', title: 'Metaanaliza 2026 — aktywność a śmiertelność', year: 2026, note: '13 RCT, n=3282; HR 0,74' },
      { pmid: '38754041', title: 'Bower 2024 (ASCO-SIO) — zmęczenie', year: 2024 },
      { pmid: '31626055', title: 'Campbell 2019 (ACSM) — wytyczne', year: 2019 },
    ],
  },
  {
    slug: 'dieta-srodziemnomorska',
    name: 'Dieta śródziemnomorska',
    category: 'lifestyle',
    shortDescription:
      'Wzorzec żywieniowy o najlepszych danych w prewencji pierwotnej i ochronie sercowo-naczyniowej.',
    evidenceProfile: {
      effectSignal:
        'RCT III PREDIMED: prewencja pierwotna raka piersi — HR 0,32 dla diety z oliwą z oliwek extra virgin.',
      grade: 'moderate',
      evidenceType: 'rct',
      clinicalStatus: 'guideline-supported',
      evidenceGap:
        'Korzyść głównie w prewencji pierwotnej i kardiologii, nie w aktywnej terapii onkologicznej.',
    },
    howItWorks:
      'Bogata w warzywa, oliwę, ryby i pełne ziarna; korzystnie wpływa na profil zapalny, metaboliczny i sercowo-naczyniowy.',
    research:
      'RCT III PREDIMED/Toledo 2015 (PMID 26365989, n=4282): prewencja pierwotna raka piersi — HR 0,32 dla diety z oliwą extra virgin. Reanaliza Estruch 2018 (PMID 29897866): redukcja zdarzeń sercowo-naczyniowych. To nie jest „dieta lecznicza" w aktywnej onkologii.',
    safety:
      'Obok leczenia konwencjonalnego. Bezpieczny, ogólnie zdrowy wzorzec żywieniowy; w trakcie leczenia warto skonsultować z dietetykiem.',
    talkToDoctor:
      'Zapytaj o wsparcie dietetyka klinicznego, zwłaszcza przy ryzyku niedożywienia w trakcie leczenia.',
    references: [
      { pmid: '26365989', title: 'Toledo 2015 (PREDIMED) — RCT III', year: 2015, note: 'rak piersi HR 0,32' },
      { pmid: '29897866', title: 'Estruch 2018 (PREDIMED, reanaliza)', year: 2018 },
    ],
  },
  {
    slug: 'akupunktura',
    name: 'Akupunktura w onkologii',
    category: 'supportive-care',
    shortDescription:
      'Metoda rekomendowana w wytycznych ASCO-SIO dla bólu nowotworowego i wybranych objawów.',
    evidenceProfile: {
      effectSignal:
        'Wytyczne ASCO-SIO 2022 rekomendują akupunkturę w bólu nowotworowym i bólu stawów po inhibitorach aromatazy (AIMSS); RCT III potwierdza redukcję bólu stawów.',
      grade: 'moderate',
      evidenceType: 'meta-analysis',
      clinicalStatus: 'guideline-supported',
      evidenceGap:
        'Heterogeniczność protokołów i trudność z grupą kontrolną (akupunktura pozorowana); brak refundacji w Polsce.',
    },
    howItWorks:
      'Proponowane mechanizmy obejmują modulację układu nerwowego i wydzielania neuroprzekaźników; pełny mechanizm pozostaje badany.',
    research:
      'Wytyczne ASCO-SIO 2022 (Mao, PMID 36122322): rekomendacja dla bólu nowotworowego i AIMSS. RCT III Hershman 2018 (PMID 29998338, SWOG S1200): redukcja bólu stawów po inhibitorach aromatazy. Refundowana w wybranych wskazaniach m.in. w Niemczech i Wielkiej Brytanii.',
    safety:
      'Obok, nie zamiast leczenia. Ostrożność przy małopłytkowości, neutropenii i obrzęku limfatycznym kończyny; wybór certyfikowanego terapeuty.',
    talkToDoctor:
      'Zapytaj o bezpieczeństwo przy obniżonych płytkach i ryzyku infekcji oraz o wybór wykwalifikowanego akupunkturzysty.',
    references: [
      { pmid: '36122322', title: 'Mao 2022 (ASCO-SIO) — ból nowotworowy', year: 2022 },
      { pmid: '29998338', title: 'Hershman 2018 (SWOG S1200) — RCT III, AIMSS', year: 2018 },
    ],
  },
  {
    slug: 'mbsr-mbcr',
    name: 'Uważność (MBSR / MBCR)',
    category: 'mind-body',
    shortDescription:
      'Programy redukcji stresu oparte na uważności — rekomendowane w wytycznych dla lęku i depresji.',
    evidenceProfile: {
      effectSignal:
        'Wytyczne ASCO-SIO 2023 rekomendują interwencje oparte na uważności dla lęku i depresji; RCT wykazują redukcję stresu i poprawę jakości życia.',
      grade: 'moderate',
      evidenceType: 'rct',
      clinicalStatus: 'guideline-supported',
      evidenceGap:
        'Wymaga wykwalifikowanego instruktora; korzyść głównie psychospołeczna.',
    },
    howItWorks:
      'Trening uważności (medytacja, praca z oddechem, świadomość ciała) zmniejsza reaktywność na stres i poprawia regulację emocji.',
    research:
      'Wytyczne ASCO-SIO 2023 (Carlson, PMID 37582238): rekomendacja dla lęku i depresji. RCT II Carlson 2013 (PMID 23918953, MBCR): redukcja stresu i poprawa jakości życia u kobiet z rakiem piersi. Dostępne w Polsce w ramach psychoonkologii.',
    safety:
      'Obok leczenia konwencjonalnego. Bezpieczna interwencja psychospołeczna; nie zastępuje leczenia psychiatrycznego, gdy jest wskazane.',
    talkToDoctor:
      'Zapytaj o dostęp do psychoonkologa i programów uważności w Twoim ośrodku.',
    references: [
      { pmid: '37582238', title: 'Carlson 2023 (ASCO-SIO) — lęk/depresja', year: 2023 },
      { pmid: '23918953', title: 'Carlson 2013 (MBCR) — RCT II, rak piersi', year: 2013 },
    ],
  },
  // ===== Modulacja immunologiczna i obszar eksperymentalny =====
  {
    slug: 'lentinan-psk',
    name: 'Lentinan / PSK — grzyby lecznicze',
    category: 'substance',
    shortDescription:
      'Polisacharydy z grzybów; PSK jest w Japonii refundowanym adiuwantem chemioterapii raka żołądka.',
    evidenceProfile: {
      effectSignal:
        'Metaanaliza: PSK jako adiuwant chemioterapii raka żołądka — sygnał poprawy przeżycia (dane głównie z Japonii).',
      grade: 'low',
      evidenceType: 'meta-analysis',
      clinicalStatus: 'guideline-supported',
      evidenceGap:
        'Dowody głównie z populacji japońskiej; ograniczone dla populacji europejskiej; brak rejestracji onkologicznej w UE/USA.',
    },
    howItWorks:
      'Beta-glukany i białkowo-polisacharydowe kompleksy modulują odporność wrodzoną (makrofagi, komórki NK).',
    research:
      'Metaanaliza Oba 2007 (PMID 17106715): PSK jako adiuwant chemioterapii raka żołądka — sygnał poprawy przeżycia. PSK/Krestin refundowany w Japonii od 1985 r. Suplementy dostępne w Polsce nie są tożsame z farmaceutycznym PSK.',
    safety:
      'Obok leczenia konwencjonalnego. Ostrożność przy chorobach autoimmunologicznych i po przeszczepieniu narządów.',
    talkToDoctor:
      'Zapytaj o różnicę między farmaceutycznym PSK a suplementami i o bezpieczeństwo immunomodulacji.',
    references: [
      { pmid: '17106715', title: 'Oba 2007 — metaanaliza, rak żołądka', year: 2007 },
    ],
  },
  {
    slug: 'artesunat',
    name: 'Artesunat (off-label w onkologii)',
    category: 'substance',
    experimental: true,
    shortDescription:
      'Lek przeciwmalaryczny badany eksperymentalnie w onkologii; dane wczesnofazowe.',
    evidenceProfile: {
      effectSignal:
        'Badania fazy I potwierdzają bezpieczeństwo; brak danych III fazy dla skuteczności onkologicznej.',
      grade: 'very-low',
      evidenceType: 'rct',
      clinicalStatus: 'experimental',
      evidenceGap:
        'Brak RCT III w onkologii; wymaga oceny gospodarki żelazem; stosowanie off-label nie oznacza rutynowego użycia.',
    },
    howItWorks:
      'Endoperoksydowy mechanizm zależny od żelaza generuje reaktywne formy tlenu (badania przedkliniczne wskazują na indukcję ferroptozy).',
    research:
      'RCT I Krishna 2014 (PMID 26137537): bezpieczeństwo artesunatu w raku jelita grubego z przerzutami. Przegląd Efferth 2017 (PMID 28254675): mechanizm i dane przedkliniczne oraz wczesnokliniczne. Lek zarejestrowany dla malarii; w onkologii pozostaje eksperymentalny.',
    safety:
      'Obszar eksperymentalny. Stosowanie wyłącznie w ramach badań klinicznych lub indywidualnej, nadzorowanej ścieżki; wymaga monitorowania gospodarki żelazem.',
    talkToDoctor:
      'Jeśli rozważasz udział w badaniu klinicznym, omów to z onkologiem — to nie jest leczenie rutynowe.',
    references: [
      { pmid: '26137537', title: 'Krishna 2014 — faza I, rak jelita grubego', year: 2014 },
      { pmid: '28254675', title: 'Efferth 2017 — przegląd mechanizmu', year: 2017 },
    ],
  },
  {
    slug: 'niskie-dawki-naltreksonu',
    name: 'Niskie dawki naltreksonu (LDN)',
    category: 'experimental',
    experimental: true,
    shortDescription:
      'Hipoteza mechanistyczna i stosowanie off-label; brak solidnych danych klinicznych w onkologii.',
    evidenceProfile: {
      effectSignal:
        'Brak RCT klinicznych w onkologii; dostępne są głównie hipotezy mechanistyczne.',
      grade: 'very-low',
      evidenceType: 'preclinical',
      clinicalStatus: 'experimental',
      evidenceGap:
        'Brak badań klinicznych skuteczności w onkologii; bardzo niska baza dowodowa.',
    },
    howItWorks:
      'Proponowany mechanizm obejmuje przejściową blokadę receptorów opioidowych i modulację osi opioidowej oraz TLR-4; znaczenie kliniczne nieustalone.',
    research:
      'Brown & Panksepp 2009 (PMID 19041189): hipoteza mechanizmu (oś opioidowa, TLR-4). Brak RCT klinicznych w onkologii. Naltrekson zarejestrowany w leczeniu uzależnień; zastosowanie onkologiczne jest eksperymentalne.',
    safety:
      'Obszar eksperymentalny. Nie stosować jako leczenie przeciwnowotworowe; ewentualne stosowanie wyłącznie pod nadzorem.',
    talkToDoctor:
      'Traktuj LDN jako obszar badań — omów z lekarzem zanim rozważysz jakiekolwiek zastosowanie.',
    references: [
      { pmid: '19041189', title: 'Brown & Panksepp 2009 — hipoteza mechanizmu', year: 2009 },
    ],
  },
  {
    slug: 'salinomycyna',
    name: 'Salinomycyna',
    category: 'experimental',
    experimental: true,
    shortDescription:
      'Związek badany przedklinicznie pod kątem komórek macierzystych nowotworu — bez rejestracji dla ludzi.',
    evidenceProfile: {
      effectSignal:
        'Sygnał wyłącznie w modelach przedklinicznych (linie komórkowe, modele zwierzęce); brak danych klinicznych skuteczności u ludzi.',
      grade: 'very-low',
      evidenceType: 'preclinical',
      clinicalStatus: 'experimental',
      evidenceGap:
        'Brak rejestracji dla ludzi i brak RCT klinicznych II/III; istotne ryzyko toksyczności.',
    },
    howItWorks:
      'W modelach przedklinicznych opisywano wpływ na komórki macierzyste nowotworu i indukcję ferroptozy; znaczenie kliniczne nieznane.',
    research:
      'Gupta 2009 (Cell, PMID 19682730): silne działanie wobec komórek macierzystych raka piersi w modelu in vitro. Naujokat & Steinhart 2012 (PMID 23251084): przegląd jako związek celujący w komórki macierzyste. Dane są niemal wyłącznie przedkliniczne — nie ma dowodów na stosowanie u ludzi.',
    safety:
      'Obszar eksperymentalny. Nie stosować jako leczenie przeciwnowotworowe. Możliwa toksyczność neurologiczna i ogólnoustrojowa; brak rejestracji dla ludzi.',
    talkToDoctor:
      'To obszar badań, a nie terapia. Jakiekolwiek zastosowanie możliwe wyłącznie w ramach kontrolowanych badań klinicznych.',
    references: [
      { pmid: '19682730', title: 'Gupta 2009 (Cell) — komórki macierzyste, in vitro', year: 2009 },
      { pmid: '23251084', title: 'Naujokat & Steinhart 2012 — przegląd', year: 2012 },
    ],
  },
  {
    slug: 'boswellia-serrata',
    name: 'Boswellia serrata (kadzidłowiec indyjski)',
    category: 'substance',
    shortDescription:
      'Standaryzowany ekstrakt (AKBA) badany m.in. w obrzęku mózgu po radioterapii.',
    evidenceProfile: {
      effectSignal:
        'RCT II z podwójnie ślepą próbą: 60% pacjentów uzyskało ≥75% redukcję obrzęku mózgu po radioterapii vs 26% w grupie placebo (p=0,023).',
      grade: 'low',
      evidenceType: 'rct',
      clinicalStatus: 'supportive-care',
      evidenceGap:
        'Brak RCT III; mała próba; najlepsze dowody dotyczą obrzęku po radioterapii, słabsze dla pozostałych wskazań.',
    },
    howItWorks:
      'Kwasy bosweliowe (m.in. AKBA) hamują 5-lipooksygenazę i szlak NF-κB, działając przeciwzapalnie; AKBA przenika barierę krew-mózg.',
    research:
      'RCT II Kirste 2011 (DOI 10.1002/cncr.26101, n=44): 60% pacjentów ≥75% redukcji obrzęku mózgu po radioterapii vs 26% placebo (p=0,023). Przegląd Dejonckheere 2025 potwierdza sygnał i redukcję zapotrzebowania na deksametazon.',
    safety:
      'Obok, nie zamiast leczenia. Przeciwwskazania przy zaburzeniach krzepnięcia; jakość preparatu krytyczna (ekstrakt standaryzowany na AKBA).',
    talkToDoctor:
      'Zapytaj o zasadność przy obrzęku po radioterapii oraz o interakcje i wybór standaryzowanego ekstraktu.',
    references: [
      { doi: '10.1002/cncr.26101', title: 'Kirste 2011 — RCT II, obrzęk mózgu po RT', year: 2011, note: 'n=44; p=0,023' },
      { pmid: '38194131', title: 'Morikawa 2024 — faza Ia, rak piersi', year: 2024 },
    ],
  },
  {
    slug: 'cordyceps',
    name: 'Cordyceps (sinensis / militaris)',
    category: 'substance',
    experimental: true,
    shortDescription:
      'Grzyb badany jako adiuwant immunostymulacyjny, najlepiej udokumentowany w raku płuca.',
    evidenceProfile: {
      effectSignal:
        'Metaanaliza (12 RCT, n=928, rak płuca + chemio/RT): poprawa odpowiedzi i jakości życia oraz mniejsze nasilenie radiopneumopatii.',
      grade: 'low',
      evidenceType: 'meta-analysis',
      clinicalStatus: 'supportive-care',
      evidenceGap:
        'Dane głównie azjatyckie i heterogeniczne; brak RCT III europejskich; zmienna jakość preparatów.',
    },
    howItWorks:
      'Polisacharydy i kordycepina wykazują działanie immunomodulacyjne (aktywacja NK, profil Th1) oraz adaptogenne w badaniach.',
    research:
      'Metaanaliza Liu 2024 (DOI 10.1016/j.jep.2024.118434, 12 RCT, n=928): w raku płuca z chemio-/radioterapią — poprawa odsetka odpowiedzi i jakości życia, mniejsze nasilenie radiopneumopatii. Dane wymagają potwierdzenia poza Azją.',
    safety:
      'Obok leczenia konwencjonalnego. Ostrożność po przeszczepieniu narządów i w chorobach autoimmunologicznych; jakość preparatu istotna.',
    talkToDoctor:
      'Zapytaj o interakcje z immunoterapią i o wiarygodność preparatu (standaryzacja).',
    references: [
      { doi: '10.1016/j.jep.2024.118434', title: 'Liu 2024 — metaanaliza, rak płuca', year: 2024, note: '12 RCT, n=928' },
    ],
  },
  {
    slug: 'reishi',
    name: 'Reishi / Ganoderma lucidum',
    category: 'substance',
    experimental: true,
    shortDescription:
      'Grzyb leczniczy badany jako adiuwant immunologiczny w skojarzeniu z chemio-/radioterapią.',
    evidenceProfile: {
      effectSignal:
        'Przegląd Cochrane (5 RCT, n=373): poprawa odpowiedzi na leczenie skojarzone i parametrów immunologicznych; bez dowodów na przeżycie długoterminowe.',
      grade: 'low',
      evidenceType: 'meta-analysis',
      clinicalStatus: 'supportive-care',
      evidenceGap:
        'Mała próba; populacja głównie azjatycka; brak danych o przeżyciu długoterminowym.',
    },
    howItWorks:
      'Beta-glukany i triterpeny modulują odporność (NK, makrofagi, limfocyty T) i działają przeciwzapalnie w badaniach.',
    research:
      'Cochrane Jin 2016 (PMID 27045603, 5 RCT, n=373): Ganoderma + chemio-/radioterapia — sygnał poprawy odpowiedzi (RR 1,50) oraz parametrów immunologicznych (CD3/CD4/CD8) i jakości życia. Brak dowodów na przeżycie długoterminowe.',
    safety:
      'Obok leczenia konwencjonalnego. Ostrożność przy przeszczepach, lekach przeciwkrzepliwych i w hormonozależnym raku piersi; jakość ekstraktu istotna.',
    talkToDoctor:
      'Zapytaj o interakcje (m.in. z warfaryną) i o zasadność immunomodulacji w Twojej sytuacji.',
    references: [
      { pmid: '27045603', title: 'Jin 2016 (Cochrane) — Ganoderma lucidum', year: 2016, note: '5 RCT, n=373; RR 1,50' },
    ],
  },
  {
    slug: 'maitake',
    name: 'Maitake D-fraction (Grifola frondosa)',
    category: 'substance',
    experimental: true,
    shortDescription:
      'Beta-glukan badany pod kątem aktywacji komórek NK; dane wczesnofazowe.',
    evidenceProfile: {
      effectSignal:
        'Badania pilotażowe i faza I/II sygnalizują efekty immunostymulujące; brak twardych punktów końcowych.',
      grade: 'very-low',
      evidenceType: 'rct',
      clinicalStatus: 'experimental',
      evidenceGap:
        'Brak RCT III; małe próby; standaryzacja D-fraction różni się od surowego proszku.',
    },
    howItWorks:
      'Beta-glukan wiąże receptor Dectin-1 na komórkach odporności wrodzonej, modulując aktywność NK i makrofagów.',
    research:
      'Pilotaż Kodama 2003 (PMID 14977447, n=10): wzrost aktywności NK. Faza I/II Deng 2009 (rak piersi, n=34): jednoczesne efekty immunostymulujące i immunoinhibicyjne. Dane wczesnofazowe, bez RCT III.',
    safety:
      'Obszar eksperymentalny / wspomagający. Ostrożność przy przeszczepach, autoimmunizacji i cukrzycy (możliwy efekt hipoglikemizujący).',
    talkToDoctor:
      'Zapytaj o standaryzację preparatu i o bezpieczeństwo immunomodulacji w trakcie leczenia.',
    references: [
      { pmid: '14977447', title: 'Kodama 2003 — pilotaż, aktywność NK', year: 2003 },
    ],
  },
  {
    slug: 'wilcacora',
    name: 'Wilcacora / Uncaria tomentosa (Koci Pazur)',
    category: 'substance',
    experimental: true,
    shortDescription:
      'Roślina badana w redukcji neutropenii po chemioterapii; aktywne są preparaty standaryzowane na POA.',
    evidenceProfile: {
      effectSignal:
        'RCT II (rak piersi + chemioterapia FAC): znamienna redukcja neutropenii i poprawa parametrów immunologicznych.',
      grade: 'low',
      evidenceType: 'rct',
      clinicalStatus: 'supportive-care',
      evidenceGap:
        'Jedyne RCT; brak RCT III; EMA klasyfikuje jako zastosowanie tradycyjne; aktywne tylko preparaty standaryzowane na POA.',
    },
    howItWorks:
      'Pentacykliczne alkaloidy oksindolowe (POA) modulują odporność (komórki dendrytyczne, makrofagi, szlak NF-κB); frakcja TOA działa antagonistycznie.',
    research:
      'RCT II Farias 2012 (PMID 22811748, n≈50): w raku piersi z chemioterapią FAC — redukcja neutropenii (p<0,05) i poprawa naprawy DNA oraz immunologii, bez wzrostu toksyczności. EMA HMPC 2015 klasyfikuje jako zastosowanie tradycyjne.',
    safety:
      'Obok, nie zamiast leczenia. Bezwzględne przeciwwskazania: przeszczep narządu, ciąża; antagonizm z lekami immunosupresyjnymi. Tylko preparaty standaryzowane na POA.',
    talkToDoctor:
      'Zapytaj o interakcje z immunosupresją i o wiarygodną standaryzację preparatu (POA).',
    references: [
      { pmid: '22811748', title: 'Farias 2012 — RCT II, rak piersi + FAC', year: 2012, note: 'redukcja neutropenii (p<0,05)' },
    ],
  },
  {
    slug: 'inhalacje-wodorowe',
    name: 'Inhalacje wodorowe (H₂)',
    category: 'physical',
    experimental: true,
    shortDescription:
      'Wdychanie cząsteczkowego wodoru badane głównie pod kątem redukcji toksyczności radioterapii.',
    evidenceProfile: {
      effectSignal:
        'RCT II (rak szyjki + radiochemioterapia): mniejsze nasilenie zapalenia jelit i markerów zapalnych bez interferencji z efektem przeciwnowotworowym (RECIST bez różnicy).',
      grade: 'low',
      evidenceType: 'rct',
      clinicalStatus: 'supportive-care',
      evidenceGap:
        'Brak RCT III; status urządzeń różni się między krajami; jakość sprzętu (wyrób medyczny vs „wellness").',
    },
    howItWorks:
      'Cząsteczkowy wodór wybiórczo neutralizuje najbardziej toksyczne reaktywne formy tlenu, zachowując te o funkcji sygnalizacyjnej.',
    research:
      'RCT II Liu 2025 (PMID 41020280, rak szyjki + radiochemioterapia, n=58): redukcja markerów zapalnych i łagodniejsze zapalenie jelit, bez interferencji z efektem leczenia (RECIST bez różnicy). Pilotaż RCT Chitapanarux 2024 (PMID 39493677, nowotwory głowy i szyi): lepsza tolerancja radiochemioterapii. W Japonii status zaawansowanej opieki medycznej.',
    safety:
      'Obok, nie zamiast leczenia. Jakość urządzenia istotna (wyrób medyczny z oznaczeniem CE). Ostrożność przy współbieżnych fazach prooksydacyjnych innych metod.',
    talkToDoctor:
      'Zapytaj o sensowność w kontekście Twojego leczenia i o klasę/jakość urządzenia.',
    references: [
      { pmid: '41020280', title: 'Liu 2025 — RCT II, rak szyjki + CCRT', year: 2025, note: 'n=58; RECIST bez różnicy' },
      { pmid: '39493677', title: 'Chitapanarux 2024 — pilotaż RCT, głowa i szyja', year: 2024 },
    ],
  },
]

export function getMethod(slug: string): Method | undefined {
  return methods.find((m) => m.slug === slug)
}

export function getAllMethodSlugs(): string[] {
  return methods.map((m) => m.slug)
}

/** Sortowanie po pewności dowodów (malejąco) */
export function methodsByGrade(): Method[] {
  return [...methods].sort(
    (a, b) => gradeOrder[b.evidenceProfile.grade] - gradeOrder[a.evidenceProfile.grade]
  )
}
