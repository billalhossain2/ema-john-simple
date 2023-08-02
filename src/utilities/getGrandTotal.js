const getGrandTotal = (items) => {
    return items.reduce((prev, curr)=>{
       return prev + (curr.price * curr.quantity) + curr.shipping + (curr.price * 5) / 100 * curr.quantity;
       }, 0)
}

export default getGrandTotal