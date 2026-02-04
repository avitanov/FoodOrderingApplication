import React,{useContext} from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CartContext from "../../dataStorage/cart-context";
import { Trash } from "../icons/icons";

const CartItem = (props) => {
    const ctx= useContext(CartContext);

    const removeItemHandler = () =>{
        ctx.removeItem(props.item.id);
        console.log('done');
    }
    return props.item.hasIngredients ? (
      <div className="w-full flex flex-row-reverse pb-5" key={props.item.id}>
        <Accordion
          sx={{
            width: "100% !important",
            border: "0 !important",
            borderTopLeftRadius: "0 !important",
            borderBottomLeftRadius: "0 !important",
            boxShadow: "none !important",
            PaddingLeft: "0 !important",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              // background: "red",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              // borderLeft: "0.5rem solid #175676 !important",
              borderBottom: "1px solid black !important",

              borderColor: "#175676",
            }}
          >
            <button
              className=" mr-4 flex justify-center items-center rounded-md"
              onClick={removeItemHandler}
            >
              <Trash />
            </button>
            <Typography
              sx={{
                // background: "yellow",
                display: "flex !important",
                alignItems: "center !important",
                width: "100%",
                fontSize: "1.1rem !important",
              }}
            >
              {props.item.text}
            </Typography>
            <Typography
              sx={{
                // background: "red",
                width: "4.5rem",
                display: "flex !important",
                alignItems: "center !important",
                fontSize: "1.2rem !important",
                marginRight: "1rem !important",
              }}
            >
              ${props.item.price}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              background: "rgb(255,255,255)",
              borderBottom: "0.5px solid rgba(0,0,0, 0.3)",
              // boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
            }}
          >
            <div className=" mt-2 p-0 ">
              {props.item.ingredients.map((ingredient) => {
                return (
                  <Typography
                    key={ingredient.id}
                    sx={{
                      fontSize: "0.95rem !important",
                      lineHeight: "1.40rem !important",
                      fontWeight: "500 !important",
                      color: "rgb(82 82 82) !important ",
                      paddingRight: "0.25rem !important",
                    }}
                  >
                    [{ingredient.amount} x {ingredient.text}]
                  </Typography>
                );
              })}
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    ) : (
      <div className="w-full flex pb-5 " key={props.item.id}>
        {/* border-l-third */}
        {/* border-l-[0.5rem]  */}
        <li className="bg-white py-3 px-2 w-full mx-auto  border-b-black border-b  flex   justify-between">
          <div className="flex">
            <button
              className=" mr-4 flex justify-center items-center rounded-md"
              onClick={removeItemHandler}
            >
              <Trash />
            </button>
            <p className="text-[1.1rem] my-auto">
              <span>{props.item.amount > 1 ? props.item.amount : 1}</span> x{" "}
              {props.item.text}
            </p>
          </div>
          <p className="text-[1.2rem] font-normal my-auto text-black mr-[3.3rem]">
            ${(props.item.price * props.item.amount).toFixed(2)}
          </p>
        </li>
      </div>
    );
};

export default CartItem;