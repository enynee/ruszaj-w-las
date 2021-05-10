import React from "react"
import Layout from "../components/layout"
import pasnik from "../images/pasnik.png"

export default function() {
    return <Layout>
        <h1>Paśnik przy ul. Sopockiej</h1>

        <img src={pasnik}/>

        <div>
            <p>Lokalizacja</p>
            <p>Punkt znajduje się w Nadleśnictwie Gdańsk, Leśnictwie Sopot przy ul. Sopockiej</p>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5515.757628628582!2d18.510291408252236!3d54.46134072911186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDI3JzM0LjkiTiAxOMKwMzAnNTQuOSJF!5e0!3m2!1spl!2spl!4v1620579805033!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>

        <p>Jesteś xm od celu</p>

    </Layout>
}