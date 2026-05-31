export type PathwayEvidence = 'preclinical' | 'early-clinical' | 'clinical'

export interface Pathway {
  slug: string
  name: string
  target: string
  why: string
  substances: string[]
  evidence: PathwayEvidence
}

export const pathwayEvidenceLabels: Record<PathwayEvidence, string> = {
  preclinical: 'przedkliniczne',
  'early-clinical': 'wczesne kliniczne',
  clinical: 'kliniczne',
}

/**
 * Mapa szlak → badane substancje → status dowodów.
 * SEKCJA INFORMACYJNA. Bez dawek, bez schematów, bez sugestii łączenia w protokół.
 * Odpersonalizowane; substancje linkują do kart z pełnym profilem dowodowym tam, gdzie istnieją.
 */
export const pathways: Pathway[] = [
  {
    slug: 'ferroptoza',
    name: 'Ferroptoza',
    target: 'Metabolizm żelaza, GPX4, peroksydacja lipidów',
    why: 'Ferroptoza to forma śmierci komórki zależna od żelaza i utleniania lipidów. Część badań przedklinicznych sprawdza, czy komórki niektórych nowotworów są na nią szczególnie wrażliwe.',
    substances: ['Artesunat', 'Witamina C dożylna', 'Selen', 'Laktoferyna', 'Salinomycyna'],
    evidence: 'preclinical',
  },
  {
    slug: 'glikoliza-warburg',
    name: 'Glikoliza / efekt Warburga',
    target: 'GLUT1, heksokinaza, HIF-1α',
    why: 'Wiele komórek nowotworowych intensywnie korzysta z glukozy nawet w obecności tlenu (efekt Warburga). Badania sprawdzają substancje wpływające na ten metabolizm.',
    substances: ['Berberyna', 'Dieta ketogeniczna (badana)', 'DIM'],
    evidence: 'early-clinical',
  },
  {
    slug: 'komorki-macierzyste',
    name: 'Komórki macierzyste nowotworu (CSC)',
    target: 'Szlaki Wnt, Notch, STAT3',
    why: 'Komórki macierzyste nowotworu wiąże się z opornością i nawrotami. To aktywny obszar badań przedklinicznych nad substancjami celującymi w te szlaki.',
    substances: ['Salinomycyna', 'Kurkumina', 'EGCG (zielona herbata)', 'Sulforafan'],
    evidence: 'preclinical',
  },
  {
    slug: 'apoptoza-synergia-chemia',
    name: 'Apoptoza i synergia z chemioterapią',
    target: 'Kaspazy, p53, NF-κB',
    why: 'Część substancji badano pod kątem nasilania apoptozy lub współdziałania z chemioterapią. To głównie dane przedkliniczne i wczesnofazowe — nie rutyna kliniczna.',
    substances: ['Kurkumina', 'Resweratrol', 'Witamina C dożylna', 'Kwercetyna'],
    evidence: 'early-clinical',
  },
  {
    slug: 'autofagia',
    name: 'Autofagia',
    target: 'Lizosom, mTOR',
    why: 'Autofagia bywa mechanizmem przetrwania komórek nowotworowych w stresie. Modulacja autofagii jest badana, ale dane kliniczne są ograniczone.',
    substances: ['Substancje badane przedklinicznie'],
    evidence: 'preclinical',
  },
  {
    slug: 'stan-zapalny-nfkb',
    name: 'Stan zapalny / NF-κB',
    target: 'NF-κB, COX-2, cytokiny prozapalne',
    why: 'Przewlekły stan zapalny sprzyja progresji nowotworu. Niektóre substancje roślinne badano pod kątem działania przeciwzapalnego.',
    substances: ['Kurkumina', 'Boswellia serrata', 'EGCG (zielona herbata)', 'Omega-3'],
    evidence: 'early-clinical',
  },
  {
    slug: 'emt-przerzuty',
    name: 'EMT i przerzuty / galektyna-3',
    target: 'EMT, galektyna-3, MMP',
    why: 'Przejście nabłonkowo-mezenchymalne (EMT) i adhezja komórek wiążą się z tworzeniem przerzutów. To obszar badań nad m.in. modyfikowaną pektyną cytrusową.',
    substances: ['Modyfikowana pektyna cytrusowa (badana)', 'Huaier', 'Kurkumina'],
    evidence: 'preclinical',
  },
  {
    slug: 'angiogeneza',
    name: 'Angiogeneza',
    target: 'VEGF, HIF-1α',
    why: 'Guzy potrzebują nowych naczyń, by rosnąć. Część substancji badano pod kątem wpływu na angiogenezę — głównie w modelach.',
    substances: ['EGCG (zielona herbata)', 'Resweratrol', 'Kurkumina', 'Boswellia serrata'],
    evidence: 'preclinical',
  },
  {
    slug: 'os-immunologiczna',
    name: 'Oś immunologiczna (NK, limfocyty T)',
    target: 'Komórki NK, limfocyty T, mikrośrodowisko guza',
    why: 'Wzmacnianie odpowiedzi przeciwnowotworowej układu odpornościowego to obszar z danymi klinicznymi (zwłaszcza immunomodulacja jako wsparcie).',
    substances: ['Jemioła', 'Reishi', 'AHCC / grzyby lecznicze', 'Witamina D', 'Cordyceps'],
    evidence: 'clinical',
  },
  {
    slug: 'mikrobiom',
    name: 'Mikrobiom jelitowy',
    target: 'Oś jelito–układ odpornościowy',
    why: 'Skład mikrobiomu jelitowego może wpływać na odpowiedź na immunoterapię i tolerancję leczenia. To dynamicznie rozwijający się obszar badań klinicznych.',
    substances: ['Probiotyki (badane)', 'Błonnik / dieta roślinna', 'Maślan (badany)'],
    evidence: 'clinical',
  },
]
