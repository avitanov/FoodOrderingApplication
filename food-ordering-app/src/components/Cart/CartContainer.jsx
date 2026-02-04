import React, { useContext, useId, useState } from "react";
import CheckOutItems from "./CheckoutItems";
import CheckoutInput from "./CheckoutInput";
import CartContext from "../../dataStorage/cart-context";
import { useNavigate } from "react-router-dom";
import ConfirmOrder from "./ConfirmOrder";
import {addOrder} from '../../dataStorage/api';
import useHttp from '../../dataStorage/use-http';
const CartContainer = () => {
  const ctx = useContext(CartContext);
  const { sendRequest, status, error } = useHttp(addOrder);
  const [isChecked, setIsChecked] = useState(false);
  const [finalCheck, setFinalCheck] = useState(false);
  const [orderId,setOrderId]=useState('');
  const navigate = useNavigate();
  const confirmOrder = () => {
    if (ctx.items.length > 0) {
      setIsChecked(true);
      navigate("/cart/check-out");
      window.scrollTo(0, 0);
    }
  };

  const cancelOrderHandler = () => {
    ctx.clearCart();
    navigate("/categories/promotions");
  };
  const id = useId();
  const submitOrder = (info) => {
    const key=(id.replace(/:/g, "") + Date.now());
    const order = {
      items: ctx.items,
      totalAmount: ctx.totalAmount,
      id: key,
      info,
    };
    setOrderId(key);
     setFinalCheck(true);
    sendRequest(order);
    
    ctx.clearCart();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="relative  w-full grid grid-cols-2  py-4 ">
        <CheckOutItems
          confirmOrder={confirmOrder}
          isChecked={isChecked}
          items={ctx.items}
          totalAmount={ctx.totalAmount}
        />
        <CheckoutInput
          isChecked={isChecked}
          finalCheck={finalCheck}
          cancelOrder={cancelOrderHandler}
          submitOrder={submitOrder}
        />
        <ConfirmOrder
          isChecked={finalCheck}
          status={status}
          orderId={orderId}
          error={error}
        />
      </div>
    </div>
  );
};

export default CartContainer;
