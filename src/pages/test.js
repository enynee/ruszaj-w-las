import React from "react"
import Layout from "../components/layout"
import wieza from "../images/wieza.png"

export default function() {
    let zdobyta = false;
    return <Layout>
        <h1>Test</h1>

        { zdobyta === false && <div className="punkt-odznaka">
        <img src={wieza} className="czarno-biale"/>
        </div> }

        { zdobyta === true && <div className="cel brawo">
            <p className="white-bold">Brawo!</p>
            <p className="white">Jesteś u celu!</p>
        </div> }

        { zdobyta === false && <div className="green">
            <p className="white-bold">Lokalizacja</p>
            <p className="white">Punkt znajduje się w losowym miejscu. Kocham Farunię</p>
        </div> }

        { zdobyta === true && <div className="opis-punktu">
            <p className="p-opis">Przyjaźń to - mały pieseczek</p> 
            <p className="p-opis">Ten pies jest mój, on jest też trochę twój</p> 
        </div>}

        { zdobyta === false &&<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2325.074805516368!2d18.800720316005584!3d54.355659106330684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDIxJzIwLjQiTiAxOMKwNDgnMTAuNSJF!5e0!3m2!1spl!2spl!4v1620554305728!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>}

        { zdobyta === true && <div className="punkt-odznaka">
        <img src={wieza}/>
        </div> }

        { zdobyta === false && <div class="cel">Jesteś xm od celu</div> }

    </Layout>
}
