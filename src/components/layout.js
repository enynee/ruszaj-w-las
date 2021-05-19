import React from "react"
import "./layout.css"
import logo from "../images/logo.png"
import name from "../images/name.png"

export default function Layout({ children }) {
  return <div>
      <header>
        <div id="logo">
          <img src={logo} width="80" height="80"/>
        </div>
        <div id="name">
          <img src={name} width="215" height="70"/>
        </div>

      </header>


      {children}
      <hr></hr>
      <footer>
        <ul>
          <li>Lista punktów</li>
          <li>Odznaki</li>
          <li>O projekcie</li>
        </ul>
      </footer>
    </div>
}