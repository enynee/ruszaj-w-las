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

export default function OProjekcie() {
    return <Layout>
        <h1>Odznaki</h1>
        
        <p><img src={wieza}/>Wieża Obserwacyjna Nr 1 w Ptasim Raju</p>
        <p><img src={drzewomateczne}/>Drzewo mateczne nieopodal Szwedzkiej</p>
        <p><img src={las}/>Dojrzały las i młodnik</p>
        <p><img src={pasnik}/>Paśnik przy ul. Sopockiej</p>
        <p><img src={dolina}/>Dolina Czystej Wody</p>
        <p><img src={modrzew}/>Pomnik przyrody modrzew Zbyszko Rumia</p>
        <p><img src={glaz}/>Głaz w Obszarze Natura 2000 Pełcznica</p>
        <p><img src={lipa}/>Pomnik przyrody Lipa szerokolistna</p>
        <p><img src={park}/>Trójmiejski Park Krajobrazowy</p>
        <p><img src={dab}/>Dąb powalony Dolina Samborowo</p>
        <p><img src={mokradlo}/>Mokradło Rozlewisko</p>
        <p><img src={bracia}/>Bracia Kaszuby</p>
        <p><img src={odznaka}/>Odznaka Terenowa</p>
    </Layout>
}