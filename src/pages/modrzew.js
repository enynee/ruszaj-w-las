import React, { useState } from "react"
import Layout from "../components/layout"
import modrzew from "../images/modrzew.png"
import { oblicz_odleglosc_w_metrach } from "../helpers";

export default function() {
    const [zdobyta, setZdobyta] = useState(false);
    const [odleglosc, setOdleglosc] = useState(Infinity);

    const koordynatyPunktu = [54.561533, 18.354844];
    if (typeof window !== "undefined") {
        const watchID = navigator.geolocation.watchPosition((position) => {

            const metry = oblicz_odleglosc_w_metrach(position, koordynatyPunktu[0], koordynatyPunktu[1]);
            setOdleglosc(metry);
            if (metry <= 100) {
                setZdobyta(true)
                localStorage.setItem("modrzew", "zdobyta");
            }
        });
    }
    return <Layout>
        <h1>Pomnik przyrody modrzew Zbyszko Rumia</h1>

        { zdobyta === false && <div className="punkt-odznaka">
        <img src={modrzew} className="czarno-biale"/>
        </div> }

        { zdobyta === true && <div className="cel brawo">
            <p className="white-bold">Brawo!</p>
            <p className="white">Jesteś u celu!</p>
        </div> }

        { zdobyta === false && <div className="green">
            <p className="white-bold">Lokalizacja</p>
            <p className="white">Punkt znajduje się w Nadleśnictwie Gdańsk, Leśnictwie Stara Piła w pobliżu leśniczówki Zbychowo</p>
        </div> }

        { zdobyta === true && <div className="opis-punktu">
            <p className="p-opis">Gratulacje! Odnalazłeś pomnik przyrody Zbyszko. Pomnik przyrody jest jedną z wielu form ochrony przyrody w naszym kraju. Ustawa o ochronie przyrody z 2004 roku mówi, że “pomnikami przyrody są pojedyncze twory przyrody ożywionej i nieożywionej lub ich skupienia o szczególnej wartości przyrodniczej, naukowej, kulturowej, historycznej lub krajobrazowej oraz odznaczające się indywidualnymi cechami, wyróżniającymi je wśród innych tworów, okazałych rozmiarów drzewa, krzewy gatunków rodzimych lub obcych, źródła, wodospady, wywierzyska, skałki, jary, głazy narzutowe oraz jaskinie”.</p> 
            <p className="p-opis">W tym przypadku mamy do czynienia z drzewem o okazałych rozmiarach. To drzewo jest pomnikiem przyrody od 1986 roku. Zbyszko zajął 1. miejsce w konkursie Przeglądu Leśniczego na najgrubsze drzewa Lasów Państwowych u progu XXI w. w kategorii modrzewie. Jego obwód na wysokości 1,3 m wynosi 470 cm.</p> 
            <p className="p-opis">Jak odróżnić modrzew od innych drzew iglastych? Zimą jest to bardzo proste, bowiem modrzew jako jedyne drzewo iglaste w Polsce, zrzuca na zimę swoje igły. Łatwo rozpoznać go też po regularnym i stożkowym pokroju oraz po korze, która jest czerwonobrunatna, gruba i dość mocno spękana. Jesienią igły modrzewia przybierają piękny, żółty kolor. Wiosną i latem igły modrzewia są natomiast zielone, niekłujące i bardzo delikatne. Zebrane są w pęczki po kilkadziesiąt sztuk i jest to najbardziej charakterystyczna cecha modrzewia, która pozwoli go celnie rozpoznać.</p> 
            
        </div>}

        { zdobyta === false &&<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2313.4093939600657!2d18.352655316011454!3d54.56153609069485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDMzJzQxLjUiTiAxOMKwMjEnMTcuNCJF!5e0!3m2!1spl!2spl!4v1620580442417!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>}

        { zdobyta === true && <div className="punkt-odznaka">
        <img src={modrzew}/>
        </div> }

        { zdobyta === false && <div class="cel">Jesteś {odleglosc}m od celu</div> }

    </Layout>
}