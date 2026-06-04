// Indeks wyszukiwania budowany z istniejących danych — bez duplikowania treści.
// Używany przez stronę /szukaj (filtrowanie po stronie klienta).
import { methods } from '@/lib/methods'
import { glossary } from '@/lib/glossary'
import { symptoms } from '@/lib/symptoms'
import { guides } from '@/lib/guides'
import { clinicalStatusLabels } from '@/lib/labels'

export interface SearchEntry {
  title: string
  href: string
  kind: string
  text: string
  status?: string
  experimental?: boolean
}

// Synonimy/aliasy — żeby hasła potoczne trafiały do właściwej karty.
const aliases: Record<string, string> = {
  kannabinoidy: 'marihuana THC CBD medyczna marihuana konopie olejek',
  'inhalacje-wodorowe': 'wodór H2 woda wodorowa',
  wilcacora: 'koci pazur vilcacora uncaria',
  sylimaryna: 'ostropest sylibina silimaryna wątroba',
  'wlewy-dozylne-witaminy-c': 'witamina C IVC kwas askorbinowy G6PD wlew dożylny',
  'post-i-diety-naladujace-post': 'post FMD głodówka fasting dieta naśladująca post',
  'dieta-ketogeniczna': 'keto ketoza',
  'hipertermia-rht': 'hipertermia przegrzewanie ciepło RHT',
  'tlenoterapia-hiperbaryczna': 'HBOT tlen hiperbaryczny komora',
  salinomycyna: 'komórki macierzyste CSC',
  'mikrobiom-i-fmt': 'mikrobiom FMT przeszczep kału bakterie jelitowe',
  jemiola: 'jemioła Viscum iscador',
  huaier: 'huaier Trametes robiniophila grzyb rak wątroby HCC',
  'lentinan-psk': 'grzyby PSK krestin shiitake lentinan AHCC Coriolus Trametes turkey tail wrośniak schizofiran SPG rozszczepka chaga soplówka Hericium beta-glukan',
}

const staticPages: SearchEntry[] = [
  { title: 'Co pomaga przy leczeniu (opieka wspomagająca)', href: '/co-pomaga', kind: 'Strona', text: 'objawy ból nudności zmęczenie neuropatia lęk opieka wspomagająca' },
  { title: 'Metody i substancje', href: '/metody', kind: 'Strona', text: 'metody substancje przegląd dowody' },
  { title: 'Wzmacnianie i uwrażliwianie leczenia', href: '/wzmacnianie-leczenia', kind: 'Strona', text: 'chemiowrażliwość sensytyzacja radiouwrażliwianie komórki macierzyste CSC synergia' },
  { title: 'Monitorowanie po leczeniu (CTC, CSC, ctDNA)', href: '/monitorowanie', kind: 'Strona', text: 'monitorowanie nawrót CTC CSC maintrac ctDNA biopsja płynna czujność' },
  { title: 'Bezpieczeństwo suplementów', href: '/bezpieczenstwo', kind: 'Strona', text: 'naturalne bezpieczne suplementy interakcje wątroba antyoksydanty' },
  { title: 'Jak rozpoznać wiarygodną informację', href: '/wiarygodnosc', kind: 'Strona', text: 'wiarygodność źródła oszustwa cudowny lek pytania do lekarza' },
  { title: 'EBM — medycyna oparta na dowodach', href: '/ebm', kind: 'Strona', text: 'EBM Sackett dowody off-label finansowanie badań paradoks' },
  { title: 'Jak czytać dowody', href: '/jak-czytac-dowody', kind: 'Strona', text: 'GRADE poziom dowodów typ danych pewność profil dowodowy' },
  { title: 'Organizacje i standardy', href: '/standardy', kind: 'Strona', text: 'SIO ASCO NCI MASCC ESMO słowniczek NCI komplementarna alternatywna integracyjna' },
  { title: 'Najczęstsze pytania (FAQ)', href: '/faq', kind: 'Strona', text: 'pytania pacjenci FAQ' },
  { title: 'Styl życia w onkologii', href: '/styl-zycia', kind: 'Strona', text: 'aktywność fizyczna dieta śródziemnomorska akupunktura uważność' },
  { title: 'Aktualności — co nowego w dowodach', href: '/aktualnosci', kind: 'Strona', text: 'aktualności nowości badania konferencje' },
  { title: 'Szlaki i mechanizmy (macierz)', href: '/szlaki', kind: 'Strona', text: 'szlaki mechanizmy ferroptoza glikoliza CSC STAT3 NF-kB EMT macierz substancja' },
  { title: 'Nowotwory', href: '/nowotwory', kind: 'Strona', text: 'rodzaje nowotworów rak piersi jelita płuca' },
  { title: 'Słownik pojęć', href: '/slownik', kind: 'Strona', text: 'słownik definicje pojęcia skróty' },
  { title: 'Źródła', href: '/zrodla', kind: 'Strona', text: 'źródła bazy PubMed Cochrane' },
  { title: 'O stronie', href: '/o-stronie', kind: 'Strona', text: 'o stronie redakcja proces metodyka konflikt interesów' },
]

export const searchIndex: SearchEntry[] = [
  ...methods.map((m) => ({
    title: m.name,
    href: `/metody/${m.slug}`,
    kind: 'Metoda / substancja',
    status: clinicalStatusLabels[m.evidenceProfile.clinicalStatus],
    experimental: m.evidenceProfile.clinicalStatus === 'experimental',
    text: [m.name, m.shortDescription, m.whatIsIt ?? '', (m.indications ?? []).join(' '), aliases[m.slug] ?? ''].join(' '),
  })),
  ...symptoms.map((s) => ({
    title: s.title,
    href: `/co-pomaga/${s.slug}`,
    kind: 'Objaw / opieka wspomagająca',
    text: `${s.title} ${s.intro}`,
  })),
  ...guides.map((g) => ({
    title: g.title,
    href: `/w-trakcie-leczenia/${g.slug}`,
    kind: 'Poradnik',
    text: g.title,
  })),
  ...glossary.map((t) => ({
    title: t.term,
    href: t.link ?? '/slownik',
    kind: 'Pojęcie',
    text: `${t.term} ${t.definition}`,
  })),
  ...staticPages,
]
