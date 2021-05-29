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
    let lasZdobyta;
    let dolinaZdobyta;
    let glazZdobyta;
    let parkZdobyta;
    let mokradloZdobyta;
    let drzewomateczneZdobyta;
    let pasnikZdobyta;
    let modrzewZdobyta;
    let lipaZdobyta;
    let dabZdobyta;
    let braciaZdobyta;
    if (typeof window !== "undefined") {
        wiezaZdobyta = localStorage.getItem("wieza");
        lasZdobyta = localStorage.getItem("las");
        dolinaZdobyta = localStorage.getItem("glaz");
        parkZdobyta = localStorage.getItem("park");
        mokradloZdobyta = localStorage.getItem("mokradlo");
        drzewomateczneZdobyta = localStorage.getItem("drzewomateczne");
        pasnikZdobyta = localStorage.getItem("pasnik");
        modrzewZdobyta = localStorage.getItem("modrzew");
        dolinaZdobyta = localStorage.getItem("dolina");
        lipaZdobyta = localStorage.getItem("lipa");
        dabZdobyta = localStorage.getItem("dab");
        braciaZdobyta = localStorage.getItem("bracia");
    }

    return <Layout>
        <h1>Odznaki</h1>
        <div className="columns">
            <div className="column left">
                <div>
                    {wiezaZdobyta && <div><img src={wieza} /><span className="title-point">Wieża Obserwacyjna Nr 1 w Ptasim Raju</span></div>}
                    {!wiezaZdobyta && <div><img src={wieza} className="czarno-biale" /><span class="title-point">Wieża Obserwacyjna Nr 1 w Ptasim Raju</span></div>}
                </div>
                <div>
                    {lasZdobyta && <div><img src={las} /><span className="title-point">Dojrzały las i młodnik</span></div>}
                    {!lasZdobyta && <div><img src={las} className="czarno-biale" /><span className="title-point">Dojrzały las i młodnik</span></div>}
                </div>
                <div>
                    {dolinaZdobyta && <div><img src={dolina} /><span className="title-point">Dolina Czystej Wody</span></div>}
                    {!dolinaZdobyta && <div><img src={dolina} className="czarno-biale" /><span className="title-point">Dolina Czystej Wody</span></div>}
                </div>
                <div>
                    {glazZdobyta && <div><img src={glaz} /><span className="title-point">Głaz w Obszarze Natura 2000 Pełcznica</span></div>}
                    {!glazZdobyta && <div><img src={glaz} className="czarno-biale" /><span className="title-point">Głaz w Obszarze Natura 2000 Pełcznica</span></div>}
                </div>
                <div>
                    {parkZdobyta && <div><img src={park} /><span className="title-point">Trójmiejski Park Krajobrazowy</span></div>}
                    {!parkZdobyta && <div><img src={park} className="czarno-biale" /><span className="title-point">Trójmiejski Park Krajobrazowy</span></div>}
                </div>
                <div>
                    {mokradloZdobyta && <div><img src={mokradlo} /><span className="title-point">Mokradło Rozlewisko</span></div>}
                    {!mokradloZdobyta && <div><img src={mokradlo} className="czarno-biale" /><span className="title-point">Mokradło Rozlewisko</span></div>}
                </div>
            </div>
            <div className="column right">
                <div>
                    {drzewomateczneZdobyta && <div><img src={drzewomateczne} /><span className="title-point">Drzewo mateczne nieopodal Szwedzkiej</span></div>}
                    {!drzewomateczneZdobyta && <div><img src={drzewomateczne} className="czarno-biale" /><span className="title-point">Drzewo mateczne nieopodal Szwedzkiej</span></div>}
                </div>
                <div>
                    {pasnikZdobyta && <div><img src={pasnik} /><span className="title-point">Paśnik przy ul. Sopockiej</span></div>}
                    {!pasnikZdobyta && <div><img src={pasnik} className="czarno-biale" /><span className="title-point">Paśnik przy ul. Sopockiej</span></div>}
                </div>
                <div>
                    {modrzewZdobyta && <div><img src={modrzew} /><span className="title-point">Pomnik przyrody modrzew Zbyszko Rumia</span></div>}
                    {!modrzewZdobyta && <div><img src={modrzew} className="czarno-biale" /><span className="title-point">Pomnik przyrody modrzew Zbyszko Rumia</span></div>}
                </div>
                <div>
                    {lipaZdobyta && <div><img src={lipa} /><span className="title-point">Pomnik przyrody Lipa szerokolistna</span></div>}
                    {!lipaZdobyta && <div><img src={lipa} className="czarno-biale" /><span className="title-point">Pomnik przyrody Lipa szerokolistna</span></div>}
                </div>
                <div>
                    {dabZdobyta && <div><img src={dab} /><span className="title-point">Dąb powalony Dolina Samborowo</span></div>}
                    {!dabZdobyta && <div><img src={dab} className="czarno-biale" /><span className="title-point">Dąb powalony Dolina Samborowo</span></div>}
                </div>
                <div>
                    {braciaZdobyta && <div><img src={bracia} /><span className="title-point">Bracia Kaszuby</span></div>}
                    {!braciaZdobyta && <div><img src={bracia} className="czarno-biale" /><span className="title-point">Bracia Kaszuby</span></div>}
                </div>
            </div>
        </div>
        <div className="odznaka-title"><img src={odznaka} /><span class="title-odznakaterenowa">Odznaka Terenowa</span></div>

    </Layout>
}