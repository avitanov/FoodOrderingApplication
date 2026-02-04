import Modal from "../UI/Modal";
import { CloseIcon } from "../icons/mainPart";
import IngredientItem from "./IngredientItem";
import { useEffect, useState } from "react";
const ItemInfo = (props) =>{ 
  const [price, setPrice] = useState(+props.price);
  const[isChecked,setIsChecked] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [apiIngredients, setApiIngredients] = useState([]);
  let counter = 0;
  useEffect( () => {
    const loadedArray = [];
    for (const key in props.ingredients) {
      for(const key1 in props.ingredients[key]){
        loadedArray.push({
          id:key1,
          text: props.ingredients[key][key1].text,
          amount: props.ingredients[key][key1].amount,
          price: +props.ingredients[key][key1].price,
        });
      }
      
    }
    
    setApiIngredients(loadedArray);
  },[props.ingredients]);
  
   const AddMeal = (item) => {
     setIngredients((oldArray) => [...oldArray, item]);
   };

   const changePriceHandler = (ingredientPrice,sign) =>{
    if(sign){
    setPrice((+price)+(+ingredientPrice));
    }
    else {
      setPrice(+price - (+ingredientPrice) < 0 ? 0 : +price - (+ingredientPrice));
    }
   }
  useEffect(()=>{
   if (ingredients.length === apiIngredients.length && apiIngredients.length>0) {
     setIsChecked(true);
   }
  },[ingredients.length]);
  
  const MealHandler = (event)=> {
    event.preventDefault();
    props.submitCartHandler({
      ingredients,
      price: +price.toFixed(2),
    })
    props.hideCartHandler();
    
  }

    return (
      <Modal onClick={props.onClick}>
        <button
          className=" text-gray-600 px-2 py-2  rounded-full"
          onClick={props.onClick}
        >
          <CloseIcon className="w-7 h-7" />
        </button>

        <ul className=" pr-4 pl-2 overflow-auto h-[23rem]">
          {apiIngredients.map(ingredient => (
            <IngredientItem
              key={ingredient.id}
              ingredient={ingredient}
              MealHandler={AddMeal}
              changePriceHandler={changePriceHandler}
            />
          ))}
        </ul>
        <form>
          <h2 className="py-3 text-lg">Total price: <span className="text-third font-semibold">${(+price).toFixed(2)}</span></h2>
          <button
            className={`py-2 px-8 w-full text-white  rounded-md ${
              isChecked ? "bg-[#4AA05A]" : "bg-gray-300"
            }`}
            onClick={MealHandler}
            disabled={isChecked ? false : true}
          >
            +Add Meal
          </button>
        </form>
      </Modal>
    );
}

export default ItemInfo;