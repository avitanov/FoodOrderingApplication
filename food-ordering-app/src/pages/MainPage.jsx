import Slider from "../components/Carousel/Slider";
import Layout from "../components/UI/Layout";
import ServiceProcedure from "../components/main-part/ServiceProcedure";
import Menu from "../components/Menu/Menu";
import NotFound from "./NotFound";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Main() {
  const [sign,setSign] = useState(false);
  
 
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const categories = [
    "promotions",
    "burgers",
    "wraps",
    "buckets",
    "fries",
    "snacks",
    "kidsmeals",
    "sauces",
  ];
  const params = useParams();

   
  const paramId = params.categoryId;
 useEffect(() => {
   // Check if params object is empty
   if (!params || Object.keys(params).length === 0) {
     navigate("/categories/promotions");
   }
   // Check if paramId is not in categories
   else if (!categories.includes(paramId)) {
     setSign(true);
   }
 }, [paramId]);

  if(sign){
    return <NotFound/>
  }
  else return (
    <Layout change={false}>
      <Slider />
      <ServiceProcedure />
      <Menu param={paramId} />
    </Layout>
  ) 
    
}

export default Main;
