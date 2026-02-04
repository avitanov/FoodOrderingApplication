import CartContext from "./cart-context";
import { useReducer } from "react";

//initialize default cart state
const defaultCartState = {
  items: [],
totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    //update the totalAmount
    const updatedTotalAmount = +state.totalAmount + (+action.item.price);
    let existingCartItem = undefined;
    let existingCartItemIndex = undefined;
    if(!action.item.hasIngredients){
      existingCartItemIndex = state.items.findIndex(
       (stateItem) => stateItem.id === action.item.id
     );
      existingCartItem = state.items[existingCartItemIndex];
    }

    let updatedItems;
    //Add the item
     if (existingCartItem) {
       const updatedItem = {
         ...existingCartItem,
         amount: +existingCartItem.amount + 1,
       };
       updatedItems = [...state.items];
       updatedItems[existingCartItemIndex] = updatedItem;
     }
    else{ 
    updatedItems = state.items.concat(action.item);
    }
     return {
       items: updatedItems,
       totalAmount: +updatedTotalAmount,
     }
  }else if(action.type ==='REMOVE'){
    const existingCartItemIndex = state.items.findIndex(
      (stateItem) => stateItem.id === action.id
    );
    let updatedItems;
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = +state.totalAmount - +(existingCartItem.price);
    // const updatedTotalAmount = +state.totalAmount - +existingCartItem.price * +existingCartItem.amount;
    if(existingCartItem.amount > 1){
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    else{
      updatedItems = state.items.filter((sItem) => sItem.id !== action.id);
    }
    return {
        items:updatedItems,
        totalAmount: +updatedTotalAmount,
    }
  }
   else if (action.type === "CLEAR") {
    return defaultCartState;
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
    clearCart: clearCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
