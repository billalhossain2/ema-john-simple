const getTotalShippingCost = (items) => {
  return items.reduce((prev, curr) =>{
    return prev + curr.shipping
  }, 0)
}

export default getTotalShippingCost