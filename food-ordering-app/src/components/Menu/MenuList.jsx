import React from "react";
import MenuItem from "./MenuItem";
import useHttp from "../../dataStorage/use-http";
import { useEffect } from "react";
import { getAllMenuItems } from "../../dataStorage/api";
import LoadingSpinner from "../UI/LoadingSpinner";


const MenuList = (props) => {
  const {
    sendRequest,
    status,
    data: loadedItems,
    error,
  } = useHttp(getAllMenuItems, true);

  useEffect(() => {
    sendRequest(props.param);
  }, [props.param]);
  return (
    <>
      {status === "pending" && <LoadingSpinner />}
      {status === 'completed' && error && (
        <div className="bg-white w-[95%] px-8 pt-2 pb-6 mx-auto rounded-md shadow-lg">
        <p className="font-semibold text-[20px] text-secondary text-center">
          {error}
        </p>
        </div>
      )}
      {status === "completed" && !error && loadedItems.length === 0 && (
        <div className="bg-white w-[95%] px-8 pt-2 pb-6 mx-auto rounded-md shadow-lg">
          <p className="font-semibold text-[20px] text-secondary text-center">
            No Items were found.
          </p>
        </div>
      )}
      {status === "completed" && !error && loadedItems.length > 0 && (
        <div className="bg-white w-[95%] px-8 pt-2 pb-6 mx-auto rounded-md shadow-lg">
          <ul className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
            {loadedItems.map((item) => {
              return <MenuItem DummyItems={item} key={item.id} />;
            })}
          </ul>
        </div>
      )}
    </>
  );
};
export default MenuList;
