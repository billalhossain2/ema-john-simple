import React from 'react'
import './Product.css'
const Product = ({product}) => {
  const {img, name, price, seller, ratings} = product;
  console.log(name)
  return (
    <div className='text-black bg-white drop-shadow-lg min-h-[509px] relative'>
      <img className='p-2' src={img} alt="Product Image" />
      <div className='p-2'>
      <h3 className='font-bold'>{name}</h3>
      <p className='mb-11 font-bold'>Price: ${price}</p>
      <p>Manufacturer: {seller}</p>
      <p>Ratings: {ratings} stars</p>
      </div>
      <footer>
        <button className='btn bg-[#FFE0B3] hover:bg-[#f1b04e] absolute bottom-0 mx-auto w-full'>
          <span>Add to Cart</span>
          <i class="fa-solid fa-cart-plus text-2xl"></i>
        </button>
      </footer>
    </div>
  )
}

export default Product