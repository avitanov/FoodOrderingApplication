import ProductImg from "../Menu/ProductImg";
import ProductTxt from "../Menu/ProductTxt";
const MealItem = (props) =>{
    const deleteHandler = ()=>{
        props.deleteHandler(props.DummyItems.id);
    }
    return (
      <li className="bg-white sm:w-[14.5rem] w-[60%] mt-6 mx-auto rounded-md hover:-translate-y-2 transition-transform duration-500 pb-3 shadow-xl ">
        <ProductImg img={props.DummyItems.img} />
        <ProductTxt
          text={props.DummyItems.name}
          isPromoted={props.DummyItems.isPromoted}
          oldPrice={props.DummyItems.oldPrice}
          newPrice={props.DummyItems.newPrice}
        />
        <button className="bg-red-500 transition-colors duration-500 text-white h-[1.8rem] w-[90%] ml-[5%] rounded-md mt-2 hover:bg-third">
          <p className="text-[18px] " onClick={deleteHandler}>
            Remove
          </p>
        </button>
      </li>
    );
}

export default MealItem;