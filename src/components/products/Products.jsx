import React, { useEffect, useState } from 'react'
import './Products.css';
import Product from '../product/Product';
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch('./products.json')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-32'>
        {
          products.map(product => <Product key={product.id} product = {product}/>)
        }
    </div>
  )
}

export default Products
