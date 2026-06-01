import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: 'Polityka prywatności',
  description: 'Informacje o przetwarzaniu danych, kontakcie i charakterze serwisu Onkologia Integracyjna.',
}

export default function PolitykaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Informacje"
        title="Polityka prywatności"
        description="Krótka, przejrzysta informacja o tym, jak działa serwis i jak postępujemy z danymi."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 space-y-8 text-sm leading-relaxed text-foreground/80">
        <section>
          <h2 className="font-serif text-xl font-semibold text-primary">Charakter serwisu</h2>
          <p className="mt-2">
            Onkologia Integracyjna to serwis wyłącznie edukacyjny. Nie prowadzimy działalności
            leczniczej ani sprzedażowej, nie oferujemy produktów ani usług i nie wyświetlamy reklam.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-primary">Administrator i kontakt</h2>
          <p className="mt-2">
            W sprawach dotyczących serwisu i ewentualnych danych kontakt:{' '}
            <a href="mailto:kontakt@onkologiaintegracyjna.pl" className="text-accent hover:underline">
              kontakt@onkologiaintegracyjna.pl
            </a>. Jeśli napiszesz do nas e-mail, Twój adres i treść wiadomości wykorzystamy wyłącznie
            do udzielenia odpowiedzi.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-primary">Dane, cookies i analityka</h2>
          <p className="mt-2">
            Serwis ma charakter informacyjny i nie wymaga zakładania konta. Nie zbieramy danych
            wrażliwych ani danych o zdrowiu użytkowników. Jeżeli serwis korzysta z plików cookies lub
            narzędzi analitycznych, służą one wyłącznie celom technicznym i statystycznym; informacja
            ta zostanie zaktualizowana zgodnie z faktycznie używanymi narzędziami.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-primary">Twoje prawa</h2>
          <p className="mt-2">
            Masz prawo dostępu do swoich danych, ich sprostowania i usunięcia oraz wniesienia sprzeciwu
            wobec przetwarzania. W tych sprawach napisz na adres kontaktowy powyżej.
          </p>
        </section>
        <p className="text-xs text-muted-foreground">Data ostatniej aktualizacji: czerwiec 2026.</p>
      </div>
    </>
  )
}
