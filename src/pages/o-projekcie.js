import React from "react"
import Layout from "../components/layout"

export default function OProjekcie() {
    return <Layout>
        <h1>O projekcie</h1>
        <p class="center">Aplikacja Ruszaj w Las to gra edukacyjno-terenowa dla uczniów szkoły podstawowej.
        Celem gry jest odwiedzenie 12 punktów zlokalizowanych na terenie Trójmiejskiego Parku Krajobrazowego.
        Po dotarciu do celu i zapoznaniu się z informacjami, gracz otrzymuje pieczątkę.</p>

        <p class="bold">Zdobądź 12 pieczątek i uzyskaj Odznakę Terenową!</p>

        <div id="gray">
        <div id="green">
            <p>Zadbaj o bezpieczeństwo</p>
            <p>Punkty zlokalizowane są w terenie, zalecamy korzystać z aplikacji w towarzystwie osoby dorosłej. Przed wyruszeniem w drogę naładuj telefon, spakuj do plecaka wodę oraz przekąski ;)</p>
        </div>
        </div>
        <p>Aplikacja Ruszaj w Las powstała w ramach projektu inżynieryjnego studentki Leśnictwa WSZŚ w Tucholi.</p>
        <p>Do poprawnego działania aplikacji wymagana jest zgoda na udostępnienie lokalizacji.</p>
    </Layout>
}