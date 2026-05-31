import type { Metadata } from 'next'
import {
  Pill,
  BatteryLow,
  Activity,
  HeartPulse,
  Brain,
  Moon,
  Sparkles,
  Droplets,
  Soup,
} from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { SymptomCard } from '@/components/symptom-card'

export const metadata: Metadata = {
  title: 'Co pomaga — opieka wspomagająca objawowo',
  description:
    'Metody o najmocniejszych dowodach w łagodzeniu objawów towarzyszących leczeniu onkologicznemu: nudności, zmęczenie, neuropatia, ból, lęk i inne.',
}

const symptoms = [
  {
    href: '/co-pomaga/nudnosci-i-wymioty',
    title: 'Nudności i wymioty (CINV)',
    description:
      'Objawy po chemioterapii — metody o udokumentowanej skuteczności i kiedy zgłosić się do lekarza.',
    icon: Pill,
    available: true,
  },
  {
    href: '/co-pomaga/zmeczenie',
    title: 'Zmęczenie (fatigue)',
    description: 'Przewlekłe zmęczenie związane z chorobą i leczeniem.',
    icon: BatteryLow,
    available: true,
  },
  {
    href: '/co-pomaga/neuropatia',
    title: 'Neuropatia (CIPN)',
    description: 'Neuropatia obwodowa indukowana chemioterapią.',
    icon: Activity,
    available: true,
  },
  {
    href: '/co-pomaga/bol-nowotworowy',
    title: 'Ból nowotworowy',
    description: 'Wspomaganie kontroli bólu obok leczenia przeciwbólowego.',
    icon: HeartPulse,
    available: true,
  },
  {
    href: '/co-pomaga/lek',
    title: 'Lęk',
    description: 'Wsparcie w radzeniu sobie z lękiem w trakcie leczenia.',
    icon: Sparkles,
    available: true,
  },
  {
    href: '/co-pomaga/bezsennosc',
    title: 'Bezsenność',
    description: 'Zaburzenia snu towarzyszące chorobie i terapii.',
    icon: Moon,
    available: true,
  },
  {
    href: '/co-pomaga/zaburzenia-poznawcze',
    title: 'Zaburzenia poznawcze',
    description: 'Tzw. „chemo-brain" — trudności z koncentracją i pamięcią.',
    icon: Brain,
    available: true,
  },
  {
    href: '/co-pomaga/obrzek-limfatyczny',
    title: 'Obrzęk limfatyczny',
    description: 'Wsparcie w obrzęku limfatycznym po leczeniu.',
    icon: Droplets,
    available: true,
  },
  {
    href: '/co-pomaga/wsparcie-zywieniowe',
    title: 'Wsparcie żywieniowe / kacheksja',
    description: 'Żywienie i przeciwdziałanie utracie masy ciała.',
    icon: Soup,
    available: true,
  },
]

export default function CoPomagaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Opieka wspomagająca"
        title="Co pomaga przy leczeniu onkologicznym"
        description="Łagodzenie objawów towarzyszących leczeniu to obszar o najmocniejszych dowodach w onkologii integracyjnej. Wybierz objaw, by zobaczyć, co mają badania — i czego unikać."
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {symptoms.map((s) => (
            <SymptomCard key={s.href} {...s} />
          ))}
        </div>
      </section>
    </>
  )
}
