// Dane dla strony /wzmacnianie-leczenia
// Substancje/metody z naszej bazy badane pod kątem wzmacniania i uwrażliwiania
// leczenia konwencjonalnego oraz wpływu na komórki macierzyste nowotworu (CSC).
// WSZYSTKIE PMID zweryfikowane w PubMed (zasada 7c). Typ danych oznaczony uczciwie:
// większość substancji = przedkliniczne; hipertermia i melatonina mają dane kliniczne.

export interface SynergyDirection {
  id: string
  title: string
  body: string
}

export const directions: SynergyDirection[] = [
  {
    id: 'sensytyzacja',
    title: 'Chemio- i radiouwrażliwianie (sensytyzacja)',
    body: 'Niektóre metody zwiększają wrażliwość komórek nowotworowych na chemio- i radioterapię — blokując szlaki przeżycia i oporności (np. NF-κB, STAT3, białka oporności wielolekowej) albo nasilając stres oksydacyjny w guzie. Najmocniejszy, kliniczny dowód tej zasady to hipertermia dołączana do radio-/chemioterapii. Wśród substancji najlepiej zbadana jest kurkumina (uwrażliwia na paklitaksel, doksorubicynę, 5-FU, cisplatynę).',
  },
  {
    id: 'ochrona',
    title: 'Ochrona zdrowych tkanek (chemo-/radioprotekcja)',
    body: 'Ta sama substancja może w badaniach działać dwukierunkowo: uwrażliwiać guz, a zarazem chronić zdrowe narządy przed toksycznością leczenia (m.in. przez aktywację NRF2). Opisywano to głównie dla kurkuminy; melatonina w metaanalizach zmniejszała część działań niepożądanych chemio-/radioterapii. Uwaga: ochrona antyoksydacyjna w niewłaściwym momencie może też osłabiać leczenie — o doborze i czasie decyduje lekarz.',
  },
  {
    id: 'csc',
    title: 'Komórki macierzyste (CSC) i nawroty',
    body: 'Komórki macierzyste nowotworu (CSC) są mniej wrażliwe na chemio- i radioterapię i wiąże się je z opornością oraz nawrotami. W modelach eksperymentalnych opisywano, że presja leczenia może selekcjonować populacje bardziej oporne, w tym komórki o cechach CSC — to NIE znaczy, że leczenie standardowe „tworzy agresywniejszego raka”; to opis biologii oporności, którą się bada. Stąd zainteresowanie substancjami celującymi w CSC (np. salinomycyna) — na razie niemal wyłącznie przedklinicznie.',
  },
]

export interface SynergyRow {
  substance: string
  slug?: string
  direction: string
  dataType: 'P' | 'C' | 'B' | 'A'
  evidence: string
}

