import React from "react";
import {Menu,OrderPrep} from '../icons/mainPart';
import orderDel from "../../assets/orderDel.svg";
import orderRec from "../../assets/orderRec.svg";


const ServiceProcedure = () =>{
return (
  <div className="  sm:px-24 pt-8 pb-6">
    <h2 className="text-center  text-xl font-bold">Service process</h2>
    <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 ">
      <div className=" w-[15rem] flex flex-col justify-center  mx-auto">
        <Menu className=" h-[11rem]" />
        <p className="text-center pt-2 font-semibold">Place an order</p>
      </div>
      <div className=" w-[15rem] flex flex-col justify-center mx-auto">
        <OrderPrep className=" h-[11rem]" />
        <p className="text-center pt-2 font-semibold">Order Preparation</p>
      </div>
      <div className=" w-[15rem] flex flex-col justify-center  mx-auto">
        <img src={orderDel} className=" h-[11rem]" />
        <p className="text-center pt-2 font-semibold">Order Delivery</p>
      </div>
      <div className=" w-[15rem] flex flex-col justify-center mx-auto">
        <img src={orderRec} className=" h-[11rem]" />
        <p className="text-center pt-2 font-semibold">Order Received</p>
      </div>
    </div>
  </div>
);


}

export default ServiceProcedure;