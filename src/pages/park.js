import React from "react"
import Layout from "../components/layout"
import park from "../images/park.png"

export default function() {
    return <Layout>
        <h1>Trójmiejski Park Krajobrazowy</h1>

        <img src={park}/>

        <div>
            <p>Lokalizacja</p>
            <p>Punkt znajduje się w Nadleśnictwie Gdańsk, Leśnictwie Matemblewo w poblizu rzeki Strzyża</p>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1551.4607004237546!2d18.541806977106884!3d54.36467519452793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDIxJzUzLjciTiAxOMKwMzInMzAuOSJF!5e0!3m2!1spl!2spl!4v1620581337699!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>

        <p>Jesteś xm od celu</p>

    </Layout>
}