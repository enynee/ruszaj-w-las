import React from "react"
import Layout from "../components/layout"
import las from "../images/las.png"

export default function() {
    return <Layout>
        <h1>Dojrzały las i młodnik</h1>

        <img src={las}/>

        <div>
            <p>Lokalizacja</p>
            <p>Punkt znajduje się w Nadleśnictwie Gdańsk, Leśnictwie Matemblewo w pobliżu Drogi Matarniańskiej</p>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2323.3346907175087!2d18.50721131600654!3d54.38640310399826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDIzJzExLjAiTiAxOMKwMzAnMzMuOCJF!5e0!3m2!1spl!2spl!4v1620578774080!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>

        <p>Jesteś xm od celu</p>

    </Layout>
}