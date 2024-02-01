import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sign_Up.css";
import { multiStepContext } from "./StepContext";

const Sign_Up_Form_2 = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  const [inputMobileNumber, setInputMobileNumber] = useState("");
  const [inputAlertMobileNumber, setInputAlertMobileNumber] = useState("");
  const [inputValueCompanyName, setInputValueCompanyName] = useState("");
  const [inputValueName, setInputValueName] = useState("");
  const navigate = useNavigate();

  const handleInputValueCompanyNameChange = (event) => {
    const value = event.target.value.toUpperCase();
    setInputValueCompanyName(value);
  };

  const handleInputValueNameChange = (e) => {
    const value = e.target.value.toUpperCase();
    setInputValueName(value);
  };

  const handleInputMobileNumber = (event) => {
    const value = event.target.value;

    // Use regular expression to check if the input contains exactly 10 numbers
    if (/^[0-9]{0,10}$/.test(value)) {
      setInputMobileNumber(value);
    }
  };

  const handleInputAlertMobileNumber = (e) => {
    const value = e.target.value;
    if (/^[0-9]{0,10}$/.test(value)) {
      setInputAlertMobileNumber(value);
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/sign-up-2");
  };

  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    setIsValid(e.target.value !== ""); // You can add your own validation logic here
  };


  
  return (
    <>
      {/* <form className="d-flex" onSubmit={handleSignUp}> */}
        <div className="pt-5">
          <p className="mb-3" style={{ color: "var(--SecondaryColor)" }}>
            <b>Personal Details</b>
          </p>
          <div className="row justify-content-between border p-md-3 p-2 rounded rounded-4 border-2">
            <div className="col-lg-12 col-md-5">
              <div
                className={`inputGroup ${
                  isFocused || isValid ? "focused" : ""
                }`}
              >
                <input
                  type="text"
                  required
                  autoComplete="off"
                  onFocus={handleFocus}
                  onClick={handleBlur}
                  className="form-control focus-ring focus-ring-light "
                  value={userData['name']}
                  onChange={(e)=>setUserData({...userData, "name": e.target.value})}
                />
                <label htmlFor="name" className="mb-2">
                  Name
                </label>
              </div>
            </div>
            <div className="col-lg-12 col-md-5">
              <div
                className={`inputGroup ${
                  isFocused || isValid ? "focused" : ""
                }`}
              >
                <input
                  type="text"
                  required
                  autoComplete="off"
                  onFocus={handleFocus}
                  onClick={handleBlur}
                  value={userData['emailID']}
                  onChange={(e)=>setUserData({...userData, "emailID": e.target.value})}
                  className="form-control focus-ring focus-ring-light "
                />
                <label className="mb-2">Email ID</label>
              </div>
            </div>

            <div className="col-lg-6 col-md-5">
              <div
                className={`inputGroup ${
                  isFocused || isValid ? "focused" : ""
                } `}
              >
                <input
                  type="text"
                  required
                  autoComplete="off"
                  onFocus={handleFocus}
                  onClick={handleBlur}
                  value={userData['mobileNo']}
                  onChange={(e)=>setUserData({...userData, "mobileNo": e.target.value})}
                  className="form-control focus-ring focus-ring-light "
                />
                <label className="mb-2">Mobile Number</label>
              </div>
            </div>

            <div className="col-lg-6 col-md-5">
              <div
                className={`inputGroup ${
                  isFocused || isValid ? "focused" : ""
                }`}
              >
                <input
                  type="text"
                  required
                  autoComplete="off"
                  onFocus={handleFocus}
                  onClick={handleBlur}
                  value={userData['alertMobileNumber']}
                  onChange={(e)=>setUserData({...userData, "alertMobileNumber": e.target.value})}
                  className="form-control focus-ring focus-ring-light "
                />
                <label className="mb-2 text-nowrap">Alert Mobile Number</label>
              </div>
            </div>

          </div>
            <div className="row justify-content-center my-3 px-0">
              <div className="col-6 col-md-5">
                <button className="btn-prev w-100" onClick={() => setStep(1)}>
                  Back
                </button>
              </div>
              <div className="col-6  col-md-5">
                <button className="btn w-100" onClick={() => setStep(3)}>
                  Next
                </button>
              </div>
            </div>
        </div>
      {/* </form> */}
    </>
  );
};

export default Sign_Up_Form_2;
