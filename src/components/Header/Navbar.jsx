import React from 'react'
import './Navbar.css';
import logo from "../../img/logo.svg";
const Navbar = () => {
  return (
    <div className='flex justify-between bg-[#1C2B35] text-white py-5 lg:px-20 px-3 lg:fixed md:fixed z-[55] w-full'>
       <div>
         <h1>Ema-John</h1>
       </div>
       <ul className='lg:flex md:flex gap-8 items-center hidden'>
          <li><a href="">Order</a></li>
          <li><a href="">Order Review</a></li>
          <li><a href="">Manage Inventory</a></li>
          <li><a href="">Login</a></li>
       </ul>
       {/* Mobile Dropdown Menu  */}
    <div className="dropdown dropdown-end lg:hidden md:hidden">
     <label tabIndex="0" className='m-1 text-3xl'><i className="fa-solid fa-bars text-white"></i></label>
     <ul tabIndex="0" className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black">
          <li><a href="">Order</a></li>
          <li><a href="">Order Review</a></li>
          <li><a href="">Manage Inventory</a></li>
          <li><a href="">Login</a></li>
    </ul>
    </div>
    </div>
  )
}

export default Navbar