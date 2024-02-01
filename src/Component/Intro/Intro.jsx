import React from "react";
// import "./Intro.css";
// import { motion } from "framer-motion";
import car from "./car.png";

const Intro = () => {
  // const transition = { duration: 1.5, type: "spring" };

  return (
    <>
      <div className="container">
        <div className="row pt-lg-5 pt-md-3"></div>
        <div className="row min-vh-50">
          <div className="col-lg-6 pt-5">
            <div
              className="mb-3"
              style={{ fontSize: "20px", color: "var(--PrimaryColor)" }}
            >
              Plan your trip now
            </div>
            <div
              className="mb-3 display-5"
              style={{
                color: "var(--textColor)",
              }}
            >
              Explore the world with comfortable car
            </div>
            <div
              className="mb-3"
              style={{
                fontSize: "17px",
                color: "var(--paraColor)",
                fontFamily: "Inter, sans-serif;",
              }}
            >
              Embark on unforgettable adventures and discover the world in
              unparalleled comfort and style with our fleet of exceptionally
              comfortable cars.
            </div>
          </div>
          <div className="col-lg-6 pt-0 pt-sm-5 ">
            <img src={car} alt="" className="w-100" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
