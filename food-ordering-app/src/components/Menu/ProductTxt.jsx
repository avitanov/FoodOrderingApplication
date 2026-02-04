const ProductTxt = (props) =>{
  const price = ((+props.oldPrice * 10) % 10 == 0 ? +props.oldPrice-0.01 : +props.oldPrice).toFixed(2);

  return (
  <div className="pl-3 pr-2 mt-1 h-[80px] ">
    <p className="font-medium text-[1.1rem]">{props.text}</p>
    <div className="flex justify-between mt-1">
      <div className="flex">
        {props.isPromoted ? (
          <p className="text-primary text-xl font-semibold">
            <s>${price}</s>
          </p>
        ) : (
          <p className="text-secondary text-xl font-semibold">
            ${price}
          </p>
        )}
        {props.isPromoted ? (
          <p className="text-secondary text-xl font-semibold ml-1">
            ${props.newPrice}
          </p>
        ) : null}
      </div>
    </div>
    {props.children}
  </div>
);

}

export default ProductTxt;