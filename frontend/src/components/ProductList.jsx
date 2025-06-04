import React from 'react'
import ProductCard from './productCard'

const ProductList = ({ products }) => {
  return (
    <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-[2rem] justify-items-center'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
        //pass the prop to the productCard-pass current product object as a prop
      ))}
    
    </div>
  )
}

export default ProductList