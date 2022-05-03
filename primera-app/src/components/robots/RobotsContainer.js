import React, { useEffect, useState } from 'react'

const RobotsContainer = () => {

    const [robots, setRobots] = useState([])
    const [loading, setLoading] = useState([])

    useEffect(()=> {
        getRobots().then (data => {
            setRobots(data)
            setLoading(false)
        })
    }, [])

    const getRobots = () => {
        return new Promise ((resolve, reject) =>{
            setTimeout(()=> {
                resolve(robotsData)
            },2000);
        })
    }
  return (
   
   <></> // <div>
     //   {loading ? 
       //     <h1>loading....</h1>
        //}
   // </div>
  )
}

export default RobotsContainer