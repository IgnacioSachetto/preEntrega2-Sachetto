import React from 'react'
import { Link } from "react-router-dom"

export const CartWidget = () => {

  const isItem = true

  return (
        <div class = "objeto">
            <Link className="headerLink" to="/carrito/">Carrito</Link>
           <img src="../img/carrito.png"></img>
        </div>
  )
}