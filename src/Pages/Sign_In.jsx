import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Asset/B2b Logo.svg";

const Sign_In = () => {
  return (
    <div className="container">
      <header className="log-header bg-light p-3 d-flex justify-content-center">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" style={{ width: "150px" }} />
        </Link>
      </header>
      <div className="row w-75 justify-content-center flex-column">
        {/* <div className=""> */}
          <Link to={"/"}>
          <i class="fa-solid fa-chevron-left"></i> &nbsp; Back to Home
          </Link>
        </div>
      </div>
    // </div>
  );
};

export default Sign_In;
