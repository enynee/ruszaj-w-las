import React from "react"
import Layout from "../components/layout"
import mokradlo from "../images/mokradlo.png"

export default function() {
    return <Layout>
        <h1>Mokradło Rozlewisko</h1>

        <img src={mokradlo}/>

        <div>
            <p>Lokalizacja</p>
            <p>Punkt znajduje się Nadleśnictwie Gdańsk, Leśnictwie Sopot przy Trójmiejskiej Obwodnicy</p>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2319.829906250475!2d18.492359316008255!3d54.448289099300524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDI2JzUzLjgiTiAxOMKwMjknNDAuNCJF!5e0!3m2!1spl!2spl!4v1620582063506!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>

        <p>Jesteś xm od celu</p>

    </Layout>
}