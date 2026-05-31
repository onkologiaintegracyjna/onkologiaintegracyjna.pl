import { Info } from 'lucide-react'
import { cn } from '@/lib/utils'

export function NeutralityBanner({ className }: { className?: string }) {
  return (
    <div
      role="note"
      className={cn(
        'flex gap-3 rounded-xl border border-warn-border bg-warn-bg px-4 py-4 text-sm leading-relaxed text-warn',
        className
      )}
    >
      <Info className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
      <p>
        <strong className="font-semibold">Sekcja informacyjna, nie zalecenie.</strong>{' '}
        Bez dawek i schematów. Większość danych jest przedkliniczna. Wiele
        substancji ma interakcje z chemio-/radioterapią — nie stosować bez
        lekarza prowadzącego.
      </p>
    </div>
  )
}
