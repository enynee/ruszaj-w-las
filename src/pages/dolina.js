import React from "react"
import Layout from "../components/layout"
import dolina from "../images/dolina.png"

export default function() {
    let zdobyta = false;
    return <Layout>
        <h1>Dolina Czystej Wody</h1>

        { zdobyta === false && <div className="punkt-odznaka">
        <img src={dolina} className="czarno-biale"/>
        </div> }

        { zdobyta === true && <div className="cel brawo">
            <p className="white-bold">Brawo!</p>
            <p className="white">Jesteś u celu!</p>
        </div> }

        { zdobyta === false && <div className="green">
            <p className="white-bold">Lokalizacja</p>
            <p className="white">Punkt znajduje się przy Drodze Marnych Mostów przy Potoku Czystej Wody</p>
        </div> }

        { zdobyta === true && <div className="opis-punktu">
            <p className="p-opis">Znalazłeś użytek ekologiczny Dolina Czystej Wody. Użytek ekologiczny jest jedną z wielu form ochrony przyrody w Polsce. Istotą ich zakładania jest ochrona niezwykle cennych pod względem przyrodniczym obiektów, które są stosunkowo niewielkie i z tego względu nie mogą stać się rezerwatami przyrody. </p> 
            <p className="p-opis">Użytki ekologiczne są pozostałościami ekosystemów, są niezwykle cenne biologicznie i w dużym stopniu wzbogacają różnorodność przyrodniczą terenu. Jakie obiekty mogą zostać użytkami? Są to: naturalne zbiorniki wodne, śródpolne i śródleśne oczka wodne, kępy drzew i krzewów, bagna, torfowiska, wydmy, płaty nieużytkowanej roślinności, starorzecza, wychodnie skalne, skarpy, kamieńce, siedliska przyrodnicze oraz stanowiska rzadkich lub chronionych gatunków roślin, zwierząt, i grzybów, ich ostoje oraz miejsca rozmnażania lub miejsca sezonowego przebywania.</p> 
            <p className="p-opis">Dolina Czystej Wody zaklasyfikowana jest do rodzaju siedlisko przyrodnicze i stanowisko rzadkich lub chronionych gatunków. Użytek ustanowiono w 2006 roku, a za szczególnie cenną i wartą ochrony uznano podmokłą łąkę na której rosną storczyki.</p> 
            <p className="p-opis">Po przeciwnej stronie możesz zauważyć las grądowy. Drzewa, które tworzą grąd to: grab zwyczajny, dąb szypułkowy, lipa drobnolistna oraz sosna zwyczajna. Z racji wysokiej żyzności tego drzewostanu możesz zaobserwować bogate i bujne runo leśne. W zależności od pory roku możesz w runie znaleźć możesz: wiosną - zawilca gajowego (Anemone nemorosa L.), jaskry (Ranunculus), przytulię wonną (Galium odoratum), gajowca żółtego (Lamium galeobdolon) oraz gwiazdnicę wielokwiatową (Stellaria holostea L.), latem zaś - dziurawca zwyczajnego (Hypericum perforatum L.)  oraz pszeńca gajowego (Melampyrum nemorosum).</p>
        </div>}

        { zdobyta === false &&<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2322.250459839199!2d18.529777316007024!3d54.405553102544836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDI0JzIwLjAiTiAxOMKwMzEnNTUuMSJF!5e0!3m2!1spl!2spl!4v1620580010246!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe> }

        { zdobyta === true && <div className="punkt-odznaka">
        <img src={dolina}/>
        </div> }

        { zdobyta === false && <div class="cel">Jesteś xm od celu</div> }

    </Layout>
}