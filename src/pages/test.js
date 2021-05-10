import React from "react"
import Layout from "../components/layout"
import wieza from "../images/wieza.png"

export default function() {
    return <Layout>
        <h1>Test</h1>

        <img src={wieza}/>

        <div>
            <p>Lokalizacja</p>
            <p>Punkt znajduje się w losowym miejscu</p>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2325.074805516368!2d18.800720316005584!3d54.355659106330684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDIxJzIwLjQiTiAxOMKwNDgnMTAuNSJF!5e0!3m2!1spl!2spl!4v1620554305728!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>

        <p>Jesteś xm od celu</p>

    </Layout>
}