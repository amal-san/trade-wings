import React from "react";
import Logo from "../assets/logo.jpeg";

const menus = ["Services", "About", "Contact Us"];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-div">
        {" "}
        <img className="logo" src={Logo} />
      </div>
      <div className="menus">
        {menus.map((menu) => (
          <div key={menu}> {menu} </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
