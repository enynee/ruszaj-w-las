import React from "react"
import Layout from "../components/layout"
import dab from "../images/dab.png"

export default function() {
    return <Layout>
        <h1>Dąb powalony Dolina Samborowo</h1>

        <img src={dab}/>

        <div>
            <p>Lokalizacja</p>
            <p>Punkt znajduje się w Dolinie Samborowo</p>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2323.607151383233!2d18.52745731600628!3d54.38159010436336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDIyJzUzLjciTiAxOMKwMzEnNDYuNyJF!5e0!3m2!1spl!2spl!4v1620581569668!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>

        <p>Jesteś xm od celu</p>

    </Layout>
}