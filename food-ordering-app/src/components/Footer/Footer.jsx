import React from "react";

const Footer = (props) => {
  return (
    <footer className={` bottom-0 text-center bg-[#175676] py-2 w-full ${!props.value ? `static`: `fixed`}`}>
      <div>
        <p className="text-neutral-100 text-sm ">© 2023 KFC. All Rights Reserved</p>
      </div>
    </footer>
  );
};
export default Footer;
