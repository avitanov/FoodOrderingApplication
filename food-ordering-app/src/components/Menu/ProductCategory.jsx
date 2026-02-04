import { NavLink } from "react-router-dom";
const ProductCategory = (props) => {
  const link = props.text.toLowerCase().replace(/\s/g, "");

  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        "shadow-md transition-colors duration-300 rounded-xl cursor-pointer w-[8rem] mx-auto " + (isActive ? " bg-secondary" : "bg-white")
      }
    >
      <li className=" shadow-md hover:bg-secondary transition-colors duration-300 px-5 py-4 rounded-xl cursor-pointer w-[8rem] flex justify-center flex-col">
        <img src={props.svg} className="w-[4rem] mx-auto" />
        <p className="text-center font-medium mt-1">{props.text}</p>
      </li>
    </NavLink>
  );
};

export default ProductCategory;
