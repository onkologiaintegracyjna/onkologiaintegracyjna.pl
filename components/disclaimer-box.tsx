import { Info } from 'lucide-react'
import { cn } from '@/lib/utils'

export function DisclaimerBox({
  className,
  text,
}: {
  className?: string
  text?: string
}) {
  return (
    <aside
      role="note"
      aria-label="Zastrzeżenie edukacyjne"
      className={cn(
        'flex gap-3 rounded-xl border border-border bg-secondary px-4 py-3 text-sm leading-relaxed text-foreground/80',
        className
      )}
    >
      <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
      <p>
        {text ??
          'Treści edukacyjne. Zawsze obok leczenia konwencjonalnego, nigdy zamiast. Nie zastępują konsultacji z lekarzem prowadzącym.'}
      </p>
    </aside>
  )
}
