import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) =>{
    return <>
    <Header change={props.change}/>
    {props.children}
    <Footer value={props.value}/>
    </>
}

export default Layout;