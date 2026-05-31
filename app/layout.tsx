import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://onkologiaintegracyjna.pl'),
  title: {
    default: 'Onkologia Integracyjna — wiedza oparta na dowodach',
    template: '%s — Onkologia Integracyjna',
  },
  description:
    'Rzetelne, oparte na dowodach (EBM) źródło o metodach wspomagających leczenie onkologiczne — z jawną oceną pewności dowodów. Dla pacjentów i lekarzy.',
  keywords: [
    'onkologia integracyjna',
    'leczenie wspomagające',
    'medycyna integracyjna',
    'EBM',
    'opieka wspomagająca',
    'GRADE',
    'ASCO-SIO',
  ],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://onkologiaintegracyjna.pl',
    siteName: 'Onkologia Integracyjna',
    title: 'Onkologia Integracyjna — wiedza oparta na dowodach',
    description:
      'Metody wspomagające leczenie onkologiczne z rzetelną, jawną oceną pewności dowodów — dla pacjentów i dla lekarzy.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className="bg-background">
      <body className={`${inter.variable} ${lora.variable} font-sans antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Przejdź do treści
        </a>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
