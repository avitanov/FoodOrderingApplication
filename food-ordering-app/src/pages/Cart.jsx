import Layout from "../components/UI/Layout"
import CartContainer from "../components/Cart/CartContainer";

const Cart = () =>{
return (
  <div className="absolute w-full h-full overflow-x-hidden">
    <Layout change={true} value={true}>
      <div className=" w-full min-h-screen pb-6">
        <CartContainer />
      </div>
    </Layout>
  </div>
);
}
export default Cart;