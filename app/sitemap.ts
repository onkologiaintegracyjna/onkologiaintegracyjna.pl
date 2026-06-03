import type { MetadataRoute } from 'next'
import { methods } from '@/lib/methods'
import { symptoms } from '@/lib/symptoms'
import { guides } from '@/lib/guides'
import { cancers } from '@/lib/cancers'

const base = 'https://onkologiaintegracyjna.pl'

const staticPaths = [
  '', '/co-pomaga', '/w-trakcie-leczenia', '/metody', '/nowotwory', '/szlaki',
  '/styl-zycia', '/dowody', '/wzmacnianie-leczenia', '/monitorowanie', '/ebm',
  '/jak-czytac-dowody', '/standardy', '/aktualnosci', '/artykuly', '/wiarygodnosc',
  '/bezpieczenstwo', '/faq', '/slownik', '/zrodla', '/szukaj', '/o-stronie',
  '/polityka-prywatnosci',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const urls: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
  }))
  for (const m of methods) urls.push({ url: `${base}/metody/${m.slug}`, lastModified: now })
  for (const s of symptoms) urls.push({ url: `${base}/co-pomaga/${s.slug}`, lastModified: now })
  for (const g of guides) urls.push({ url: `${base}/w-trakcie-leczenia/${g.slug}`, lastModified: now })
  for (const c of cancers) urls.push({ url: `${base}/nowotwory/${c.slug}`, lastModified: now })
  return urls
}
