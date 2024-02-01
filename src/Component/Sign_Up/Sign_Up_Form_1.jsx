import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sign_Up.css";
import { multiStepContext } from "./StepContext";

const Sign_Up_Form_1 = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  // const [inputMobileNumber, setInputMobileNumber] = useState("");
  // const [inputAlertMobileNumber, setInputAlertMobileNumber] = useState("");
  // const [inputValueCompanyName, setInputValueCompanyName] = useState("");
  // const [inputValueName, setInputValueName] = useState("");
  const navigate = useNavigate();

  // const handleInputValueCompanyNameChange = (event) => {
  //   setUserData({ ...userData, firstname: event.target.value });
  //   const value = event.target.value.toUpperCase();
  //   setInputValueCompanyName(value);
  // };

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

  const [currentStep, setCurrentStep] = useState(1);

  const updateSteps = (step) => {
    setCurrentStep(step);
  };
  return (
    <>
      {/* <form className="d-flex" onSubmit={handleSignUp}> */}
        <div className="pt-4">
          <p className="mb-3" style={{ color: "var(--SecondaryColor)" }}>
            <b>Company details</b>
          </p>
          <div className="row justify-content-center justify-content-md-between border p-md-3 p-2 rounded rounded-4 border-2">
            <div className="col-lg-12 col-md-5">
              <div
                className={`inputGroup ${
                  isFocused || isValid ? "focused" : ""
                } mb-3`}
              >
                <input
                  type="text"
                  required
                  autoComplete="off"
                  onFocus={handleFocus}
                  onClick={handleBlur}
                  className="form-control focus-ring focus-ring-light "
                  value={userData['companyName']}
                  onChange={(e)=>setUserData({...userData, "companyName": e.target.value})}
                />
                <label htmlFor="name" className="mb-2">
                  Company Name
                  {/* <span className="text-danger">*</span> */}
                </label>
              </div>
            </div>
            <div className="col-lg-12 col-md-5">
              <div
                className={`inputGroup ${
                  isFocused || isValid ? "focused" : ""
                } mb-3`}
              >
                <select
                  style={{ color: "var(--grayText)" }}
                  className="form-select form-select-lg mb-3 form-control focus-ring focus-ring-light "
                  aria-label="Large select example"
                  value={userData['companyType']}
                  onChange={(e)=>setUserData({...userData, "companyType": e.target.value})}
                >
                  <option selected>Type of Company</option>
                  <option value="1">Public Limited Company (PLC)</option>
                  <option value="2">Private Limited Company (PVT)</option>
                  <option value="3">One Person Company (OPC)</option>
                </select>
                <label className="mb-2 ms-3 py-0 px-2">
                  Select Company Type
                </label>
                <span
                  style={{
                    float: "right",
                    cursor: "pointer",
                    marginRight: "15px",
                    marginTop: "-51px",
                    color: "var(--grayText)",
                  }}
                >
                  <i class="fa-solid fa-angle-down"></i>
                </span>
              </div>
            </div>

            <div className="col-lg-12 col-md-5">
              <div
                className={`inputGroup ${
                  isFocused || isValid ? "focused" : ""
                } mb-3`}
              >
                <input
                  type="text"
                  required
                  autoComplete="off"
                  onFocus={handleFocus}
                  onClick={handleBlur}
                  value={userData['companyAddress']}
                  onChange={(e)=>setUserData({...userData, "companyAddress": e.target.value})}
                  className="form-control focus-ring focus-ring-light "
                />
                <label className="mb-2">Address</label>
              </div>
            </div>

            <div className="col-lg-6 col-md-5">
              <div
                className={`inputGroup ${
                  isFocused || isValid ? "focused" : ""
                } mb-3`}
              >
                <input
                  type="text"
                  required
                  autoComplete="off"
                  onFocus={handleFocus}
                  onClick={handleBlur}
                  value={userData['companyCity']}
                  onChange={(e)=>setUserData({...userData, "companyCity": e.target.value})}
                  className="form-control focus-ring focus-ring-light "
                />
                <label className="mb-2">City</label>
              </div>
            </div>

            <div className="col-lg-6 col-md-5 ">
              <div
                className={`inputGroup ${
                  isFocused || isValid ? "focused" : ""
                } mb-3`}
              >
                <input
                  type="text"
                  required
                  autoComplete="off"
                  onFocus={handleFocus}
                  onClick={handleBlur}
                  value={userData['companyState']}
                  onChange={(e)=>setUserData({...userData, "companyState": e.target.value})}
                  className="form-control focus-ring focus-ring-light "
                />
                <label className="mb-2 text-nowrap">State</label>
              </div>
            </div>

            <div className="col-lg-6 col-md-5 ">
              <div
                className={`inputGroup ${
                  isFocused || isValid ? "focused" : ""
                } mb-3`}
              >
                <input
                  type="text"
                  required
                  autoComplete="off"
                  onFocus={handleFocus}
                  onClick={handleBlur}
                  value={userData['companyCountry']}
                  onChange={(e)=>setUserData({...userData, "companyCountry": e.target.value})}
                  className="form-control focus-ring focus-ring-light "
                />
                <label className="mb-2">Country</label>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div
                className={`inputGroup ${
                  isFocused || isValid ? "focused" : ""
                } mb-3`}
              >
                <input
                  type="text"
                  required
                  autoComplete="off"
                  onFocus={handleFocus}
                  onClick={handleBlur}
                  value={userData['companyPincode']}
                  onChange={(e)=>setUserData({...userData, "companyPincode": e.target.value})}
                  className="form-control focus-ring focus-ring-light "
                />
                <label className="mb-2 text-nowrap">Pincode</label>
              </div>
            </div>

          </div>
            <div className="my-3 row justify-content-end">
              <div className="col-lg-5 col-6 text-end px-4">
                <button
                  className="btn w-75"
                  onClick={() => setStep(2)}
                  disabled={currentStep === 4}
                >
                  Next
                </button>
              </div>
            </div>
        </div>
      {/* </form> */}
    </>
  );
};

export default Sign_Up_Form_1;
