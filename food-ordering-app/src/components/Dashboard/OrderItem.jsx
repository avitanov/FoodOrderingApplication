import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Trash } from "../icons/icons";
import SentMealStatus from "./SentMealStatus";
import Modal from '../UI/Modal';
import { useState } from "react";
import useHttp from "../../dataStorage/use-http";
import {deleteOrder} from '../../dataStorage/api';
const OrderItem = (props) => {
  const [deleteCheck,setDeleteCheck]=useState(false);
  const [deleteConf,setDeleteConf] = useState(false);
  const [deleteStatus,setDeleteStatus] = useState(false);
  const { sendRequest, status, error } = useHttp(deleteOrder);
  const deleteHandler = ()=>{
    setDeleteCheck(true);
  }
  const deleteCloseHandler = () => {
    setDeleteCheck(false);
  };
  const deleteConfirmationHandler = ()=>{
    setDeleteCheck(false);
    sendRequest({id:props.data.id})
    setDeleteStatus(true);
  }
  const propsCloseHandler = ()=>{
    setDeleteStatus(false);
    
  }
  const propsSetDeleteConf =()=>{
    setDeleteConf(true);
  }
  return (
    <div className={` mt-4 ${deleteConf ? "hidden" : "block"}`}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            // background: "red",
            width: "100%",
          }}
        >
          <button
            className=" mr-4 flex justify-center items-center rounded-md"
            onClick={deleteHandler}
          >
            <Trash />
          </button>
          <div className="flex ">
            <Typography
              sx={{
                // background: "yellow",
                width: "100%",
                fontSize: "1.1rem !important",
              }}
            >
              Order ID:
            </Typography>
            <Typography
              sx={{
                //   background: "yellow",
                display: "flex !important",
                alignItems: "center !important",
                width: "100%",
                fontSize: "1.1rem !important",
                paddingLeft: "0.5rem",
                color: "#175676",
                fontWeight: "600",
              }}
            >
              {props.data.id}
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            background: "rgb(255,255,255)",
            padding: "0 !important",
            // boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
          }}
        >
          <div className=" px-6 py-2">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  width: "100% !important",
                  border: "0 !important",
                  borderTopLeftRadius: "0 !important",
                  borderBottomLeftRadius: "0 !important",
                  boxShadow: "none !important",
                }}
              >
                <Typography
                  sx={{
                    //   background: "yellow",
                    display: "flex !important",
                    alignItems: "center !important",
                    width: "100%",
                    fontSize: "1rem !important",
                  }}
                >
                  Order Info
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  background: "rgb(245 245 245)",
                  // boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                }}
              >
                <div className=" mt-2 p-0 ">
                  <div className=" pb-2 pt-1">
                    {props.data.items &&
                      props.data.items.map((item, index) => (
                        <div
                          key={index}
                          className="py-2 border-b-2 border-neutral-700"
                        >
                          <p>
                            Item {index + 1}:{" "}
                            <span className="text-third text-[1.15rem] font-semibold">
                              {item.text} ${item.price}
                            </span>
                          </p>
                          <div className="mt-1">
                            {item.hasIngredients
                              ? item.ingredients.map((ingredient, index) => (
                                  <span
                                    key={ingredient.id}
                                    className="px-1 text-[0.95rem]"
                                  >
                                    [{ingredient.amount} x {ingredient.text}]
                                    {index === item.ingredients.length - 1
                                      ? null
                                      : ","}
                                  </span>
                                ))
                              : null}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  width: "100% !important",
                  border: "0 !important",
                  borderTopLeftRadius: "0 !important",
                  borderBottomLeftRadius: "0 !important",
                  boxShadow: "none !important",
                }}
              >
                <Typography
                  sx={{
                    //   background: "yellow",
                    display: "flex !important",
                    alignItems: "center !important",
                    width: "100%",
                    fontSize: "1rem !important",
                  }}
                >
                  Contact Details
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  background: "rgb(245 245 245)",
                  // boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                }}
              >
                <div className=" mt-2 p-0 ">
                  <p>
                    Full Name:{" "}
                    <span className="text-third font-semibold">
                      {props.data.info.name}
                    </span>
                  </p>
                  <p>
                    Adress:{" "}
                    <span className="text-third font-semibold">
                      {props.data.info.adress} {props.data.info.postalCode}{" "}
                      {props.data.info.city},{props.data.info.country}
                    </span>
                  </p>
                  <p>
                    Phone:{" "}
                    <span className="text-third font-semibold">
                      {props.data.info.phoneNumber}
                    </span>{" "}
                  </p>
                  <p>
                    Total:{" "}
                    <span className="text-third font-semibold">
                      ${props.data.totalAmount}
                    </span>{" "}
                  </p>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </AccordionDetails>
      </Accordion>
      {deleteCheck && (
        <Modal>
          <div className="py-4">
            <p className="text-center text-xl font-semibold">
              Are you sure you want to delete this Order?
            </p>
            <div className=" flex justify-between w-[90%] mx-auto mt-4">
              <button
                className="mt-4 w-[12rem] mr-4 h-[1.7rem] text-white  rounded-md bg-primary hover:bg-opacity-[0.8]"
                onClick={deleteCloseHandler}
              >
                No
              </button>
              <button className="mt-4 w-[12rem] mr-4 h-[1.7rem] text-white  rounded-md bg-[#4AA05A] hover:bg-opacity-[0.8]" onClick={deleteConfirmationHandler}>
                Yes
              </button>
            </div>
          </div>
        </Modal>
      )}
      {deleteStatus && (
        <SentMealStatus
          status={status}
          error={error}
          closeHandler={propsCloseHandler}
          completedText={"Order was deleted."}
          errorText={"Oops, there was an error deleting order. Try again."}
          setDeletConf={propsSetDeleteConf}
          functionEx={true}
        />
      )}
    </div>
  );
};

export default OrderItem;
