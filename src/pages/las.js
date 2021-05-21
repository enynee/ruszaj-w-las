import React from "react"
import Layout from "../components/layout"
import las from "../images/las.png"

export default function() {
    let zdobyta = false;
    return <Layout>
        <h1>Dojrzały las i młodnik</h1>

        { zdobyta === false && <div className="punkt-odznaka">
        <img src={las} className="czarno-biale"/>
        </div> }

        { zdobyta === true && <div className="cel brawo">
            <p className="white-bold">Brawo!</p>
            <p className="white">Jesteś u celu!</p>
        </div> }

        { zdobyta === false && <div className="green">
            <p className="white-bold">Lokalizacja</p>
            <p className="white">Punkt znajduje się w Nadleśnictwie Gdańsk, Leśnictwie Matemblewo w pobliżu Drogi Matarniańskiej</p>
        </div> }

        { zdobyta === true && <div className="opis-punktu">
            <p className="p-opis">Właśnie stoisz na granicy lasu młodego tzw. młodnika oraz lasu dojrzałego. Idąc tą drogą zapewne widziałeś różne fragmenty lasu - te młodsze i starsze, ale zdecydowanie częściej mogłeś zauważyć drzewa starsze.</p> 
            <p className="p-opis">Na tym przykładzie widzisz, że las gospodarczy i drzewa, które się w nim znajdują przechodzą różne etapy. Najpierw młode drzewka wyhodowane w szkółkach leśnych trafiają do wcześniej przygotowanej gleby w lesie - jest to odnowienie sztuczne. Może być też tak, że leśnik decyduje się na odnowienie naturalne drzewostanu, czyli drzewka wyrastają z nasion drzew znajdujących się w sąsiedztwie. Kolejnym etapem jest pielęgnacja drzewostanu, czyli stopniowe kształtowanie prawidłowej i zdrowej struktury lasu poprzez np. usuwanie drzewek chorych i źle ukształtowanych. Zabiegi pielęgnacyjne trwają przez wiele dziesięcioleci i są powtarzane regularnie, aż do osiągnięcia zdrowego i dojrzałego drzewostanu, który jest gotowy do wycięcia.</p> 
            <p className="p-opis">Dlaczego wycina się las? Drewno, które pozyskuje się z drzew jest niezbędnym surowcem konstrukcyjnym np. podczas budowania domów. Służy też do tworzenia mebli, podłóg, płotów, zabawek i wielu innych przedmiotów, których codziennie używasz. Z drewna powstaje także papier i służy ludziom jako surowiec energetyczny.</p> 
            <p className="p-opis">Czy w Polsce wycina się coraz więcej drzew? Nie. Lesistość w Polsce wzrasta z roku na rok, co oznacza, że lasów w Polsce przybywa. W roku 1945 roku lesistość w naszym kraju wynosiła 20,8%, a obecnie wynosi 29,6%. Poza tym w Lasach Państwowych dla każdego Nadleśnictwa konstruowany jest 10-letni Plan Urządzenia Lasu, który dokładnie określa ile drzew i z jakich dokładnie obszarów w danym lesie można wyciąć, a ile powierzchni należy odnowić. W lasach dąży się do tego, aby w każdym roku sadzić więcej drzew niż wycięto, a z badań przeprowadzonych w 2017 roku wynika, że na każde wycięte drzewo posadzono ok. 13 młodych drzewek. </p>
        </div>}

        { zdobyta === false &&<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2323.3346907175087!2d18.50721131600654!3d54.38640310399826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDIzJzExLjAiTiAxOMKwMzAnMzMuOCJF!5e0!3m2!1spl!2spl!4v1620578774080!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>}

        { zdobyta === true && <div className="punkt-odznaka">
        <img src={las}/>
        </div> }

        { zdobyta === false && <div class="cel">Jesteś xm od celu</div> }

    </Layout>
}