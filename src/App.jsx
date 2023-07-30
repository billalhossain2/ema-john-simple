import React from 'react'
import './App.css';
import Navbar from './components/Header/Navbar'
import Products from './components/products/Products'
import SideBar from './components/sidebar/SideBar'
const App = () => {
  return (
    <div>
      <Navbar/>
      <main className='main-container lg:mx-20 md:mx-10 mx-2 relative'>
       <Products/>
       <SideBar/>
      </main>
    </div>
  )
}

export default App