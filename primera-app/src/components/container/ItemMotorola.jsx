import React from 'react'

const ItemMotorola =  ({phoneDataMotorola , img}) => {
    return (
      <>
      <div>
        
          <div style={{ justifyContent: "center", alignItems:'center'}}>
          <div class="card w-95 bg-base-100 shadow-xl m-4 flex-wrap ">
            <figure>
              <img src={phoneDataMotorola.picture} alt="celular"/>
            </figure>
            <div class="card-body">
              <h2 class="card-title">{phoneDataMotorola.breed + phoneDataMotorola.name}</h2>
              <p>Desde {phoneDataMotorola.price}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div></>
    )
  }

export default ItemMotorola