import "./Home.css"
import heroImage from "../../img/hero-image.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="hero flex justify-center h-screen gap-24">
        <div>
          <p className="text-[#F90] mb-14">Sale up to 70% off</p>
          <h1 className="text-6xl font-bold mb-2">New Collection For Fall</h1>
          <p className="text-2xl text-[#2A414F] mb-16">Discover all the new arrivals of ready-to-wear collection.</p>
          <Link to="/shop"><button className="btn bg-[#FF9900] hover:bg-[#ff5e00ec]">SHOP NOW</button></Link>
        </div>
        <div className="bg-[#ffae00c4]">
          <img className="max-w-[450px] max-h-[600px] pb-1 pl-1" src={heroImage} alt="" />
        </div>
    </div>
  )
}

export default Home