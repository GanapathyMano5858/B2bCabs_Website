import React, { useState } from "react";
import Sign_Up from "./Sign_Up";
import { Link, useNavigate } from "react-router-dom";

export const multiStepContext = React.createContext();

const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const navigate = useNavigate();

  function submitData() {
    setFinalData((finalData) => [...finalData, userData]);
    setUserData("");
    navigate("/");
  }

  return (
    <div>
      <multiStepContext.Provider
        value={{
          currentStep,
          setStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          submitData,
        }}
      >
        <Sign_Up />
      </multiStepContext.Provider>
    </div>
  );
};

export default StepContext;
