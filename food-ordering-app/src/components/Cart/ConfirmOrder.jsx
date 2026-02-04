import LoadingSpinner from '../UI/LoadingSpinner';


import { CheckMark, CrossMark } from '../icons/icons';
const ConfirmOrder = (props)=>{
return (
  <div
    className={`  relative w-screen  transition-transform duration-700 ${
      props.isChecked ? "-translate-x-[50%] " : "translate-x-full"
    }`}
  >
    <div className="bg-white shadow-lg w-[90%] mx-auto rounded-lg  py-10 mt-6 px-8">
      {props.status === "pending" && <LoadingSpinner />}
      {props.status === "completed" && !props.error && (
        <div className="flex items-center flex-col">
          <CheckMark className="w-[12rem] h-[12rem] text-[#4AA05A]" />
          <p className="text-xl mt-5 text-center">
            Your order number is{" "}
            <span className="font-semibold text-primary">{props.orderId}</span>
          </p>
        </div>
      )}
      {props.status === "completed" && props.error && (
        <div className="flex items-center flex-col">
          <CrossMark className="w-[10rem] h-[10rem] text-red-500" />
          <p className="text-xl mt-5 text-center">
            Oops, there was an error sending your order. Try again.
          </p>
        </div>
      )}
    </div>
  </div>
);
}

export default ConfirmOrder;