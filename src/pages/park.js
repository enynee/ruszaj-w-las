import React, { useState } from "react"
import Layout from "../components/layout"
import park from "../images/park.png"
import { oblicz_odleglosc_w_metrach } from "../helpers";

export default function() {
    const [zdobyta, setZdobyta] = useState(false);
    const [odleglosc, setOdleglosc] = useState(Infinity);

    const koordynatyPunktu = [54.361523, 18.554114];
    if (typeof window !== "undefined") {
        const watchID = navigator.geolocation.watchPosition((position) => {

            const metry = oblicz_odleglosc_w_metrach(position, koordynatyPunktu[0], koordynatyPunktu[1]);
            setOdleglosc(metry);
            if (metry <= 100) {
                setZdobyta(true)
                localStorage.setItem("park", "zdobyta");
            }
        });
    }
    return <Layout>
        <h1>Trójmiejski Park Krajobrazowy</h1>

        { zdobyta === false && <div className="punkt-odznaka">
        <img src={park} className="czarno-biale"/>
        </div> }

        { zdobyta === true && <div className="cel brawo">
            <p className="white-bold">Brawo!</p>
            <p className="white">Jesteś u celu!</p>
        </div> }

        { zdobyta === false && <div className="green">
            <p className="white-bold">Lokalizacja</p>
            <p className="white">Punkt znajduje się w Nadleśnictwie Gdańsk, Leśnictwie Matemblewo w poblizu rzeki Strzyża</p>
        </div> }

        { zdobyta === true && <div className="opis-punktu">
            <p className="p-opis">Gratulacje, znajdujesz się w Trójmiejskim Parku Krajobrazowym. Park krajobrazowy jest jedną z wielu form ochrony przyrody w Polsce. Parki krajobrazowe charakteryzują się wielkim obszarem ochronnym, a ich celem jest zachowanie wartości przyrodniczych, krajobrazowych, historycznych i kulturowych. Ochrona cennych dóbr idzie w parze razem z racjonalnym gospodarowaniem surowcem drzewnym, lasy te są więc lasami gospodarczymi.</p> 
            <p className="p-opis">Trójmiejski Park Krajobrazowy to obszar 19 930 ha. Park obejmuje obszary Gdańska, Sopotu, Gdyni, ale także Rumi, Szemudu, Wejherowa, Gniewowa, Zbychowa, Nowego Dworu Wejherowskiego, Reszek i Bieszkowic. Jest to więc rozległy teren, a w jego skład wchodzą także liczne rezerwaty przyrody, które wyłączone są z funkcji gospodarczej. Na obszarze Trójmiejskiego Parku Krajobrazowego znajdują się także liczne pomniki przyrody, użytki ekologiczne, obszary Natura 2000 oraz zespół przyrodniczo-krajobrazowy Dolina Potoków Strzyża i Jasień.</p> 
            <p className="p-opis">Celem każdego Parku Krajobrazowego oprócz ochrony zasobów jest upowszechnianie wśród ludzi wartości przyrodniczych, krajobrazowych, kulturowych i historycznych. Z tego względu przez Park Krajobrazowy przebiegają liczne szlaki turystyczne, które są dobrze oznaczone i poprowadzone przez najpiękniejsze i najcenniejsze obszary oraz dobrze opisane przy pomocy tablic informacyjnych. W Trójmiejskim Parku Krajobrazowym można spacerować aż 7 szlakami: Trójmiejskim (żółty), Zagórskiej Strugi (czarny), Wejherowskim (czerwony), Kartuskim (niebieski), Skarszewskim (zielony), Wzgórz Szymbarskich (czarny) oraz Źródła Marii (czarny).</p> 
            <p className="p-opis">Planując piesze wycieczki warto skorzystać z wyznaczonych szlaków. Zyskujemy dzięki temu pewność, że nasza wyprawa będzie przebiegała przez piękne obszary, które są w ciekawy sposób opisane na tablicach informacyjnych. Możemy też skorzystać z licznych ławeczek oraz wiat turystycznych i przede wszystkim, na szlaku nie zgubimy się, bo jest on bardzo dobrze oznaczony. </p>
        </div>}

        { zdobyta === false &&<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1551.4607004237546!2d18.541806977106884!3d54.36467519452793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDIxJzUzLjciTiAxOMKwMzInMzAuOSJF!5e0!3m2!1spl!2spl!4v1620581337699!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>}

        { zdobyta === true && <div className="punkt-odznaka">
        <img src={park}/>
        </div> }

        { zdobyta === false && <div class="cel">Jesteś {odleglosc}m od celu</div> }

    </Layout>
}