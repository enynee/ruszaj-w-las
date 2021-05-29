import React, { useState } from "react"
import Layout from "../components/layout"
import glaz from "../images/glaz.png"
import { oblicz_odleglosc_w_metrach } from "../helpers";

export default function() {
    const [zdobyta, setZdobyta] = useState(false);
    const [odleglosc, setOdleglosc] = useState(Infinity);

    const koordynatyPunktu = [54.522946, 18.248281];
    if (typeof window !== "undefined") {
        const watchID = navigator.geolocation.watchPosition((position) => {

            const metry = oblicz_odleglosc_w_metrach(position, koordynatyPunktu[0], koordynatyPunktu[1]);
            setOdleglosc(metry);
            if (metry <= 100) {
                setZdobyta(true)
                localStorage.setItem("glaz", "zdobyta");
            }
        });
    }

    return <Layout>
        <h1>Głaz w Obszarze Natura 2000 Pełcznica</h1>

        { zdobyta === false && <div className="punkt-odznaka">
        <img src={glaz} className="czarno-biale"/>
        </div> }

        { zdobyta === true && <div className="cel brawo">
            <p className="white-bold">Brawo!</p>
            <p className="white">Jesteś u celu!</p>
        </div> }

        { zdobyta === false && <div className="green">
            <p className="white-bold">Lokalizacja</p>
            <p className="white">Punkt znajduje się w Leśnictwie Sopieszyno w okolicy Jeziora Wygoda</p>
        </div> }

        { zdobyta === true && <div className="opis-punktu">
            <p className="p-opis">Znajdujesz się w wyjątkowym miejscu w pobliżu jeziora Wygoda, Pałsznik i Krypko oraz przy rezerwacie przyrody Pełcznica. Głaz przy którym stoisz to pomnik przyrody. Rezerwat z jeziorami jak i otaczający je drzewostan tworzy obszar ochrony siedlisk Natura 2000 Pełcznica.</p> 
            <p className="p-opis">Najpierw przyjrzyjmy się bliżej głazowi. Dlaczego głazy mogą zostać pomnikami przyrody mimo, że nie są elementami ożywionymi? Przyroda to całokształt elementów zarówno tych ożywionych jak i nieożywionych takich jak klimat, gleba, stosunki wodne i budowa geologiczna. Za pomniki przyrody uznaje się najcenniejsze elementy przyrody. Głazy narzutowe są fragmentami litej skały, które są przyniesione przez lądolód ze Skandynawii. Wśród kryteriów klasyfikujących głazy jako pomniki przyrody są: rozmiar, skład chemiczny i właściwości fizyczne skały. Należy pamiętać, że głazy bez względu na wielkość są dziedzictwem geologicznym i geograficznym, więc powinny być pod ochroną i nie mogą być w żaden sposób niszczone ani kradzione. </p>
            <p className="p-opis">Przejdźmy teraz do Obszaru Natura 2000 Pełcznica. Jest to obszar o powierzchni 253,06 ha i powstał w celu ochrony siedlisk takich jak jeziora lobeliowe, torfowiska wysokie, torfowiska przejściowe i trzęsawiska, kwaśne buczyny, bory i lasy bagienne oraz brzozowo-sosnowe bagienne lasy borealne.</p>
            <p className="p-opis">Obszary Natura 2000 tworzą połączone sieci, które mają na celu ochronę przyrody na terytorium Unii Europejskiej. Ich celem jest zachowanie dziedzictwa przyrodniczego i ochrona szczególnie cennych i zagrożonych gatunków. W Obszarze Natura 2000 Pełcznica oprócz wymienionych siedlisk na szczególną uwagę zasługuje chroniona roślina - elisma wodna (Luronium natans (L.) Raf.) . Występuje ona w jeziorach lobeliowych i jest zagrożona wymieraniem przez zanieczyszczenie zbiorników wodnych.</p>
            <p>Zachęcam Cię do dalszego spaceru po wyznaczonych szlakach Rezerwatu Przyrody. Koniecznie obejrzyj jeziora Wygoda, Pałsznik i Krypko.</p>
        </div>}

        { zdobyta === false &&<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2315.5980912915443!2d18.24609231601039!3d54.522949093628334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDMxJzIyLjYiTiAxOMKwMTQnNTMuOCJF!5e0!3m2!1spl!2spl!4v1620580925994!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>}

        { zdobyta === true && <div className="punkt-odznaka">
        <img src={glaz}/>
        </div> }

        { zdobyta === false && <div class="cel">Jesteś {odleglosc}m od celu</div> }

    </Layout>
}