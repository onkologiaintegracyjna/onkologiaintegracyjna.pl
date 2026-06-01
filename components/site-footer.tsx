import Link from 'next/link'
import { Activity } from 'lucide-react'
import { DisclaimerBox } from '@/components/disclaimer-box'

const columns = [
  {
    title: 'Pacjent',
    links: [
      { href: '/co-pomaga', label: 'Co pomaga przy leczeniu' },
      { href: '/w-trakcie-leczenia', label: 'W trakcie leczenia' },
      { href: '/nowotwory', label: 'Według nowotworu' },
      { href: '/monitorowanie', label: 'Monitorowanie po leczeniu' },
      { href: '/styl-zycia', label: 'Styl życia' },
    ],
  },
  {
    title: 'Wiedza',
    links: [
      { href: '/metody', label: 'Metody i substancje' },
      { href: '/szlaki', label: 'Mechanizmy i szlaki' },
      { href: '/ebm', label: 'EBM i finansowanie' },
      { href: '/jak-czytac-dowody', label: 'Jak czytać dowody' },
      { href: '/zrodla', label: 'Źródła i bibliografia' },
    ],
  },
  {
    title: 'Serwis',
    links: [
      { href: '/artykuly', label: 'Artykuły' },
      { href: '/slownik', label: 'Słownik pojęć' },
      { href: '/dowody', label: 'Dowody i wiedza' },
      { href: '/o-stronie', label: 'O stronie' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <DisclaimerBox className="mb-10 border-accent/30 bg-background" />

        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Activity className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-base font-semibold text-primary">
                Onkologia Integracyjna
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Rzetelne, oparte na dowodach źródło o metodach wspomagających
              leczenie onkologiczne — z jawną oceną pewności dowodów.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="font-serif text-sm font-semibold text-primary">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Onkologia Integracyjna — serwis edukacyjny.{' '}
            <a href="/polityka-prywatnosci" className="hover:text-accent">Polityka prywatności</a>
          </p>
          <p>
            Kontakt:{' '}
            <a
              href="mailto:kontakt@onkologiaintegracyjna.pl"
              className="text-accent hover:underline"
            >
              kontakt@onkologiaintegracyjna.pl
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
