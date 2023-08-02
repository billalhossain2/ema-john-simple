import React from 'react'
import './Navbar.css';
import logo from "../../img/logo.svg";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='flex justify-between bg-[#1C2B35] text-white py-5 lg:px-20 px-3  z-[55] w-full'>
       <div>
         <Link to="/"><h1 className='text-[#ff9100] font-bold text-3xl'>Ema-John</h1></Link>
       </div>
       <ul className='lg:flex md:flex gap-8 items-center hidden'>
          <li><Link to="/shop">Order</Link></li>
          <li><Link to="/order-review">Order Review</Link></li>
          <li><Link to="/manage-inventory">Manage Inventory</Link></li>
          <li><Link to="/login">Login</Link></li>
       </ul>
       {/* Mobile Dropdown Menu  */}
    <div className="dropdown dropdown-end lg:hidden md:hidden">
     <label tabIndex="0" className='m-1 text-3xl'><i className="fa-solid fa-bars text-white"></i></label>
     <ul tabIndex="0" className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black">
          <li><Link to="/shop">Order</Link></li>
          <li><Link to="/order-review">Order Review</Link></li>
          <li><Link to="/manage-inventory">Manage Inventory</Link></li>
          <li><Link to="/login">Login</Link></li>
    </ul>
    </div>
    </div>
  )
}

export default Navbar