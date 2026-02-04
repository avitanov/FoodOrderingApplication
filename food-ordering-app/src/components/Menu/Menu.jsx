import MenuList from "./MenuList";
import ProductsNav from "./ProductsNav";

const Menu = (props) => {
  
    return (
      <div className="bg-fifth py-4">
        <h1 className="text-center text-2xl font-bold mt-6 text-third">
          Our Menu
        </h1>
        <ProductsNav />
        <MenuList param={props.param} />
      </div>
    );
};

export default Menu;
