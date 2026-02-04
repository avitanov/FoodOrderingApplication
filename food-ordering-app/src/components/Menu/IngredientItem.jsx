import React, { useState } from "react";

const IngredientItem = (props) => {
  const { text, price, id } = props.ingredient;
  const priceInt = +price;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [amount, setAmount] = useState(props.ingredient.amount);
  const removeAmountHandler = () => {
    setAmount(+amount - 1);
    props.changePriceHandler(price, false);
  };
  const addAmountHandler = () => {
    setAmount((am) => +am + 1);
    props.changePriceHandler(priceInt, true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.MealHandler({
      id,
      text,
      priceInt,
      amount: +amount,
    });
    setIsSubmitted(true);
  };

  return (
    <li
      className={`bg-white my-4 sm:px-2 py-1.5 rounded-md shadow-md border ${
        isSubmitted ? "bg-gray-400" : ""
      }`}
    >
      <div className="sm:flex justify-between  text-center sm:text-left">
        <p
          className={`my-auto text-lg sm:text-md px-2 sm:px-0
            ${amount == 0 ? "text-primary " : "text-black"}
          `}
        >
          {amount == 0 ? <s>{props.ingredient.text}</s> : props.ingredient.text}
          <span className=" ml-1 sm:ml-4 sm:mx-0">
            <span className="text-black">(+${priceInt.toFixed(2)})</span>
          </span>
        </p>

        <div className="flex justify-center min-w-[11rem] max-w-[12rem] mt-1 sm:mt-0 sm:max-w-none sm:min-w-none mx-auto sm:m-0 sm:w-fit">
          <div className=" flex w-full px-2 pt-2">
            <button
              onClick={removeAmountHandler}
              className={
                +amount !== 0
                  ? `text-white sm:w-[7vh] sm:h-[7vh] w-[5.5vh] h-[5.5vh] flex justify-center items-center  rounded-md cursor-pointer ${
                      !isSubmitted ? `bg-secondary` : `bg-gray-500`
                    }`
                  : `text-white sm:w-[7vh] sm:h-[7vh] w-[5.5vh] h-[5.5vh] flex justify-center items-center rounded-md ${
                      !isSubmitted ? `bg-secondary` : `bg-gray-500`
                    }`
              }
              disabled={amount == 0 || isSubmitted ? true : false}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="minus"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 29 29"
                xmlSpace="preserve"
                className="w-5 h-5"
              >
                <path
                  fill="white"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M22 14.5H7"
                ></path>
              </svg>
            </button>
            <p
              className={
                amount > 0 && amount < 6
                  ? `text-black my-auto mx-auto sm:px-4`
                  : `text-primary my-auto mx-auto sm:px-4`
              }
            >
              {amount}
            </p>
            <button
              onClick={addAmountHandler}
              className={
                amount < 5
                  ? `text-white sm:w-[7vh] sm:h-[7vh] w-[5.5vh] h-[5.5vh] flex justify-center items-center  rounded-md cursor-pointer ${
                      !isSubmitted ? `bg-third` : `bg-gray-500`
                    }`
                  : `text-white sm:w-[7vh] sm:h-[7vh] w-[5.5vh] h-[5.5vh] flex justify-center items-center  rounded-md ${
                      !isSubmitted ? `bg-third` : `bg-gray-500`
                    }`
              }
              disabled={amount == 5 || isSubmitted ? true : false}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                id="plus"
              >
                <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"></path>
              </svg>
            </button>
            <form className=" ml-3" onSubmit={submitHandler}>
              <button
                className={` sm:w-[7vh] sm:h-[7vh] w-[5.5vh] h-[5.5vh] flex items-center justify-center rounded-md ${
                  isSubmitted ? "bg-gray-500" : `bg-[#4AA05A] `
                }`}
                type="submit"
                disabled={isSubmitted ? true : false}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="approve"
                  fill="white"
                  className="w-6 h-6"
                >
                  <path d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </li>
  );
};

export default IngredientItem;
