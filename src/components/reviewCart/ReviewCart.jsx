import React from "react";
import getTotalPrice from "../../utilities/getTotalPrice";
import getTotalShippingCost from "../../utilities/getTotalShippingCost";
import getTaxRate from "../../utilities/getTaxRate";
import getGrandTotal from "../../utilities/getGrandTotal";
import clearStorage from "../../../storage/clearStorage";
import Modal from "../modal/Modal";
const ReviewCart = ({items, setItems}) => {
  const clearCart = ()=>{
    // setIsOpen(!isOpen)
    const isClear = confirm('Are you sure to clear ?');
    if(isClear){
      setItems([])
      clearStorage()
    }
  };
  return (
    <div className="bg-[#f5cb8c] lg:px-10 lg:pb-10 md:px-0 md:pb-10">
      <h1 className="text-3xl text-center mt-7">Order Summary</h1>
      <div className="flex flex-col justify-center items-center mt-12">
        <div className="w-[90%]">
          <div className="space-y-5">
          <h3>Selected Items: {items.length}</h3>
          <h3>Total Price: ${getTotalPrice(items)}</h3>
          <h3>Total Shipping Charge: ${getTotalShippingCost(items)}</h3>
          <h3>Tax: ${getTaxRate(items).toFixed(2)}</h3>
          <h2 className="font-bold">Grand Total: ${getGrandTotal(items).toFixed(2)}</h2>
          </div>
          <div className="mt-12">
            <button onClick={clearCart} className="btn bg-[#FF3030] w-full text-white mb-4 hover:bg-[#d81c1c]">
              Clear Cart <i className="fa-solid fa-trash-can"></i>
            </button>
            <br />
            <button className="btn bg-[#FF9900] w-full text-white hover:bg-[#ce8518] text-[10px]">
              Proceed to checkout <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;
