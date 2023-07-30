import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Header/Navbar'
import Products from './components/products/Products'
import SideBar from './components/sidebar/SideBar'
const App = () => {
  const [items, setItems] = useState([]);
  console.log(items)
  return (
    <div>
      <Navbar/>
      <main className='main-container lg:mx-20 md:mx-10 mx-2 relative'>
       <Products
       items = {items}
       setItems = {setItems}
       />
       <SideBar
       items = {items}
       setItems = {setItems}
       />
      </main>
    </div>
  )
}

export default App