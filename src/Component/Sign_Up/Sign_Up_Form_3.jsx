import React, { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
import "./Sign_Up.css";
import { FaCircleArrowUp } from "react-icons/fa6";
import { multiStepContext } from "./StepContext";

const Sign_Up_Form_3 = () => {
  const { setStep, userData, setUserData, submitData } =
    useContext(multiStepContext);

  const [inputValueCompanyName, setInputValueCompanyName] = useState("");


  const handleInputValueCompanyNameChange = (event) => {
    const value = event.target.value.toUpperCase();
    setInputValueCompanyName(value);
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

 
  // const [image, setImage] = useState(null);
  // const [fileName, setFileName] = useState("No Selected File");

  const [checkImage, setCheckImage] = useState(null);
  const [checkName, setCheckName] = useState("No Selected File");

  const [panImage, setPANImage] = useState(null);
  const [panName, setPANName] = useState("No Selected File");

  const [gstImage, setGSTImage] = useState(null);
  const [gstName, setGSTName] = useState("No Selected File");

  const [rcImage, setRCImage] = useState(null);
  const [rcName, setRCName] = useState("No Selected File");
  console.log(panImage);

  return (
    <>
      <form className="d-flex">
        <div className="pt-5">
          <p className="mb-3" style={{ color: "var(--SecondaryColor)" }}>
            <b>Bank Detail & Company ID Proof</b>
          </p>
          <div className="row justify-content-between border p-md-3 p-2 rounded rounded-4 border-2">
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
                  value={userData["accountNo"]}
                  onChange={(e) =>
                    setUserData({ ...userData, accountNo: e.target.value })
                  }
                />
                <label>Account Number</label>
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
                  className="form-control focus-ring focus-ring-light "
                  value={userData["beneficiaryName"]}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      beneficiaryName: e.target.value,
                    })
                  }
                />
                <label>Beneficiary Name</label>
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
                  value={userData["ifscCode"]}
                  onChange={(e) =>
                    setUserData({ ...userData, ifscCode: e.target.value })
                  }
                  className="form-control focus-ring focus-ring-light "
                />
                <label>IFSC Code</label>
              </div>
            </div>
            <div className="col-lg-6 col-md-5 justify-content-center d-flex align-items-center my-2">
              <div
                className="upload-file rounded overflow-hidden p-3 w-100 "
                style={{ height: "52px" }}
                onClick={() =>
                  document.querySelector(".input-field-check").click()
                }
              >
                <input
                  id="file"
                  type="file"
                  hidden
                  className="input-field-check"
                  onChange={({ target: { files } }) => {
                    files[0] && setCheckName(files[0].name);
                    if (files) {
                      setCheckImage(URL.createObjectURL(files[0]));
                    }
                  }}
                />
                {checkImage ? (
                  <span>{checkName}</span>
                ) : (
                  <>
                    <FaCircleArrowUp
                      className="h4 m-0"
                      style={{ color: "var(--textColor)" }}
                    />
                    <p className="m-0">Upload Check </p>
                  </>
                )}
              </div>
            </div>
          </div>

          <p className="pt-4 mb-3" style={{ color: "var(--SecondaryColor)" }}>
            <b>Company ID Proof</b>
          </p>
          <div className="row justify-content-between border p-md-3 p-2 rounded rounded-4 border-2">
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
                  value={inputValueCompanyName}
                  onChange={handleInputValueCompanyNameChange}
                />
                <label>PAN Number</label>
              </div>
            </div>
            <div className="col-lg-6 col-md-5 justify-content-center d-flex align-items-center my-2">
              <div
                className="upload-file rounded overflow-hidden p-3 w-100 "
                style={{ height: "52px" }}
                onClick={() =>
                  document.querySelector(".input-field-pan").click()
                }
              >
                <input
                  id="file"
                  type="file"
                  hidden
                  className="input-field-pan"
                  onChange={({ target: { files } }) => {
                    files[0] && setPANImage(files[0].name);
                    if (files) {
                      setPANName(URL.createObjectURL(files[0]));
                    }
                  }}
                />
                {panImage ? (
                  <span>{panName}</span>
                ) : (
                  <>
                    <FaCircleArrowUp
                      className="h4 m-0"
                      style={{ color: "var(--textColor)" }}
                    />
                    <p className="m-0">Upload PAN</p>
                  </>
                )}
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
                  className="form-control focus-ring focus-ring-light "
                  value={inputValueCompanyName}
                  onChange={handleInputValueCompanyNameChange}
                />
                <label>GST Number</label>
              </div>
            </div>

            <div className="col-lg-6 col-md-5 justify-content-center d-flex align-items-center my-2">
              <div
                className="upload-file rounded overflow-hidden p-3 w-100 "
                style={{ height: "52px" }}
                onClick={() =>
                  document.querySelector(".input-field-gst").click()
                }
              >
                <input
                  id="file"
                  type="file"
                  hidden
                  className="input-field-gst"
                  onChange={({ target: { files } }) => {
                    files[0] && setGSTName(files[0].name);
                    if (files) {
                      setGSTImage(URL.createObjectURL(files[0]));
                    }
                  }}
                />
                {gstImage ? (
                  <span>{gstName}</span>
                ) : (
                  <>
                    <FaCircleArrowUp
                      className="h4 m-0"
                      style={{ color: "var(--textColor)" }}
                    />
                    <p className="m-0">Upload GST</p>
                  </>
                )}
              </div>
            </div>

            <div className="col-lg-6 col-md-5 justify-content-center d-flex align-items-center my-3">
              <div
                className="upload-file rounded overflow-hidden p-3 w-100 "
                style={{ height: "52px" }}
                onClick={() =>
                  document.querySelector(".input-field-rc").click()
                }
              >
                <input
                  id="file"
                  type="file"
                  hidden
                  className="input-field-rc"
                  onChange={({ target: { files } }) => {
                    files[0] && setRCName(files[0].name);
                    if (files) {
                      setRCImage(URL.createObjectURL(files[0]));
                    }
                  }}
                />
                {rcImage ? (
                  <span>{rcName}</span>
                ) : (
                  <>
                    <FaCircleArrowUp
                      className="h4 m-0"
                      style={{ color: "var(--textColor)" }}
                    />
                    <p className="m-0">Upload R C</p>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="my-3 row justify-content-between">
            <div className="col-6">
              <button className="btn-prev w-100" onClick={() => setStep(2)}>
                Back
              </button>
            </div>
            <div className="col-6 ">
              <button className="btn w-100" onClick={() => submitData()}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Sign_Up_Form_3;
