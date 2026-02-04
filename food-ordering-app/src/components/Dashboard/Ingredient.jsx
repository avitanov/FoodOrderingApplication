import { useState } from "react";

const Ingredient = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const priceHandler = (event) => {
    setPrice(event.target.value);
   
  };
  const amountHandler = (event) => {
    setAmount(event.target.value);
  };
  const checkHandler = () => {
    setIsChecked(true);
     props.sendData({
       [props.id]: {
         amount,
         price,
         text: props.text,
       },
     });
  };
  return (
    <div
      className={` px-2 py-3 mb-4  rounded-md  shadow-md ${
        isChecked ? "bg-neutral-200" : " bg-neutral-100"
      }`}
    >
      <label className="text-third text-[1.2rem] font-semibold w-full">
        {props.text}
      </label>
      <div className="grid lg:grid-cols-2 pl-2 pr-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-[100%] ">
          <input
            className={`lg:w-[80%] px-2 py-1.5 mt-3 rounded-sm border-b-2 border-neutral-400 focus:outline-none ${
              isChecked ? "bg-neutral-300" : "bg-white"
            }`}
            type="number"
            placeholder="Amount"
            disabled={isChecked ? true : false}
            value={amount}
            onChange={amountHandler}
          />
          <input
            className={`lg:w-[80%] px-2 py-1.5 mt-3 rounded-sm border-b-2 border-neutral-400 focus:outline-none ${
              isChecked ? "bg-neutral-300" : "bg-white"
            }`}
            type="number"
            placeholder="Price"
            disabled={isChecked ? true : false}
            value={price}
            onChange={priceHandler}
          />
        </div>
        <button
          className={` w-[5rem] h-[2rem] mt-4  text-white  rounded-md ${
            isChecked ? "bg-neutral-400" : "bg-[#4AA05A]"
          }`}
          disabled={isChecked ? true : false}
          onClick={checkHandler}
        >
          Check
        </button>
      </div>
    </div>
  );
};
export default Ingredient;
