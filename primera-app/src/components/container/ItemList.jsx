import React, { useEffect, useState } from 'react'
import Item from './Item'
import { phones as phoneData } from '../data/cellPhonesIphone'


const ItemList = ({breed}) => {

  const [phones, SetPhones] = useState([])
  // PHONES
  useEffect(() => {
    const getPhones = new Promise((resolve) => {
      setTimeout(() => {
        resolve(phoneData)
      }, 2000)

    })

    if(!breed){
      getPhones.then((result) => {
        SetPhones(result)
      }).catch((err) => {
        console.log('Hubo un error', err);
      })
    }else{
      getPhones.then((result) =>{
        const data = result.filter(phone => phone.breed == breed);
        SetPhones(data);
        console.log(data);
        console.log(result);
      })
    }

  }, [breed])

  return (
    <>
      <div>
        <div class="xl:m-20 sm:m-0">
          <h1 class="text-2xl flex justify-center p-10 sm:p-0">{breed}</h1>
          <hr></hr>
          <div class="flex justify-center">

            <div class="grid gap-1 xl:grid-cols-3  grid-rows-2 md:grid-cols-2 sm:flex ">
              {phones.map(phones => <Item key={phones.id} phoneData={phones} />)}
            </div>
          </div>
        </div >
      </div>
    </>
  )
}

export default ItemList