import { TriangleAlert } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ExperimentalWarning({
  className,
  text,
}: {
  className?: string
  text?: string
}) {
  return (
    <div
      role="alert"
      className={cn(
        'flex gap-3 rounded-xl border border-warn-border bg-warn-bg px-4 py-3 text-sm leading-relaxed text-warn',
        className
      )}
    >
      <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
      <p>
        <strong className="font-semibold">Obszar eksperymentalny.</strong>{' '}
        {text ??
          'Bardzo ograniczone dane, w większości przedkliniczne. Nie stosować jako leczenie przeciwnowotworowe.'}
      </p>
    </div>
  )
}
