import React, { useState } from "react"
import Layout from "../components/layout"
import wieza from "../images/wieza.png"
import { oblicz_odleglosc_w_metrach } from "../helpers";


export default function() {
    const [zdobyta, setZdobyta] = useState(false);
    const [odleglosc, setOdleglosc] = useState(Infinity);

    const koordynatyPunktu = [54.355639, 18.802907];
    if (typeof window !== "undefined") {
        const watchID = navigator.geolocation.watchPosition((position) => {

            const metry = oblicz_odleglosc_w_metrach(position, koordynatyPunktu[0], koordynatyPunktu[1]);
            setOdleglosc(metry);
            if (metry <= 100) {
                setZdobyta(true)
                localStorage.setItem("wieza", "zdobyta");
            }
        });
    }

    return <Layout>
        <h1>Wieża Obserwacyjna Nr 1 w Ptasim Raju</h1>

        { zdobyta === false && <div className="punkt-odznaka">
        <img src={wieza} className="czarno-biale"/>
        </div> }

        { zdobyta === true && <div className="cel brawo">
            <p className="white-bold">Brawo!</p>
            <p className="white">Jesteś u celu!</p>
        </div> }

        { zdobyta === false && <div className="green">
            <p className="white-bold">Lokalizacja</p>
            <p className="white">Punkt znajduje się na Wyspie Sobieszewskiej w Rezerwacie Ptasi Raj</p>
        </div> }

        { zdobyta === true && <div className="opis-punktu">
            <p className="p-opis">Znajdujesz się na terenie rezerwatu przyrody "Ptasi Raj". Rezerwat przyrody jest jedną z form ochrony przyrody w Polsce. Do pozostałych form zalicza się: parki narodowe, parki krajobrazowe, obszary chronionego krajobrazu, obszary Natura 2000, pomniki przyrody,stanowiska dokumentacyjne, użytki ekologiczne, zespoły przyrodniczo-krajobrazowe oraz ochronę gatunkową roślin, zwierząt i grzybów.</p> 
            <p className="p-opis">Dlaczego akurat tutaj stworzono rezerwat przyrody? Jest to wyjątkowe miejsce w którym bardzo chętnie przebywają ptaki zarówno te powszechne, jak i te rzadko spotykane. Musisz pamiętać, że większośc ptaków w Polsce podlega ochronie gatunkowej, niektóre z nich występują w naszym kraju niezwykle rzadko lub też są zagrożone wyginięciem i przez to umieszczone na „Czerwonej liście zwierząt ginących i zagrożonych w Polsce” oraz w „Czerwonej księdze zwierząt Polski”.</p> 
            <p className="p-opis">Rezerwat Ptasi Raj pełni też ważną rolę dla ptaków wędrownych. To właśnie tutaj krzyżują się szlaki wędrowne ptaków, które biegną do Afryki, nad Morze Czarne i do Europy Zachodniej. Ptaki wędrowne nie są w stanie pokonać całego dystansu dzielącego ich tereny lęgowe bez odpoczynków. Jezioro Ptasi Raj oraz Jezioro Karaś pozwalają im na odpoczynek i uzupełnienie swoich zapasów energetycznych. Ochronie w tym rezerwacie podlegają ptaki wodne i błotne, którym wyjątkowo sprzyja bliskość jezior, morza oraz terenów podmokłych. Podczas przelotów migracyjnych spotkać tu możesz gęsi białoczelne (Anser albifrons) oraz zbożowe (Anser fabalis). W zależności od pory roku z wieży obserwacyjnej oraz ze ścieżek dydaktycznych zaobserwować możesz m.in.: łabędzia niemego (Cygnus olor) i krzykliwego (Cygnus cygnus), perkoza dwuczubego (Podiceps cristatus), czaplę siwą (Ardea cinerea), kormorana (Phalacrocorax), żurawia (Gruidae), krzyżówkę (Anas platyrhynchos), świstuna (Mareca penelope), czernicę (Aythya fuligula), głowienkę (Aythya ferina), ohara (Tadorna tadorna), gęgawę (Anser anser) i łyskę (Fulica atra).</p> 
            <p className="p-opis">Po drodze do tego punktu spotkałeś 5 tablic informacyjnych. Podążając dalej ścieżką, odnajdziesz 5 kolejnych tablic. Gorąco zachęcam Cię do dalszego spaceru wyznaczoną ścieżką oraz obserwacji napotkanych gatunków ptaków.</p>
        </div>}

        { zdobyta === false &&<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2325.0759444389605!2d18.800718316085714!3d54.35563898020285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDIxJzIwLjMiTiAxOMKwNDgnMTAuNSJF!5e0!3m2!1spl!2spl!4v1623098504776!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>}

        { zdobyta === true && <div className="punkt-odznaka">
        <img src={wieza}/>
        </div> }

        { zdobyta === false && <div class="cel">Jesteś {odleglosc}m od celu</div> }

    </Layout>
}

