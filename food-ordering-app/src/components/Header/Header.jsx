// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from "react";
import CartContext from '../../dataStorage/cart-context';
import {NavLink} from 'react-router-dom'
import logo from '../../assets/logo.png'

const Header = (props) =>{
  const [btnHighlight, setBtnHighlight] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const ctx = useContext(CartContext);
  // eslint-disable-next-line react/prop-types
  if(!props.change){
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        // Change the threshold as needed
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}

useEffect(()=>{
if (ctx.items.length === 0) {
  return;
}
setBtnHighlight(true);

const timer = setTimeout(() => {
  setBtnHighlight(false);
}, 300);

return () => {
  clearTimeout(timer);
};
},[ctx.items.length, ctx.totalAmount])

return (
  <header
    className={`  z-20 top-0 px-2 py-2 ${
      // eslint-disable-next-line react/prop-types
      !props.change
        ? scrolling
          ? "bg-third transition-colors duration-300 sticky"
          : "bg-transparent sticky"
        : "bg-third "
    }`}
  >
    <div className="flex justify-between items-center">
      <NavLink to="/categories/promotions">
        <img src={logo} className="h-[4.5rem] pl-3 md:pl-14" alt="logo" />
      </NavLink>
      <NavLink to="/cart">
        <button
          className={`relative h-[3rem] w-[3rem] rounded-full bg-white mr-6 lg:mr-20 mt-2 flex items-center justify-center drop-shadow-xl ${
            btnHighlight ? "bump" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 18"
            viewBox="0 0 32 32"
            width="256"
            height="256"
            className="h-6 w-6 mx-auto"
          >
            <rect
              width="22"
              height="16"
              x="3"
              y="9"
              fill="#f1f2f2"
              className="colorf1f2f2 svgShape"
            ></rect>
            <path
              fill="#bcbec0"
              d="M25,22v3H3V9H6V20a2,2,0,0,0,2,2H25Z"
              className="colorbcbec0 svgShape"
            ></path>
            <path
              fill="#ff4c29"
              d="M25 16H3a1 1 0 000 2H25A1 1 0 0025 16zM3 10H25a1 1 0 000-2H3A1 1 0 003 10z"
              className="colorff4c29 svgShape"
            ></path>
            <path
              fill="#082032"
              d="M29.707,2.293a1,1,0,0,0-1.414,0L25.465,5.122A4.968,4.968,0,0,0,24,8.657V24H4V7A1,1,0,0,0,2,7V25a1,1,0,0,0,1,1H4.184A2.965,2.965,0,0,0,4,27a3,3,0,0,0,6,0,2.965,2.965,0,0,0-.184-1h8.369A2.965,2.965,0,0,0,18,27a3,3,0,0,0,6,0,2.965,2.965,0,0,0-.184-1H25a1,1,0,0,0,1-1V8.657a3.02,3.02,0,0,1,.879-2.121l2.828-2.829A1,1,0,0,0,29.707,2.293ZM8,27a1,1,0,1,1-1-1A1,1,0,0,1,8,27Zm14,0a1,1,0,1,1-1-1A1,1,0,0,1,22,27Z"
              className="color082032 svgShape"
            ></path>
          </svg>
          <span className="absolute -top-2 -right-1.5 text-white font-bold text-[0.85rem] flex justify-center items-center rounded-full h-5 w-5 bg-secondary ">
            {ctx.items.length}
          </span>
        </button>
      </NavLink>
    </div>
  </header>
);

}

export default Header;