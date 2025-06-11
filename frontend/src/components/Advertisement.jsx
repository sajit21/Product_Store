import React from 'react'
import HomePage from '../pages/HomePage'
import AdvertismentCard from './AdvertismentCard'

const Advertisement = ({images}) => {
    
  return (
    <div className={`w-full m-2`}>
           {images.map((image,index)=>(
            <div key={index} className={`${index%2==0?'flex justify-start':'flex justify-end'}`}>
           < AdvertismentCard  index={index} image={image}  />
           </div>

        ))}
    </div>
  )
}

export default Advertisement