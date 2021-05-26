import React from "react"
import Layout from "../components/layout"
import bracia from "../images/bracia.png"
import dab from "../images/dab.png"
import dolina from "../images/dolina.png"
import drzewomateczne from "../images/drzewomateczne.png"
import glaz from "../images/glaz.png"
import las from "../images/las.png"
import lipa from "../images/lipa.png"
import modrzew from "../images/modrzew.png"
import mokradlo from "../images/mokradlo.png"
import odznaka from "../images/odznaka.png"
import park from "../images/park.png"
import pasnik from "../images/pasnik.png"
import wieza from "../images/wieza.png"

export default function () {
    let wiezaZdobyta;
    if (typeof window !== "undefined") {
        wiezaZdobyta = localStorage.getItem("wieza");
    }

    return <Layout>
        <h1>Odznaki</h1>
        <div className="columns">
            <div className="column left">
                <div>
                    {wiezaZdobyta && <div><img src={wieza} /><span class="title-point">Wieża Obserwacyjna Nr 1 w Ptasim Raju</span></div>}
                    {!wiezaZdobyta && <div><img src={wieza} className="czarno-biale" /><span class="title-point">Wieża Obserwacyjna Nr 1 w Ptasim Raju</span></div>}
                </div>
                <div><img src={las} /><span class="title-point">Dojrzały las i młodnik</span></div>
                <div><img src={dolina} /><span class="title-point">Dolina Czystej Wody</span></div>
                <div><img src={glaz} /><span class="title-point">Głaz w Obszarze Natura 2000 Pełcznica</span></div>
                <div><img src={park} /><span class="title-point">Trójmiejski Park Krajobrazowy</span></div>
                <div><img src={mokradlo} /><span class="title-point">Mokradło Rozlewisko</span></div>
            </div>
            <div className="column right">
                <div><img src={drzewomateczne} /><span class="title-point">Drzewo mateczne nieopodal Szwedzkiej</span></div>
                <div><img src={pasnik} /><span class="title-point">Paśnik przy ul. Sopockiej</span></div>
                <div><img src={modrzew} /><span class="title-point">Pomnik przyrody modrzew Zbyszko Rumia</span></div>
                <div><img src={lipa} /><span class="title-point">Pomnik przyrody Lipa szerokolistna</span></div>
                <div><img src={dab} /><span class="title-point">Dąb powalony Dolina Samborowo</span></div>
                <div><img src={bracia} /><span class="title-point">Bracia Kaszuby</span></div>
            </div>
        </div>
        <div className="odznaka-title"><img src={odznaka} /><span class="title-odznakaterenowa">Odznaka Terenowa</span></div>

    </Layout>
}