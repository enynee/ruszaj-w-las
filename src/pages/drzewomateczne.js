import React, { useState } from "react"
import Layout from "../components/layout"
import drzewomateczne from "../images/drzewomateczne.png"
import { oblicz_odleglosc_w_metrach } from "../helpers";

export default function() {
    const [zdobyta, setZdobyta] = useState(false);
    const [odleglosc, setOdleglosc] = useState(Infinity);

    const koordynatyPunktu = [54.390870, 18.538301];
    if (typeof window !== "undefined") {
        const watchID = navigator.geolocation.watchPosition((position) => {

            const metry = oblicz_odleglosc_w_metrach(position, koordynatyPunktu[0], koordynatyPunktu[1]);
            setOdleglosc(metry);
            if (metry <= 100) {
                setZdobyta(true)
                localStorage.setItem("drzewomateczne", "zdobyta");
            }
        });
    }
    return <Layout>
        <h1>Drzewo mateczne nieopodal Szwedzkiej</h1>

        { zdobyta === false && <div className="punkt-odznaka">
        <img src={drzewomateczne} className="czarno-biale"/>
        </div> }

        { zdobyta === true && <div className="cel brawo">
            <p className="white-bold">Brawo!</p>
            <p className="white">Jesteś u celu!</p>
        </div> }

        { zdobyta === false && <div className="green">
            <p className="white-bold">Lokalizacja</p>
            <p className="white">Punkt znajduje się nieopodal Szlaku Kartuskiego (niebieskiego) przy Szwedzkiej Grobli</p>
        </div> }

        { zdobyta === true && <div className="opis-punktu">
            <p className="p-opis">Drzewo mateczne, które odnalazłeś to daglezja zielona (Pseudotsuga menziesii). Jest to gatunek, który pochodzi z Ameryki Północnej i został wprowadzony do polskich lasów w XIX wieku. Daglezję możesz łatwo oznaczyć za pomocą jej kilku charakterystycznych cech. Igły długości 2-3,5 cm są dość płaskie, bardzo elastyczne i niekłujące. Po roztarciu w palcach pachną intensywnie cytrusami. Szyszki daglezji zielonej o długości 5–10 cm posiadają charakterystyczne długie trójzębne łuski okrywające, które znacznie wystają poza łuski nasienne. Kora dorosłych drzew jest gruba i czerwonawa.</p> 
            <p className="p-opis">Dlaczego ta daglezja jest tak wyjątkowa? Jest ona drzewem matecznym. Oznacza to, że została wytypowana przez specjalną Komisję do tego, by zbierać jej nasiona i z nich tworzyć plantacje nasienne. Zadaniem plantacji nasiennych jest dostarczanie nasion do wysiewu drzewek, które później trafią do lasu.</p> 
            <p className="p-opis">Drzewa mateczne są drzewami wzorcowymi i z ich nasion wyrastają zdrowe i dorodne egzemplarze. Za drzewo mateczne uznaje się te o najlepszych cechach: prosty pień, duży wymiar wysokości i pierśnicy (szerokość pnia mierzona na wysokości 1,3m), wzorcowy pokrój korony i dobra zdrowotność.</p>
            <p className="p-opis">Drzewa mateczne oznacza się żółtą opaską o szerokości 5 cm na wysokości 1,5 m od ziemi. Każde drzewo mateczne ma swój indywidualny numer.</p>
        </div>}

        { zdobyta === false &&<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2323.0818091970045!2d18.53611231608689!3d54.3908699802112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDIzJzI3LjEiTiAxOMKwMzInMTcuOSJF!5e0!3m2!1spl!2spl!4v1623098620823!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>}

        { zdobyta === true && <div className="punkt-odznaka">
        <img src={drzewomateczne}/>
        </div> }

        { zdobyta === false && <div class="cel">Jesteś {odleglosc}m od celu</div> }

    </Layout>
}