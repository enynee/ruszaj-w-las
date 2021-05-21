import React from "react"
import Layout from "../components/layout"
import dab from "../images/dab.png"

export default function() {
    let zdobyta = false;
    return <Layout>
        <h1>Dąb powalony Dolina Samborowo</h1>

        { zdobyta === false && <div className="punkt-odznaka">
        <img src={dab} className="czarno-biale"/>
        </div> }

        { zdobyta === true && <div className="cel brawo">
            <p className="white-bold">Brawo!</p>
            <p className="white">Jesteś u celu!</p>
        </div> }

        { zdobyta === false && <div className="green">
            <p className="white-bold">Lokalizacja</p>
            <p className="white">Punkt znajduje się w Dolinie Samborowo</p>
        </div> }

        { zdobyta === true && <div className="opis-punktu">
            <p className="p-opis">Znajdujesz się teraz w Dolinie Samborowo i widzisz powalony dąb. Pewnie zastanawiasz się, czego ma cię nauczyć martwe drzewo, zwłaszcza, że wokół widzisz mnóstwo żywych drzew, które tworzą piękny las.</p> 
            <p className="p-opis">Martwe drewno pełni bardzo ważną funkcję w lesie. Drzewa obumierają przez wiele czynników: choroby, starość, niszcząca działalność czynników atmosferycznych lub grzybów czy też owadów. To, że spotykasz w lesie martwe drzewa wcale nie oznacza, że las jest zaniedbany lub chory. Leśnicy pozostawiają część martwych drzew po to, by wspierać różnorodność ekosystemu. Martwe drzewa i drewno zamieszkuje wiele organizmów takich jak: grzyby, rośliny naczyniowe, owady i kręgowce. Z martwym drewnem związanych jest wiele owadów chronionych m.in. pachnica dębowa (Osmoderma eremita) i bogatek wspaniały (Buprestis splendens). Ich populacja jest coraz mniej liczna, dlatego tak ważne jest, by utrzymywać w lasach odpowiednią ilość martwego drewna.</p> 
            <p className="p-opis">Martwe drewno może przybierać także inną formę niż widzisz na tym przykładzie. Może być też częścią żywego drzewa lub martwym drzewem stojącym. W takich egzemplarzach bardzo często można znaleźć dziuple. Są one miejscem gniazdowania, schronienia i żerowania wielu ptaków, m.in. dzięciołów, sów, muchołówek i sikor. </p> 
            <p className="p-opis">Również grzyby, porosty i rośliny naczyniowe są ściśle związane z martwym drewnem. Działalność tych wszystkich organizmów wpływa na powolny rozkład drewna, a dzięki temu substancje odżywcze i pierwiastki powoli wracają do obiegu - czyli do gleby, zwiększając jej żyzność. </p>
        </div>}

        { zdobyta === false &&<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2323.607151383233!2d18.52745731600628!3d54.38159010436336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDIyJzUzLjciTiAxOMKwMzEnNDYuNyJF!5e0!3m2!1spl!2spl!4v1620581569668!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>}

        { zdobyta === true && <div className="punkt-odznaka">
        <img src={dab}/>
        </div> }

        { zdobyta === false && <div class="cel">Jesteś xm od celu</div> }

    </Layout>
}