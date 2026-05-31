import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'

export function SymptomCard({
  href,
  title,
  description,
  icon: Icon,
  available = true,
}: {
  href: string
  title: string
  description: string
  icon: LucideIcon
  available?: boolean
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-accent/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-3 font-serif text-base font-semibold text-primary">
        {title}
      </h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
        {available ? 'Czytaj więcej' : 'Wkrótce'}
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  )
}
