import { Flame, Shield, Scale } from 'lucide-react'
import { cn } from '@/lib/utils'
import { redoxLabels, redoxDescriptions } from '@/lib/labels'

type Redox = 'pro-oxidant' | 'antioxidant' | 'context-dependent'

const styles: Record<Redox, string> = {
  'pro-oxidant': 'border-destructive/30 bg-destructive/5 text-foreground/80',
  antioxidant: 'border-grade-moderate/30 bg-grade-moderate-bg text-foreground/80',
  'context-dependent': 'border-warn-border bg-warn-bg text-foreground/80',
}

const iconColor: Record<Redox, string> = {
  'pro-oxidant': 'text-destructive',
  antioxidant: 'text-grade-moderate',
  'context-dependent': 'text-warn',
}

export function RedoxFlag({ redox }: { redox: Redox }) {
  const Icon = redox === 'pro-oxidant' ? Flame : redox === 'antioxidant' ? Shield : Scale
  return (
    <div className={cn('rounded-xl border p-4', styles[redox])}>
      <div className="flex items-center gap-2">
        <Icon className={cn('h-5 w-5 shrink-0', iconColor[redox])} aria-hidden="true" />
        <p className="text-sm font-semibold text-primary">
          Charakterystyka redoks: {redoxLabels[redox]}
        </p>
      </div>
      <p className="mt-2 text-sm leading-relaxed">{redoxDescriptions[redox]}</p>
      <p className="mt-3 border-t border-current/10 pt-3 text-sm leading-relaxed">
        <strong className="font-semibold">Ważne dla łączenia metod:</strong> metody
        prooksydacyjne i antyoksydacyjne działają przeciwstawnie. Przyjmowane w tym samym
        czasie mogą wzajemnie znosić swoje działanie — silny antyoksydant może osłabić efekt
        metody prooksydacyjnej (i odwrotnie). To jeden z powodów, dla których o doborze i
        rozłożeniu w czasie decyduje lekarz prowadzący, a nie samodzielne łączenie.
      </p>
    </div>
  )
}
