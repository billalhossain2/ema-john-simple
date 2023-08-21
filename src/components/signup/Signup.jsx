import './Signup.css';
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-700 h-screen">
     <div className="bg-white drop-shadow-lg p-[44px]">
     <h1 className="text-4xl text-center">Signup</h1>
     <form action="#">
       <label className="block" htmlFor="email">Email</label>
        <input className="border-solid border-2 border-gray-500 outline-none p-2 rounded-lg mb-5 w-full" type="email" id="email"/>
        <label className="block" htmlFor="password">Password</label>
        <input className="border-solid border-2 border-gray-500 outline-none p-2 rounded-lg mb-5 w-full" type="password" id="password"/>
        <label className="block" htmlFor="password">Confirm Password</label>
        <input className="border-solid border-2 border-gray-500 outline-none p-2 rounded-lg mb-11 w-full" type="password" id="password"/>


        <input className="block w-full bg-[#ff9900a9] py-3 rounded-[5px] cursor-pointer text-[21px] mb-2" type="submit" value="Signup" />
        <div className="mb-7"> <span>Already have an account?</span>
        <Link to="/login"><span className="text-[#FF9900]"> Login</span></Link>
        </div>
      </form>
     </div>
    </div>
  )
}

export default Signup