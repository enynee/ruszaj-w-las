import React from "react"
import Layout from "../components/layout"
import drzewomateczne from "../images/drzewomateczne.png"

export default function() {
    return <Layout>
        <h1>Drzewo mateczne nieopodal Szwedzkiej</h1>

        <img src={drzewomateczne}/>

        <div>
            <p>Lokalizacja</p>
            <p>Punkt znajduje się nieopodal Szlaku Kartuskiego (niebieskiego) przy Szwedzkiej Grobli</p>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1953.4640254286064!2d18.536777663807282!3d54.39101996464835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDIzJzI2LjQiTiAxOMKwMzInMTguMCJF!5e0!3m2!1spl!2spl!4v1620554952015!5m2!1spl!2spl" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>

        <p>Jesteś xm od celu</p>

    </Layout>
}