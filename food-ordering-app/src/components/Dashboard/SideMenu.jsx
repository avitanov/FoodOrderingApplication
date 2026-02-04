import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { OrdersIcon } from "../icons/iconsDashboard";
import { HomeIcon } from "../icons/iconsDashboard";
import {LeaveIcon} from '../icons/iconsDashboard';
import React, { useContext } from "react";
import AuthContext from "../../dataStorage/Auth-context";
const SideMenu = (props) => {
  const authCtx = useContext(AuthContext);
  const logoutHandler = () =>{
    authCtx.logout();
  }
  return (
    <div
      className={`fixed bg-third px-3 z-30 transition-transform duration-500 pb-5 w-[300px] min-h-screen block h-full sm:max-w-full
    ${props.showSideMenu ? "translate-x-0" : "-translate-x-full"}
    `}
    >
      <NavLink to="/">
        <img src={logo} className="h-[4.5rem] mx-auto" />
      </NavLink>
      <h3 className="mt-[10vh] pl-7 text-md pb-4 text-neutral-200">MENU</h3>
      <ul className="grid grid-cols-1 gap-3  ">
        <NavLink
          to="/dashboard/orders"
          className={({ isActive }) =>
            "transition-colors py-2 duration-300 cursor-pointer block hover:bg-white hover:text-neutral-700 " +
            (isActive
              ? " bg-white text-neutral-700"
              : " bg-none text-neutral-100")
          }
        >
          <li className="flex pl-6">
            <HomeIcon />
            <p className="text-[17px] pl-1">Home</p>
          </li>
        </NavLink>
        <NavLink
          to="/dashboard/menuItems"
          className={({ isActive }) =>
            "transition-colors py-2 duration-300 cursor-pointer block hover:bg-white hover:text-neutral-700 " +
            (isActive
              ? " bg-white text-neutral-700"
              : "bg-none text-neutral-100")
          }
        >
          <li className="flex pl-6">
            <OrdersIcon />
            <p className="text-[17px] pl-1">Menu</p>
          </li>
        </NavLink>
      </ul>
      <button
        className="absolute flex justify-center items-center bottom-6 left-0 right-0 w-[90%] mx-auto transition-colors duration-500 h-[2rem] cursor-pointer  hover:bg-white hover:text-neutral-700  bg-none text-neutral-300"
        onClick={logoutHandler}
      >
        <LeaveIcon/>
        <span className="ml-1">Logout</span>
      </button>
    </div>
  );
};
export default SideMenu;
