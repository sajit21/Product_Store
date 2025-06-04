import React from 'react'
const ProductCard = ({product}) => {
  return (
    <div className='w-48 h-64 sm:p-4 md:p-6 lg:p-8 border rounded shadow flex flex-col items-center'>
        <img src={product.image} alt={product.name} className='border rounded p-4 w-32 h-32 object-cover' />
        <h1 className='text-black font-light  p-2'>{product.name}</h1>
        <p className='text-black font-medium p-2'>${product.price}</p>

    </div>
  )
}

export default ProductCard