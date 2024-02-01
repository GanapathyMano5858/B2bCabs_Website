import React from "react";

import { Link } from "react-router-dom";
// import Logo from "../../Asset/B2b Logo.svg";
import "./Sign_In.css";

const Sign_In = () => {
  // const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <>
      <div style={{ margin: "auto" }}>
        <div className="login-wrapper">
          <div className="loginbox">
            <div className="login-auth">
              <div className="login-auth-wrap">
                <Link to={"/"}>
                  <span>
                    <i class="fa-solid fa-angle-left"></i> &nbsp; Back To Home
                  </span>
                </Link>
              </div>
              <h3 className="mt-4 mb-2" style={{ color: "--SecondaryColor" }}>
                <b>Sign In</b>
              </h3>
              <p className="mb-3" style={{ color: "var(--grayText)" }}>
                We'll send a confirmation code to your email.
              </p>

              <form>
                <div className="mb-3">
                  <label className="mb-2" style={{ color: "--SecondaryColor" }}>
                    <b>
                      Agent ID <span className="text-danger">*</span>
                    </b>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Agent ID"
                  />
                </div>

                <div className="mb-3">
                  <label className="mb-2" style={{ color: "--SecondaryColor" }}>
                    <b>
                      Password <span className="text-danger">*</span>
                    </b>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Your Email"
                  />
                </div>

                <div className="mb-3 d-flex justify-content-between">
                  <label className="d-inline-flex gap-2 align-items-center justify-content-center">
                    <input
                      type="checkbox"
                      name="remeber"
                      className="ui-checkbox"
                    />
                    <span>Remember me</span>
                  </label>
                  <div className="">
                    <Link>Forgot Password ?</Link>
                  </div>
                </div>
                <button className="btn">Sign In</button>
                {/* <Link
                  to={"/dashboard"}
                  className="btn btn-outline-light w-100 btn-size mt-1"
                >
                  Log In
                </Link> */}
                <div className="text-center mt-5">
                  <span style={{ color: "var(--grayText)" }}>
                    Don't have an account yet?
                  </span>
                  <Link to={"/sign-up"} style={{ color: "#127384" }}>
                    Register
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        <footer className="bg-light">
          <div className="container-fluid py-4 text-center">
            <p style={{ color: "var(--grayText)" }}>
              © 2024 B2B. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Sign_In;
