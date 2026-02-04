import DashboardBox from "../UI/DashBoardBox";
import { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import SentMealStatus from "./SentMealStatus";
import "react-dropdown/style.css";
import Ingredient from "./Ingredient";
import useHttp from "../../dataStorage/use-http";
import { getDataLength, addMealInCategory } from "../../dataStorage/api";
const AddMeal = () => {
  const [isVisible,setIsVisible]=useState(false);
  const { sendRequest, status, data, error } = useHttp(getDataLength, true);
  const {
    sendRequest: sendMeal,
    status: mealStatus,
    error: mealError,
  } = useHttp(addMealInCategory);
  const options = [
    { value: "promotions", label: "Promotions" },
    { value: "burgers", label: "Burgers" },
    { value: "wraps", label: "Wraps" },
    { value: "buckets", label: "Buckets" },
    { value: "fries", label: "Fries" },
    { value: "snacks", label: "Snacks" },
    { value: "kidsmeals", label: "Kids Meals" },
    { value: "sauces", label: "Sauces" },
  ];
  const [orderSent, setOrderSent] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [chosenOption, setChosenOption] = useState(undefined);
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [promotedPrice, setPromotedPrice] = useState("");
  const [link, setLink] = useState("");
  const [isPromoted, setIsPromoted] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  
  const DUMMY_Ingredients = [
    "Crispy Strips",
    "Cheddar",
    "Bacon",
    "Onion Rings",
    "Lettuce",
    "Onion",
    "Pickles",
    "Special KFC Sauce",
  ];
  const changeVisibilityHandler = ()=>{
    setIsVisible(!isVisible);
  }
  const addIngredientsHandler = (props) => {
    setIngredients((current) => [...current, props]);
  };
  const onOptionChangePromoted = (e) => {
    if(e.target.value === 'true'){
       setIsPromoted(true);
    }
    else setIsPromoted(false);
   
  };
  const onOptionChangeEditable = (e) => {
     if (e.target.value === "true") {
       setIsEditable(true);
     } else setIsEditable(false);
   
  };
  const changeNameHandler = (e) => {
    setName(e.target.value);
  };
  const changeLinkHandler = (e) => {
    setLink(e.target.value);
  };
  const changePriceHandler = (e) => {
    setPrice(e.target.value);
  };
  const changePromotedPriceHandler = (e) => {
    setPromotedPrice(e.target.value);
  };
  const _onSelect = (e) => {
    setChosenOption(e.value);
    sendRequest(e.value);
  };
  const clearInputs = () => {
    setName("");
    setPrice("");
    setLink("");
    setIsPromoted(undefined);
    setIsEditable(undefined);
    setPromotedPrice("");
    setIngredients([]);
    setChosenOption(undefined);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    let id = "m";
    let meal = {};

    if (
      status === "completed" &&
      name.length > 0 &&
      price.length > 0 &&
      chosenOption
    ) {
      if (
        (isEditable &&
          ingredients.length === DUMMY_Ingredients.length) ||
        !isEditable 
      ) {
        if (
          (isPromoted && promotedPrice > 0) ||
          !isPromoted
        ) {
          id = id + data;
          meal = {
            id,
            name,
            oldPrice: price,
            newPrice: isPromoted ? promotedPrice : undefined,
            img: link,
            isEditable,
            isPromoted,
            ingredients: isEditable ? ingredients : undefined,
          };
           sendMeal({
            category:chosenOption,
            id,
            meal,
           });
          setOrderSent(true);
          clearInputs();
          setIsChecked(true);
        } else {
          setIsChecked(false);
        }
      } else {
        setIsChecked(false);
      }
    } else {
      setIsChecked(false);
    }
  };
  const closeHandler = () => {
    setOrderSent(false);
  };
  useEffect(()=>{},[orderSent,isPromoted,isEditable])
  return (
    <DashboardBox>
      <div className="flex justify-between">
        <h2 className="font-semibold text-[1.5rem] ml-3">Add Meal</h2>
        <button
          onClick={changeVisibilityHandler}
          className={`font-semibold text-[1.5rem] ${
            isVisible ? "text-red-500" : "text-[#4AA05A]"
          }`}
        >
          {isVisible ? "-" : "+"}
        </button>
      </div>

      <form
        className={` px-2 py-2 ${isVisible ? "block" : "hidden"}`}
        onSubmit={submitHandler}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <input
            className={`lg:w-[60%] px-2 py-1.5 mt-2 rounded-sm border-b-2  focus:outline-none ${
              name.length > 0 ? "border-[#4AA05A]" : "border-neutral-400"
            }`}
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={changeNameHandler}
          />
          <input
            className={`lg:w-[80%] px-2 py-1.5 mt-3 rounded-sm border-b-2  focus:outline-none ${
              link.length > 0 ? "border-[#4AA05A]" : "border-neutral-400"
            }`}
            type="text"
            placeholder="Image Link (from imgur.com)"
            value={link}
            onChange={changeLinkHandler}
          />
          <input
            className={`lg:w-[60%] px-2 py-1.5 mt-3 rounded-sm border-b-2  focus:outline-none ${
              price > 0 ? "border-[#4AA05A]" : "border-neutral-400"
            }`}
            type="number"
            placeholder="Price"
            value={price}
            onChange={changePriceHandler}
          />
        </div>
        <div className=" mt-3">
          <label className="text-third font-semibold text-[17px]">
            Is promoted:
          </label>
          <input
            type="radio"
            value={"true"}
            className="ml-3 bg-yellow-300"
            checked={isPromoted}
            onChange={onOptionChangePromoted}
          />
          <label className="text-[1.1rem] ml-1">Promoted</label>
          <input
            type="radio"
            className="ml-3"
            value={"false"}
            checked={!isPromoted}
            onChange={onOptionChangePromoted}
          />
          <label className="text-[1.1rem] ml-1">Not Promoted</label>
        </div>
        {isPromoted == true && (
          <input
            className={`lg:w-[20%] w-full px-2 py-1.5 mt-3 rounded-sm border-b-2  focus:outline-none ${
              promotedPrice.length > 0
                ? "border-[#4AA05A]"
                : "border-neutral-400"
            }`}
            type="number"
            placeholder="Promotion Price"
            value={promotedPrice}
            onChange={changePromotedPriceHandler}
          />
        )}
        <div className=" mt-3">
          <label className="text-third font-semibold text-[17px]">
            Is Editable:
          </label>
          <input
            type="radio"
            value={"true"}
            className="ml-3 bg-yellow-300"
            checked={isEditable}
            onChange={onOptionChangeEditable}
          />
          <label className="text-[1.1rem] ml-1">Editable</label>
          <input
            type="radio"
            className="ml-3"
            value={"false"}
            checked={!isEditable}
            onChange={onOptionChangeEditable}
          />
          <label className="text-[1.1rem] ml-1">Not Editable</label>
        </div>
        {isEditable == true && (
          <div>
            <h3 className="text-third font-semibold text-[17px] py-3">
              Ingredients:
            </h3>
            {DUMMY_Ingredients.map((ingredient, index) => (
              <Ingredient
                text={ingredient}
                id={"i" + (index + 1)}
                key={index}
                sendData={addIngredientsHandler}
              />
            ))}
          </div>
        )}
        <div className="flex items-center gap-4">
          <p className="text-third font-semibold text-[17px] mt-3">
            Select a Category:
          </p>
          <Dropdown
            options={options}
            className="w-[30%] mt-4"
            value={chosenOption}
            placeholder="Select a Category"
            onChange={_onSelect}
          />
        </div>
        {!isChecked && (
          <p className="text-primary font-semibold text-[1.2rem] text-center mt-6">
            Fill the inputs and mark every ingredient.
          </p>
        )}
        <div className="w-full text-right">
          <button
            className={`mt-4 w-[12rem] mr-4 h-[1.7rem] text-white  rounded-md bg-[#4AA05A]`}
          >
            +Add Meal
          </button>
        </div>
      </form>
      {orderSent && (
        <SentMealStatus
          status={mealStatus}
          error={mealError}
          closeHandler={closeHandler}
          completedText={"You added a meal."}
          errorText={"Oops, there was an error adding your meal. Try again."}
        
        />
      )}
    </DashboardBox>
  );
};

export default AddMeal;
