import React from "react"
import Layout from "../components/layout"
import lokalizacja from "../images/lokalizacja.png"
import lupa from "../images/lupa.png"
import odznakaterenowa from "../images/odznakaterenowa.png"

export default function Home() {
  return <Layout>
    
  <div>
      <p>Zdobądź Odnzakę Terenową</p>
      <p>Odwiedź wszystkie lokalizacje w Trójmiejskim Parku Karjobrazowym. Podczas wycieczek zbieraj pieczątki, by zdobyć Odznakę Terenową</p>
  </div>

  <img src={lokalizacja}/>
  <p>Odnajdź 12 punktów na terenie Trójmiejskiego Parku Krajobrazowego</p>

  <img src={lupa}/>
  <p>Zapoznaj się z cennymi informacjami przyrodniczymi</p>

  <img src={odznakaterenowa}/>
  <p>Zdobądź Odznakę terenową!</p>





</Layout>
}