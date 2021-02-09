import React from 'react';
import Article from "../components/Article";

const articles = [
    {
        id: 1,
        title: 'Czym jest teoria strun?',
        author: 'Jan Nowak',
        text: 'Teoria strun (TS) – model matematyczny przewidujący, że podstawowym budulcem materii nie są cząstki w postaci punktu, lecz struny wielkości 10-31 metra.\n' +
            '\n' +
            'Pierwotna teoria strun, zwana teorią strun bozonowych, powstała w 1970 roku. Jednak nie jest ona teorią odzwierciedlającą stan naszego fizycznego świata, ponieważ nie zakłada istnienia fermionów. Z upływem czasu pojawiały się nowe odmiany teorii strun. Obecnie uważa się, że wszystkie te teorie są odmianami jednej teorii wyższego rzędu, M-teorii.\n' +
            '\n' +
            'TS przewiduje, że przestrzeń, w której żyjemy, ma co najmniej 10 wymiarów, przy czym trzy wymiary przestrzenne oraz czas są wymiarami otwartymi, natomiast pozostałe wymiary są skompaktyfikowane do rozmiarów niedostępnych naszemu codziennemu doświadczeniu, dlatego ich nie obserwujemy.\n' +
            '\n'
    },
    {
        id: 2,
        title: 'Czym jest paradoks Fermiego?',
        author: 'Anna Górska',
        text: 'Graficzne przedstawienie wiadomości Arecibo – pierwszej próby nawiązania przez ludzkość komunikacji z obcymi. Paradoks Fermiego – wyraźna sprzeczność pomiędzy wysokimi oszacowaniami prawdopodobieństwa istnienia cywilizacji pozaziemskich i brakiem jakichkolwiek obserwowalnych śladów ich istnienia. Wiek Wszechświata i liczba zawartych w nim gwiazd sugerują, że życie pozaziemskie powinno być czymś powszechnym. Pierwsze zwrócenie na to uwagi przypisuje się fizykowi nobliście Enrico Fermiemu'
    },
    {
        id: 3,
        title: 'Ciemna materia i ciemna energia',
        author: 'Małgorzata Zych',
        text: 'Ciemna materia (ang. dark matter) – hipotetyczna materia nieemitująca i nieodbijająca promieniowania elektromagnetycznego. Jej istnienie zdradzają jedynie wywierane przez nią efekty grawitacyjne. Według danych zebranych na podstawie obserwacji dużych struktur kosmicznych, interpretowanych w kategoriach równań Friedmana i metryki Friedmana-Lemaître a-Robertsona-Walkera, ciemna materia to ok. 27% bilansu masy-energii Wszechświata, obok materii zwykłej (widzialnej) i dominującej ciemnej energii.'
    }
]
const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article}></Article>
    ))
    return (
        <div className="home">
            {artList}
        </div>
    )
}

export default HomePage;