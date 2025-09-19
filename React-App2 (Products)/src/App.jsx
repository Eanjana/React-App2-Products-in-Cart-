import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import First from './First'


function App() {
  
  let uname ="Converse"
  let image ="https://www.converse.in/media/catalog/product/m/9/m9621c_a_107x1.jpg"
 
  let uname2="Nike Jordan"
  let image2="https://crepdogcrew.com/cdn/shop/products/AJ1HighLost_Found.jpg?v=1755097035&width=2048"
 

  let uname3="Venom (Souled Store Edition)"
  let image3="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1731081285_2801240.jpg"

  let uname4="FILA"
  let image4="https://rukminim2.flixcart.com/image/704/844/xif0q/shoe/u/a/g/-original-imah4acwsksehz9v.jpeg?q=90&crop=false"

let uname5="PRADA"
let image5="https://cdn-images.farfetch-contents.com/23/55/84/41/23558441_53524606_600.jpg"

let uname6="ADIDAS"
let image6="https://static.ftshp.digital/img/p/1/2/2/9/2/12292-full_product.jpg"


  return (
    <>
    <First username={uname} imgurl={image}></First>
    <First username={uname2} imgurl={image2}></First>
    <First username={uname3} imgurl={image3}></First>
    <First username={uname4} imgurl={image4}></First>
    <First username={uname5} imgurl={image5}></First>
    <First username={uname6} imgurl={image6}></First>
    
    </>
  )
}

export default App
