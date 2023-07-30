import React from "react";
import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="bg-[#f5cb8c] lg:fixed md:fixed right-0 top-16 lg:px-10 lg:pb-10 md:px-0 md:pb-10">
      <h1 className="text-3xl text-center mt-7">Order Summary</h1>
      <div className="flex flex-col justify-center items-center mt-12">
        <div className="w-[90%]">
          <div className="space-y-5">
          <h3>Selected Items: 6</h3>
          <h3>Total Price: $1140</h3>
          <h3>Total Shipping Charge: $5</h3>
          <h3>Tax: $114</h3>
          <h2 className="font-bold">Grand Total: $1559</h2>
          </div>
          <div className="mt-12">
            <button className="btn bg-[#FF3030] w-full text-white mb-4 hover:bg-[#d81c1c]">
              Clear Cart <i class="fa-solid fa-trash-can"></i>
            </button>{" "}
            <br />
            <button className="btn bg-[#FF9900] w-full text-white hover:bg-[#ce8518]">
              Review Order <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
