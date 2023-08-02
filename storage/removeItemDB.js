import getProductsFromStorage from "./getProductsFromStorage"

const removeItemDB = (id) => {
  const items = getProductsFromStorage();
  const restItems = items.filter(item => item.id !== id);
  localStorage.setItem('products', JSON.stringify(restItems))
}

export default removeItemDB