import React, { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";


const CheckOutItems = (props) => {
    
    const defaultAmount = 0;
    const amount = Number(props.totalAmount);
  return (
    <div
      className={` w-screen  relative pb-[5%] h-[100%] transition-transform duration-700 ${
        props.isChecked ? "-translate-x-full " : ""
      }`}
    >
      <div className="relative shadow-lg bg-white pt-4  w-[90%] min-h-[44vh] mx-auto rounded-md ">
        <h2 className="text-2xl font-semibold text-center  pb-4 ">
          Selected Items
        </h2>
        <div className="w-[95%] pb-[6rem] mx-auto items-center justify-center flex flex-col">
          {props.items.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>
        <div className="absolute w-full left-0 bottom-5">
          <h3 className="text-right text-2xl font-normal sm:mr-8 md:mr-12 mr-6 lg:mr-16 py-3">
            Total:{" "}
            <span className="text-third font-semibold">
              $
              {props.items.length > 0
                ? amount.toFixed(2)
                : defaultAmount.toFixed(2)}
            </span>
          </h3>
          <button
            className="bg-[#4AA05A] w-[90%] ml-[5%] py-2 text-white  rounded-md hover:bg-third"
            onClick={props.confirmOrder}
          >
            Continue Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutItems;
