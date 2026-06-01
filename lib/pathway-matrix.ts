/**
 * Macierz szlak × substancja — ODPERSONALIZOWANA mapa „co bada nauka".
 * Wartości: 3 = główny badany mechanizm, 2 = istotny, 1 = pomocniczy, 0 = brak/nieopisany.
 * BEZ dawek, BEZ schematów, BEZ kontekstu pacjenta. Sekcja informacyjna, nie zalecenie.
 * Inspiracja strukturą tabel przeglądowych onkologii integracyjnej.
 */

export type Strength = 0 | 1 | 2 | 3
export type Redox = 'pro-oxidant' | 'antioxidant' | 'context-dependent'

export const matrixPathways = [
  { key: 'ferroptoza', label: 'Ferroptoza / żelazo' },
  { key: 'glikoliza', label: 'Glikoliza (Warburg)' },
  { key: 'csc', label: 'Komórki macierzyste (CSC)' },
  { key: 'stat3', label: 'STAT3 / JAK-STAT' },
  { key: 'nfkb', label: 'NF-κB / zapalenie' },
  { key: 'emt', label: 'EMT / przerzuty' },
  { key: 'immuno', label: 'Odporność (NK / T)' },
  { key: 'angio', label: 'Angiogeneza (VEGF)' },
  { key: 'apopt', label: 'Apoptoza' },
] as const

export type PathwayKey = (typeof matrixPathways)[number]['key']

export interface MatrixRow {
  substance: string
  slug?: string
  redox?: Redox
  values: Record<PathwayKey, Strength>
}

const z: Record<PathwayKey, Strength> = {
  ferroptoza: 0, glikoliza: 0, csc: 0, stat3: 0, nfkb: 0, emt: 0, immuno: 0, angio: 0, apopt: 0,
}

export const matrixRows: MatrixRow[] = [
  { substance: 'Witamina C (dożylnie)', slug: 'wlewy-dozylne-witaminy-c', redox: 'pro-oxidant',
    values: { ...z, ferroptoza: 3, apopt: 1 } },
  { substance: 'Artesunat', slug: 'artesunat', redox: 'pro-oxidant',
    values: { ...z, ferroptoza: 3, apopt: 2 } },
  { substance: 'Salinomycyna', slug: 'salinomycyna', redox: 'pro-oxidant',
    values: { ...z, ferroptoza: 3, csc: 3, stat3: 3, apopt: 3 } },
  { substance: 'Resweratrol', slug: 'resweratrol', redox: 'context-dependent',
    values: { ...z, ferroptoza: 2, glikoliza: 1, nfkb: 1, angio: 1, apopt: 2 } },
  { substance: 'Kurkumina', slug: 'kurkumina', redox: 'context-dependent',
    values: { ...z, csc: 2, stat3: 2, nfkb: 3, emt: 2, angio: 1, apopt: 2 } },
  { substance: 'Boswellia', slug: 'boswellia-serrata', redox: 'context-dependent',
    values: { ...z, nfkb: 2, angio: 1 } },
  { substance: 'Selen', redox: 'pro-oxidant',
    values: { ...z, ferroptoza: 3, apopt: 1 } },
  { substance: 'Witamina D', slug: 'witamina-d', redox: 'context-dependent',
    values: { ...z, immuno: 2, apopt: 1, angio: 1 } },
  { substance: 'Omega-3 (EPA/DHA)', slug: 'omega-3', redox: 'context-dependent',
    values: { ...z, stat3: 2, nfkb: 2, emt: 1, immuno: 1 } },
  { substance: 'Melatonina', slug: 'melatonina', redox: 'antioxidant',
    values: { ...z, immuno: 1, angio: 1, apopt: 1 } },
  { substance: 'Reishi', slug: 'reishi', redox: 'context-dependent',
    values: { ...z, immuno: 3 } },
  { substance: 'AHCC / grzyby lecznicze', slug: 'lentinan-psk', redox: 'context-dependent',
    values: { ...z, immuno: 3 } },
  { substance: 'Cordyceps', slug: 'cordyceps', redox: 'context-dependent',
    values: { ...z, immuno: 2 } },
  { substance: 'Wilcacora', slug: 'wilcacora', redox: 'context-dependent',
    values: { ...z, immuno: 2 } },
  { substance: 'Jemioła', slug: 'jemiola', redox: 'context-dependent',
    values: { ...z, immuno: 3, apopt: 2 } },
  { substance: 'Hipertermia (RHT)', slug: 'hipertermia-rht', redox: 'pro-oxidant',
    values: { ...z, immuno: 1, apopt: 1 } },
  { substance: 'HBOT', slug: 'tlenoterapia-hiperbaryczna', redox: 'pro-oxidant',
    values: { ...z, ferroptoza: 1 } },
  { substance: 'Inhalacje wodorowe', slug: 'inhalacje-wodorowe', redox: 'antioxidant',
    values: { ...z, nfkb: 1 } },
  { substance: 'N-acetylocysteina', slug: 'n-acetylocysteina', redox: 'antioxidant',
    values: { ...z } },
]

export const strengthLabels: Record<Strength, string> = {
  3: 'główny badany mechanizm',
  2: 'istotny',
  1: 'pomocniczy',
  0: 'brak / nieopisany',
}
