export interface GuideSection {
  heading: string
  body: string
  bullets?: string[]
}

export interface Guide {
  slug: string
  title: string
  metaTitle: string
  intro: string
  sections: GuideSection[]
  doctorQuestions: string[]
  clinical?: string
}

/**
 * Poradniki „w trakcie leczenia". Ton informujący, nie nakłaniający.
 * Bez dawek i schematów. Każdy kończy się rozmową z onkologiem.
 * (Poradnik „przed chemioterapią" ma osobną stronę.)
 */
export const guides: Guide[] = [
  {
    slug: 'w-trakcie-chemioterapii',
    title: 'W trakcie chemioterapii',
    metaTitle: 'W trakcie chemioterapii — wsparcie i bezpieczeństwo',
    intro:
      'W trakcie chemioterapii metody integracyjne mogą wspierać tolerancję leczenia i jakość życia — zawsze obok terapii, nigdy zamiast niej. Kluczowe jest bezpieczeństwo i unikanie interakcji.',
    sections: [
      {
        heading: 'Co realnie może pomóc',
        body:
          'Najlepiej udokumentowane jest wsparcie objawowe: aktywność fizyczna na zmęczenie, metody przeciw nudnościom obok standardowej profilaktyki, wsparcie snu i redukcja stresu. Te obszary mają wytyczne (ASCO-SIO, MASCC).',
        bullets: [
          'Aktywność fizyczna dostosowana do możliwości — najlepsze dowody na zmęczenie.',
          'Profilaktyka i łagodzenie nudności (obok leków przeciwwymiotnych).',
          'Wsparcie snu, redukcja lęku i stresu (uważność, psychoonkologia).',
          'Opieka żywieniowa, by utrzymać masę ciała i siłę.',
        ],
      },
      {
        heading: 'Na co szczególnie uważać: interakcje i antyoksydanty',
        body:
          'Wiele suplementów i ziół wchodzi w interakcje z chemioterapią — m.in. przez wątrobowy metabolizm leków (CYP3A4) lub wpływ na krzepnięcie. Osobną kwestią jest timing antyoksydantów: istnieje uzasadniona obawa, że wysokie dawki antyoksydantów przyjmowane równolegle z niektórymi cytostatykami lub radioterapią mogą osłabiać ich działanie. To obszar niepewności — dlatego decyzję o suplementacji i jej czasie należy ustalić z onkologiem.',
        bullets: [
          'Zawsze informuj zespół leczący o wszystkich suplementach i ziołach.',
          'Dziurawiec, wysokie dawki antyoksydantów, niektóre zioła — możliwy wpływ na skuteczność leczenia.',
          'Preparaty wpływające na krzepnięcie mają znaczenie okołozabiegowo.',
        ],
      },
      {
        heading: 'Czego unikać',
        body:
          'Unikaj zastępowania leczenia metodami „naturalnymi", odstawiania zaleconych leków bez konsultacji oraz rozpoczynania suplementacji „na wszelki wypadek" bez wiedzy onkologa.',
      },
    ],
    doctorQuestions: [
      'Które z moich suplementów mogą wchodzić w interakcje z leczeniem?',
      'Czy są substancje, których powinienem/powinnam unikać w dniach podania chemii?',
      'Jak bezpiecznie wspierać odżywienie i aktywność w trakcie cykli?',
    ],
    clinical:
      'Wsparcie objawowe w trakcie chemioterapii ma oparcie w wytycznych (ASCO-SIO, MASCC). Antyoksydanty w trakcie chemio-/radioterapii pozostają kontrowersyjne ze względu na możliwą interferencję z mechanizmem prooksydacyjnym leczenia; brak jednoznacznych danych nakazuje ostrożność i indywidualizację.',
  },
  {
    slug: 'wzmacnianie-chemioterapii',
    title: 'Czy można „wzmacniać" chemioterapię?',
    metaTitle: 'Czy można „wzmacniać" chemioterapię? Co mówią dane',
    intro:
      'To częste pytanie pacjentów. Uczciwa odpowiedź brzmi: niektóre połączenia są badane, ale jest to obszar badań klinicznych, a nie rutynowa praktyka. Żadnej z tych metod nie należy stosować samodzielnie.',
    sections: [
      {
        heading: 'Co jest badane (a co nie jest rutyną)',
        body:
          'W badaniach wczesnofazowych testowano łączenie wybranych substancji z chemioterapią — np. kurkuminy ze schematem FOLFOX w raku jelita grubego, czy dożylnej witaminy C z chemioterapią w wybranych nowotworach. Część wyników jest obiecująca, część neutralna lub niejednoznaczna. To dane z faz I/II — sygnał, nie dowód skuteczności na twardych punktach końcowych.',
        bullets: [
          'Kurkumina + FOLFOX (rak jelita grubego) — faza II, sygnał, mała próba.',
          'Witamina C dożylna + chemioterapia — wyniki niejednoznaczne (np. PACMAN vs VITALITY).',
          'Hipertermia lokoregionalna z radio-/chemioterapią — tu dowody są mocniejsze (RCT III w wybranych wskazaniach).',
        ],
      },
      {
        heading: 'Dlaczego „wzmacnianie" bywa dwukierunkowe',
        body:
          'To samo, co teoretycznie miałoby wzmacniać, może też przeszkadzać. Antyoksydanty mogą w niektórych sytuacjach osłabiać prooksydacyjne działanie chemio-/radioterapii. Interakcje metaboliczne mogą zmieniać stężenie leku we krwi — w obie strony. Dlatego „naturalne" nie znaczy „neutralne".',
      },
      {
        heading: 'Bezpieczna zasada',
        body:
          'Jeśli interesuje Cię łączenie metod z leczeniem systemowym, najbezpieczniejszą drogą jest rozmowa z onkologiem i — gdy to możliwe — udział w kontrolowanym badaniu klinicznym. Strona przedstawia stan wiedzy; nie jest to instrukcja stosowania.',
      },
    ],
    doctorQuestions: [
      'Czy w moim rozpoznaniu są badania kliniczne łączące leczenie z metodami wspomagającymi?',
      'Czy któraś z rozważanych substancji może wpływać na skuteczność mojej chemioterapii?',
      'Jak rozpoznać wiarygodne badanie kliniczne, a jak ofertę bez podstaw?',
    ],
    clinical:
      'Synergie substancja–cytostatyk pozostają głównie na poziomie przedklinicznym i wczesnofazowym. Wyjątkiem o mocniejszych dowodach jest hipertermia lokoregionalna z radio-/chemioterapią (RCT III). Antyoksydanty w trakcie leczenia prooksydacyjnego wymagają ostrożności. Rekomendowana droga to badania kliniczne i decyzja zespołu leczącego.',
  },
  {
    slug: 'radioterapia',
    title: 'W trakcie radioterapii',
    metaTitle: 'W trakcie radioterapii — wsparcie objawowe',
    intro:
      'Radioterapia bywa dobrze tolerowana, ale może powodować odczyny skórne i objawy zależne od napromienianego obszaru. Wsparcie objawowe pomaga przejść przez leczenie.',
    sections: [
      {
        heading: 'Pielęgnacja skóry i błon śluzowych',
        body:
          'Odczyn popromienny skóry to częste działanie niepożądane. Stosuj się do zaleceń ośrodka radioterapii dotyczących pielęgnacji; unikaj drażniących kosmetyków i opalania napromienianego obszaru. Przy napromienianiu w obrębie głowy i szyi szczególnie ważna jest higiena jamy ustnej.',
      },
      {
        heading: 'Uwaga na antyoksydanty',
        body:
          'Radioterapia działa m.in. przez reaktywne formy tlenu. Wysokie dawki antyoksydantów przyjmowane równolegle mogą teoretycznie osłabiać jej działanie — dlatego suplementację w trakcie radioterapii należy ustalić z lekarzem.',
      },
      {
        heading: 'Co może pomóc',
        body:
          'Aktywność fizyczna w miarę możliwości, wsparcie snu i redukcja stresu oraz odpowiednie odżywienie wspierają tolerancję leczenia. W wybranych wskazaniach badano metody zmniejszające toksyczność (np. inhalacje wodorowe) — to obszar wczesnych badań.',
      },
    ],
    doctorQuestions: [
      'Jak pielęgnować skórę w napromienianym obszarze?',
      'Czy powinienem/powinnam unikać suplementów antyoksydacyjnych w trakcie radioterapii?',
      'Jakie objawy wymagają pilnego zgłoszenia?',
    ],
  },
  {
    slug: 'immunoterapia',
    title: 'Immunoterapia',
    metaTitle: 'Immunoterapia — specyfika wsparcia',
    intro:
      'Immunoterapia (np. inhibitory punktów kontrolnych) działa przez układ odpornościowy, co zmienia logikę wsparcia integracyjnego — zwłaszcza w odniesieniu do immunostymulantów i sterydów.',
    sections: [
      {
        heading: 'Mikrobiom a odpowiedź na leczenie',
        body:
          'Badania wskazują, że skład mikrobiomu jelitowego może wpływać na odpowiedź na immunoterapię anty-PD-1. To obiecujący, ale wciąż badany obszar. Zdrowy, zróżnicowany sposób odżywiania jest rozsądnym, bezpiecznym wyborem; agresywnej „modyfikacji mikrobiomu" suplementami nie należy podejmować samodzielnie.',
      },
      {
        heading: 'Ostrożność z immunostymulantami',
        body:
          'Substancje silnie stymulujące odporność (niektóre grzyby lecznicze, preparaty ziołowe) teoretycznie mogą wchodzić w interakcję z mechanizmem immunoterapii lub nasilać reakcje immunozależne. Poinformuj onkologa o wszystkim, co przyjmujesz.',
      },
      {
        heading: 'Sterydy i suplementy',
        body:
          'Leczenie działań niepożądanych immunoterapii bywa oparte na sterydach — nie modyfikuj go samodzielnie. Zgłaszaj nowe objawy (np. biegunkę, duszność, zmiany skórne), bo mogą być immunozależne.',
      },
    ],
    doctorQuestions: [
      'Czy moje suplementy mogą wpływać na immunoterapię?',
      'Jak rozpoznać objawy immunozależne, które wymagają pilnego kontaktu?',
      'Czy są zalecenia żywieniowe wspierające leczenie?',
    ],
  },
  {
    slug: 'okolooperacyjnie',
    title: 'Okołooperacyjnie',
    metaTitle: 'Okołooperacyjnie — przygotowanie i rekonwalescencja',
    intro:
      'Dobre przygotowanie do operacji (prehabilitacja) i wsparcie w rekonwalescencji mogą poprawić przebieg leczenia chirurgicznego.',
    sections: [
      {
        heading: 'Prehabilitacja',
        body:
          'Poprawa kondycji, odżywienia i redukcja stresu przed planowanym zabiegiem to obszar o rosnących dowodach. Aktywność fizyczna dostosowana do możliwości oraz opieka żywieniowa są bezpiecznym fundamentem.',
      },
      {
        heading: 'Suplementy a krzepnięcie',
        body:
          'Niektóre suplementy (m.in. omega-3, wybrane zioła, wysokie dawki witaminy E) mogą wpływać na krzepnięcie. Zwykle zaleca się ich odstawienie przed zabiegiem — termin ustala zespół chirurgiczny i anestezjologiczny.',
      },
      {
        heading: 'Rekonwalescencja',
        body:
          'Stopniowy powrót do aktywności, odpowiednie odżywienie i kontrola bólu wspierają gojenie. Stosuj się do zaleceń zespołu leczącego.',
      },
    ],
    doctorQuestions: [
      'Które suplementy powinienem/powinnam odstawić przed operacją i kiedy?',
      'Jak przygotować kondycję i odżywienie przed zabiegiem?',
      'Jak bezpiecznie wracać do aktywności po operacji?',
    ],
  },
  {
    slug: 'po-leczeniu',
    title: 'Po leczeniu (survivorship)',
    metaTitle: 'Po leczeniu — powrót do sprawności (survivorship)',
    intro:
      'Po zakończeniu leczenia ważne są: powrót do sprawności, radzenie sobie z objawami przewlekłymi i styl życia zmniejszający ryzyko nawrotu oraz wspierający zdrowie ogólne.',
    sections: [
      {
        heading: 'Styl życia o najlepszych dowodach',
        body:
          'Regularna aktywność fizyczna, zdrowy wzorzec żywieniowy (np. śródziemnomorski), utrzymanie prawidłowej masy ciała, ograniczenie alkoholu i niepalenie mają najmocniejsze dane w kontekście zdrowia po leczeniu i — w wybranych nowotworach — ryzyka nawrotu.',
        bullets: [
          'Aktywność fizyczna — silne dowody na jakość życia i, w wybranych nowotworach, ryzyko nawrotu.',
          'Dieta śródziemnomorska — korzyści ogólnozdrowotne i sercowo-naczyniowe.',
          'Sen, redukcja stresu, wsparcie psychospołeczne.',
        ],
      },
      {
        heading: 'Objawy przewlekłe',
        body:
          'Część objawów (zmęczenie, neuropatia, zaburzenia poznawcze, obrzęk limfatyczny) może utrzymywać się po leczeniu. Wiele z nich można łagodzić metodami opisanymi w sekcji „Co pomaga".',
      },
      {
        heading: 'Kontrole i czujność',
        body:
          'Trzymaj się planu kontroli onkologicznych. Metody integracyjne wspierają zdrowie i samopoczucie, ale nie zastępują badań kontrolnych.',
      },
    ],
    doctorQuestions: [
      'Jaki plan aktywności fizycznej jest dla mnie bezpieczny?',
      'Jak postępować z utrzymującymi się objawami po leczeniu?',
      'Jaki jest mój plan kontroli i na jakie objawy zwracać uwagę?',
    ],
  },
]

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug)
}

export function getAllGuideSlugs(): string[] {
  return guides.map((g) => g.slug)
}
