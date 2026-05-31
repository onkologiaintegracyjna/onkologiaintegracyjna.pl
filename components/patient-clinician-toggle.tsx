'use client'

import { useState } from 'react'
import { ChevronDown, Stethoscope } from 'lucide-react'
import { cn } from '@/lib/utils'

export function PatientClinicianToggle({
  children,
  title = 'Warstwa kliniczna (dla lekarza)',
}: {
  children: React.ReactNode
  title?: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-xl border border-border bg-secondary/60">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-primary">
          <Stethoscope className="h-4 w-4 text-accent" aria-hidden="true" />
          {title}
        </span>
        <ChevronDown
          className={cn(
            'h-5 w-5 text-muted-foreground transition-transform',
            open && 'rotate-180'
          )}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="border-t border-border px-4 py-4 text-sm leading-relaxed text-foreground/80">
          {children}
        </div>
      )}
    </div>
  )
}
