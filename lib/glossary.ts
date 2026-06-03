export interface Term {
  term: string
  definition: string
  link?: string
}

export const glossary: Term[] = [
  { term: 'Adiuwant (leczenie uzupełniające)', definition: 'Leczenie stosowane dodatkowo, aby zwiększyć skuteczność terapii podstawowej lub zmniejszyć ryzyko nawrotu.' , link: '/wzmacnianie-leczenia' },
  { term: 'AIMSS', definition: 'Ból stawów i mięśni wywołany inhibitorami aromatazy (aromatase inhibitor-associated musculoskeletal syndrome) — częsty u kobiet leczonych z powodu raka piersi.' , link: '/co-pomaga/bol-nowotworowy' },
  { term: 'Antyoksydanty', definition: 'Substancje neutralizujące reaktywne formy tlenu. W onkologii ich stosowanie w trakcie chemio-/radioterapii bywa kontrowersyjne, bo część leczenia działa właśnie przez utlenianie.' , link: '/bezpieczenstwo' },
  { term: 'ASCO-SIO', definition: 'Wspólne wytyczne American Society of Clinical Oncology i Society for Integrative Oncology dotyczące metod integracyjnych w onkologii.' , link: '/standardy' },
  { term: 'CINV', definition: 'Nudności i wymioty wywołane chemioterapią (chemotherapy-induced nausea and vomiting).' , link: '/co-pomaga/nudnosci-i-wymioty' },
  { term: 'CIPN', definition: 'Neuropatia obwodowa wywołana chemioterapią (chemotherapy-induced peripheral neuropathy) — drętwienie, mrowienie i ból dłoni oraz stóp.' , link: '/co-pomaga/neuropatia' },
  { term: 'Cochrane', definition: 'Międzynarodowa organizacja publikująca przeglądy systematyczne uznawane za jeden z najwyższych standardów syntezy dowodów.' , link: '/zrodla' },
  { term: 'Efekt Warburga', definition: 'Skłonność wielu komórek nowotworowych do intensywnego korzystania z glukozy (glikolizy) nawet w obecności tlenu.' , link: '/szlaki' },
  { term: 'Ferroptoza', definition: 'Forma zaprogramowanej śmierci komórki zależna od żelaza i utleniania lipidów; badana jako potencjalny cel terapeutyczny.' , link: '/szlaki' },
  { term: 'GRADE', definition: 'System oceny pewności dowodów (wysoka, umiarkowana, niska, bardzo niska) — mówi, na ile możemy ufać oszacowaniu efektu.' , link: '/jak-czytac-dowody' },
  { term: 'HBOT', definition: 'Tlenoterapia hiperbaryczna — oddychanie tlenem pod podwyższonym ciśnieniem; zarejestrowana procedura medyczna o określonych wskazaniach.' , link: '/metody/tlenoterapia-hiperbaryczna' },
  { term: 'Hipertermia lokoregionalna (RHT)', definition: 'Kontrolowane podgrzanie tkanki w okolicy guza, stosowane łącznie z radio-/chemioterapią. Różni się od hipertermii ogólnoustrojowej.' , link: '/metody/hipertermia-rht' },
  { term: 'Immunoterapia', definition: 'Leczenie pobudzające układ odpornościowy do walki z nowotworem (np. inhibitory punktów kontrolnych).' },
  { term: 'Kacheksja', definition: 'Złożony zespół metaboliczny prowadzący do utraty masy ciała i mięśni; nie odwraca go samo zwiększenie kalorii.' , link: '/co-pomaga/wsparcie-zywieniowe' },
  { term: 'Komórki macierzyste nowotworu (CSC)', definition: 'Subpopulacja komórek nowotworowych wiązana z opornością na leczenie i nawrotami.' , link: '/monitorowanie' },
  { term: 'MASCC/ISOO', definition: 'Organizacje publikujące wytyczne dotyczące opieki wspomagającej w onkologii (m.in. zapobieganie powikłaniom leczenia).' , link: '/standardy' },
  { term: 'MBSR / MBCR', definition: 'Programy redukcji stresu oparte na uważności (mindfulness), w wersji ogólnej i dostosowanej do pacjentów onkologicznych.' , link: '/metody/mbsr-mbcr' },
  { term: 'Metaanaliza', definition: 'Badanie łączące wyniki wielu badań w jedno oszacowanie; przy dobrej jakości najwyższy poziom dowodów klinicznych.' , link: '/jak-czytac-dowody' },
  { term: 'Off-label', definition: 'Stosowanie leku poza zarejestrowanym wskazaniem — dopuszczalne w określonych sytuacjach, pod nadzorem lekarza.' , link: '/ebm' },
  { term: 'Onkologia integracyjna', definition: 'Łączenie metod wspomagających o udowodnionej wartości z leczeniem konwencjonalnym — w oparciu o dowody, obok terapii, nie zamiast niej.' , link: '/standardy' },
  { term: 'PMID', definition: 'Unikalny identyfikator publikacji w bazie PubMed, umożliwiający dotarcie do źródła pierwotnego.' , link: '/zrodla' },
  { term: 'PDT', definition: 'Terapia fotodynamiczna — niszczenie komórek przez aktywację światłem wcześniej podanego fotosensybilizatora.' , link: '/metody/terapia-fotodynamiczna' },
  { term: 'RCT', definition: 'Badanie z randomizacją (randomized controlled trial) — uczestnicy losowo przydzieleni do grup, co ogranicza błędy.' , link: '/jak-czytac-dowody' },
  { term: 'Survivorship', definition: 'Opieka i styl życia po zakończeniu leczenia onkologicznego — powrót do sprawności i zmniejszanie ryzyka nawrotu.' , link: '/monitorowanie' },
  { term: 'TTFields', definition: 'Pola elektryczne o przemiennej częstotliwości (Optune) zaburzające podział komórek; zarejestrowana metoda m.in. w glejaku.' , link: '/metody/ttfields' },
  { term: 'Wytyczne kliniczne', definition: 'Zalecenia opracowane przez towarzystwa naukowe na podstawie przeglądu dowodów, wspierające decyzje terapeutyczne.' , link: '/standardy' },
]
