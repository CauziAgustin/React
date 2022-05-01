import React, { useEffect, useState } from 'react'
import Item from './Item'
import { phonesIphone as phoneData } from '../data/cellPhonesIphone'

const ItemList = () => {

const [phonesIphone, SetPhonesIphone] = useState([])

useEffect(() => {
  const getPhones = new Promise ((resolve , reject) => {
      setTimeout(() => {
        resolve(phoneData)
  }, 2000)

    })
    
  getPhones.then((result) => {
    console.log('Se completo la promesa',result);
    SetPhonesIphone(result)
  }).catch((err)=>{
    console.log('Hubo un error',err);
  })
  
},[])

  return (
   <>
    <div class="m-20 ">
      <h1 class="text-2xl flex justify-center p-10">Iphones</h1>
      <hr></hr>
    <div class="grid gap-1 grid-cols-3 grid-rows-2">
    {phonesIphone.map(phones => <Item key={phones.id} phoneData={phones}/>)}
     </div></div>
       
 
   </>
  )
}

export default ItemList