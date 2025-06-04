import React, { useState } from "react";
import ProductList from "../components/productList";
const ProductPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Tshirt",
      price: 99.99,
      image: "Tshirt.jpg",
type:"shirt"    },
    {
      id: 2,
      name: "Necklace",
      price: 49.99,
      image: "necklace.webp",
      type: "jewellery"
    },
    {
      id: 3,
      name: "Sunglass",
      price: 29.99,
      image: "sunglass.jpg",
      type: "specs"
    },
    {
        id:4,
        name: "Lether jacket",
        price: 99.99,
        image:"lether_jacket.jpg",
        type: "jacket"

    },
     {
        id:5,
        name: "jeans",
        price: 89.99,
        image:"jeans.jpg",
        type: "pant"

    },
     {
        id:6,
        name: "leather shoes ",
        price: 99.99,
        image:"leather_shoes.webp",
        type: "shoes"

    },
    {
        id:7,
        name: "Lether jacket",
        price: 99.99,
        image:"lether_jacket.jpg",
        type: "jacket"

    },
     {
        id:8,
        name: "jeans",
        price: 89.99,
        image:"jeans.jpg",
        type: "pant"

    },
     {
        id:9,
        name: "leather shoes ",
        price: 99.99,
        image:"leather_shoes.webp",
        type: "shoes"

    }
  ]);


    // const pantOnly= products.filter(p=>p.type=="pant")

  return (
    <div className="p-6">
      <h1 className="text-2xl text-black text-center font-bold mb-4">Products</h1>
      <ProductList products={products} /> 
       {/* propname passing and varirable name */}
      
    </div>
  );
};

export default ProductPage;