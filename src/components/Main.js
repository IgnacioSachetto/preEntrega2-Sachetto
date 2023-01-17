import React from 'react'
import ItemListConteiner from './ItemListConteiner'
import {Routes,Route} from "react-router-dom"
import ItemDetailContainer from './ItemDetailContainer'

export const Main = () => {


  return (
    
      <main>

          <Routes>
           <Route path="/" element={<ItemListConteiner/>}/>
           <Route path="/category/:categoria" element={<ItemListConteiner/>}/>
           <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          </Routes>





           
   
    
      </main>
      


  )
}


export default Main

//<div className = "objeto">
  //        <img src="img/carrito.png"></img>

//</div>            
//<Route path="productos/:id" element={<DetalleProducto/>}/>
