import React from 'react'
import './Product.css'
const Product = ({product, items, setItems}) => {
  const {img, name, price, seller, ratings, shipping} = product;
  const addItem = (product)=>{
    // add 1 to quantity if the array is empty 
    if(items.length === 0){
      setItems([...items, {...product, quantity:1}])
    }
    if(items.length > 0){
      items.forEach(item =>{
        if(item.id === product.id){
          item.quantity++;
        }
      })

      const isFound = items.find(item => item.id === product.id);
      if(!isFound){
        setItems([...items, {...product, quantity:1}])
      }else{
        setItems([...items])
      }
    }
  }
  return (
    <div className='text-black bg-white drop-shadow-lg min-h-[509px] relative'>
      <img className='p-2' src={img} alt="Product Image" />
      <div className='p-2'>
      <h3 className='font-bold'>{name}</h3>
      <p className='mb-11 font-bold'>Price: ${price}</p>
      <p>Shipping: ${shipping}</p>
      <p>Manufacturer: {seller}</p>
      <p>Ratings: {ratings} stars</p>
      </div>
      <footer>
        <button onClick={()=>addItem(product)} className='btn bg-[#FFE0B3] hover:bg-[#f1b04e] absolute bottom-0 mx-auto w-full'>
          <span>Add to Cart</span>
          <i class="fa-solid fa-cart-plus text-2xl"></i>
        </button>
      </footer>
    </div>
  )
}

export default Product