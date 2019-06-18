import React from "react";

const NavBar = ({ totalCount }) => {
  return (
    <>
      <nav className="navbar navbar-expand-mg navbar-dark bg-dark">
        <a className="navbar-brand" href="http://localhost:3000">
          {/* <img src={require("../data/images/bgimg.jpg")} width={60} alt="" /> */}
          <h3>My Shop</h3>
        </a>
      </nav>
    </>
  );
};

export default NavBar;
