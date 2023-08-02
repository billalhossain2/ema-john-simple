const addProductsToStorage = (product) => {
    if(!localStorage.getItem('products')){
        localStorage.setItem("products", JSON.stringify([{...product, quantity:1}]))
    }else{
        const products = JSON.parse(localStorage.getItem('products'))
        const foundProduct = products.find(item=>item.id === product.id);
        !foundProduct ? products.push({...product, quantity:1}) : products.forEach(item =>{
            if(item.id === product.id)item.quantity++;
        });
        localStorage.setItem("products", JSON.stringify(products));
    }
}

export default addProductsToStorage