const ProductImg = (props) =>{

return (
  <div
    style={{
      backgroundImage: `url(${encodeURI(props.img)})`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundRepeat: 'no-repeat'
    }}
    className="h-[13em] block rounded-t-md bg-white"
  ></div>
);

}

export default ProductImg;