import React from "react"
import Layout from "../components/layout"
import glaz from "../images/glaz.png"

export default function() {
    return <Layout>
        <h1>Głaz w Obszarze Natura 2000 Pełcznica</h1>

        <img src={glaz}/>

        <div>
            <p>Lokalizacja</p>
            <p>Punkt znajduje się w Leśnictwie Sopieszyno w okolicy Jeziora Wygoda</p>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2315.5980912915443!2d18.24609231601039!3d54.522949093628334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDMxJzIyLjYiTiAxOMKwMTQnNTMuOCJF!5e0!3m2!1spl!2spl!4v1620580925994!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>

        <p>Jesteś xm od celu</p>

    </Layout>
}