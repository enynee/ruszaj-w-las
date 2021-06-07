import React, { useState } from "react"
import Layout from "../components/layout"
import bracia from "../images/bracia.png"
import { oblicz_odleglosc_w_metrach } from "../helpers";

export default function() {
    const [zdobyta, setZdobyta] = useState(false);
    const [odleglosc, setOdleglosc] = useState(Infinity);

    const koordynatyPunktu = [54.540995, 18.365753];
    if (typeof window !== "undefined") {
        const watchID = navigator.geolocation.watchPosition((position) => {

            const metry = oblicz_odleglosc_w_metrach(position, koordynatyPunktu[0], koordynatyPunktu[1]);
            setOdleglosc(metry);
            if (metry <= 100) {
                setZdobyta(true)
                localStorage.setItem("bracia", "zdobyta");
            }
        });
    }
    return <Layout>
        <h1>Bracia Kaszuby</h1>

        { zdobyta === false && <div className="punkt-odznaka">
        <img src={bracia} className="czarno-biale"/>
        </div> }

        { zdobyta === true && <div className="cel brawo">
            <p className="white-bold">Brawo!</p>
            <p className="white">Jesteś u celu!</p>
        </div> }


        { zdobyta === false && <div className="green">
            <p className="white-bold">Lokalizacja</p>
            <p className="white">Punkt znajduje się w Nadleśnictwie Gdańsk, Leśnictwie Stara Piła</p>
        </div> }

        { zdobyta === true && <div className="opis-punktu">
            <p className="p-opis">Właśnie odnalazłeś pomnik przyrody numer 882 “Bracia Kaszuby”. Jest to dąb szypułkowy (Quercus robur L.) zrośnięty z bukiem pospolitym (Fagus sylvatica L.) o obwodzie 2,1 m i wysokości 17 m. W świecie przyrody tego typu osobliwości nazywane są zrostami. </p> 
            <p className="p-opis">Co może spowodować zrost dwóch lub nawet większej ilości drzew? Zazwyczaj drzewa unikają zetknięcia się ze sobą i kierują swoje korony w taki sposób, by nie wchodzić w kontakt z innymi drzewami. Zdarza się jednak tak, że korony bądź pnie są w bliskiej odległości i na skutek podrażnienia - ocierania się spowodowanego np. działaniem wiatru, dochodzi do zdarcia wierzchniej warstwy kory. W miejscu zranienia drzewa powstaje tkanka przyranna tzw. kallus. Komórki tej tkanki powodują stopniowe zabliźnianie się ran oraz ich zrastanie.</p> 
            <p className="p-opis">Każde zranione drzewo dąży do jak najszybszego zamknięcia rany, tak by nie dostały się do środka woda, grzyby i patogeny, które mogą wywołać choroby i śmierć drzewa. Po zrośnięciu drzewa lub drzew nad kallusem powstaje kambium - tkanka która wytwarza drewno i łyko.</p>
        </div>}

        { zdobyta === false &&<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.5746392333263!2d18.363564316091917!3d54.5409949802467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDMyJzI3LjYiTiAxOMKwMjEnNTYuNyJF!5e0!3m2!1spl!2spl!4v1623099306863!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>}
        
        { zdobyta === true && <div className="punkt-odznaka">
        <img src={bracia}/>
        </div> }

        { zdobyta === false && <div class="cel">Jesteś {odleglosc}m od celu</div> }

    </Layout>
}