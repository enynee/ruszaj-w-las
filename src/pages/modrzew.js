import React from "react"
import Layout from "../components/layout"
import modrzew from "../images/modrzew.png"

export default function() {
    return <Layout>
        <h1>Pomnik przyrody modrzew Zbyszko Rumia</h1>

        <img src={modrzew}/>

        <div>
            <p>Lokalizacja</p>
            <p>Punkt znajduje się w Nadleśnictwie Gdańsk, Leśnictwie Stara Piła w pobliżu leśniczówki Zbychowo </p>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2313.4093939600657!2d18.352655316011454!3d54.56153609069485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDMzJzQxLjUiTiAxOMKwMjEnMTcuNCJF!5e0!3m2!1spl!2spl!4v1620580442417!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>

        <p>Jesteś xm od celu</p>

    </Layout>
}