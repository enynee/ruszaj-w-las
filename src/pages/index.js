import React from "react"
import Layout from "../components/layout"
import lokalizacja from "../images/lokalizacja.png"
import lupa from "../images/lupa.png"
import odznakaterenowa from "../images/odznakaterenowa.png"

export default function Home() {
  return <Layout>
    <div id="gray">
      <div id="green">
          <p className="white-bold">Zdobądź Odznakę Terenową</p>
          <p className="white">Odwiedź wszystkie lokalizacje w Trójmiejskim Parku Krajobrazowym. Podczas wycieczek zbieraj pieczątki, by zdobyć Odznakę Terenową.</p>
      </div>
    </div>

    <div className="obrazki-box">
    <img src={lokalizacja} />
    <p className="obrazki-text">Odnajdź 12 punktów na terenie Trójmiejskiego Parku Krajobrazowego</p>
    </div>

    <div className="obrazki-box">
    <img src={lupa} />
    <p className="obrazki-text">Zapoznaj się z cennymi informacjami przyrodniczymi</p>
    </div>

    <div className="obrazki-box">
    <img src={odznakaterenowa} />
    <p className="obrazki-text">Zdobądź Odznakę terenową!</p>
    </div>
  </Layout>
}