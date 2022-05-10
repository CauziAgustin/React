import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { phones} from '../data/cellPhonesIphone'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({}) => {
  const {id} = useParams()
  console.log(id);
  const [phone, setPhone] = useState(null)
  useEffect( () => {
    
   (async () => {
    const phoneId = await getPhoneDetail()
    if (phoneId){
       setPhone(phoneId)
    }
   
   })()
  }, [id])
   
  const getPhoneDetail = () => {
    return new Promise( (resolve) => {
      setTimeout(() => {
        resolve( phones.find(i => i.id == id))
      }, 2000);
    })
  }
  return (
    <div>
      {phone&&<ItemDetail producto={phone}/>}
    </div>
  )
}

export default ItemDetailContainer