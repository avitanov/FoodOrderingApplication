import DashboardBox from "../UI/DashBoardBox";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useEffect, useState } from "react";
import useHttp from "../../dataStorage/use-http";
import { getAllMenuItems } from "../../dataStorage/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import MealItem from "./MealItem";
import { deleteMenuItem } from "../../dataStorage/api";
import SentMealStatus from "./SentMealStatus";
const RemoveMeal = () => {
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
  const [loading, SetLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [chosenOption, setChosenOption] = useState(undefined);
  const { sendRequest, status, data, error } = useHttp(getAllMenuItems, true);
   const { sendRequest:DeleteRequest, status:DeleteStatus, error:DeleteError } = useHttp(deleteMenuItem);
  const [isSendedReq, setIsSendedReq] = useState(false);
  const [apiCall,setApiCall] = useState(false);

  const _onSelect = (e) => {
    setChosenOption(e.value);
    SetLoading(true);
    sendRequest(e.value);
    setApiCall(true);
  };
  useEffect(() => {
    if (status === "completed") {
      SetLoading(false);
    }
  }, [status]);
   useEffect(() => {
     if (DeleteStatus === "completed") {
       sendRequest(chosenOption);
     }
   }, [DeleteStatus]);

  const changeVisibilityHandler = () => {
    setIsVisible(!isVisible);
  };
  const deleteHandler = (id)=>{
    DeleteRequest({
        id,
        category:chosenOption,
    });
    setIsSendedReq(true);
  }
  const closeHandler =()=>{
    setIsSendedReq(false)
  }
  return (
    <DashboardBox>
      <div className="flex justify-between">
        <h2 className="font-semibold text-[1.5rem] ml-3">Remove Meal</h2>
        <button
          onClick={changeVisibilityHandler}
          className={`font-semibold text-[1.5rem] ${
            isVisible ? "text-red-500" : "text-[#4AA05A]"
          }`}
        >
          {isVisible ? "-" : "+"}
        </button>
      </div>
      <div className={` px-2 py-2 ${isVisible ? "block" : "hidden"}`}>
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
        {apiCall && (
          <div className="mt-5 bg-neutral-200 pb-7 pt-3 rounded-md ">
            {loading && <LoadingSpinner />}
            {status === "completed" && !error && data.length === 0 && (
              <p className="font-semibold text-[20px] text-black text-center">
                No Items were found.
              </p>
            )}
            {status === "completed" && !error && data.length > 0 && (
              <ul className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
                {data.map((item) => {
                  return (
                    <MealItem
                      DummyItems={item}
                      key={item.id}
                      deleteHandler={deleteHandler}
                    />
                  );
                })}
              </ul>
            )}
            {isSendedReq && (
              <SentMealStatus
                status={DeleteStatus}
                error={DeleteError}
                closeHandler={closeHandler}
                completedText={"You deleted a meal."}
                errorText={
                  "Oops, there was an error removing your meal. Try again."
                }
              />
            )}
          </div>
        )}
      </div>
    </DashboardBox>
  );
};

export default RemoveMeal;
