import { HamburgerIcon } from "../icons/iconsDashboard";
const HeaderDash = (props) => {
  return (
    <div className="bg-white h-fit w-full py-4 px-4 shadow-md flex ">
      <button onClick={props.sideMenuHandler}>
        <HamburgerIcon />
      </button>
      <h1 className="text-[2.2rem] ml-6 text-third font-bold font-mono">
        Dashboard
      </h1>
    </div>
  );
};
export default HeaderDash;
