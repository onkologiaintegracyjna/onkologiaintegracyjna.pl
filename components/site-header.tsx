'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, ChevronDown, Search } from 'lucide-react'
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
  { href: '/aktualnosci', label: 'Co nowego w dowodach' },
  { href: '/standardy', label: 'Organizacje i standardy' },
  { href: '/monitorowanie', label: 'Monitorowanie po leczeniu' },
  { href: '/ebm', label: 'EBM i finansowanie badań' },
  { href: '/jak-czytac-dowody', label: 'Jak czytać dowody' },
  { href: '/artykuly', label: 'Artykuły' },
  { href: '/wiarygodnosc', label: 'Jak rozpoznać wiarygodną informację' },
  { href: '/bezpieczenstwo', label: 'Bezpieczeństwo suplementów' },
  { href: '/wzmacnianie-leczenia', label: 'Wzmacnianie i uwrażliwianie leczenia' },
  { href: '/faq', label: 'Najczęstsze pytania (FAQ)' },
  { href: '/slownik', label: 'Słownik pojęć' },
  { href: '/zrodla', label: 'Źródła i bibliografia' },
  { href: '/o-stronie', label: 'O stronie' },
]

function LogoMark() {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary ring-1 ring-primary/10">
      <svg viewBox="0 0 64 64" className="h-6 w-6" aria-hidden="true">
        <path d="M32 14 C46 24 46 44 32 52 C18 44 18 24 32 14 Z" fill="#0f6e56" />
        <polyline points="12,33 24,33 28,23 35,45 39,33 52,33" fill="none" stroke="#1a2b4a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/')

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Onkologia Integracyjna — strona główna">
          <LogoMark />
          <span className="font-serif text-base font-semibold leading-tight text-primary">
            Onkologia<span className="text-accent"> Integracyjna</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Nawigacja główna">
          {pillars.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
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

        <div className="flex items-center gap-1">
          <Link
            href="/szukaj"
            aria-label="Szukaj na stronie"
            aria-current={isActive('/szukaj') ? 'page' : undefined}
            className={cn(
              'inline-flex items-center justify-center rounded-md p-2 text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground',
              isActive('/szukaj') && 'bg-secondary text-primary'
            )}
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </Link>
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
      </div>

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
