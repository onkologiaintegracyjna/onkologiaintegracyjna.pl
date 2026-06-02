// Dane dla stron /wiarygodnosc i /bezpieczenstwo
// Źródła: SIO, NCI/cancer.gov, NCCIH, MSKCC About Herbs, CAM-Cancer (NAFKAM), FTC.

export interface RedFlag {
  flag: string
  why: string
}

export const redFlags: RedFlag[] = [
  {
    flag: 'Obiecuje wyleczenie, „przełom” albo działa „na każdy nowotwór”',
    why: 'Skuteczne terapie onkologiczne mają określone wskazania i nigdy nie gwarantują wyleczenia. Uniwersalny „lek na raka” to klasyczny sygnał oszustwa.',
  },
  {
    flag: 'Zniechęca do leczenia konwencjonalnego',
    why: 'Wiarygodna informacja integracyjna zawsze pozycjonuje metody jako uzupełnienie, nie zamiennik. Namawianie do rezygnacji z leczenia standardowego jest groźne.',
  },
  {
    flag: 'Brak źródeł albo tylko pojedyncze historie („u mnie zadziałało”)',
    why: 'Anegdota nie jest dowodem. Rzetelne treści powołują się na publikacje (PMID/DOI), wytyczne i badania, a nie na świadectwa.',
  },
  {
    flag: 'Powołuje się na „ukrywaną prawdę” lub spisek koncernów',
    why: 'Retoryka „tego ci nie powiedzą” zastępuje dowody emocjami. To narzędzie marketingu, nie nauki.',
  },
  {
    flag: 'Sprzedaje konkretny produkt lub kosztowną „kurację”',
    why: 'Konflikt interesów. Gdy źródło informacji jednocześnie sprzedaje rozwiązanie, oceniaj je szczególnie krytycznie.',
  },
  {
    flag: 'Myli badanie przedkliniczne z dowodem u ludzi',
    why: 'To, że coś działa „w probówce” lub u myszy, nie znaczy, że działa u pacjentów. Większość takich sygnałów nigdy nie potwierdza się klinicznie.',
  },
  {
    flag: 'Używa słów „cudowny”, „naturalny = bezpieczny”, „zawsze”, „nigdy”',
    why: 'Język absolutny i magiczny to znak, że ktoś sprzedaje nadzieję, a nie rzetelnie opisuje stan wiedzy.',
  },
]

export interface QuestionGroup {
  title: string
  intro: string
  questions: string[]
}

export const questionGroups: QuestionGroup[] = [
  {
    title: 'O metodzie/terapii',
    intro: 'Zanim zaczniesz jakąkolwiek metodę wspomagającą, zapytaj lekarza prowadzącego:',
    questions: [
      'Czy są badania u ludzi, które pokazują, że to pomaga w mojej sytuacji?',
      'Czy może to wejść w interakcję z moją chemioterapią, radioterapią lub lekami?',
      'Czy w trakcie aktywnego leczenia jest to bezpieczne — a jeśli nie, to kiedy?',
      'Jakie są możliwe działania niepożądane i ryzyko?',
      'Czy to wspiera moje leczenie standardowe, czy mogłoby je osłabić?',
      'Ile to kosztuje i jak długo miałbym to stosować?',
    ],
  },
  {
    title: 'O osobie/ośrodku oferującym metodę',
    intro: 'Wybierając terapeutę lub ośrodek medycyny integracyjnej, sprawdź:',
    questions: [
      'Jakie ma kwalifikacje i doświadczenie z pacjentami onkologicznymi?',
      'Czy będzie współpracować z moim onkologiem i zespołem leczącym?',
      'Czy popiera kontynuowanie leczenia standardowego?',
      'Czy potrafi wskazać źródła i dane dla proponowanych metod?',
      'Czy jasno rozdziela opiekę wspomagającą od leczenia przeciwnowotworowego?',
    ],
  },
]

export interface TrustedSource {
  name: string
  org: string
  desc: string
  url: string
  lang: string
}

