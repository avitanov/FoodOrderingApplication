import {  useState } from "react";
import SideMenu from "../components/Dashboard/SideMenu";
import HeaderDash from "../components/Dashboard/HeaderDash";
const Dashboard = (props) =>{
  const [showSideMenu,setShowSideMenu]=useState(false);
  const sideMenuHandler = () => {
      setShowSideMenu(!showSideMenu);
  };

    return (
      <div className="bg-third ">
        <SideMenu showSideMenu={showSideMenu} />
        <div
          className={`bg-neutral-200 h-screen transition-transform duration-500 ${
            showSideMenu ? "translate-x-[300px]" : "w-full"
          }`}
        >
          <HeaderDash
            sideMenuHandler={sideMenuHandler}
            showSideMenu={showSideMenu}
          />
          <div
            className={`fixed top-[5rem] inset-0 z-10 opacity-0  ${
              showSideMenu ? "block" : "hidden"
            }`}
            onClick={sideMenuHandler}
          ></div>
          {props.children}
        </div>
      </div>
    );
}

export default Dashboard;