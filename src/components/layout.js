import React from "react"
import "./layout.css"
import "../bulma.min.css"
import logo from "../images/logo.png"
import name from "../images/name.png"

export default function Layout({ children }) {
  return <div>
      <header>
        <div id="logo"><a href="/">
          <img src={logo} width="80" height="80"/></a>
        </div>
        <div id="name"><a href="/">
          <img src={name} width="215" height="70"/></a>
        </div>

      </header>
      <main>
      {children}
      </main>

 
      <footer>
        <ul>
          <li><a href="/lista-punktow">Lista punktów</a></li>
          <li><a href="/odznaki">Odznaki</a></li>
          <li><a href="/o-projekcie">O projekcie</a></li>
        </ul>
      </footer>
    </div>
}