import React from "react"
import Layout from "../components/layout"
import dolina from "../images/dolina.png"

export default function() {
    return <Layout>
        <h1>Dolina Czystej Wody</h1>

        <img src={dolina}/>

        <div>
            <p>Lokalizacja</p>
            <p>Punkt znajduje się przy Drodze Marnych Mostów przy Potoku Czystej Wody</p>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2322.250459839199!2d18.529777316007024!3d54.405553102544836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDI0JzIwLjAiTiAxOMKwMzEnNTUuMSJF!5e0!3m2!1spl!2spl!4v1620580010246!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>

        <p>Jesteś xm od celu</p>

    </Layout>
}