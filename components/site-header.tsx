'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, ChevronDown, Activity } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const pillars = [
  { href: '/co-pomaga', label: 'Co pomaga' },
  { href: '/w-trakcie-leczenia', label: 'W trakcie leczenia' },
  { href: '/metody', label: 'Metody i substancje' },
  { href: '/nowotwory', label: 'Według nowotworu' },
  { href: '/szlaki', label: 'Mechanizmy i szlaki' },
  { href: '/styl-zycia', label: 'Styl życia' },
  { href: '/dowody', label: 'Dowody i wiedza' },
]

const more = [
  { href: '/jak-czytac-dowody', label: 'Jak czytać dowody' },
  { href: '/artykuly', label: 'Artykuły' },
  { href: '/slownik', label: 'Słownik pojęć' },
  { href: '/zrodla', label: 'Źródła i bibliografia' },
  { href: '/o-stronie', label: 'O stronie' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/')

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Onkologia Integracyjna — strona główna">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Activity className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-serif text-base font-semibold leading-tight text-primary">
            Onkologia<span className="text-accent"> Integracyjna</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Nawigacja główna">
          {pillars.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground',
                isActive(item.href) && 'bg-secondary text-primary'
              )}
            >
              {item.label}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none">
              Więcej
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {more.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-background xl:hidden"
          aria-label="Nawigacja mobilna"
        >
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            {[...pillars, ...more].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'block rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary',
                  isActive(item.href) && 'bg-secondary text-primary'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
