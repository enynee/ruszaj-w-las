import React from "react"
import Layout from "../components/layout"
import mokradlo from "../images/mokradlo.png"


export default function() {
    let zdobyta = false;
    return <Layout>
        <h1>Mokradło Rozlewisko</h1>

        { zdobyta === false && <div className="punkt-odznaka">
        <img src={mokradlo} className="czarno-biale"/>
        </div> }

        { zdobyta === true && <div className="cel brawo">
            <p className="white-bold">Brawo!</p>
            <p className="white">Jesteś u celu!</p>
        </div> }

        { zdobyta === false && <div className="green">
            <p className="white-bold">Lokalizacja</p>
            <p className="white">Punkt znajduje się Nadleśnictwie Gdańsk, Leśnictwie Sopot przy Trójmiejskiej Obwodnicy</p>
        </div> }

        { zdobyta === true && <div className="opis-punktu">
            <p className="p-opis">Znajdujesz się właśnie przy leśnym mokradle. W zależności od pory roku, ale także warunków atmosferycznych jakie panowały w ciągu ostatniego czasu (deszcz lub brak deszczu, wysoka temperatura) mokradło może być wypełnione wodą lub też wysuszone. Susza i brak wody obrazuje duży problem jaki dotyczy obszaru całej Polski, zarówno lasów jak i pozostałych terenów.</p> 
            <p className="p-opis">Jak zapewne wiesz, woda jest podstawą życia. Woda jest niezbędna także zwierzętom oraz roślinom, bez niej słabną i wymierają. Lasy posiadają zdolność do gromadzenia i przetrzymywania zasobów wodnych, które pochodzą ze spływu wód opadowych. Woda gromadzi się w naturalnych zbiornikach takich jak mokradła, bagna, jeziorka leśne, ale także w sztucznych zbiornikach retencyjnych. Las gromadzi wodę i może ją oddawać terenom, które są położone w niższej części zlewni w okresie niedoboru. Co jednak jeśli coraz częściej widzimy wysuszone zbiorniki wodne?</p> 
            <p className="p-opis">Leśnicy już wiele lat temu zauważyli tendencję do zmniejszania się ilości wody w naturalnych ciekach i zbiornikach wodnych. Wprowadzono porogram małej retencji w lasach, która polega m.in na budowaniu nowych zbiorników wodnych i urządzeń wodnych, tworzeniu zastawek, progów, jazów. Dzięki temu Lasy Państwowe oceniają, że tylko w latach 1998-2015 udało się zretencjonować aż 52,7 mln m3 wody. Mała retencja wodna nie tylko zwiększa zasoby wody i minimalizuje skutki suszy. Dzięki niej zmniejsza się zagrożenie powodziowe, zwiększa się ilość zbiorników wodnych, które można wykorzystać w trakcie pożarów, a przede wszystkim - zwiększa zasoby wody, zwiększając przy tym różnorodność roślin i zwierząt.</p> 
        </div>}

        { zdobyta === false &&<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2319.829906250475!2d18.492359316008255!3d54.448289099300524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDI2JzUzLjgiTiAxOMKwMjknNDAuNCJF!5e0!3m2!1spl!2spl!4v1620582063506!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>}

        { zdobyta === true && <div className="punkt-odznaka">
        <img src={mokradlo}/>
        </div> }

        { zdobyta === false && <div class="cel">Jesteś xm od celu</div> }

    </Layout>
}