// dataType: P=przedkliniczne, C=małe badania/serie/faza II, B=pojedyncze RCT/duże, A=metaanaliza/wiele RCT
export const synergyRows: SynergyRow[] = [
  {
    substance: 'Hipertermia (RHT)',
    slug: 'hipertermia-rht',
    direction: 'Radio- i chemouwrażliwianie (dowód kliniczny)',
    dataType: 'A',
    evidence: 'Najmocniejszy kliniczny przykład sensytyzacji. RCT (358 chorych, guzy miednicy): radioterapia + hipertermia vs sama radioterapia — pełna odpowiedź 55% vs 39%, a w raku szyjki 83% vs 57%. RCT fazy III w mięsakach (Issels): chemioterapia + hipertermia regionalna wydłużyła przeżycie (5-letnie 62,7% vs 51,3%). Metoda z oparciem w wytycznych.',
  },
  {
    substance: 'Melatonina',
    slug: 'melatonina',
    direction: 'Adiuwant chemo/RT: odpowiedź + mniej działań niepożądanych',
    dataType: 'A',
    evidence: 'Metaanalizy randomizowanych badań sugerują wyższy odsetek odpowiedzi i lepsze przeżycie 1-roczne oraz mniej powikłań (małopłytkowość, neuropatia, zmęczenie) przy dodaniu melatoniny do chemio-/radioterapii. Zastrzeżenie: jakość metodologiczna badań była niska/umiarkowana — wynik wymaga potwierdzenia w mocniejszych próbach.',
  },
  {
    substance: 'Tlenoterapia hiperbaryczna (HBOT)',
    slug: 'tlenoterapia-hiperbaryczna',
    direction: 'Radiouwrażliwianie (efekt tlenowy / ROS)',
    dataType: 'A',
    evidence: 'Dotlenienie guza nasila utrwalanie uszkodzeń popromiennych (tzw. efekt tlenowy — utlenowanie rodników, ROS). Metaanaliza 32 RCT (4805 chorych, rak głowy i szyi): modyfikacja niedotlenienia, w tym tlen hiperbaryczny, poprawiła kontrolę miejscową (OR 0,71) i przeżycie swoiste — dowody poziomu 1a. W praktyce stosowana rzadko (logistyka, dziś częściej leki). Osobno HBOT leczy późne uszkodzenia popromienne (patrz niżej).',
  },
  {
    substance: 'Kurkumina',
    slug: 'kurkumina',
    direction: 'Sensytyzacja + ochrona tkanek; sygnał CSC',
    dataType: 'B',
    evidence: 'Randomizowane, podwójnie zaślepione badanie (150 kobiet, rak piersi zaawansowany): kurkumina dożylna 300 mg + paklitaksel vs paklitaksel + placebo — wyższy odsetek odpowiedzi (51% vs 33%) i lepsza tolerancja. Mechanizm sensytyzacji i ochrony zdrowych tkanek: liczne dane przedkliniczne.',
  },
  {
    substance: 'Post / dieta naśladująca post (FMD)',
    slug: 'post-i-diety-naladujace-post',
    direction: 'Sensytyzacja + ochrona zdrowych komórek',
    dataType: 'B',
    evidence: 'Randomizowane badanie fazy 2 (DIRECT, 131 chorych, rak piersi): dieta naśladująca post wokół chemioterapii neoadiuwantowej wiązała się z częstszą odpowiedzią radiologiczną (OR 3,2) i patologiczną (OR 4,1) oraz mniejszym uszkodzeniem DNA limfocytów. Koncepcja „różnicowego oporu na stres”. Wymaga potwierdzenia; tylko pod kontrolą lekarza/dietetyka.',
  },
  {
    substance: 'Witamina C (dożylnie)',
    slug: 'wlewy-dozylne-witaminy-c',
    direction: 'Sensytyzacja (prooksydacyjna)',
    dataType: 'C',
    evidence: 'Badana jako dodatek do chemioterapii (działanie prooksydacyjne w wysokich stężeniach). Dane kliniczne niejednoznaczne — szczegóły i PMID na karcie metody.',
  },
  {
    substance: 'Omega-3 (EPA/DHA)',
    slug: 'omega-3',
    direction: 'Sensytyzacja (prooksydacyjna)',
    dataType: 'C',
    evidence: 'Badanie fazy II (rak piersi z przerzutami): dodanie DHA do chemioterapii FEC — odsetek odpowiedzi 44%, dłuższe przeżycie w podgrupie z najwyższym wbudowaniem DHA. Sygnał chemouwrażliwiania (utlenianie błon komórek guza), wymaga potwierdzenia.',
  },
  {
    substance: 'Artesunat',
    slug: 'artesunat',
    direction: 'Sensytyzacja (prooksydacyjna, ferroptoza)',
    dataType: 'C',
    evidence: 'Prooksydacyjny mechanizm zależny od żelaza, badany jako dodatek do leczenia; wczesne dane kliniczne ograniczone — szczegóły na karcie metody.',
  },
  {
    substance: 'Resweratrol',
    slug: 'resweratrol',
    direction: 'Sensytyzacja; sygnał CSC',
    dataType: 'P',
    evidence: 'W modelach laboratoryjnych moduluje szlaki oporności i opisywano wpływ na CSC. Dane głównie przedkliniczne.',
  },
  {
    substance: 'Salinomycyna',
    slug: 'salinomycyna',
    direction: 'Komórki macierzyste (CSC)',
    dataType: 'P',
    evidence: 'Powtarzalny sygnał przedkliniczny wobec CSC (Gupta 2009, in vitro). Brak badań klinicznych u ludzi — skuteczności i bezpieczeństwa nie można jeszcze ocenić.',
  },
  {
    substance: 'Iwermektyna',
    slug: 'iwermektyna',
    direction: 'Sygnał CSC / sensytyzacja',
    dataType: 'P',
    evidence: 'Sygnał przedkliniczny (m.in. szlaki związane z CSC). Brak potwierdzenia klinicznego; ASCO odradza stosowanie jako leczenia poza badaniami.',
  },
  {
    substance: 'Fenbendazol',
    slug: 'fenbendazol',
    direction: 'Sensytyzacja (mikrotubule)',
    dataType: 'P',
    evidence: 'Sygnał przedkliniczny (wpływ na mikrotubule, jak część cytostatyków). Brak danych klinicznych u ludzi w onkologii.',
  },
]

// Dodatkowy wątek: immunologiczne adiuwanty (inny mechanizm niż sensytyzacja)
export const protectionNote =
  'Ochrona zdrowych tkanek i leczenie powikłań: tlenoterapia hiperbaryczna (HBOT) ma podwójną rolę — poza radiouwrażliwianiem (wyżej) ma też dane kliniczne (Cochrane) na gojenie późnych uszkodzeń popromiennych; boswellia była badana pod kątem obrzęku mózgu po radioterapii; glutamina — łagodzenie mucositis i neuropatii. Uwaga: część antyoksydantów (np. N-acetylocysteina, wysokie dawki witamin) może w niewłaściwym momencie OSŁABIAĆ chemio-/radioterapię — dlatego stosuje się je wyłącznie po decyzji lekarza.'

