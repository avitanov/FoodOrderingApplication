import React from "react";
import ProductCategory from "./ProductCategory";
import burger from '../../assets/burger.svg';
import burgerDrink from "../../assets/burgerDrink.svg";
import wrap from '../../assets/wrap.svg';
import bucket from "../../assets/bucket.svg";
import snack from "../../assets/snack.svg";
import kid from "../../assets/kid.svg";
import fries from "../../assets/fries.svg";
import sauce from "../../assets/sauce.svg";

const ProductsNav = () => {
 return (
   <ul className=" lg:flex lg:justify-evenly grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 md:px-12 px-6 py-8">
     <ProductCategory text="Promotions" svg={burgerDrink} />
     <ProductCategory text="Burgers" svg={burger} />
     <ProductCategory text="Wraps" svg={wrap} />
     <ProductCategory text="Buckets" svg={bucket} />
     <ProductCategory text="Fries" svg={fries} />
     <ProductCategory text="Snacks" svg={snack} />
     <ProductCategory text="Kids Meals" svg={kid} />
     <ProductCategory text="Sauces" svg={sauce} />
   </ul>
 );
}

export default ProductsNav;