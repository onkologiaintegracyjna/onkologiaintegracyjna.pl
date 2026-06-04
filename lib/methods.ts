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
    kind: 'witaminy',
    indications: [
      'leczenie wspomagające w wybranych nowotworach (badania kliniczne)',
      'redukcja zmęczenia onkologicznego',
      'jakość życia podczas chemioterapii',
    ],
    regulatory: [
      { country: 'Polska', status: 'off-label', note: 'Brak rejestracji jako lek onkologiczny; stosowane off-label na podstawie art. 5 ust. 1 dyr. 2001/83/WE' },
      { country: 'Niemcy', status: 'off-label', note: 'Brak rutynowej rejestracji onkologicznej; zastosowanie zależy od praktyki lokalnej i decyzji lekarza' },
      { country: 'USA', status: 'off-label', note: 'Brak rejestracji onkologicznej; zastosowanie zależy od praktyki lokalnej i decyzji lekarza' },
      { country: 'Szwajcaria', status: 'off-label', note: 'BAG potwierdza refundację 5 metod CAM (akupunktura, antropozofia, farmakoterapia TCM, homeopatia, fitoterapia) wykonywanych przez kwalifikowanych lekarzy — IVC nie figuruje jako odrębnie refundowana metoda. Status per świadczenie do weryfikacji w danej kasie.' },
    ],
    redoxClass: 'pro-oxidant',
    name: 'Wlewy dożylne witaminy C (IVC)',
    category: 'substance',
    shortDescription:
      'Wysokie dawki kwasu askorbinowego podawane dożylnie, badane jako leczenie wspomagające.',
    evidenceProfile: {
      effectSignal:
        'Metaanaliza 8 badań klinicznych (n=2722) raportuje pooled median survival ratio 1,83 (95% CI 1,40–2,40; p<0,001); RCT II PACMAN 2.1 w raku trzustki: OS 16,0 vs 8,3 mies. (HR 0,46).',
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
    administrationRoute: {
      summary:
        'Droga podania zmienia tu sam mechanizm działania. To nie jest „ta sama witamina C w innej formie".',
      oral:
        'Doustnie organizm ściśle reguluje wchłanianie — stężenie we krwi pozostaje niskie, a witamina C działa jako antyoksydant (chroni komórki przed utlenianiem). Tą drogą nie da się osiągnąć stężeń badanych w onkologii.',
      iv:
        'Dożylnie, z pominięciem regulacji jelitowej, można osiągnąć bardzo wysokie stężenia, przy których witamina C działa odwrotnie — jako prooksydant generujący nadtlenek wodoru, selektywnie toksyczny dla części komórek nowotworowych (w modelach przedklinicznych). To te wysokie, dożylne stężenia są przedmiotem badań klinicznych.',
    },
    whatIsIt:
      'Wlewy dożylnej witaminy C (IVC) to podawanie kwasu askorbinowego bezpośrednio do żyły w stężeniach wielokrotnie wyższych, niż można osiągnąć doustnie. Doustnie organizm utrzymuje stężenie w osoczu na poziomie rzędu 0,2 mmol/l (mechanizm nasycenia transporterów), podczas gdy wlew dożylny pozwala osiągnąć kilkadziesiąt mmol/l — stąd zupełnie inne działanie. To nie jest „duża dawka tabletek".',
    contraindications:
      'Bezwzględne: niedobór G6PD (ryzyko hemolizy — wymagane badanie przed pierwszym wlewem), zaawansowana niewydolność nerek, hemochromatoza. Interakcje: opisano osłabienie działania bortezomibu (nie łączyć). Dla większości klasycznych cytostatyków (platyny, taksany, antracykliny, fluoropirymidyny) nie wykazano istotnej klinicznie interferencji.',
    mythBuster: {
      title: 'Dlaczego droga podania ma znaczenie w interpretacji badań',
      body:
        'Wypowiedzi o nieskuteczności witaminy C w onkologii często powołują się na klasyczne badania Mayo Clinic (1979, 1985). Te badania dotyczyły jednak witaminy C DOUSTNEJ, która osiąga niskie stężenia we krwi. Dożylnie osiąga się stężenia rzędu 100 razy wyższe, przy których mechanizm działania jest odwrotny (prooksydacyjny). To dwie różne farmakologicznie metody mimo tej samej cząsteczki — porównywanie ich to błąd zamiany formy/dawki. Warto sprawdzać, czy dana krytyka mówi o formie doustnej, czy dożylnej.',
    },
  },
  {
    slug: 'jemiola',
    kind: 'rosliny',
    indications: [
      'poprawa jakości życia podczas chemioterapii',
      'redukcja zmęczenia onkologicznego',
      'wybrane nowotwory lite (RCT)',
    ],
    regulatory: [
      { country: 'Szwajcaria', status: 'zależny', note: 'W ramach medycyny antropozoficznej funkcjonuje w systemie CAM — status do weryfikacji per preparat, wskazanie, lekarz i ubezpieczyciel' },
      { country: 'Niemcy', status: 'zależny', note: 'W części wskazań, zwłaszcza paliatywnych, funkcjonuje w opiece wspomagającej; pokrycie zależy od preparatu, wskazania, lekarza i płatnika' },
      { country: 'Austria', status: 'zależny', note: 'Do weryfikacji per preparat, wskazanie i płatnik' },
      { country: 'Polska', status: 'off-label', note: 'Brak refundacji; dostępne w aptekach na receptę' },
    ],
    name: 'Jemioła / Viscum album (Iscador, Helixor, Abnoba viscum)',
    whatIsIt:
      'Preparaty z jemioły (Viscum album) podaje się zwykle podskórnie jako leczenie wspomagające, głównie dla poprawy jakości życia. W części krajów (np. Niemcy) są standardowym elementem opieki wspomagającej, zwłaszcza paliatywnej.',
    contraindications:
      'Możliwe reakcje miejscowe w miejscu wstrzyknięcia oraz reakcje ogólne (gorączka). Ostrożność przy chorobach autoimmunologicznych i w trakcie immunoterapii — wymaga nadzoru lekarza.',
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
      'Przegląd systematyczny Kienle & Kiene 2010 (PMID 20483874) i Cochrane (Loef & Walach 2020) sygnalizują korzyść w jakości życia bez twardych dowodów dla przeżycia całkowitego. RCT III Tröger 2013 (PMID 23890767) w zaawansowanym raku trzustki: OS 4,8 vs 2,7 mies. (p<0,001, n=220) — wynik istotny, ale metodologia tego badania była krytykowana, a nowsze, bardziej rygorystyczne próby (m.in. MISTRAL) nie potwierdziły dotąd jednoznacznej korzyści w przeżyciu. Dlatego utrzymujemy niską pewność dowodów i status opieki wspomagającej. W części systemów europejskich preparaty jemioły funkcjonują w ramach medycyny antropozoficznej lub opieki wspomagającej — status pokrycia zależy od kraju, preparatu, wskazania i płatnika.',
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
    kind: 'rosliny',
    indications: [
      'leczenie wspomagające w chemioterapii (badania)',
      'redukcja stanu zapalnego',
    ],
    regulatory: [
      { country: 'Polska', status: 'OTC', note: 'Suplement diety; brak rejestracji jako lek onkologiczny' },
      { country: 'USA', status: 'OTC', note: 'Dietary supplement (FDA GRAS)' },
    ],
    redoxClass: 'context-dependent',
    name: 'Kurkumina',
    whatIsIt:
      'Kurkumina to żółty polifenol z kłącza kurkumy. Ma bardzo niską biodostępność doustną — surowa kurkumina słabo się wchłania, dlatego w badaniach używa się form standaryzowanych (np. liposomalnych). To wpływa na przełożenie wyników z probówki na praktykę kliniczną.',
    contraindications:
      'Możliwe interakcje z lekami metabolizowanymi przez wątrobę (CYP3A4) oraz z lekami przeciwkrzepliwymi. Ostrożność okołozabiegowo (wpływ na krzepnięcie).',
    mythBuster: {
      title: 'Uwaga na przepaść między probówką a pacjentem',
      body:
        'Kurkumina ma imponujące działanie w badaniach in vitro, co bywa przedstawiane jako dowód skuteczności u ludzi. Problem w tym, że doustnie osiąga we krwi bardzo niskie stężenia — znacznie poniżej tych z probówki. Dlatego mocne wyniki przedkliniczne nie przekładają się wprost na efekt kliniczny, a dowody u ludzi pozostają ograniczone.',
    },
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
    kind: 'witaminy',
    indications: [
      'redukcja toksyczności chemioterapii',
      'poprawa snu u pacjentów onkologicznych',
    ],
    regulatory: [
      { country: 'Polska', status: 'OTC', note: 'Suplement (do 5 mg) i Rx (powyżej)' },
      { country: 'USA', status: 'OTC', note: 'Dietary supplement' },
      { country: 'Niemcy', status: 'dopuszczone', note: 'Lek na receptę dla wybranych wskazań snu' },
    ],
    redoxClass: 'antioxidant',
    name: 'Melatonina',
    whatIsIt:
      'Melatonina to hormon regulujący rytm dobowy, wydzielany przez szyszynkę. W onkologii bada się ją zarówno w zaburzeniach snu, jak i jako adiuwant zmniejszający toksyczność leczenia. Dane są starsze i wymagają odświeżenia.',
    contraindications:
      'Może nasilać senność; interakcje z lekami immunosupresyjnymi i przeciwkrzepliwymi. Ostrożność przy prowadzeniu pojazdów po wieczornej dawce.',
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
    kind: 'witaminy',
    indications: [
      'leczenie deficytu witD u pacjentów onkologicznych',
      'wspomaganie zdrowia kości',
    ],
    regulatory: [
      { country: 'Polska', status: 'OTC', note: 'Suplement i Rx; refundacja niektórych wskazań' },
      { country: 'USA', status: 'OTC', note: 'Dietary supplement' },
    ],
    redoxClass: 'context-dependent',
    name: 'Witamina D',
    whatIsIt:
      'Witamina D to hormon steroidowy wytwarzany w skórze pod wpływem słońca i dostarczany z dietą. Niedobór jest częsty u pacjentów onkologicznych. W onkologii bada się jej rolę nie jako leczenie nowotworu, lecz jako element wsparcia — zdrowie kości, odporność, możliwy wpływ na rokowanie.',
    contraindications:
      'Ryzyko hiperkalcemii przy nadmiernej suplementacji — wymaga kontroli stężenia 25(OH)D i wapnia. Ostrożność przy niektórych chorobach nerek i sarkoidozie.',
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
      'Metaanaliza Keum 2019 (PMID 30796437): suplementacja obniża śmiertelność z powodu raka (RR 0,87). RCT III VITAL Manson 2019 (PMID 30415629): brak redukcji zachorowalności, sygnał w późnej obserwacji. Korzyść dotyczy raczej śmiertelności niż zapobiegania. Witamina D była też elementem skojarzonej interwencji stylu życia w doniesieniu zjazdowym ASCO 2026 (abstrakt 263791) — efektu nie można jednak przypisać samej witaminie.',
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
    kind: 'witaminy',
    indications: [
      'kacheksja onkologiczna',
      'wspomaganie tolerancji chemioterapii',
    ],
    regulatory: [
      { country: 'Polska', status: 'OTC', note: 'Suplement i lek (Omacor/Lovaza Rx)' },
    ],
    redoxClass: 'context-dependent',
    name: 'Kwasy omega-3 (EPA/DHA)',
    whatIsIt:
      'Kwasy omega-3 (EPA i DHA) to wielonienasycone kwasy tłuszczowe obecne m.in. w tłustych rybach. W onkologii bada się je głównie w kontekście niedożywienia i kacheksji oraz tolerancji leczenia, a nie jako leczenie przeciwnowotworowe.',
    contraindications:
      'Działanie przeciwzakrzepowe — istotne przy lekach przeciwkrzepliwych i okołooperacyjnie (zwykle zaleca się przerwę przed zabiegiem). Ostrożność przy zaburzeniach krzepnięcia.',
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
    kind: 'witaminy',
    indications: [
      'zapobieganie mucositis (selektywne wskazania)',
    ],
    regulatory: [
      { country: 'Polska', status: 'OTC', note: 'Suplement; forma jelitowa w żywieniu medycznym' },
    ],
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
    kind: 'witaminy',
    indications: [
      'leczenie zatrucia paracetamolem',
      'eksperymentalnie: ochrona toksyczności chemio',
    ],
    regulatory: [
      { country: 'Polska', status: 'dopuszczone', note: 'Rejestracja jako mukolityk i odtrutka paracetamolu (NIE onko)' },
    ],
    redoxClass: 'antioxidant',
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
    kind: 'fizykalne',
    indications: [
      'mięsaki tkanek miękkich',
      'rak szyjki macicy (z radioterapią)',
      'nowotwory pęcherza',
      'wybrane mCRC',
    ],
    regulatory: [
      { country: 'Niemcy', status: 'refundowane', note: 'GKV pokrywa wybrane wskazania (DEGRO guidelines)' },
      { country: 'Holandia', status: 'refundowane', note: 'Refundowane w wybranych ośrodkach' },
      { country: 'Szwajcaria', status: 'refundowane', note: 'Refundacja dla wskazań ESMO/DEGRO' },
      { country: 'Polska', status: 'off-label', note: 'Brak refundacji NFZ; ośrodki prywatne' },
    ],
    name: 'Hipertermia lokoregionalna (RHT)',
    whatIsIt:
      'Hipertermia lokoregionalna (RHT) to kontrolowane podgrzanie obszaru guza (zwykle do ok. 40–43°C), stosowane łącznie z radio- lub chemioterapią. To zarejestrowana technologia medyczna z wytycznymi (DEGRO/ESMO) — należy ją odróżnić od hipertermii ogólnoustrojowej, która ma znacznie słabsze podstawy.',
    contraindications:
      'Wykonywana wyłącznie w wyspecjalizowanych ośrodkach. Przeciwwskazania zależą od lokalizacji (np. metalowe implanty w polu grzania) i są oceniane indywidualnie.',
    category: 'physical',
    shortDescription:
      'Lokoregionalna hipertermia stosowana łącznie z radio-/chemioterapią — metoda z wytycznymi, nie pseudomedycyna.',
    evidenceProfile: {
      effectSignal:
        'RCT III (mięsaki, EORTC 62961–ESHO 95): 10-letnie OS 52,6% vs 42,7% (HR 0,73); RCT III (rak szyjki, Dutch Deep Hyperthermia Group): pełna odpowiedź 83% vs 57%, 3-letni OS 51% vs 27%.',
      grade: 'moderate',
      evidenceType: 'rct',
      clinicalStatus: 'guideline-supported',
      evidenceGap:
        'Ograniczona dostępność technologii i standaryzacja; brak pełnej refundacji w Polsce.',
    },
    howItWorks:
      'Kontrolowane podgrzanie tkanki (ok. 40–43°C) zwiększa wrażliwość komórek na radio- i chemioterapię oraz poprawia ukrwienie i utlenowanie guza.',
    research:
      'RCT III Issels 2018 (PMID 29450452, EORTC 62961–ESHO 95, mięsaki tkanek miękkich wysokiego ryzyka): dodanie regionalnej hipertermii do chemioterapii zwiększyło 10-letnie przeżycie całkowite z 42,7% do 52,6% (HR 0,73; 95% CI 0,54–0,98). RCT III van der Zee 2000 (Lancet, Dutch Deep Hyperthermia Group, PMID 10791373, rak szyjki macicy): pełna odpowiedź 83% vs 57%; 3-letnie OS 51% vs 27%. Uwzględniona w wytycznych DEGRO/ESHO dla wybranych wskazań. To lokoregionalna RHT — nie ogólnoustrojowa hipertermia (WBH).',
    safety:
      'Obok, nie zamiast leczenia. Wykonywana w wyspecjalizowanych ośrodkach pod nadzorem; nie mylić z hipertermią ogólnoustrojową.',
    talkToDoctor:
      'Zapytaj, czy w Twoim wskazaniu istnieją dane na połączenie RHT z radio-/chemioterapią i gdzie jest dostępna.',
    references: [
      { pmid: '29450452', title: 'Issels 2018 — RCT III, mięsaki tkanek miękkich', year: 2018, note: '10-letnie OS 52,6% vs 42,7% (HR 0,73)' },
      { pmid: '10791373', title: 'van der Zee 2000 (Lancet, Dutch Deep Hyperthermia Group) — RCT III', year: 2000, note: 'rak szyjki: CR 83% vs 57%; 3-letni OS 51% vs 27%' },
    ],
  },
  {
    slug: 'tlenoterapia-hiperbaryczna',
    kind: 'fizykalne',
    indications: [
      'popromienna nekroza tkanek miękkich i kości',
      'martwica popromienna pęcherza',
      'rany niegojące się onko',
    ],
    regulatory: [
      { country: 'Polska', status: 'refundowane', note: 'NFZ refunduje 14 wskazań UHMS' },
      { country: 'USA', status: 'dopuszczone', note: 'Medicare/Medicaid pokrywają wskazania UHMS' },
      { country: 'Niemcy', status: 'refundowane', note: 'GKV dla wybranych wskazań' },
    ],
    name: 'Tlenoterapia hiperbaryczna (HBOT)',
    whatIsIt:
      'Tlenoterapia hiperbaryczna (HBOT) to oddychanie 100% tlenem w komorze pod zwiększonym ciśnieniem. To zarejestrowana procedura medyczna z określonymi wskazaniami — w onkologii głównie leczenie powikłań popromiennych, nie sam nowotwór. Nie mylić z tlenoterapią dożylną.',
    contraindications:
      'Przeciwwskazania m.in. nieleczona odma opłucnowa, niektóre choroby płuc i ucha. Procedura prowadzona wyłącznie w ośrodku hiperbarycznym.',
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
    kind: 'fizykalne',
    indications: [
      'rak przełyku',
      'NDRP (wczesny endobronchialny)',
      'rak podstawnokomórkowy skóry',
      'keratoza słoneczna',
      'przełyk Barretta z dysplazją',
      'chłoniak skórno-T-komórkowy',
    ],
    regulatory: [
      { country: 'USA', status: 'dopuszczone', note: 'FDA — porfimer sodu (Photofrin) w określonych wskazaniach (m.in. rak przełyku, endobronchialny NDRP, dysplazja w przełyku Barretta)' },
      { country: 'UE', status: 'zależny', note: 'Status zależny od konkretnego produktu/procedury i kraju — nie ogólne „EMA approved”' },
      { country: 'Polska', status: 'zależny od procedury', note: 'Status zależny od produktu, wskazania i procedury — wymaga weryfikacji w aktualnych katalogach NFZ / programach świadczeń' },
    ],
    name: 'Terapia fotodynamiczna (PDT)',
    whatIsIt:
      'Terapia fotodynamiczna (PDT) polega na podaniu substancji światłoczułej, która gromadzi się w tkance, a następnie naświetleniu jej światłem o odpowiedniej długości. To zarejestrowana procedura onkologiczna dla wybranych nowotworów (m.in. przełyk, skóra).',
    contraindications:
      'Po zabiegu utrzymuje się nadwrażliwość skóry na światło przez kilka tygodni — wymaga ochrony przed słońcem. Przeciwwskazana przy porfirii i nadwrażliwości na fotosensybilizator.',
    category: 'physical',
    shortDescription:
      'Aktywacja światłem fotosensybilizatora. Status zależy od konkretnego fotosensybilizatora, produktu, wskazania i kraju — dla porfimeru sodu (Photofrin) FDA wskazuje określone zastosowania (m.in. rak przełyku, endobronchialny NDRP, dysplazja dużego stopnia w przełyku Barretta). W UE i Polsce status należy weryfikować osobno dla danego produktu i procedury.',
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
      'Przegląd Agostinis 2011 (PMID 21617154) omawia mechanizm i wskazania. RCT III Overholt 2007 (PMID 17643436): 5-letnie badanie PDT z porfimerem sodu w przełyku Barretta z dysplazją dużego stopnia — eliminacja dysplazji 77% vs 39% i rzadsza progresja do raka. Porfimer sodu ma określone wskazania FDA; w Polsce status zależny od produktu i procedury (weryfikacja w katalogach NFZ).',
    safety:
      'Obok leczenia konwencjonalnego. Fotouczulenie skóry utrzymuje się przez kilka tygodni — wymaga ochrony przed światłem.',
    talkToDoctor:
      'Zapytaj, czy PDT jest opcją dla Twojego wskazania i jak przygotować się do fotowrażliwości.',
    references: [
      { pmid: '21617154', title: 'Agostinis 2011 — przegląd PDT', year: 2011 },
      { pmid: '17643436', title: 'Overholt 2007 — RCT III, PDT (porfimer) w przełyku Barretta, 5-letni', year: 2007, note: 'Gastrointest Endosc' },
    ],
  },
  {
    slug: 'ttfields',
    kind: 'fizykalne',
    indications: [
      'glejak wielopostaciowy (GBM)',
      'złośliwy międzybłoniak opłucnej',
      'przerzutowy NDRP (Optune Lua 2024)',
      'miejscowo zaawansowany rak trzustki (Optune Pax, FDA luty 2026; PANOVA-3)',
    ],
    regulatory: [
      { country: 'USA', status: 'dopuszczone', note: 'FDA approved 2011/2015/2019/2024' },
      { country: 'UE', status: 'dopuszczone', note: 'CE mark (NIE EMA — urządzenie medyczne)' },
      { country: 'Niemcy', status: 'refundowane', note: 'GKV refunduje dla GBM' },
      { country: 'Polska', status: 'eksperymentalne', note: 'Brak refundacji NFZ; dostępne komercyjnie' },
    ],
    name: 'TTFields (Optune) — pola elektryczne o przemiennej częstotliwości',
    whatIsIt:
      'TTFields (Optune) to urządzenie wytwarzające pola elektryczne o przemiennej częstotliwości, noszone na skórze głowy. To zarejestrowana metoda onkologiczna z badaniami III fazy — nie jest to CAM ani potoczne leczenie laptopem, jak bywa mylnie przedstawiane.',
    contraindications:
      'Wymaga noszenia urządzenia przez większość doby. Najczęstsze działania niepożądane to podrażnienia skóry pod elektrodami. Przeciwwskazane przy wszczepionych urządzeniach elektronicznych w obszarze stosowania.',
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
      'RCT III Stupp 2017 (PMID 29260225, EF-14): w nowo rozpoznanym glejaku OS 20,9 vs 16,0 mies. (HR 0,63; p<0,001; n=695). Zakres wskazań rośnie: Optune Lua uzyskał rejestrację FDA i oznaczenie CE w przerzutowym niedrobnokomórkowym raku płuca (2024). RCT III PANOVA-3 (PMID 40448572, n=571, 2025) w miejscowo zaawansowanym raku trzustki wykazał wydłużenie OS 16,2 vs 14,2 mies. (HR 0,82; p=0,039) i przeżycia wolnego od bólu — na tej podstawie FDA dopuściła Optune Pax (luty 2026). To jedna z nielicznych metod fizykalnych z wieloma wskazaniami potwierdzonymi w dużych badaniach.',
    safety:
      'Obok leczenia konwencjonalnego. Najczęstsze działania niepożądane to podrażnienia skóry pod elektrodami.',
    talkToDoctor:
      'Zapytaj, czy TTFields jest opcją dla Twojego rozpoznania i jak wygląda dostępność w Polsce.',
    references: [
      { pmid: '29260225', title: 'Stupp 2017 (EF-14) — RCT III, glejak', year: 2017, note: 'OS 20,9 vs 16,0 mies.; HR 0,63' },
      { pmid: '31628016', title: 'Ceresoli 2019 (STELLAR) — RCT II, międzybłoniak', year: 2019 },
      { pmid: '40448572', title: 'PANOVA-3 — RCT III, miejscowo zaawansowany rak trzustki', year: 2025, note: 'OS 16,2 vs 14,2 mies. (HR 0,82; p=0,039); podstawa rejestracji Optune Pax 2026' },
    ],
  },
  // ===== Medycyna stylu życia (guideline-supported) =====
  {
    slug: 'aktywnosc-fizyczna',
    kind: 'styl-zycia',
    indications: [
      'zmęczenie onkologiczne (rekomendacja 1)',
      'poprawa jakości życia',
      'redukcja nawrotu raka piersi/jelita',
      'tolerancja chemioterapii',
    ],
    regulatory: [
      { country: 'Polska', status: 'dopuszczone', note: 'Programy rehabilitacji onkologicznej NFZ' },
      { country: 'USA', status: 'dopuszczone', note: 'ASCO/SIO guideline 2024' },
      { country: 'UE', status: 'dopuszczone', note: 'ESMO guidelines' },
    ],
    name: 'Aktywność fizyczna w onkologii',
    whatIsIt:
      'Aktywność fizyczna w onkologii to dostosowany, regularny wysiłek (aerobowy i oporowy). To metoda o najmocniejszych dowodach wśród wszystkich interwencji wspomagających — rekomendowana w wytycznych jako pierwszy wybór m.in. przy zmęczeniu onkologicznym.',
    contraindications:
      'Program wymaga indywidualizacji przy przerzutach kostnych (ryzyko złamań), znacznej niedokrwistości, małopłytkowości i kardiotoksyczności leczenia. Warto skorzystać z rehabilitacji onkologicznej.',
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
      'Metaanaliza 2026 (PMID 41894932, 13 RCT, n=3282): obniżenie śmiertelności całkowitej HR 0,74 (umiarkowana pewność). Wytyczne ASCO-SIO 2024 (Bower, PMID 38754041): rekomendacja nr 1 dla zmęczenia. Wytyczne ćwiczeń ACSM 2019 (Campbell, PMID 31626055) oraz raport ACSM 2019 (Patel i wsp., PMID 31626056) wiążą regularną aktywność fizyczną z lepszą kontrolą nowotworu, w tym mniejszym ryzykiem nawrotu raka piersi i jelita. Doniesienie zjazdowe ASCO 2026 (abstrakt 263791): skojarzenie diety śródziemnomorskiej o niskim indeksie glikemicznym, 30 minut marszu dziennie i witaminy D wiązało się z 76% niższym ryzykiem nawrotu wczesnego HR-dodatniego raka piersi — to jednak interwencja łączona i pojedyncze badanie, wymaga potwierdzenia w pełnej publikacji.',
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
    kind: 'styl-zycia',
    indications: [
      'prewencja pierwotna raka piersi (PREDIMED)',
      'redukcja śmiertelności sercowo-naczyniowej',
    ],
    regulatory: [
      { country: 'Polska', status: 'dopuszczone', note: 'Rekomendacje IŻŻ' },
      { country: 'UE', status: 'dopuszczone', note: 'EFSA, ESMO recognizes' },
    ],
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
      'RCT III PREDIMED/Toledo 2015 (PMID 26365989, n=4282): prewencja pierwotna raka piersi — HR 0,32 dla diety z oliwą extra virgin. Reanaliza Estruch 2018 (PMID 29897866): redukcja zdarzeń sercowo-naczyniowych. Doniesienie zjazdowe ASCO 2026 (abstrakt 263791): dieta śródziemnomorska o niskim indeksie glikemicznym łącznie z marszem i witaminą D wiązała się z istotnie niższym ryzykiem nawrotu wczesnego raka piersi (interwencja łączona, wymaga potwierdzenia). To nie jest „dieta lecznicza” w aktywnej onkologii.',
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
    kind: 'styl-zycia',
    indications: [
      'ból onkologiczny (rekomendacja ASCO/SIO 2022)',
      'AIMSS',
      'CINV',
      'uderzenia gorąca',
    ],
    regulatory: [
      { country: 'Niemcy', status: 'refundowane', note: 'GKV refunduje akupunkturę dla chronic back/knee pain' },
      { country: 'Szwajcaria', status: 'refundowane', note: 'Refundacja jako 1 z 5 metod CAM (od 2017)' },
      { country: 'USA', status: 'dopuszczone', note: 'ASCO/SIO 2022 guideline; Medicare dla wybranych wskazań' },
      { country: 'Wielka Brytania', status: 'dopuszczone', note: 'NICE NG193 — przewlekły ból pierwotny (nie wskazanie onkologiczne)' },
      { country: 'Polska', status: 'off-label', note: 'Brak refundacji; dostępne komercyjnie' },
    ],
    name: 'Akupunktura w onkologii',
    whatIsIt:
      'Akupunktura to nakłuwanie określonych punktów ciała cienkimi igłami. W onkologii nie jest leczeniem nowotworu, lecz metodą wspomagającą w wybranych objawach — ma najsilniejsze dowody i rekomendacje w bólu nowotworowym oraz bólu stawów po inhibitorach aromatazy.',
    contraindications:
      'Ostrożność przy małopłytkowości i neutropenii (ryzyko krwawienia i zakażenia) oraz przy obrzęku limfatycznym kończyny (nie nakłuwać zajętej kończyny). Wymaga wykwalifikowanego terapeuty.',
    category: 'supportive-care',
    shortDescription:
      'Metoda z najmocniejszą rekomendacją ASCO-SIO 2022 w bólu stawów po inhibitorach aromatazy (AIMSS); w innych rodzajach bólu — do rozważenia.',
    evidenceProfile: {
      effectSignal:
        'Wytyczne ASCO-SIO 2022: najmocniejsza rekomendacja dotyczy bólu stawów po inhibitorach aromatazy (AIMSS), potwierdzona RCT III; w innych rodzajach bólu akupunktura, akupresura lub refleksologia są opcjami do rozważenia.',
      grade: 'moderate',
      evidenceType: 'meta-analysis',
      clinicalStatus: 'guideline-supported',
      evidenceGap:
        'Heterogeniczność protokołów i trudność z grupą kontrolną (akupunktura pozorowana); brak refundacji w Polsce.',
    },
    howItWorks:
      'Proponowane mechanizmy obejmują modulację układu nerwowego i wydzielania neuroprzekaźników; pełny mechanizm pozostaje badany.',
    research:
      'Wytyczne ASCO-SIO 2022 (Mao, PMID 36122322) najmocniej wskazują akupunkturę przy bólu stawów związanym z inhibitorami aromatazy (AIMSS); dla innych rodzajów bólu nowotworowego akupunktura, akupresura lub refleksologia są ujęte jako opcje do rozważenia. RCT III Hershman 2018 (PMID 29998338, SWOG S1200): redukcja bólu stawów po inhibitorach aromatazy.',
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
    kind: 'styl-zycia',
    indications: [
      'lęk i depresja u pacjentów onkologicznych (rekomendacja ASCO/SIO 2023)',
      'redukcja zmęczenia',
      'poprawa QoL',
    ],
    regulatory: [
      { country: 'Polska', status: 'dopuszczone', note: 'Stosowane w ramach psychoonkologii' },
      { country: 'USA', status: 'dopuszczone', note: 'ASCO/SIO 2023 guideline' },
    ],
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
      'Wytyczne ASCO-SIO 2023 (Carlson, PMID 37582238): rekomendacja dla lęku i depresji. RCT II Carlson 2013 (PMID 23918953, MBCR): redukcja stresu i poprawa jakości życia u kobiet z rakiem piersi. Doniesienie zjazdowe ASCO 2026 (YOCAS, abstrakt 258197, n=410): łagodna joga Hatha jednocześnie zmniejszała lęk, wahania nastroju i zmęczenie oraz poprawiała sen (wymaga pełnej publikacji). Dostępne w Polsce w ramach psychoonkologii.',
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
    kind: 'grzyby',
    indications: [
      'adjuwant chemio raka żołądka (Japonia)',
      'paliatywne wsparcie immunologiczne',
    ],
    regulatory: [
      { country: 'Japonia', status: 'refundowane', note: 'PSK/Krestin — refundowany dla raka żołądka (od 1985)' },
      { country: 'Polska', status: 'OTC', note: 'Suplement diety; brak rejestracji onko' },
    ],
    name: 'Lentinan / PSK / AHCC — grzyby lecznicze (m.in. shiitake)',
    category: 'substance',
    shortDescription:
      'Polisacharydy z grzybów: lentinan z shiitake (Lentinula edodes), PSK z Coriolus/Trametes, AHCC ze grzybni shiitake. PSK jest w Japonii refundowanym adiuwantem chemioterapii raka żołądka.',
    evidenceProfile: {
      effectSignal:
        'Metaanaliza: PSK jako adiuwant chemioterapii raka żołądka — sygnał poprawy przeżycia. Status dotyczy wyłącznie Japonii i konkretnych preparatów farmaceutycznych PSK/Krestin; w UE i USA brak standardowej rejestracji onkologicznej. Nie należy utożsamiać farmaceutycznego PSK z suplementami grzybowymi dostępnymi komercyjnie w UE.',
      grade: 'low',
      evidenceType: 'meta-analysis',
      clinicalStatus: 'supportive-care',
      evidenceGap:
        'Dowody głównie z populacji japońskiej; ograniczone dla populacji europejskiej; brak rejestracji onkologicznej w UE/USA.',
    },
    howItWorks:
      'Beta-glukany i białkowo-polisacharydowe kompleksy modulują odporność wrodzoną (makrofagi, komórki NK).',
    research:
      'Metaanaliza Oba 2007 (PMID 17106715): PSK jako adiuwant chemioterapii raka żołądka — sygnał poprawy przeżycia. Metaanaliza Sakamoto 2005 (PMID 16133112, 3 randomizowane badania, 1094 chorych po resekcji raka jelita grubego): PSK dodany do chemioterapii poprawił przeżycie całkowite (RR 0,71; 95% CI 0,55–0,90) i wolne od choroby (RR 0,72). PSK/Krestin refundowany w Japonii od 1985 r. Suplementy dostępne w Polsce nie są tożsame z farmaceutycznym PSK. Lentinan to β-glukan z shiitake (Lentinula edodes). AHCC to standaryzowany ekstrakt z grzybni shiitake, badany głównie jako wsparcie w trakcie chemioterapii: w małych badaniach klinicznych wiązał się z lepszą jakością życia i mniejszą toksycznością leczenia (Cowawintaweewat 2006, PMID 16913187; Ito 2014, PMID 24611562). Randomizowane badanie fazy II w raku trzustki jest na etapie protokołu (Satoi 2022, PMID 35151367). To wsparcie wspomagające, a nie leczenie przeciwnowotworowe; dane są wczesne i ograniczone. Inne badane β-glukany grzybowe: wrośniak różnobarwny (Coriolus/Trametes) to źródło PSK; schizofiran (SPG, z rozszczepki) był japońskim immunomodulatorem z dawnym 5-letnim RCT w raku szyjki — wydłużenie czasu do nawrotu i przeżycia w stadium II, bez efektu w stadium III (Okamura 1989, PMID 2534912). Grzyby takie jak chaga (Inonotus) czy soplówka jeżowata (Hericium) pozostają głównie na etapie przedklinicznym.',
    safety:
      'Obok leczenia konwencjonalnego. Ostrożność przy chorobach autoimmunologicznych i po przeszczepieniu narządów.',
    talkToDoctor:
      'Zapytaj o różnicę między farmaceutycznym PSK a suplementami i o bezpieczeństwo immunomodulacji.',
    references: [
      { pmid: '17106715', title: 'Oba 2007 — metaanaliza PSK, rak żołądka', year: 2007 },
      { pmid: '16133112', title: 'Sakamoto 2005 — metaanaliza PSK, rak jelita grubego (OS RR 0,71)', year: 2005 },
      { pmid: '16913187', title: 'Cowawintaweewat 2006 — AHCC, zaawansowany rak wątroby (mała kohorta)', year: 2006 },
      { pmid: '24611562', title: 'Ito 2014 — AHCC, jakość życia i tolerancja chemioterapii (n=24)', year: 2014 },
      { pmid: '35151367', title: 'Satoi 2022 — protokół RCT II, AHCC w raku trzustki', year: 2022, note: 'protokół, brak wyników' },
      { pmid: '2534912', title: 'Okamura 1989 — RCT, schizofiran (SPG) + radioterapia, rak szyjki', year: 1989 },
    ],
  },
  {
    slug: 'artesunat',
    kind: 'leki',
    indications: [
      'eksperymentalne off-label w onkologii (badania I/II)',
    ],
    regulatory: [
      { country: 'Polska', status: 'dopuszczone', note: 'Zarejestrowany dla malarii; off-label onko możliwy' },
      { country: 'UE', status: 'dopuszczone', note: 'EMA approved; off-label onko na zasadach art. 5' },
      { country: 'USA', status: 'dopuszczone', note: 'FDA approved dla ciężkiej malarii (2020)' },
    ],
    redoxClass: 'pro-oxidant',
    name: 'Artesunat (off-label w onkologii)',
    whatIsIt:
      'Artesunat to pochodna artemizyniny, leku przeciwmalarycznego zarejestrowanego u ludzi. W onkologii badany jest eksperymentalnie (off-label), głównie pod kątem mechanizmu zależnego od żelaza (ferroptoza). Stosowanie onkologiczne nie jest rutynowe i pozostaje przedmiotem badań.',
    contraindications:
      'Ostrożność przy zaburzeniach gospodarki żelazem i niedokrwistości; możliwy wpływ na enzymy wątrobowe. Stosowanie wyłącznie pod nadzorem, najlepiej w ramach badania klinicznego.',
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
    administrationRoute: {
      summary:
        'Artesunat bada się zarówno doustnie, jak i dożylnie; droga podania wpływa na osiągane stężenia.',
      oral:
        'Doustnie biodostępność jest ograniczona i zmienna, a stężenia we krwi niższe.',
      iv:
        'Dożylnie osiąga się wyższe stężenia szczytowe — to forma badana pod kątem działania prooksydacyjnego (indukcja ferroptozy zależnej od żelaza) w badaniach wczesnofazowych.',
    },
  },
  {
    slug: 'niskie-dawki-naltreksonu',
    kind: 'leki',
    indications: [
      'badania eksperymentalne (brak rekomendacji klinicznej)',
    ],
    regulatory: [
      { country: 'Polska', status: 'rejestracja-jako-inne-wskazanie', note: 'Naltrekson zarejestrowany jako leczenie uzależnień' },
      { country: 'USA', status: 'off-label', note: 'Recepta off-label — wybrane kliniki' },
    ],
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
    kind: 'leki',
    indications: [
      'NIE leczenie standardowe ani off-label rutynowy',
      'wyłącznie ścieżka badania klinicznego (URPL + Komisja Bioetyczna)',
      'wskazania badane: rak jajnika, piersi, jelita grubego, prostaty, trzustki, żołądka, glejak (in vitro, xenograft, pilotażowe kliniczne)',
    ],
    regulatory: [
      { country: 'Polska', status: 'eksperymentalne', note: 'Brak rejestracji jako produkt leczniczy dla ludzi. Możliwe ścieżki stosowania klinicznego: badanie kliniczne (URPL + Komisja Bioetyczna), compassionate use (art. 83 rozp. 726/2004), named patient program, indywidualne sprowadzenie z zagranicy (art. 4 ust. 7–9 Prawa farmaceutycznego).' },
      { country: 'UE', status: 'eksperymentalne', note: 'Brak rejestracji EMA dla ludzi. Możliwa compassionate use (art. 83 rozp. 726/2004)' },
      { country: 'USA', status: 'eksperymentalne', note: 'Brak rejestracji FDA dla ludzi. Tylko IND lub badania kliniczne' },
    ],
    redoxClass: 'pro-oxidant',
    name: 'Salinomycyna',
    whatIsIt:
      'Salinomycyna to związek o działaniu jonoforowym, badany w modelach przedklinicznych pod kątem komórek macierzystych nowotworu. Nie jest zarejestrowana jako lek dla ludzi i nie ma ustalonego, bezpiecznego sposobu podawania u pacjentów.',
    contraindications:
      'Brak ustalonego profilu bezpieczeństwa u ludzi. Opisywano potencjalną toksyczność neurologiczną i ogólnoustrojową. Nie stosować poza kontrolowanymi badaniami klinicznymi.',
    mythBuster: {
      title: 'Jak czytać nagłówki o salinomycynie — bez hype i bez lekceważenia',
      body:
        'Dwa skróty myślowe są tu mylące. Pierwszy to hype: hasło „skuteczniejsza niż chemia” pochodzi z badań na liniach komórkowych, gdzie warunki są dalekie od organizmu człowieka — to nie jest dowód skuteczności u pacjentów. Drugi, równie błędny, to lekceważenie: „bardzo niska pewność dowodów” opisuje stan zbadania, a nie wyrok „nie działa”. Salinomycyna ma powtarzalny sygnał przedkliniczny dotyczący komórek macierzystych nowotworu, a brak badań u ludzi może wynikać z barier regulacyjnych, finansowych i bezpieczeństwa. Uczciwa konkluzja: to aktywnie badany obszar — bez danych klinicznych u ludzi nie można jednak ocenić realnej skuteczności ani bezpieczeństwa.',
    },
    category: 'experimental',
    experimental: true,
    experimentalNote:
      'Związek na etapie przedklinicznym, z powtarzalnym sygnałem wobec komórek macierzystych nowotworu — to obszar aktywnie badany, budzący duże zainteresowanie. Bywa stosowany u ludzi przez niektórych klinicystów (wieloletnia obserwacja bezpieczeństwa, efekt monitorowany m.in. przez ocenę komórek krążących), zawsze pod opieką lekarza i obok leczenia standardowego. Nie ma jeszcze kontrolowanych badań klinicznych, dlatego skuteczności u pacjentów nie można formalnie potwierdzić — brak takich badań nie jest jednak dowodem braku działania.',
    shortDescription:
      'Związek badany przedklinicznie pod kątem komórek macierzystych nowotworu — bez rejestracji dla ludzi.',
    evidenceProfile: {
      effectSignal:
        'Powtarzalny sygnał w modelach przedklinicznych (linie komórkowe i modele zwierzęce) dotyczący komórek macierzystych nowotworu. To nie jest dowód skuteczności klinicznej — brak badań u ludzi oznacza, że realnej skuteczności, dawki, drogi podania i bezpieczeństwa u pacjentów nie da się jeszcze ocenić.',
      grade: 'very-low',
      evidenceType: 'preclinical',
      clinicalStatus: 'experimental',
      evidenceGap:
        'Brak badań klinicznych II/III u ludzi. Przyczyny mogą obejmować bariery regulacyjne (związek o pochodzeniu weterynaryjnym, nieopatentowalny jako nowy lek), finansowe (brak sponsora kosztownych badań) oraz względy bezpieczeństwa — bez badań u ludzi nie można jednak rozstrzygać o skuteczności klinicznej. Konieczna ostrożność: nieustalona u ludzi droga podania i ryzyko toksyczności.',
    },
    howItWorks:
      'W modelach przedklinicznych opisywano wpływ na komórki macierzyste nowotworu, indukcję ferroptozy oraz hamowanie przejścia nabłonkowo-mezenchymalnego (EMT) związanego z przerzutowaniem; znaczenie kliniczne nieznane.',
    research:
      'Gupta 2009 (Cell, PMID 19682730): silne działanie wobec komórek macierzystych raka piersi w modelu in vitro (w tym modelu skuteczniejsze niż klasyczny cytostatyk — wyłącznie przedklinicznie). Naujokat & Steinhart 2012 (PMID 23251084): przegląd jako związek celujący w komórki macierzyste. Badania trwają i się rozwijają — zespół prof. Adama Huczyńskiego z Uniwersytetu im. Adama Mickiewicza w Poznaniu od lat projektuje pochodne salinomycyny o silniejszym i bardziej selektywnym działaniu; w pracy z 2025 r. pochodne tiomocznikowe wykazały 2–10× wyższą aktywność in vitro od macierzystej salinomycyny wobec modeli przerzutowego raka jelita grubego (PMID 39390831). To aktywnie badany kierunek przedkliniczny. Zastrzeżenie pozostaje jednak twarde: wszystkie dane są przedkliniczne — brak badań klinicznych u ludzi, więc skuteczności i bezpieczeństwa u pacjentów nie można jeszcze uznać za wykazane.',
    safety:
      'Obszar eksperymentalny. Nie stosować jako leczenie przeciwnowotworowe. Możliwa toksyczność neurologiczna i ogólnoustrojowa; brak rejestracji dla ludzi.',
    talkToDoctor:
      'To obszar badań, a nie terapia. Jakiekolwiek zastosowanie możliwe wyłącznie w ramach kontrolowanych badań klinicznych.',
    references: [
      { pmid: '19682730', title: 'Gupta 2009 (Cell) — komórki macierzyste, in vitro', year: 2009 },
      { pmid: '23251084', title: 'Naujokat & Steinhart 2012 — przegląd', year: 2012 },
      { pmid: '25553435', title: 'Antoszczak & Huczyński 2015 (UAM Poznań) — pochodne salinomycyny', year: 2015, note: 'polski wkład; synteza i aktywność przeciwnowotworowa (przedkliniczne)' },
      { pmid: '39390831', title: 'Antoszczak, Huczyński i wsp. 2025 (UAM Poznań) — pochodne tiomocznikowe salinomycyny', year: 2025, note: '2–10× wyższa aktywność in vitro wobec modeli przerzutowego raka jelita grubego (dane przedkliniczne)' },
    ],
    administrationRoute: {
      summary:
        'Wszelkie dane o salinomycynie pochodzą z modeli przedklinicznych — droga podania u ludzi nie jest ustalona ani zwalidowana.',
      iv:
        'W publikacjach mechanistycznych opisywano podanie dożylne w modelach zwierzęcych; u ludzi salinomycyna nie ma ustalonego, bezpiecznego sposobu podania i nie jest zarejestrowana.',
    },
  },
  {
    slug: 'boswellia-serrata',
    kind: 'rosliny',
    indications: [
      'obrzęk mózgu po radioterapii (najsilniejsze dowody)',
      'stany zapalne w onkologii',
      'wsparcie przy GBM i przerzutach mózgowych',
    ],
    regulatory: [
      { country: 'Polska', status: 'OTC', note: 'Suplement diety; ekstrakty standaryzowane na AKBA dostępne w aptekach' },
      { country: 'Niemcy', status: 'dopuszczone', note: 'Heilpraktiker; standaryzowane ekstrakty boswellii stosowane klinicznie; bez refundacji GKV' },
      { country: 'Szwajcaria', status: 'zależny', note: 'Ogólnej refundacji fitoterapii nie należy utożsamiać z refundacją konkretnego ekstraktu w wskazaniu onkologicznym — do weryfikacji per preparat i ubezpieczyciel' },
      { country: 'USA', status: 'OTC', note: 'Dietary supplement; trial NCT03149081 (phase I, MUSC)' },
    ],
    name: 'Boswellia serrata (kadzidłowiec indyjski)',
    whatIsIt:
      'Boswellia (kadzidłowiec indyjski) to żywica o działaniu przeciwzapalnym, której aktywne składniki (kwasy bosweliowe, m.in. AKBA) przenikają do mózgu. W onkologii najlepiej udokumentowane jest jej zastosowanie w zmniejszaniu obrzęku mózgu po radioterapii.',
    contraindications:
      'Ostrożność przy zaburzeniach krzepnięcia i lekach przeciwkrzepliwych. Jakość preparatu krytyczna — liczy się ekstrakt standaryzowany na AKBA, a nie zwykły proszek ziołowy.',
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
      'RCT II z podwójnie ślepą próbą Kirste 2011 (DOI 10.1002/cncr.25945, n=44): 60% pacjentów ≥75% redukcji obrzęku mózgu po radioterapii vs 26% placebo (p=0,023). Przegląd 2025 potwierdza sygnał i możliwość ograniczenia dawki deksametazonu, podkreślając jednak małą liczebność prób.',
    safety:
      'Obok, nie zamiast leczenia. Przeciwwskazania przy zaburzeniach krzepnięcia; jakość preparatu krytyczna (ekstrakt standaryzowany na AKBA).',
    talkToDoctor:
      'Zapytaj o zasadność przy obrzęku po radioterapii oraz o interakcje i wybór standaryzowanego ekstraktu.',
    references: [
      { doi: '10.1002/cncr.25945', title: 'Kirste 2011 — RCT II (podwójnie ślepa próba), obrzęk mózgu po RT', year: 2011, note: 'n=44; 60% vs 26%; p=0,023' },
      { pmid: '38194131', title: 'Morikawa 2024 — faza Ia, rak piersi', year: 2024 },
    ],
  },
  {
    slug: 'cordyceps',
    kind: 'grzyby',
    indications: [
      'adjuwant chemio/RT w raku płuca (najlepiej udokumentowane)',
      'zmęczenie onkologiczne (CRF)',
      'immunostymulacja podczas leczenia mielotoksycznego',
    ],
    regulatory: [
      { country: 'Polska', status: 'OTC', note: 'Suplement diety; CS-4 (hodowla C. militaris) dostępna w aptekach' },
      { country: 'Niemcy', status: 'dopuszczone', note: 'Heilpraktiker; bez refundacji GKV' },
      { country: 'Szwajcaria', status: 'zależny', note: 'Status do weryfikacji per preparat i wskazanie; nie utożsamiać z ogólną refundacją fitoterapii' },
      { country: 'Japonia', status: 'OTC', note: 'Tradycja TCM (Dongchongxiacao); brak rejestracji onko' },
      { country: 'USA', status: 'OTC', note: 'Dietary supplement; CS-4 standaryzowany komercyjnie' },
    ],
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
    kind: 'grzyby',
    indications: [
      'adjuwant immunostymulacyjny w skojarzeniu z chemio/RT',
      'poprawa QoL podczas leczenia onkologicznego',
      'wsparcie funkcji immunologicznej (CD3/CD4/CD8)',
    ],
    regulatory: [
      { country: 'Polska', status: 'OTC', note: 'Suplement diety; dostępne w aptekach (Reishi Aktiv, MycoMedica, ShroomMe)' },
      { country: 'Niemcy', status: 'dopuszczone', note: 'Heilpraktiker; TCM Heilpflanzen; bez refundacji GKV' },
      { country: 'Szwajcaria', status: 'zależny', note: 'Status do weryfikacji per preparat i wskazanie; nie utożsamiać z ogólną refundacją TCM/fitoterapii' },
      { country: 'Japonia', status: 'OTC', note: 'Tradycja Lingzhi/Reishi; bez rejestracji onko (vs PSK/Krestin)' },
      { country: 'USA', status: 'OTC', note: 'Dietary supplement; FDA nie zatwierdziło dla leczenia raka' },
    ],
    name: 'Reishi / Ganoderma lucidum',
    whatIsIt:
      'Reishi (Ganoderma lucidum) to grzyb leczniczy o wielowiekowej tradycji w medycynie Azji. W onkologii bada się go jako wsparcie immunologiczne w skojarzeniu z chemio- lub radioterapią, nie jako samodzielne leczenie.',
    contraindications:
      'Ostrożność po przeszczepieniu narządów (immunostymulacja), przy lekach przeciwkrzepliwych (opisy interakcji z warfaryną) oraz w hormonozależnym raku piersi. Jakość ekstraktu ma znaczenie.',
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
    kind: 'grzyby',
    indications: [
      'immunostymulacja podczas mielotoksycznej chemio',
      'wsparcie aktywności NK',
      'badania fazy I/II w raku piersi',
    ],
    regulatory: [
      { country: 'Polska', status: 'OTC', note: 'Suplement diety; dostępne w aptekach i sklepach z suplementami' },
      { country: 'Japonia', status: 'OTC', note: 'G. frondosa nie refundowana (vs PSK/Krestin z T. versicolor)' },
      { country: 'USA', status: 'OTC', note: 'Dietary supplement; faza badań klinicznych (NIH NCI)' },
      { country: 'Niemcy', status: 'dopuszczone', note: 'Heilpraktiker; jak Reishi — potencjalnie w TCM/fitoterapii' },
    ],
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
    kind: 'rosliny',
    indications: [
      'redukcja neutropenii po chemio (jedyne RCT)',
      'immunostymulacja podczas leczenia',
      'odbudowa parametrów immunologicznych po cyklach chemio',
    ],
    regulatory: [
      { country: 'Polska', status: 'OTC', note: 'Suplement diety; Vilcacora, Koci Pazur (Nefdespa, Primaforce, Swanson)' },
      { country: 'Niemcy', status: 'dopuszczone', note: 'Heilpraktiker; bez refundacji GKV' },
      { country: 'Szwajcaria', status: 'zależny', note: 'Ewentualne pokrycie indywidualne w ramach fitoterapii — do weryfikacji per preparat i ubezpieczyciel' },
      { country: 'Austria', status: 'dopuszczone', note: 'ÖÄK Diplom w fitoterapii' },
      { country: 'USA', status: 'OTC', note: 'Dietary supplement; brak FDA approval dla onko' },
    ],
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
    slug: 'resweratrol',
    kind: 'rosliny',
    name: 'Resweratrol',
    category: 'substance',
    experimental: true,
    redoxClass: 'context-dependent',
    shortDescription:
      'Polifenol badany w onkologii; jego działanie zależy od stężenia i drogi podania (antyoksydacyjne w niskich, prooksydacyjne w wysokich).',
    evidenceProfile: {
      effectSignal:
        'Sygnał głównie z modeli przedklinicznych (apoptoza, modulacja SIRT1/NF-κB); dane kliniczne ograniczone, brak twardych punktów końcowych.',
      grade: 'very-low',
      evidenceType: 'preclinical',
      clinicalStatus: 'experimental',
      evidenceGap:
        'Bardzo niska biodostępność doustna; forma dożylna niemal wyłącznie przedkliniczna; brak RCT z twardymi punktami końcowymi.',
    },
    howItWorks:
      'Opisywano modulację szlaków SIRT1, NF-κB i mTOR oraz wpływ na apoptozę w modelach przedklinicznych. Efekt jest zależny od stężenia — w niskich działa antyoksydacyjnie, w wysokich może działać prooksydacyjnie. Znaczenie kliniczne nieustalone.',
    research:
      'Większość danych pochodzi z badań in vitro i modeli zwierzęcych. Doustny resweratrol ma bardzo niską biodostępność, co ogranicza przełożenie wyników przedklinicznych na praktykę. Brak wiarygodnych RCT potwierdzających skuteczność onkologiczną.',
    safety:
      'Obszar eksperymentalny. Możliwy wpływ na krzepnięcie i interakcje z lekami metabolizowanymi przez wątrobę. Nie stosować jako leczenie przeciwnowotworowe bez nadzoru.',
    talkToDoctor:
      'Traktuj jako obszar badań. Poinformuj onkologa, jeśli rozważasz suplementację — możliwe interakcje, zwłaszcza okołozabiegowo.',
    references: [
      { title: 'Przeglądy badań przedklinicznych nad resweratrolem w onkologii', year: 2021, note: 'dane głównie in vitro / modele zwierzęce; niska biodostępność doustna' },
    ],
    administrationRoute: {
      summary:
        'Działanie resweratrolu zależy od osiąganego stężenia, a to od drogi podania.',
      oral:
        'Doustnie biodostępność jest bardzo niska — trudno osiągnąć stężenia z badań przedklinicznych; w niskich stężeniach przeważa działanie antyoksydacyjne.',
      iv:
        'Formę dożylną badano niemal wyłącznie przedklinicznie; w wysokich stężeniach opisywano działanie prooksydacyjne. Brak dojrzałych danych klinicznych.',
    },
  },
  {
    slug: 'iwermektyna',
    kind: 'leki',
    name: 'Iwermektyna (off-label, eksperymentalnie)',
    category: 'experimental',
    experimental: true,
    redoxClass: 'context-dependent',
    indications: [
      'wyłącznie badania przedkliniczne i wczesnofazowe — brak zarejestrowanego wskazania onkologicznego',
    ],
    regulatory: [
      { country: 'Polska', status: 'dopuszczone (inne wskazanie)', note: 'Zarejestrowana jako lek przeciwpasożytniczy; zastosowanie onkologiczne wyłącznie eksperymentalne / off-label' },
      { country: 'USA', status: 'dopuszczone (inne wskazanie)', note: 'FDA — wskazania przeciwpasożytnicze; brak wskazania onkologicznego' },
    ],
    shortDescription:
      'Lek przeciwpasożytniczy badany w onkologii wyłącznie przedklinicznie. Brak dowodów klinicznych skuteczności u ludzi w nowotworach.',
    whatIsIt:
      'Iwermektyna to szeroko stosowany, tani lek przeciwpasożytniczy, zarejestrowany u ludzi i zwierząt. Należy do tzw. leków repozycjonowanych (drug repurposing) — czyli leków o znanym profilu bezpieczeństwa, sprawdzanych pod kątem nowych zastosowań, w tym onkologicznych. W onkologii pozostaje jednak na etapie badań laboratoryjnych.',
    evidenceProfile: {
      effectSignal:
        'W modelach komórkowych i zwierzęcych opisywano wpływ na szlaki związane z komórkami macierzystymi nowotworu (m.in. WNT, STAT3, PAK1). To sygnały przedkliniczne, nie dowody kliniczne.',
      grade: 'very-low',
      evidenceType: 'preclinical',
      clinicalStatus: 'experimental',
      evidenceGap:
        'Brak badań klinicznych potwierdzających skuteczność przeciwnowotworową u ludzi. Stężenia działające w probówce mogą być trudne lub niebezpieczne do osiągnięcia w organizmie.',
    },
    howItWorks:
      'W badaniach laboratoryjnych opisywano wpływ iwermektyny na kilka szlaków istotnych dla przeżycia komórek nowotworowych. Mechanizmy te są obiecujące teoretycznie, ale ich znaczenie u pacjentów nie zostało wykazane.',
    research:
      'Dostępne dane pochodzą głównie z badań in vitro i na zwierzętach. To klasyczny przykład leku repozycjonowanego, którego potencjał onkologiczny jest badany, ale nie potwierdzony klinicznie. Pojawiają się pierwsze badania kliniczne wczesnej fazy (np. iwermektyna z immunoterapią w raku piersi), jednak do 2026 r. żadne nie dostarczyło danych pozwalających włączyć iwermektynę do standardu leczenia.',
    safety:
      'Obszar eksperymentalny. W zarejestrowanych wskazaniach przeciwpasożytniczych profil bezpieczeństwa jest dobrze poznany, ale stosowanie onkologiczne (zwykle w wyższych dawkach badanych przedklinicznie) niesie ryzyko i nie ma ustalonego bezpieczeństwa.',
    contraindications:
      'Brak ustalonego profilu bezpieczeństwa dla zastosowań onkologicznych. Możliwe interakcje lekowe i działania neurologiczne przy wysokich dawkach. W 2026 r. ASCO wydało stanowisko (Clinical Notice) odradzające stosowanie iwermektyny jako leczenia raka lub dodatku do leczenia poza badaniami klinicznymi. Jednocześnie trwają wczesne badania kliniczne (m.in. faza I/II w raku potrójnie ujemnym piersi) — to różnica między „nie stosować samodzielnie zamiast leczenia” a „warto badać dalej”.',
    talkToDoctor:
      'Traktuj jako obszar badań, nie terapię. Jeśli rozważasz udział w badaniu klinicznym lub stosowanie off-label, omów to z onkologiem — samodzielne stosowanie jest ryzykowne.',
    references: [
      { title: 'Przeglądy repozycjonowania iwermektyny w onkologii (dane przedkliniczne)', year: 2021, note: 'dane in vitro / modele zwierzęce; brak RCT w onkologii' },
      { guideline: 'ASCO', title: 'ASCO Clinical Notice — przeciw stosowaniu iwermektyny jako leczenia raka poza badaniami klinicznymi', year: 2026 },
    ],
    mythBuster: {
      title: 'Lek repozycjonowany to nie to samo co lek o udowodnionym działaniu w raku',
      body:
        'Iwermektyna bywa przedstawiana jako „przełomowy lek na raka" na podstawie badań laboratoryjnych. Repozycjonowanie leków to realny, wartościowy kierunek badań — ale „działa w probówce" to nie to samo co „działa u pacjenta". Bez badań klinicznych nie wiadomo, czy efekt występuje u ludzi, w jakich dawkach i przy jakim ryzyku.',
    },
  },
  {
    slug: 'fenbendazol',
    kind: 'leki',
    name: 'Fenbendazol (off-label, eksperymentalnie)',
    category: 'experimental',
    experimental: true,
    redoxClass: 'context-dependent',
    indications: [
      'wyłącznie badania przedkliniczne — brak danych klinicznych w onkologii u ludzi',
    ],
    regulatory: [
      { country: 'Polska', status: 'weterynaryjne', note: 'Lek przeciwpasożytniczy weterynaryjny; brak rejestracji dla ludzi w jakimkolwiek wskazaniu' },
      { country: 'USA', status: 'weterynaryjne', note: 'Brak rejestracji dla ludzi; zastosowanie onkologiczne wyłącznie eksperymentalne' },
    ],
    shortDescription:
      'Weterynaryjny lek przeciwpasożytniczy, popularny w mediach jako „lek na raka". Dane wyłącznie przedkliniczne, brak rejestracji dla ludzi.',
    whatIsIt:
      'Fenbendazol to lek przeciwpasożytniczy stosowany u zwierząt, należący do benzimidazoli (podobnie jak mebendazol stosowany u ludzi). Zyskał rozgłos w internecie jako rzekomy „lek na raka" po nagłośnionych historiach pojedynczych osób. Nie jest zarejestrowany do stosowania u ludzi w żadnym wskazaniu.',
    evidenceProfile: {
      effectSignal:
        'W badaniach komórkowych opisywano wpływ na mikrotubule (podobnie jak niektóre cytostatyki) oraz na metabolizm glukozy komórek nowotworowych. To dane przedkliniczne.',
      grade: 'very-low',
      evidenceType: 'preclinical',
      clinicalStatus: 'experimental',
      evidenceGap:
        'Brak badań klinicznych u ludzi w onkologii. Dowody opierają się na modelach laboratoryjnych i pojedynczych opisach przypadków, które nie pozwalają wnioskować o skuteczności.',
    },
    howItWorks:
      'W modelach laboratoryjnych opisywano destabilizację mikrotubul (struktur potrzebnych do podziału komórki) oraz wpływ na metabolizm glukozy. Mechanizmy są interesujące naukowo, ale nie wykazano ich znaczenia klinicznego u ludzi.',
    research:
      'Dane ograniczają się do badań in vitro, modeli zwierzęcych i pojedynczych opisów przypadków nagłośnionych medialnie. Opisy przypadków nie są dowodem skuteczności — nie pozwalają oddzielić efektu leku od jednoczesnego leczenia konwencjonalnego czy naturalnego przebiegu choroby.',
    safety:
      'Obszar eksperymentalny, lek niezarejestrowany dla ludzi. Brak danych o bezpieczeństwie długotrwałego stosowania u ludzi; sygnały o możliwym obciążeniu wątroby. Nie stosować jako leczenie przeciwnowotworowe.',
    contraindications:
      'Brak rejestracji i ustalonego bezpieczeństwa u ludzi. Możliwe obciążenie wątroby; nieznane interakcje z leczeniem onkologicznym. W 2026 r. ASCO wydało stanowisko odradzające stosowanie fenbendazolu jako leczenia raka lub dodatku do leczenia poza badaniami klinicznymi. Stosowanie „na własną rękę”, zwłaszcza zamiast leczenia o udowodnionej skuteczności, jest odradzane.',
    talkToDoctor:
      'Jeśli rozważasz fenbendazol pod wpływem historii z internetu, koniecznie omów to z onkologiem. Opisy pojedynczych przypadków nie są dowodem, a lek nie jest przeznaczony dla ludzi.',
    references: [
      { title: 'Dane przedkliniczne i opisy przypadków dotyczące fenbendazolu w onkologii', year: 2021, note: 'in vitro / modele zwierzęce / case reports; brak badań klinicznych' },
      { guideline: 'ASCO', title: 'ASCO Clinical Notice — przeciw stosowaniu fenbendazolu jako leczenia raka poza badaniami klinicznymi', year: 2026 },
    ],
    mythBuster: {
      title: 'Opis przypadku z internetu to nie dowód skuteczności',
      body:
        'Popularność fenbendazolu opiera się na nagłośnionych historiach pojedynczych osób. To zrozumiałe, że takie historie robią wrażenie — ale z naukowego punktu widzenia opis przypadku stoi nisko w hierarchii dowodów. Nie pozwala oddzielić działania leku od równoległej chemioterapii, immunoterapii czy naturalnego przebiegu choroby. Dlatego potrzebne są badania kliniczne, których dla fenbendazolu w onkologii brak.',
    },
  },
  {
    slug: 'kannabinoidy',
    kind: 'rosliny',
    name: 'Kannabinoidy (CBD i THC / medyczna marihuana)',
    category: 'supportive-care',
    redoxClass: 'context-dependent',
    indications: [
      'oporne nudności i wymioty po chemioterapii (jako dodatek do standardowych leków przeciwwymiotnych)',
      'ból (rola uzupełniająca, dane niejednoznaczne)',
      'brak apetytu i utrata masy ciała',
      'zaburzenia snu i lęk (dane ograniczone)',
    ],
    regulatory: [
      { country: 'Polska', status: 'na receptę', note: 'Medyczna marihuana (susz, surowiec farmaceutyczny) na receptę. Status produktów CBD zależy od składu, zawartości THC i kwalifikacji produktu — nie należy utożsamiać rynkowego produktu CBD z lekiem onkologicznym' },
      { country: 'USA', status: 'zależny', note: 'Status różny między stanami; dronabinol/nabilon (syntetyczne) zarejestrowane w wybranych wskazaniach' },
      { country: 'UE', status: 'zależny', note: 'Status różni się między krajami; medyczna marihuana dopuszczona w części państw' },
    ],
    shortDescription:
      'CBD i THC z konopi, badane głównie w opiece wspomagającej (nudności, ból, apetyt). Nie jako leczenie przeciwnowotworowe.',
    whatIsIt:
      'Kannabinoidy to związki z konopi. Dwa najważniejsze to THC (działa psychoaktywnie, na receptę jako medyczna marihuana) i CBD (niepsychoaktywne; na rynku występuje w produktach o różnym statusie — kosmetykach, suplementach — zależnym od składu i zawartości THC). To nie to samo: różnią się działaniem, statusem prawnym i profilem dowodów. W onkologii bada się je jako wsparcie objawowe, nie jako leczenie nowotworu.',
    evidenceProfile: {
      effectSignal:
        'Wytyczne ASCO 2024 wskazują, że kannabinoidy mogą poprawiać oporne na leczenie nudności i wymioty po chemioterapii, gdy dodaje się je do standardowych leków przeciwwymiotnych. Dla bólu, apetytu i lęku dane są słabsze i niespójne.',
      grade: 'low',
      evidenceType: 'meta-analysis',
      clinicalStatus: 'supportive-care',
      evidenceGap:
        'Pewność dowodów dla większości objawów jest niska; brak dowodów na działanie przeciwnowotworowe u ludzi. Zróżnicowane preparaty i dawki utrudniają porównania.',
    },
    howItWorks:
      'Kannabinoidy działają na układ endokannabinoidowy (receptory CB1/CB2), wpływając m.in. na odczuwanie nudności, bólu i apetyt. Mechanizm przeciwobjawowy jest dobrze umocowany; opisywane w laboratorium działanie przeciwnowotworowe nie zostało wykazane klinicznie.',
    research:
      'Wytyczne ASCO 2024 (PMID 38478773, JCO): u dorosłych z opornymi nudnościami i wymiotami po chemioterapii — mimo standardowej profilaktyki — można rozważyć dodanie dronabinolu, nabilonu lub jakościowo kontrolowanego doustnego ekstraktu 1:1 THC:CBD. Nie dotyczy to samodzielnego stosowania dowolnych olejków CBD ani marihuany. Dla pozostałych objawów pewność dowodów jest niska. ASCO wyraźnie odradza stosowanie kannabinoidów jako leczenia przeciwnowotworowego poza badaniami klinicznymi, a także — poza badaniem — doustnego CBD w dawce 300 mg/dobę lub wyższej (brak udowodnionej skuteczności, ryzyko odwracalnych zaburzeń enzymów wątrobowych).',
    safety:
      'Obok, nie zamiast leczenia. THC działa psychoaktywnie (senność, zawroty, wpływ na prowadzenie pojazdów); możliwe interakcje z lekami metabolizowanymi w wątrobie. Ostrożność u osób z chorobami psychicznymi i sercowo-naczyniowymi. Przy immunoterapii inhibitorami punktów kontrolnych wpływ kannabinoidów na skuteczność i bezpieczeństwo nie jest jednoznacznie ustalony (możliwe działanie immunomodulujące) — wymaga to szczególnej konsultacji z onkologiem.',
    contraindications:
      'Ostrożność przy zaburzeniach psychicznych (THC), chorobach serca, w ciąży i laktacji. Możliwe interakcje lekowe (CYP). Medyczna marihuana wyłącznie na receptę i pod nadzorem lekarza.',
    talkToDoctor:
      'Zapytaj, czy w Twoich objawach (np. oporne nudności) kannabinoidy mogą być dodatkiem do leczenia, o właściwy preparat i dawkę oraz o interakcje z Twoimi lekami. Nie traktuj ich jako leczenia raka.',
    mythBuster: {
      title: 'Olej CBD nie jest udowodnionym lekiem na raka',
      body:
        'W internecie olej CBD i marihuana bywają przedstawiane jako lek na raka. To nieporozumienie: badania laboratoryjne pokazują pewien wpływ na komórki nowotworowe, ale nie ma badań u ludzi potwierdzających działanie przeciwnowotworowe. Udokumentowana, realna rola kannabinoidów dotyczy łagodzenia objawów — przede wszystkim opornych nudności i wymiotów — jako dodatek do standardowego leczenia, nie jako jego zamiennik.',
    },
    references: [
      { pmid: '38478773', title: 'Cannabis and Cannabinoids in Adults With Cancer — wytyczne ASCO 2024', year: 2024, note: 'JCO; oporne CINV jako dodatek; odradza stosowanie jako leczenia przeciwnowotworowego poza badaniami' },
    ],
  },
  {
    slug: 'dieta-ketogeniczna',
    kind: 'styl-zycia',
    name: 'Dieta ketogeniczna w onkologii',
    category: 'lifestyle',
    experimental: true,
    experimentalNote:
      'Dieta ketogeniczna ma już wczesne badania kliniczne (feasibility/pilotaż, m.in. podczas radioterapii i w glejaku), które wskazują, że bywa wykonalna i raczej dobrze tolerowana u wybranych pacjentów. Brakuje jednak dużych badań pokazujących wpływ na przeżycie, a u chorych onkologicznych istnieje realne ryzyko niedożywienia. Stosować wyłącznie pod opieką lekarza i dietetyka, obok leczenia standardowego.',
    indications: [
      'obszar badań — bez potwierdzonej poprawy przeżycia',
      'badana w wybranych nowotworach (m.in. glejak) jako uzupełnienie',
    ],
    regulatory: [
      { country: 'Polska', status: 'nie dotyczy', note: 'Interwencja dietetyczna; nie podlega rejestracji jako lek' },
    ],
    shortDescription:
      'Dieta bardzo niskowęglowodanowa, wysokotłuszczowa, badana w onkologii — obszar badań, nie udowodnione leczenie.',
    whatIsIt:
      'Dieta ketogeniczna drastycznie ogranicza węglowodany, zmuszając organizm do czerpania energii z tłuszczów (ciał ketonowych). W onkologii bada się hipotezę, że ograniczenie glukozy może utrudniać metabolizm części komórek nowotworowych (efekt Warburga).',
    evidenceProfile: {
      effectSignal:
        'Małe badania I/II fazy oceniają głównie bezpieczeństwo i wykonalność; sygnał możliwej poprawy tolerancji leczenia. Brak dużych RCT z twardymi punktami końcowymi.',
      grade: 'very-low',
      evidenceType: 'rct',
      clinicalStatus: 'experimental',
      evidenceGap:
        'Brak dużych RCT III pokazujących poprawę przeżycia lub kontroli choroby; istotne ryzyko niedożywienia u pacjentów onkologicznych.',
    },
    howItWorks:
      'Ograniczenie glukozy ma teoretycznie utrudniać metabolizm komórek nowotworowych zależnych od glikolizy. To hipoteza metaboliczna — jej znaczenie kliniczne pozostaje nieudowodnione.',
    research:
      'Istnieją wczesne badania KLINICZNE (feasibility/pilotaż), nie tylko przedkliniczne. Randomizowane badanie fazy I KETOCOMP (Klement 2016, PMID 28531663): dieta ketogeniczna w trakcie radioterapii raka piersi, jelita grubego oraz głowy i szyi była wykonalna i sprzyjała zachowaniu korzystnego składu ciała. Randomizowany pilotaż KEATING (Martin-McGill 2017, PMID 29209515): ocena wykonalności keto jako terapii uzupełniającej w glejaku. Przegląd systematyczny u dzieci z guzami mózgu (AlMutairi 2025, PMID 40134818): dieta dobrze tolerowana i wykonalna, ale wpływ na sam nowotwór pozostaje niejasny. Do 2026 r. brak dużych badań III fazy pokazujących poprawę przeżycia.',
    safety:
      'Obok leczenia konwencjonalnego, wyłącznie pod nadzorem. U pacjentów niedożywionych, z kacheksją lub sarkopenią restrykcyjna dieta może bardziej zaszkodzić niż pomóc.',
    contraindications:
      'Przeciwwskazana lub wysokiego ryzyka przy niedożywieniu, kacheksji, cukrzycy typu 1, niewydolności wątroby/nerek, niektórych defektach metabolicznych. Wymaga nadzoru dietetyka klinicznego.',
    talkToDoctor:
      'Zapytaj, czy w Twojej sytuacji (stan odżywienia, typ leczenia) dieta ketogeniczna jest bezpieczna, i poproś o opiekę dietetyka klinicznego. To obszar badań, nie udowodnione leczenie.',
    references: [
      { pmid: '28531663', title: 'KETOCOMP (Klement 2016) — randomizowane fazy I, keto podczas radioterapii (pierś/jelito/głowa-szyja)', year: 2016 },
      { pmid: '29209515', title: 'KEATING (Martin-McGill 2017) — randomizowany pilotaż, keto w glejaku', year: 2017 },
      { pmid: '40134818', title: 'AlMutairi 2025 — przegląd systematyczny, keto w guzach mózgu u dzieci', year: 2025, note: 'bezpieczna/wykonalna; wpływ na nowotwór niejasny' },
    ],
  },
  {
    slug: 'post-i-diety-naladujace-post',
    kind: 'styl-zycia',
    name: 'Post i diety naśladujące post (FMD)',
    category: 'lifestyle',
    experimental: true,
    indications: [
      'obszar badań — możliwa poprawa tolerancji chemioterapii',
      'bez potwierdzonej poprawy przeżycia',
    ],
    regulatory: [
      { country: 'Polska', status: 'nie dotyczy', note: 'Interwencja dietetyczna; nie podlega rejestracji jako lek' },
    ],
    shortDescription:
      'Krótkotrwały post lub dieta naśladująca post wokół chemioterapii — badana, obiecująca, ale niepotwierdzona w dużych badaniach.',
    whatIsIt:
      'Post (np. okołochemioterapeutyczny) i dieta naśladująca post (FMD) to krótkotrwałe, kontrolowane ograniczenie kalorii. Hipoteza: zdrowe komórki przechodzą w tryb ochronny, a nowotworowe pozostają wrażliwe na leczenie (tzw. zróżnicowana odporność na stres).',
    evidenceProfile: {
      effectSignal:
        'Małe badania sugerują lepszą tolerancję chemioterapii i mniejsze działania niepożądane; dane dotyczące skuteczności przeciwnowotworowej są wstępne.',
      grade: 'very-low',
      evidenceType: 'rct',
      clinicalStatus: 'experimental',
      evidenceGap:
        'Brak dużych RCT III z twardymi punktami końcowymi; ryzyko utraty masy ciała i niedożywienia.',
    },
    howItWorks:
      'Krótkotrwałe ograniczenie kalorii zmienia sygnalizację metaboliczną (m.in. spadek IGF-1, glukozy), co w modelach zwiększa różnicę wrażliwości między komórkami zdrowymi a nowotworowymi. Znaczenie kliniczne wymaga potwierdzenia.',
    research:
      'Badania II fazy (m.in. rak piersi, jajnika) sugerują, że FMD wokół chemioterapii bywa wykonalna i może poprawiać tolerancję leczenia oraz wybrane markery. Brak dużych badań III fazy potwierdzających wpływ na przeżycie.',
    safety:
      'Obok leczenia konwencjonalnego, wyłącznie pod nadzorem. Niewskazane przy niedożywieniu, kacheksji, niskiej masie ciała; ryzyko hipoglikemii i osłabienia.',
    contraindications:
      'Przeciwwskazane przy niedożywieniu, kacheksji, cukrzycy leczonej insuliną, niskiej masie ciała. Wymaga kwalifikacji i nadzoru zespołu onkologiczno-dietetycznego.',
    talkToDoctor:
      'Zapytaj, czy post/FMD są dla Ciebie bezpieczne (stan odżywienia, leki), i nie podejmuj ich samodzielnie w trakcie aktywnego leczenia.',
    references: [
      { title: 'Badania II fazy nad postem i FMD w onkologii', year: 2025, note: 'wykonalność i tolerancja; brak RCT III dla przeżycia' },
    ],
  },
  {
    slug: 'mikrobiom-i-fmt',
    kind: 'styl-zycia',
    name: 'Mikrobiom jelitowy i przeszczep mikrobioty (FMT)',
    category: 'experimental',
    experimental: true,
    indications: [
      'wpływ na odpowiedź na immunoterapię (anty-PD-1) — obszar badań',
      'FMT badany w przełamywaniu oporności na immunoterapię',
    ],
    regulatory: [
      { country: 'Polska', status: 'eksperymentalne', note: 'FMT zarejestrowany we wskazaniu zakażenia C. difficile; zastosowanie onkologiczne wyłącznie badawcze' },
    ],
    shortDescription:
      'Skład mikrobiomu jelitowego wpływa na odpowiedź na immunoterapię; przeszczep mikrobioty (FMT) badany jest w onkologii.',
    whatIsIt:
      'Mikrobiom jelitowy to społeczność bakterii w jelitach. Badania pokazują, że jego skład wpływa na skuteczność immunoterapii (inhibitorów punktów kontrolnych). FMT to przeniesienie mikrobioty od dawcy — w onkologii badane eksperymentalnie.',
    evidenceProfile: {
      effectSignal:
        'Dane obserwacyjne: określone bakterie (np. Akkermansia muciniphila) częstsze u odpowiadających na anty-PD-1; antybiotyki przed immunoterapią pogarszają wyniki. Pierwsze badania FMT I/II fazy sugerują zwiększenie odsetka odpowiedzi.',
      grade: 'low',
      evidenceType: 'rct',
      clinicalStatus: 'experimental',
      evidenceGap:
        'Brak dużych RCT III; FMT w onkologii wyłącznie w ramach badań. Modyfikacja mikrobiomu suplementami nie ma potwierdzonej skuteczności.',
    },
    howItWorks:
      'Mikrobiom moduluje układ odpornościowy i może wpływać na skuteczność immunoterapii. FMT ma „przeszczepić" korzystny profil bakterii od dawcy odpowiadającego na leczenie.',
    research:
      'Badania (m.in. Routy, Gopalakrishnan) wiążą skład mikrobiomu z odpowiedzią na anty-PD-1 w czerniaku, raku płuca i nerki. Wczesne badania I/II FMT + anty-PD-1 (czerniak, NSCLC) sugerują zwiększenie odsetka odpowiedzi — to obszar aktywnych badań, nie praktyka.',
    safety:
      'Obok leczenia konwencjonalnego. FMT niesie ryzyko przeniesienia patogenów — wykonywany wyłącznie w warunkach kontrolowanych. Agresywnej „modyfikacji mikrobiomu" suplementami nie należy podejmować samodzielnie, zwłaszcza w trakcie immunoterapii.',
    contraindications:
      'FMT poza wskazaniem rejestracyjnym (C. difficile) wyłącznie w badaniach klinicznych. Ostrożność z probiotykami i antybiotykami w okresie immunoterapii — omówić z onkologiem.',
    talkToDoctor:
      'Jeśli jesteś w trakcie immunoterapii, zapytaj o wpływ antybiotyków i diety na mikrobiom. FMT rozważaj wyłącznie w ramach badania klinicznego.',
    references: [
      { title: 'Badania nad mikrobiomem a odpowiedzią na immunoterapię oraz wczesne próby FMT', year: 2025, note: 'obserwacyjne + fazy I/II; brak RCT III w onkologii' },
    ],
  },
  {
    slug: 'inhalacje-wodorowe',
    kind: 'fizykalne',
    indications: [
      'redukcja toksyczności radioterapii (zapalenie jelit, mucositis, ototoksyczność)',
      'zmęczenie onkologiczne podczas chemio/immunoterapii',
      'ochrona narządów (nerki, wątroba, serce) podczas chemio',
    ],
    regulatory: [
      { country: 'Japonia', status: 'dopuszczone', note: 'Status Advanced Medical Care B (Klasa 2B) od XII 2016 (MHLW; jRCTs031180352) — dla określonego programu/zastosowania; szczegóły do weryfikacji w MHLW/jRCT' },
      { country: 'Polska', status: 'wyrób (CE)', note: 'Dostępność urządzeń nie oznacza statusu terapii onkologicznej. Brak rejestracji H₂ jako leku i brak refundacji NFZ' },
      { country: 'Niemcy', status: 'dopuszczone', note: 'Heilpraktikerzy; bez refundacji GKV; status suplementu/wyrobu' },
      { country: 'USA', status: 'eksperymentalne', note: 'FDA: urządzenia bez approval jako lek; aktywne badania NCT03818347, NCT04175301, NCT05728112' },
      { country: 'UE', status: 'wyrób (CE)', note: 'Brak rejestracji EMA jako leku; dostępność wyrobu z CE nie jest statusem terapii onkologicznej' },
    ],
    redoxClass: 'antioxidant',
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
      clinicalStatus: 'experimental',
      evidenceGap:
        'Brak RCT III; status urządzeń różni się między krajami; jakość sprzętu (wyrób medyczny vs „wellness”).',
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
  {
    slug: 'sylimaryna',
    kind: 'rosliny',
    name: 'Sylimaryna (ostropest plamisty)',
    category: 'substance',
    redoxClass: 'antioxidant',
    shortDescription:
      'Wyciąg z ostropestu plamistego badany jako ochrona wątroby przed toksycznością leczenia onkologicznego.',
    whatIsIt:
      'Sylimaryna to mieszanina flawonolignanów (głównie sylibiny) z nasion ostropestu plamistego (Silybum marianum). Od dekad stosowana jako środek osłaniający wątrobę w chorobach wątroby i zatruciach. W onkologii bada się ją głównie jako wsparcie wątroby w trakcie chemioterapii, nie jako leczenie przeciwnowotworowe.',
    indications: [
      'ochrona wątroby przed toksycznością leczenia (hepatoprotekcja)',
      'podwyższone enzymy wątrobowe w trakcie chemioterapii',
    ],
    evidenceProfile: {
      effectSignal:
        'Dane wskazują na działanie osłaniające wątrobę i obniżanie podwyższonych enzymów wątrobowych przy leczeniu hepatotoksycznym; efekty przeciwnowotworowe pozostają na etapie przedklinicznym.',
      grade: 'low',
      evidenceType: 'rct',
      clinicalStatus: 'supportive-care',
      evidenceGap:
        'Małe badania, niejednorodne preparaty i dawki; brak dużych RCT z twardymi punktami końcowymi. Hepatoprotekcja jest lepiej udokumentowana niż jakikolwiek efekt przeciwnowotworowy u ludzi.',
    },
    howItWorks:
      'Stabilizuje błony hepatocytów, działa antyoksydacyjnie i przeciwzapalnie, wspiera regenerację komórek wątroby. W modelach laboratoryjnych opisywano też hamowanie wzrostu komórek nowotworowych — to jednak dane przedkliniczne, nie dowód kliniczny.',
    research:
      'Przegląd Post-White 2007 (PMID 17548789): sylimaryna chroni komórki wątroby i nerek przed toksycznym działaniem leków, w tym chemioterapii, obniża enzymy wątrobowe; dobrze tolerowana. Przegląd Koltai 2022 (PMID 35018864): potwierdza działanie hepatoprotekcyjne i opisuje przedkliniczne efekty przeciwnowotworowe, ale zwraca uwagę na działanie DWUKIERUNKOWE — w raku trzustki sylimaryna może sprzyjać komórkom macierzystym. Potrzeba mocniejszych badań klinicznych.',
    safety:
      'Obok leczenia, nie zamiast niego. Zwykle dobrze tolerowana (możliwe łagodne dolegliwości żołądkowe, działanie lekko przeczyszczające, rzadko alergia). Jako antyoksydant może teoretycznie wpływać na leczenie działające przez stres oksydacyjny — o doborze i czasie decyduje onkolog.',
    contraindications:
      'Może wpływać na metabolizm leków przez enzymy wątrobowe (CYP) — istotne przy lekach onkologicznych. Ostrożność przy alergii na rośliny astrowate (Asteraceae). Zastrzeżenie z badań: w raku trzustki opisano działanie dwukierunkowe (możliwe sprzyjanie komórkom macierzystym).',
    talkToDoctor:
      'Zapytaj, czy w Twoim schemacie leczenia sylimaryna jest bezpieczna, czy nie wchodzi w interakcje z Twoimi lekami i czy nie koliduje z mechanizmem terapii. Nie zaczynaj jej samodzielnie w trakcie aktywnego leczenia.',
    regulatory: [
      { country: 'Polska', status: 'OTC', note: 'Dostępna jako lek ziołowy i suplement diety' },
      { country: 'Niemcy', status: 'dopuszczone', note: 'Standaryzowane preparaty lecznicze z sylimaryny' },
      { country: 'USA', status: 'OTC', note: 'Suplement diety (nieoceniany przez FDA pod kątem skuteczności)' },
    ],
    mythBuster: {
      title: 'Ostropest „leczy raka”?',
      body: 'Nie. Udokumentowana, realna rola sylimaryny to ochrona wątroby przed toksycznością leczenia. Efekty przeciwnowotworowe pochodzą z badań laboratoryjnych i nie zostały potwierdzone u ludzi; w niektórych nowotworach (trzustka) działanie może być nawet niekorzystne. To wsparcie wątroby, nie leczenie nowotworu.',
    },
    references: [
      { pmid: '17548789', title: 'Post-White 2007 — przegląd, hepatoprotekcja przy chemioterapii', year: 2007 },
      { pmid: '35018864', title: 'Koltai 2022 — przegląd, rola sylimaryny w onkologii (działanie dwukierunkowe)', year: 2022 },
    ],
  },
  {
    slug: 'huaier',
    name: 'Huaier (Trametes robiniophila)',
    category: 'substance',
    kind: 'grzyby',
    redoxClass: 'context-dependent',
    shortDescription:
      'Wyciąg z grzyba Trametes robiniophila (chiński „huaier”); w Chinach stosowany jako adiuwant po resekcji raka wątroby, z dużym RCT.',
    whatIsIt:
      'Huaier to wodny wyciąg z grzyba Trametes robiniophila Murr, od dawna stosowany w medycynie chińskiej, zarejestrowany w Chinach jako preparat (granulat) wspomagający leczenie onkologiczne. Wyróżnia się tym, że — inaczej niż większość grzybów leczniczych — ma za sobą duże, wieloośrodkowe badanie kliniczne.',
    indications: [
      'leczenie uzupełniające po radykalnej resekcji raka wątrobowokomórkowego (HCC)',
    ],
    evidenceProfile: {
      effectSignal:
        'W dużym RCT po operacji raka wątroby Huaier wydłużał przeżycie wolne od nawrotu i nieco poprawiał przeżycie całkowite oraz zmniejszał nawroty pozawątrobowe. To najmocniejszy klinicznie sygnał spośród grzybów leczniczych opisanych na tej stronie.',
      grade: 'low',
      evidenceType: 'rct',
      clinicalStatus: 'supportive-care',
      evidenceGap:
        'Kluczowe badanie było OTWARTE (kontrola = brak leczenia, nie placebo) i prowadzone wyłącznie w Chinach na jednym, komercyjnym preparacie; dotyczy konkretnie HCC po resekcji. Poza HCC dane są znacznie słabsze. Potrzeba niezależnych, zaślepionych badań poza Chinami.',
    },
    howItWorks:
      'Mieszanina polisacharydowo-białkowa o opisywanym działaniu immunomodulacyjnym i antyangiogennym; w modelach hamowała proliferację i przerzutowanie. Mechanizm u ludzi nie jest w pełni poznany.',
    research:
      'RCT IV fazy Chen 2018 (Gut, PMID 29802174): wieloośrodkowe badanie (39 ośrodków, 1044 chorych) po radykalnej resekcji HCC — Huaier vs brak leczenia uzupełniającego przez maks. 96 tygodni. Przeżycie wolne od nawrotu: HR 0,67 (95% CI 0,55–0,81); odsetek bez nawrotu 62,4% vs 49,1%; przeżycie całkowite 95,2% vs 91,5% (p=0,02); mniej nawrotów pozawątrobowych. Przegląd Zhang 2021 (Front Med, PMID 33754281) wymienia Huaier jako uznany adiuwant w HCC. Ograniczenie: badanie otwarte (bez placebo), populacja chińska.',
    safety:
      'Obok leczenia konwencjonalnego, nie zamiast niego. W badaniach dobrze tolerowany; możliwe łagodne dolegliwości żołądkowo-jelitowe. Jak każdy immunomodulator — ostrożność przy chorobach autoimmunologicznych i po przeszczepieniu narządu. Preparat komercyjny: jakość zależy od producenta.',
    talkToDoctor:
      'Zapytaj, czy w Twojej sytuacji (zwłaszcza po operacji raka wątroby) takie leczenie uzupełniające ma sens, o interakcje i o to, że dowody pochodzą z jednego, otwartego badania w Chinach.',
    regulatory: [
      { country: 'Chiny', status: 'dopuszczone', note: 'Zarejestrowany preparat (granulat) wspomagający w onkologii' },
      { country: 'Polska', status: 'brak rejestracji', note: 'Brak rejestracji onkologicznej i refundacji; ewentualnie jako suplement' },
      { country: 'UE', status: 'brak rejestracji', note: 'Brak rejestracji EMA jako leku onkologicznego' },
    ],
    mythBuster: {
      title: 'Skoro ma RCT, to „działa na raka”?',
      body: 'Huaier ma realne, duże badanie — i to wyróżnia go na tle innych grzybów. Ale dowód dotyczy jednej sytuacji (rak wątroby po operacji), pochodzi z otwartego badania bez placebo i wyłącznie z Chin. To obiecujący adiuwant w wąskim wskazaniu, a nie uniwersalny „grzyb na raka”.',
    },
    references: [
      { pmid: '29802174', doi: '10.1136/gutjnl-2018-315983', title: 'Chen 2018 (Gut) — RCT IV fazy, Huaier po resekcji HCC (n=1044)', year: 2018 },
      { pmid: '33754281', doi: '10.1007/s11684-021-0848-3', title: 'Zhang 2021 (Front Med) — przegląd adiuwantów w HCC', year: 2021 },
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
