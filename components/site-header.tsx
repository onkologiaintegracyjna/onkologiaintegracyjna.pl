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

type NavItem = { href: string; label: string }
type NavGroup = { label: string; items: NavItem[] }

const groups: NavGroup[] = [
  {
    label: 'Dla pacjenta',
    items: [
      { href: '/co-pomaga', label: 'Co pomaga (objawy)' },
      { href: '/w-trakcie-leczenia', label: 'W trakcie leczenia' },
      { href: '/nowotwory', label: 'Według nowotworu' },
      { href: '/monitorowanie', label: 'Monitorowanie po leczeniu' },
      { href: '/styl-zycia', label: 'Styl życia' },
      { href: '/faq', label: 'Najczęstsze pytania (FAQ)' },
    ],
  },
  {
    label: 'Metody i dowody',
    items: [
      { href: '/metody', label: 'Metody i substancje' },
      { href: '/wzmacnianie-leczenia', label: 'Wzmacnianie i uwrażliwianie leczenia' },
      { href: '/szlaki', label: 'Mechanizmy i szlaki' },
      { href: '/jak-czytac-dowody', label: 'Jak czytać dowody' },
      { href: '/ebm', label: 'EBM i finansowanie badań' },
      { href: '/dowody', label: 'Dowody i wiedza' },
    ],
  },
  {
    label: 'Wiarygodność',
    items: [
      { href: '/wiarygodnosc', label: 'Jak rozpoznać wiarygodną informację' },
      { href: '/bezpieczenstwo', label: 'Bezpieczeństwo suplementów' },
      { href: '/standardy', label: 'Organizacje i standardy' },
      { href: '/zrodla', label: 'Źródła i bibliografia' },
    ],
  },
  {
    label: 'Aktualności',
    items: [
      { href: '/aktualnosci', label: 'Co nowego w dowodach' },
      { href: '/artykuly', label: 'Artykuły' },
      { href: '/slownik', label: 'Słownik pojęć' },
      { href: '/o-stronie', label: 'O stronie' },
    ],
  },
]

function LogoMark() {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20">
      <svg viewBox="0 0 64 64" className="h-6 w-6" aria-hidden="true">
        <path d="M32 14 C46 24 46 44 32 52 C18 44 18 24 32 14 Z" fill="#1d9e75" />
        <polyline points="12,33 24,33 28,23 35,45 39,33 52,33" fill="none" stroke="#f5f2ec" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/')
  const groupActive = (g: NavGroup) => g.items.some((it) => isActive(it.href))

  return (
    <header className="sticky top-0 z-40 bg-primary text-primary-foreground shadow-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Onkologia Integracyjna — strona główna">
          <LogoMark />
          <span className="font-serif text-base font-semibold leading-tight text-white">
            Onkologia<span style={{ color: '#7fd9bb' }}> Integracyjna</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Nawigacja główna">
          {groups.map((g) => (
            <DropdownMenu key={g.label}>
              <DropdownMenuTrigger
                className={cn(
                  'flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
                  groupActive(g) ? 'bg-white/15 text-white' : 'text-primary-foreground/80'
                )}
              >
                {g.label}
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {g.items.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href} aria-current={isActive(item.href) ? 'page' : undefined}>
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Link
            href="/szukaj"
            aria-label="Szukaj na stronie"
            aria-current={isActive('/szukaj') ? 'page' : undefined}
            className="inline-flex items-center justify-center rounded-md p-2 text-primary-foreground/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-primary-foreground transition-colors hover:bg-white/10 lg:hidden"
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
          className="border-t border-white/10 bg-primary lg:hidden"
          aria-label="Nawigacja mobilna"
        >
          <div className="mx-auto max-w-5xl space-y-4 px-4 py-4 sm:px-6">
            {groups.map((g) => (
              <div key={g.label}>
                <p className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white">
                  {g.label}
                </p>
                <div className="mt-1 space-y-0.5 pl-2">
                  {g.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                      className={cn(
                        'block rounded-md px-3 py-2 text-sm text-primary-foreground/75 hover:bg-white/10 hover:text-white',
                        isActive(item.href) && 'bg-white/15 text-white'
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
