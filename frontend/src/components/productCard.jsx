import React from 'react'

const productCard = () => {
  return (
    <div className='w-48 h-10 p-4 border rounded shadow'>
        <img src="Tshirt.jpg" alt="Tshirt" className='border rounded p-4' />
        <h1 className='font-black p-2'>Summer Tshirt</h1>
        <p className='font-black p-2'>350</p>

    </div>
  )
}

export default productCard