import React from 'react'

const ItemSamsung = ({phoneDataSamsung , img}) => {
    return (
      <>
      <div >
        
          <div  style={{ justifyContent: "center", alignItems:'center'}}>
          <div class="card w-95 bg-base-100 shadow-xl m-4 flex-wrap ">
            <figure  class="h-80">
              <img src={phoneDataSamsung.picture}  alt="celular"/>
            </figure>
            <div class="card-body h-64">
              <h2 class="card-title">{phoneDataSamsung.breed + phoneDataSamsung.name}</h2>
              <p>Desde {phoneDataSamsung.price}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div></>
    )
  }

export default ItemSamsung