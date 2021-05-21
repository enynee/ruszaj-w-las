import React from "react"
import Layout from "../components/layout"

export default function() {
    return <Layout>
        <h1>Lista punktów</h1>
        <ul className="lista">
            <li><a href="/wieza">Wieża Obserwacyjna Nr 1 w Ptasim Raju</a></li>
            <li><a href="/drzewomateczne">Drzewo mateczne nieopodal Szwedzkiej</a></li>
            <li><a href="/las">Dojrzały las i młodnik</a></li>
            <li><a href="/pasnik">Paśnik przy ul. Sopockiej</a></li>
            <li><a href="/dolina">Dolina Czystej Wody</a></li>
            <li><a href="/modrzew">Pomnik przyrody modrzew Zbyszko Rumia</a></li>
            <li><a href="/glaz">Głaz w Obszarze Natura 2000 Pełcznica</a></li>
            <li><a href="/lipa">Pomnik przyrody Lipa szerokolistna</a></li>
            <li><a href="/park">Trójmiejski Park Krajobrazowy</a></li>
            <li><a href="/dab">Dąb powalony Dolina Samborowo</a></li>
            <li><a href="/mokradlo">Mokradło Rozlewisko</a></li>
            <li><a href="/bracia">Bracia Kaszuby</a></li>
        </ul>
    </Layout>
}