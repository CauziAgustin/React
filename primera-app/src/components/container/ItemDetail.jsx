import React from 'react'

const ItemDetail = ({producto}) => {
  return (
    <div>
        <div className='m-5'> {producto.id}</div>
            <div class="card w-96 glass m-5">
                <figure><img src={producto.picture} alt="Imagen de SmartPhone!"></img></figure>
                    <div class="card-body">
                        <h2 class="card-title">{producto.breed + producto.name}</h2>
                        <p>${producto.price}</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-outline">Comprar</button>
                            </div>
                    </div>
            </div>
    <div></div>
    </div>
  )
}

export default ItemDetail