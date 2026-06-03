export type UpdateCategory = 'badanie' | 'wytyczne' | 'konferencja' | 'strona'

export interface UpdateRef {
  pmid?: string
  doi?: string
  url?: string
  label?: string
}

export interface Update {
  /** Data publikacji wpisu (YYYY-MM-DD) */
  date: string
  /** Etykieta okresu, np. „II kwartał 2026” */
  period: string
  category: UpdateCategory
  title: string
  body: string
  refs?: UpdateRef[]
  /** Slug powiązanej metody (link do karty) */
  methodSlug?: string
}

export const categoryLabels: Record<UpdateCategory, string> = {
  badanie: 'Nowe badanie',
  wytyczne: 'Aktualizacja wytycznych',
  konferencja: 'Konferencja',
  strona: 'Zmiana na stronie',
}

/**
 * Kwartalny przegląd „Co nowego w dowodach”.
 * Zasady: każdy wpis ze źródłem (PMID/DOI/URL), ton EBM, bez hype, bez polityki.
 * Najnowsze na górze.
 */
export const updates: Update[] = [
  {
    date: '2026-06-01',
    period: 'II kwartał 2026',
    category: 'badanie',
    title: 'TTFields w raku trzustki — rejestracja FDA na podstawie badania PANOVA-3',
    body:
      'Randomizowane badanie III fazy PANOVA-3 (n=571) wykazało, że dodanie pól elektrycznych o przemiennej częstotliwości (TTFields) do chemioterapii w miejscowo zaawansowanym raku trzustki wydłużyło przeżycie całkowite (16,2 vs 14,2 mies.; HR 0,82; p=0,039) oraz przeżycie wolne od bólu. Na tej podstawie FDA dopuściła urządzenie Optune Pax (luty 2026). TTFields to wyrób medyczny / technologia konwencjonalna, nie metoda CAM. Zaktualizowaliśmy kartę TTFields.',
    refs: [{ pmid: '40448572', label: 'PANOVA-3, J Clin Oncol 2025' }],
    methodSlug: 'ttfields',
  },
  {
    date: '2026-06-01',
    period: 'II kwartał 2026',
    category: 'wytyczne',
    title: 'Kannabinoidy w onkologii — wytyczne ASCO 2024 w bazie',
    body:
      'Dodaliśmy kartę kannabinoidów (CBD i THC / medyczna marihuana) opartą na wytycznych ASCO. Najmocniejsze dowody dotyczą opornych nudności i wymiotów po chemioterapii — jako dodatek do standardowych leków przeciwwymiotnych. ASCO wyraźnie odradza stosowanie kannabinoidów jako leczenia przeciwnowotworowego poza badaniami klinicznymi.',
    refs: [{ pmid: '38478773', doi: '10.1200/JCO.23.02596', label: 'ASCO Guideline 2024, J Clin Oncol' }],
    methodSlug: 'kannabinoidy',
  },
  {
    date: '2026-06-01',
    period: 'II kwartał 2026',
    category: 'strona',
    title: 'Nowa sekcja o monitorowaniu po leczeniu i biopsji płynnej (ctDNA, CTC/CSC)',
    body:
      'Uruchomiliśmy stronę o czujności po leczeniu: badania kontrolne i ich częstotliwość, biologia komórek macierzystych nowotworu (CSC) oraz porównanie metod biopsji płynnej. Szczególnie szybko rozwija się ctDNA (choroba resztkowa, MRD) — badania DYNAMIC i GALAXY/CIRCULATE pokazują jego wartość rokowniczą w raku jelita grubego. Odróżniamy ctDNA od metod zliczających komórki (CTC/maintrac).',
    refs: [{ url: 'https://www.onkologiaintegracyjna.pl/monitorowanie', label: 'Monitorowanie po leczeniu' }],
    methodSlug: undefined,
  },
]

export function getLatestPeriod(): string | undefined {
  return updates[0]?.period
}
