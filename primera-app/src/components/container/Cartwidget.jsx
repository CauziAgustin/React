import React from 'react'
import celular from "../data/assets/img/body/celular.jpg"
const Cartwidget = () => {
  return (
  
  <div class="hero" style={{height:'1400px'}}>
    <img src={celular} alt="" style={{width:"100%",height:'1400px'}}/>
  <div class="hero-overlay bg-opacity-65"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md ">
      <h1 class="mb-5 text-5xl font-bold"> CelularTech</h1>
      <p class="mb-5">Tienda de reparación y venta de celulares </p>
      <button class="btn btn-primary">Comencemos</button>
    </div>
  </div>
</div>
  
   
  )
}

export default Cartwidget