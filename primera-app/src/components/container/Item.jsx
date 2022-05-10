import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

const Item = ({phoneData , img}) => {
  return (
    <>
    <div>
      
        <div style={{ justifyContent: "center", alignItems:'center'}}>
        <div class="card w-95 bg-base-100 shadow-xl m-4 flex-wrap  ">
          <figure>
            <img src={phoneData.picture} alt="celular"/>
          </figure>
          <div class="card-body">
            <h2 class="card-title">{phoneData.breed + phoneData.name}</h2>
            <p>Desde {phoneData.price}</p>
            <div class="card-actions justify-end">
               <button><Link to={'/iphone/${phoneData.id}'}>Detalle </Link></button>
            <button class="btn btn-primary">Buy Now</button> 
            </div>
          </div>
        </div>
      </div>
    </div></>
  )
}

export default Item