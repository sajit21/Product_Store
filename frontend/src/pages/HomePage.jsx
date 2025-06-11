import React, { useState } from 'react'
import Advertisement from '../components/Advertisement'




const HomePage = () => {
  
const [banner,setBanner]=useState([
{
   image:"hoodie.webp",
   title:"HOODIE IN SALE  ",
   description:"winter collection hoodie with high quality cotton fabric, make you warm and comfort. Check it out"


},
{
   image:"jacket.jpg",
   title:"WINTER JACKET COLLECTION",
   description:"winter collection Jacket with high quality nilon fabric, make you warm and comfort. Check it out"


},
{
   image:"jacket2.jpg",
   title:"STYLE WITH BEST JACKETS",
   description:"winter collection Jacket  with high quality cotton fabric, make you warm and comfort. Check it out"


},




])

  return (
    <div className="w-full">
      <div className='w-full relative flex justify-center items-center py-10'>
        <img src="home.webp" alt="random_Image" className='h-[30rem] w-[100rem] border rounded shadow' />
      </div>
      <div className='w-full px-2 md:px-6 lg:px-10'>
        <h1 className='font-bold text-[2rem] sm:text-[3rem] text-gray-500'>Explore the Summer Collection</h1>
        <Advertisement images={banner}/>
      </div>
    </div>
  )
}

export default HomePage