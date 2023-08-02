import './Shop.css';
import Products from '../products/Products';
import SideBar from '../sidebar/SideBar';
import getProductsFromStorage from '../../../storage/getProductsFromStorage';
import { useState } from 'react';
import { useContext } from 'react';
import { itemsContext } from '../../Root';
const Shop = () => {
  const {items, setItems} = useContext(itemsContext);
  // const [items, setItems] = useState(getProductsFromStorage() || [])
  return (
      <main className='main-container lg:mx-20 md:mx-10 mx-2'>
        <Products
        items = {items}
        setItems = {setItems}
        />
        <SideBar
        items = {items}
        setItems = {setItems}
        />
    </main>
  )
}

export default Shop