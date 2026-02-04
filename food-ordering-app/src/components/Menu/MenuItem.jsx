import React,{useContext, useState} from "react";
import ProductImg from "./ProductImg";
import ProductTxt from "./ProductTxt";
import ItemInfo from "./ItemInfo";
import CartContext from '../../dataStorage/cart-context';

const MenuItem = (props) => {
  // const totalSum = props.DummyItems.ingredients.reduce((sum, ingredient) => {
  //   return sum + ingredient.amount * ingredient.price;
  // }, 0);
  const ctx = useContext(CartContext);
  const [cartIsShown, setCartIsShown] = useState(false);
 const showCartHandler = () => {
  if(props.DummyItems.isEditable){
   setCartIsShown(true);
  }
  else {
    ctx.addItem({
      id: props.DummyItems.id,
      text: props.DummyItems.name,
      price: props.DummyItems.isPromoted
        ? +props.DummyItems.newPrice
        : +props.DummyItems.oldPrice,
      hasIngredients: false,
      amount: 1,
    });
  }
 };
 const hideCartHandler = () => {
   setCartIsShown(false);
 };

 const submitCartHandler = (itemInfo) =>{
  ctx.addItem({
    id: Date.now(),
    text: props.DummyItems.name,
    price: +itemInfo.price,
    ingredients: itemInfo.ingredients.filter(
      (ingredient) => ingredient.amount > 0
    ),
    hasIngredients: true,
    amount: 1,
  });
 }
  return (
    <>
      <li className="bg-white sm:w-[14.5rem] w-[85%] mt-6 mx-auto rounded-md hover:-translate-y-2 transition-transform duration-500 pb-3 shadow-xl ">
        <ProductImg img={props.DummyItems.img} />
        <ProductTxt
          text={props.DummyItems.name}
          isPromoted={props.DummyItems.isPromoted}
          oldPrice={props.DummyItems.oldPrice}
          newPrice={props.DummyItems.newPrice}
        ></ProductTxt>
        <button className="bg-secondary transition-colors duration-500 text-white h-[1.8rem] w-[90%] ml-[5%] rounded-md mt-2 hover:bg-third">
          <p className="text-[18px] " onClick={showCartHandler}>
            +Add
          </p>
        </button>
      </li>
      {cartIsShown && (
        <ItemInfo
          onClick={hideCartHandler}
          ingredients={props.DummyItems.ingredients}
          name={props.DummyItems.text}
          price={
            props.DummyItems.isPromoted
              ? +props.DummyItems.newPrice
              : +props.DummyItems.oldPrice
          }
          hideCartHandler={hideCartHandler}
          submitCartHandler={submitCartHandler}
        />
      )}
    </>
  );
};
export default MenuItem;
