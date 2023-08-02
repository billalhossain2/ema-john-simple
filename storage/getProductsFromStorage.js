const getProductsFromStorage = () => {
  return JSON.parse(localStorage.getItem('products'))
}

export default getProductsFromStorage