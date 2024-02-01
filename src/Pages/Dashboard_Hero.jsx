import React from "react";
import Dashboard_Hero_Comp from "../Component/Dashboard_Hero/Dashboard_Hero_Comp";
import Dashboard_Navbar from "../Component/Nav_Bar/Dashboard_NavBar";

const Dashboard_Hero = () => {
  return (
    <>
       <Dashboard_Navbar />
      <Dashboard_Hero_Comp />
    </>
  );
};

export default Dashboard_Hero;
