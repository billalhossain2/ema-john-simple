const getTaxRate = (items) => {
  return items.reduce((total, curr)=>total + (curr.price * 5)/100 * curr.quantity, 0)
}

export default getTaxRate