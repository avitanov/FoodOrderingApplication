import Modal from "../UI/Modal"
import LoadingSpinner from "../UI/LoadingSpinner";
import { CheckMark, CrossMark } from "../icons/icons";
import { useEffect,useState } from "react";
const SentMealStatus = (props) =>{
  const [isDelayedFunctionExecuted, setIsDelayedFunctionExecuted] = useState(false);
  useEffect(() => {
    if (props.status === "completed" && !isDelayedFunctionExecuted) {
      const timer = setTimeout(() => {
        // Execute your function here
        props.closeHandler();
        // Mark the function as executed to prevent it from running again
        setIsDelayedFunctionExecuted(true);
      }, 800); // 2 seconds in milliseconds

      // Clear the timeout if the component unmounts or 'status' changes
      return () => clearTimeout(timer);
    }
  }, [props.status, isDelayedFunctionExecuted]);
  if(props.status === 'completed' &&!props.error && props.functionEx ){
    props.setDeletConf();
  }

return (
  <Modal>
    <div className="w-full ">
      {props.status === "pending" && <LoadingSpinner />}
      {props.status === "completed" && !props.error && (
        <div className="flex items-center flex-col">
          <CheckMark className="w-[12rem] h-[12rem] text-[#4AA05A]" />
          <p className="text-xl text-center">{props.completedText}</p>
        </div>
      )}
      {props.status === "completed" && props.error && (
        <div className="flex items-center flex-col">
          <CrossMark className="w-[12rem] h-[12rem] text-primary" />
          <p className="text-xl text-center">
            {props.errorText}
          </p>
        </div>
      )}
    </div>
  </Modal>
);
}
export default SentMealStatus;