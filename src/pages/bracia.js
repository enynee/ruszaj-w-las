import React from "react"
import Layout from "../components/layout"
import bracia from "../images/bracia.png"

export default function() {
    return <Layout>
        <h1>Bracia Kaszuby</h1>

        <img src={bracia}/>

        <div>
            <p>Lokalizacja</p>
            <p>Punkt znajduje się w Nadleśnictwie Gdańsk, Leśnictwie stara Piła</p>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.5715040617156!2d18.364310017840467!3d54.54105025453625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDMyJzI3LjgiTiAxOMKwMjEnNTcuMyJF!5e0!3m2!1spl!2spl!4v1620582728481!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>

        <p>Jesteś xm od celu</p>

    </Layout>
}