export const classificationNote =
  'Pozostałe metody z naszej bazy służą innym celom i nie są „uwrażliwiaczami” guza: aktywność fizyczna ma najmocniejsze dane na zmniejsze ryzyko nawrotu (rak piersi, jelita) i lepszą tolerancję leczenia; TTFields i terapia fotodynamiczna to samodzielne terapie/urządzenia łączone z leczeniem; akupunktura, MBSR i kannabinoidy łagodzą objawy; dieta śródziemnomorska i witamina D dotyczą profilaktyki i wyników odległych; mikrobiom/FMT bada się głównie przy immunoterapii; dieta ketogeniczna i niskie dawki naltreksonu pozostają na etapie wczesnych badań (feasibility / przedkliniczne). Każdą opisujemy szczegółowo na jej karcie.'

export const immuneNote =
  'Osobny mechanizm mają grzyby lecznicze (PSK/lentinan, a słabiej reishi, maitake, cordyceps) oraz jemioła: nie „uwrażliwiają” guza, lecz są badane jako immunologiczne adiuwanty dołączane do leczenia (część danych klinicznych, m.in. PSK w raku żołądka). Szczegóły i źródła znajdziesz na kartach tych metod.'

export interface SynergyRef {
  pmid?: string
  doi?: string
  cite: string
}

export const synergyRefs: SynergyRef[] = [
  { pmid: '10791373', doi: '10.1016/s0140-6736(00)02059-6', cite: 'van der Zee i wsp. 2000, Lancet — RCT: radioterapia + hipertermia w guzach miednicy; pełna odpowiedź 55% vs 39% (rak szyjki 83% vs 57%).' },
  { pmid: '29450452', doi: '10.1001/jamaoncol.2017.4996', cite: 'Issels i wsp. 2018, JAMA Oncol — RCT fazy III: chemioterapia + hipertermia regionalna w mięsakach; dłuższe przeżycie (5-letnie 62,7% vs 51,3%).' },
  { pmid: '22019490', doi: '10.1177/1534735411425484', cite: 'Seely i wsp. 2012, Integr Cancer Ther — metaanaliza 21 RCT: melatonina jako adiuwant; śmiertelność 1-roczna RR 0,63, lepsze odpowiedzi i mniej toksyczności.' },
  { pmid: '22271210', doi: '10.1007/s00280-012-1828-8', cite: 'Wang i wsp. 2012, Cancer Chemother Pharmacol — metaanaliza 8 RCT: melatonina dołączona do chemio-/radioterapii; lepsza remisja i przeżycie, mniej działań niepożądanych.' },
  { pmid: '21511351', doi: '10.1016/j.radonc.2011.03.004', cite: 'Overgaard 2011, Radiother Oncol — metaanaliza 32 RCT (4805 chorych): modyfikacja niedotlenienia guza (w tym tlen hiperbaryczny) poprawia kontrolę miejscową radioterapii w raku głowy i szyi (poziom 1a).' },
  { pmid: '32335356', doi: '10.1016/j.phymed.2020.153218', cite: 'Saghatelyan i wsp. 2020, Phytomedicine — RCT: kurkumina dożylna + paklitaksel w zaawansowanym raku piersi (ORR 51% vs 33%).' },
  { pmid: '20924967', doi: '10.1080/01635581.2010.509835', cite: 'Goel & Aggarwal 2010, Nutr Cancer — przegląd: kurkumina jako chemo- i radiouwrażliwiacz guza oraz chemo-/radioprotektor zdrowych tkanek (dane przedkliniczne).' },
  { pmid: '35216255', doi: '10.3390/ijms23042144', cite: 'Farghadani & Naidu 2022, Int J Mol Sci — przegląd: kurkumina wzmacnia doksorubicynę, paklitaksel, 5-FU i cisplatynę w raku piersi.' },
  { pmid: '19920822', doi: '10.1038/sj.bjc.6605441', cite: 'Bougnoux i wsp. 2009, Br J Cancer — faza II: DHA dodany do chemioterapii FEC w raku piersi z przerzutami (ORR 44%; dłuższe OS w podgrupie z wysokim DHA).' },
  { pmid: '32576828', doi: '10.1038/s41467-020-16138-3', cite: 'de Groot i wsp. 2020, Nat Commun (DIRECT) — RCT fazy 2: dieta naśladująca post + chemioterapia neoadiuwantowa w raku piersi; częstsza odpowiedź i mniejsze uszkodzenie DNA limfocytów.' },
  { pmid: '27123955', doi: '10.1002/14651858.CD005005.pub4', cite: 'Bennett i wsp. 2016, Cochrane — HBOT w późnych uszkodzeniach popromiennych: poprawa gojenia tkanek (głowa/szyja, pęcherz, odbytnica). To OCHRONA/leczenie powikłań, nie uwrażliwianie guza.' },
  { pmid: '30004423', doi: '10.3390/ijms19071939', cite: 'Lin i wsp. 2018, Int J Mol Sci — przegląd: cisplatyna i radioterapia mogą wzbogacać frakcję komórek macierzystych (CSC), zwiększając chemooporność.' },
  { pmid: '19682730', cite: 'Gupta i wsp. 2009, Cell — salinomycyna celująca w komórki macierzyste raka piersi (in vitro, przedklinicznie).' },
]
