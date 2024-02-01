import React, { useContext } from "react";
import Sign_Up_Form_1 from "./Sign_Up_Form_1";
import Sign_Up_Form_2 from "./Sign_Up_Form_2";
import Sign_Up_Form_3 from "./Sign_Up_Form_3";
import { Stepper, StepLabel, Step } from "@mui/material";
import { multiStepContext } from "./StepContext";
import { Link, useNavigate } from "react-router-dom";

const Sign_Up_LandingPage = () => {
  const { currentStep, finalData } = useContext(multiStepContext);

  function showStep(step) {
    switch (step) {
      case 1:
        return <Sign_Up_Form_1 />;
      case 2:
        return <Sign_Up_Form_2 />;
      case 3:
        return <Sign_Up_Form_3 />;
    }
  }
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div className="bg">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-6 bg-light rounded-3 mt-5 px-3 py-3">
              <div className="row align-items-center justify-content-center pt-lg-1">
                <h3
                  className="mt-1 mb-4 text-center"
                  style={{ color: "var(--blackColor)" }}
                >
                  Signup Form
                </h3>
                {/* <form className="d-flex" onSubmit={handleSignUp}> */}


                <Stepper
                  style={{ width: "75%", color: "var(--textColor) !" }}
                  activeStep={currentStep - 1}
                  orientation="horizontal"
                >
                  <Step>
                    <StepLabel></StepLabel>
                  </Step>
                  <Step>
                    <StepLabel></StepLabel>
                  </Step>
                  <Step>
                    <StepLabel></StepLabel>
                  </Step>
                </Stepper>

                
                {/* </form> */}
                {showStep(currentStep)}
              </div>
              <div className="text-center mt-3">
                <span style={{ color: "var(--grayText)" }}>
                  Already have an Account?
                </span>
                <Link to={"/sign-up"} style={{ color: "#127384" }}>
                  &nbsp; Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign_Up_LandingPage;
