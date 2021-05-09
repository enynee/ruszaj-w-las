import React from "react"
import Layout from "../components/layout"
import lipa from "../images/lipa.png"

export default function() {
    return <Layout>
        <h1>Pomnik przyrody Lipa szerokolistna</h1>

        <img src={lipa}/>

        <div>
            <p>Lokalizacja</p>
            <p>Punkt znajduje się w pobliżu Leśniczówki Wyspowo na ul. Cystersów</p>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1375.6356743798979!2d18.294079823061836!3d54.55933598593962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDMzJzM1LjIiTiAxOMKwMTcnNDMuOCJF!5e0!3m2!1spl!2spl!4v1620581154713!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>

        <p>Jesteś xm od celu</p>

    </Layout>
}