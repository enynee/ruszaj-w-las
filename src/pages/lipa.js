import React, { useState } from "react"
import Layout from "../components/layout"
import lipa from "../images/lipa.png"
import { oblicz_odleglosc_w_metrach } from "../helpers";

export default function() {
    const [zdobyta, setZdobyta] = useState(false);
    const [odleglosc, setOdleglosc] = useState(Infinity);

    const koordynatyPunktu = [54.559335, 18.296011];
    if (typeof window !== "undefined") {
        const watchID = navigator.geolocation.watchPosition((position) => {

            const metry = oblicz_odleglosc_w_metrach(position, koordynatyPunktu[0], koordynatyPunktu[1]);
            setOdleglosc(metry);
            if (metry <= 100) {
                setZdobyta(true)
                localStorage.setItem("lipa", "zdobyta");
            }
        });
    }

    return <Layout>
        <h1>Pomnik przyrody Lipa szerokolistna</h1>

        { zdobyta === false && <div className="punkt-odznaka">
        <img src={lipa} className="czarno-biale"/>
        </div> }

        { zdobyta === true && <div className="cel brawo">
            <p className="white-bold">Brawo!</p>
            <p className="white">Jesteś u celu!</p>
        </div> }

        { zdobyta === false && <div className="green">
            <p className="white-bold">Lokalizacja</p>
            <p className="white">Punkt znajduje się w pobliżu Leśniczówki Wyspowo na ul. Cystersów</p>
        </div> }

        { zdobyta === true && <div className="opis-punktu">
            <p className="p-opis">Gratulacje, udało ci się odnaleźć pomnik przyrody. Jest to lipa szerokolistna (Tilia platyphyllos L.) Jak zapewne wiesz, drzewo aby zostać pomnikiem przyrody musi spełnić określone wymiary. Dla lipy takimi kryteriami  jest 100 cm pierśnicy (czyli średnicy pnia mierzonej na wysokości 1,3 m od ziemi) oraz 310 cm obwodu pnia mierzonego na wysokości 1,3 m od ziemi.</p> 
            <p className="p-opis">Czy wiesz, że w Polskich lasach możesz spotkać aż dwa gatunki lipy? Są to lipa drobnolistna (Tilia cordata Mill.) i lipa szerokolistna (Tilia platyphyllos L.). Jak je rozróżnić?</p> 
            <p className="p-opis">Najlepszym sposobem jest obejrzenie spodniej części liścia. Jeśli przy nerwach liści widzisz białe włoski to masz do czynienia z lipą szerokolistną, jeśli zaś widzisz rude włoski to jest to lipa drobnolistna. Oczywiście, lipa szerokolistna ma też większe liście od szerokolistnej, ale w przypadku, gdy oba drzewa nie rosną obok siebie i nie masz porównania, lepiej nie identyfikować ich na podstawie wielkości liści.</p> 
            <p className="p-opis">Czy wiesz o tym, że kwiaty lipy szerokolistnej wykorzystywane są jako surowiec zielarski? Lipa szerokolistna kwitnie od czerwca do lipca (lipa drobnolistna kwitnie około 2 tygodnie później). Suszone kwiatostany wykorzystuje się do stworzenia na naparów, które świetnie działają podczas przeziębienia. Wykazują one działanie przeciwzapalne i wzmagają pocenie się, co przy przeziębieniu jest bardzo korzystne. Pamiętaj, jeśli zdecydujesz się zbierać kwiaty lipy, wybieraj drzewa oddalone od dróg i miejsc emitujących zanieczyszczenia. Nie zbieraj też kwiatów jedynie z jednego drzewa, bo może je to osłabić. Znacznie lepiej pobierać surowiec w niewielkiej ilości, ale z kilku lub kilkunastu drzew.</p>
        </div>}

        { zdobyta === false &&<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1375.6356743798979!2d18.294079823061836!3d54.55933598593962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDMzJzM1LjIiTiAxOMKwMTcnNDMuOCJF!5e0!3m2!1spl!2spl!4v1620581154713!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>}

        { zdobyta === true && <div className="punkt-odznaka">
        <img src={lipa}/>
        </div> }

        { zdobyta === false && <div class="cel">Jesteś {odleglosc}m od celu</div> }

    </Layout>
}