export const trustedSources: TrustedSource[] = [
  {
    name: 'About Herbs, Botanicals & Other Products',
    org: 'Memorial Sloan Kettering Cancer Center',
    desc: 'Przeszukiwalna baza ziół, suplementów i produktów naturalnych — tradycyjne zastosowania, możliwe korzyści, działania niepożądane i interakcje z lekami. Prowadzona przez farmaceutę i eksperta botanicznego.',
    url: 'https://www.mskcc.org/cancer-care/diagnosis-treatment/symptom-management/integrative-medicine/herbs',
    lang: 'EN',
  },
  {
    name: 'PDQ — Complementary & Alternative Medicine',
    org: 'National Cancer Institute (NCI)',
    desc: 'Recenzowane, oparte na dowodach streszczenia terapii integracyjnych i CAM — w wersjach dla pacjentów i dla profesjonalistów. Zawiera oficjalną skalę poziomów dowodów dla terapii integracyjnych.',
    url: 'https://www.cancer.gov/about-cancer/treatment/cam',
    lang: 'EN/ES',
  },
  {
    name: 'Herbs at a Glance / Know the Science',
    org: 'National Center for Complementary and Integrative Health (NCCIH, NIH)',
    desc: 'Krótkie, rzetelne karty ziół oraz przewodniki, jak krytycznie czytać doniesienia o zdrowiu i odróżniać dowody od marketingu.',
    url: 'https://www.nccih.nih.gov/health/herbsataglance',
    lang: 'EN',
  },
  {
    name: 'CAM-Cancer',
    org: 'NAFKAM — Norweskie Narodowe Centrum Badań nad CAM',
    desc: 'Europejskie, recenzowane streszczenia dowodów dla metod komplementarnych i alternatywnych w onkologii. Dobre uzupełnienie źródeł amerykańskich.',
    url: 'https://cam-cancer.org/en',
    lang: 'EN',
  },
  {
    name: 'SIO Clinical Practice Guidelines',
    org: 'Society for Integrative Oncology (SIO) + ASCO',
    desc: 'Jedyne kompleksowe, oparte na dowodach wytyczne włączania terapii integracyjnych do standardowej onkologii. Dostępne bezpłatnie.',
    url: 'https://integrativeonc.org/practice-guidelines/',
    lang: 'EN',
  },
  {
    name: 'Cochrane Library',
    org: 'Cochrane Collaboration',
    desc: 'Niezależne przeglądy systematyczne i metaanalizy — najwyższy poziom syntezy dowodów dla pytań o skuteczność interwencji.',
    url: 'https://www.cochranelibrary.com/',
    lang: 'EN',
  },
]

export interface SafetyPoint {
  title: string
  body: string
}

export const safetyPoints: SafetyPoint[] = [
  {
    title: '„Naturalne” nie znaczy „bezpieczne”',
    body: 'Substancje roślinne to też aktywne farmakologicznie związki. Mogą uszkadzać wątrobę, wpływać na krzepnięcie albo zmieniać działanie leków onkologicznych. Pochodzenie z natury nie mówi nic o bezpieczeństwie ani o dawce.',
  },
  {
    title: 'Suplementy nie są oceniane jak leki',
    body: 'FDA (i podobnie organy w Europie) nie ocenia suplementów diety pod kątem skuteczności i bezpieczeństwa przed wprowadzeniem do sprzedaży. Skład i moc preparatów potrafią się znacznie różnić między partiami i producentami.',
  },
  {
    title: 'Interakcje z leczeniem są realne',
    body: 'Przykłady dobrze udokumentowane: dziurawiec może osłabiać działanie części leków przeciwnowotworowych, a wysokie dawki antyoksydantów mogą teoretycznie zmniejszać skuteczność terapii działających przez stres oksydacyjny. Dlatego dobór i moment przyjmowania ustala lekarz.',
  },
  {
    title: 'W trakcie aktywnego leczenia — tylko za zgodą lekarza',
    body: 'Bezpieczna zasada (m.in. MSKCC): w czasie leczenia onkologicznego nie przyjmuj suplementów, jeśli nie zaleci ich lekarz lub nie są częścią badania klinicznego. Zawsze informuj zespół leczący o wszystkim, co przyjmujesz — także o witaminach.',
  },
  {
    title: 'Dieta sama nie kontroluje nowotworu',
    body: 'Nie ma jednej diety ani produktu, które udowodniono by spowalniały, leczyły lub zapobiegały nawrotowi nowotworu. Zdrowe odżywianie jest ważne i wspiera leczenie, ale restrykcyjne „diety antynowotworowe” bywają szkodliwe — zwłaszcza przy ryzyku niedożywienia.',
  },
]
