import React, { useEffect, useState } from 'react'
import Item from './Item'
import { phonesIphone as phoneData } from '../data/cellPhonesIphone'
import { phonesSamsung as phoneDataSamsung } from '../data/cellPhonesSamsung'
import ItemSamsung from './ItemSamsung'
import { phonesMotorola as phoneDataMotorola} from '../data/cellPhonesMotorola'
import ItemMotorola from './ItemMotorola'

const ItemList = () => {

const [phonesIphone, SetPhonesIphone] = useState([])
const [phonesSamsung, SetPhonesSamsung] = useState([])
const [phonesMotorola, SetPhonesMotorola] = useState([])
// IPHONES
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

//SAMSUNG

useEffect(() => {
  const getPhonesSamsung = new Promise ((resolve , reject) => {
      setTimeout(() => {
        resolve(phoneDataSamsung)
  }, 2000)

    })
    
  getPhonesSamsung.then((result) => {
    console.log('Se completo la promesa',result);
    SetPhonesSamsung(result)
  }).catch((err)=>{
    console.log('Hubo un error',err);
  })
  
},[])

// MOTOROLA
useEffect(() => {
  const getPhonesMotorola = new Promise ((resolve , reject) => {
      setTimeout(() => {
        resolve(phoneDataMotorola)
  }, 2000)

    })
    
  getPhonesMotorola.then((result) => {
    console.log('Se completo la promesa',result);
    SetPhonesMotorola(result)
  }).catch((err)=>{
    console.log('Hubo un error',err);
  })
  
},[])


  return (
   <>
    <div class="m-20 ">
      <h1 class="text-2xl flex justify-center p-10">Iphones</h1>
      <hr></hr>
    <div class="grid gap-1 xl:grid-cols-3  grid-rows-2 md:grid-cols-2 sm:grid-cols-1">
    {phonesIphone.map(phones => <Item key={phones.id} phoneData={phones}/>)}
   
     </div></div>
     <div class="m-20 ">
      <h1 class="text-2xl flex justify-center p-10">Samsung</h1>
      <hr></hr>
    <div class="grid gap-1 xl:grid-cols-3  grid-rows-2 md:grid-cols-2 sm:grid-cols-1">
    {phonesSamsung.map(phone => <ItemSamsung key={phone.id} phoneDataSamsung={phone}/>)}
   
     </div></div>  
     <div class="m-20 ">
      <h1 class="text-2xl flex justify-center p-10">Motorola</h1>
      <hr></hr>
    <div class="grid gap-1 xl:grid-cols-3  grid-rows-2 md:grid-cols-2 sm:grid-cols-1">
    {phonesMotorola.map(phon => <ItemMotorola key={phon.id} phoneDataMotorola={phon}/>)}
   
     </div></div>  
  
   </>
  )
}

export default ItemList