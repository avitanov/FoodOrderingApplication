import React, { useState } from "react";
import DashboardBox from '../UI/DashBoardBox';
import OrderItem from "./OrderItem";
import LoadingSpinner from "../UI/LoadingSpinner";
import useHttp from "../../dataStorage/use-http";
import { getAllOrders } from '../../dataStorage/api';
import { useEffect } from "react";
const OrdersList = () => {

    const { sendRequest, status, data, error } = useHttp(getAllOrders, true);
    useEffect(() => {
      sendRequest();
    }, []);
  return (
    <div className="pb-6 bg-neutral-200">
      <DashboardBox>
        <h1 className=" font-semibold text-[1.8rem] ml-3 ">Orders</h1>
      </DashboardBox>
      <DashboardBox>
          
        {status === 'completed' && data.length>0 && !error && data.map((order,index) =>(
            <OrderItem data={order} key={index}/>
        ))}
        {status=== 'completed' && data.length===0 && <p className="text-lg text-center">No active orders.</p>}
        
      </DashboardBox>
    </div>
  );
};

export default OrdersList;
