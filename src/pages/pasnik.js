import React, { useState } from "react"
import Layout from "../components/layout"
import pasnik from "../images/pasnik.png"
import { oblicz_odleglosc_w_metrach } from "../helpers";

export default function() {
    const [zdobyta, setZdobyta] = useState(false);
    const [odleglosc, setOdleglosc] = useState(Infinity);

    const koordynatyPunktu = [54.459683, 18.515259];
    if (typeof window !== "undefined") {
        const watchID = navigator.geolocation.watchPosition((position) => {

            const metry = oblicz_odleglosc_w_metrach(position, koordynatyPunktu[0], koordynatyPunktu[1]);
            setOdleglosc(metry);
            if (metry <= 100) {
                setZdobyta(true)
                localStorage.setItem("pasnik", "zdobyta");
            }
        });
    }
    return <Layout>
        <h1>Paśnik przy ul. Sopockiej</h1>

        { zdobyta === false && <div className="punkt-odznaka">
        <img src={pasnik} className="czarno-biale"/>
        </div> }

        { zdobyta === true && <div className="cel brawo">
            <p className="white-bold">Brawo!</p>
            <p className="white">Jesteś u celu!</p>
        </div> }

        { zdobyta === false && <div className="green">
            <p className="white-bold">Lokalizacja</p>
            <p className="white">Punkt znajduje się w Nadleśnictwie Gdańsk, Leśnictwie Sopot przy ul. Sopockiej</p>
        </div> }

        { zdobyta === true && <div className="opis-punktu">
            <p className="p-opis">Paśnik, który odnalazłeś jest jednym z bardzo wielu paśników, które znajdują się w lasach całej Polski. Do czego one służą?</p> 
            <p className="p-opis">Paśnik jest konstrukcją drewnianą i miejscem w którym pozostawia się pokarm dla zwierząt leśnych. Za pomocą paśników najczęściej dokarmia się zwierzynę grubą (jelenie, łosie, daniele, sarny, dziki i muflony). W paśniku pozostawia się najczęściej siano, niektóre z nich mają dodatkowe pojemniki na ziarno, owoce i warzywa. W pobliżu paśnika często możesz zaobserwować kostki soli przymocowane do długich drewnianych belek. Sól jest bardzo ważnym składnikiem, który dostarcza zwierzętom niezbędnych mikroelementów. Podczas opadów atmosferycznych sól rozpuszcza się i ścieka po drewnianej belce. Zwierzęta pobierają sól zlizując ją z belki i ziemi.</p> 
            <p className="p-opis">Dokarmianiem zwierząt w lesie zajmują się leśnicy oraz myśliwi. To bardzo ważne, żebyś nigdy nie dokarmiał zwierząt w lesie na własną rękę.</p> 
            <p className="p-opis">Czy zwierzęta dokarmia się przez cały rok? Zdecydowanie nie ma takiej potrzeby. Latem, jesienią, wiosną i podczas łagodnej zimy w lesie jest bardzo dużo pokarmu, które zwierzęta mogą zdobyć same (młode pędy sadzonek, liście, trawy, orzechy, żołędzie, borówki, maliny itd.). Zwierzęta w lesie dokarmia się tylko wtedy, gdy mają problem z samodzielnym zdobyciem pożywienia (podczas mrozu i wysokiej pokrywy śnieżnej).</p>
        </div>}

        { zdobyta === false &&<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5515.757628628582!2d18.510291408252236!3d54.46134072911186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDI3JzM0LjkiTiAxOMKwMzAnNTQuOSJF!5e0!3m2!1spl!2spl!4v1620579805033!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>}

        { zdobyta === true && <div className="punkt-odznaka">
        <img src={pasnik}/>
        </div> }

        { zdobyta === false && <div class="cel">Jesteś {odleglosc}m od celu</div> }

    </Layout>
}