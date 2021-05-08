import React from "react"
import "./layout.css"

export default function Layout({ children }) {
  return <div>
      <header>header</header>
      <hr></hr>
      {children}
      <hr></hr>
      <footer>footer</footer>
      </div>
}