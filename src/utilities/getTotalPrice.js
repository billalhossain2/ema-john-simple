const getTotalPrice = (items) => {
  return items.reduce((prev, curr)=>{
   return prev + (curr.price * curr.quantity)
  }, 0)
}

export default getTotalPrice
