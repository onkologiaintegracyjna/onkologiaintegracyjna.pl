import { ShieldAlert } from 'lucide-react'
import { cn } from '@/lib/utils'

export function InteractionFlag({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md border border-destructive/30 bg-destructive/10 px-2 py-1 text-xs font-medium text-destructive',
        className
      )}
    >
      <ShieldAlert className="h-3.5 w-3.5" aria-hidden="true" />
      {children}
    </span>
  )
}
