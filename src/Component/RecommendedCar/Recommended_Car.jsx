import React, { useEffect } from "react";
import "./Recommended_Car.css";

// import image
import img1 from "../../Asset/car1.jpg";
import img2 from "../../Asset/car2.jpg";
import img3 from "../../Asset/car3.jpg";
import img4 from "../../Asset/car4.jpg";
import img5 from "../../Asset/car5.jpg";
import img6 from "../../Asset/car6.jpg";
import img7 from "../../Asset/car7.jpg";
import img8 from "../../Asset/car8.jpg";
import img9 from "../../Asset/car9.jpg";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    CarName: "Toyota Camry SE 350",
    grade: "CULTURAL RELAX",
    engine: "Manual",
    Km: "14Km",
    oil: "Diesel",
    steering: "Basic",
    year: "2018",
    seat: "5 Persons",
    fees: "₹70,000",
  },
  {
    id: 2,
    imgSrc: img2,
    CarName: "Kia Soul 2016",
    grade: "CULTURAL RELAX",
    engine: "Manual",
    Km: "14Km",
    oil: "Diesel",
    steering: "Basic",
    year: "2018",
    seat: "5 Persons",
    fees: "₹70,000",
  },
  {
    id: 3,
    imgSrc: img3,
    CarName: "Audi A3 2019 new",
    grade: "CULTURAL RELAX",
    engine: "Manual",
    Km: "14Km",
    oil: "Diesel",
    steering: "Basic",
    year: "2018",
    seat: "5 Persons",
    fees: "₹70,000",
  },
  {
    id: 4,
    imgSrc: img4,
    CarName: "Ferrari 458 MM Speciale",
    grade: "CULTURAL RELAX",
    engine: "Manual",
    Km: "14Km",
    oil: "Diesel",
    steering: "Basic",
    year: "2018",
    seat: "5 Persons",
    fees: "₹70,000",
  },
  {
    id: 5,
    imgSrc: img5,
    CarName: "2018 Chevrolet Camaro",
    grade: "CULTURAL RELAX",
    engine: "Manual",
    Km: "14Km",
    oil: "Diesel",
    steering: "Basic",
    year: "2018",
    seat: "5 Persons",
    fees: "₹70,000",
  },
  {
    id: 6,
    imgSrc: img6,
    CarName: "Acura Sport Version",
    grade: "CULTURAL RELAX",
    engine: "Manual",
    Km: "14Km",
    oil: "Diesel",
    steering: "Basic",
    year: "2018",
    seat: "5 Persons",
    fees: "₹70,000",
  },
  {
    id: 7,
    imgSrc: img7,
    CarName: "Chevrolet Pick Truck 3.5L",
    grade: "CULTURAL RELAX",
    engine: "Manual",
    Km: "14Km",
    oil: "Diesel",
    steering: "Basic",
    year: "2018",
    seat: "5 Persons",
    fees: "₹70,000",
  },
  {
    id: 8,
    imgSrc: img8,
    CarName: "Toyota Tacoma 4WD",
    grade: "CULTURAL RELAX",
    engine: "Manual",
    Km: "14Km",
    oil: "Diesel",
    steering: "Basic",
    year: "2018",
    seat: "5 Persons",
    fees: "₹70,000",
  },
  {
    id: 9,
    imgSrc: img9,
    CarName: "Acura RDX FWD",
    grade: "CULTURAL RELAX",
    engine: "Manual",
    Km: "14Km",
    oil: "Diesel",
    steering: "Basic",
    year: "2018",
    seat: "5 Persons",
    fees: "₹70,000",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main">
<div className="container ">
<div className="secTitle ">
        <h3 data-aos="fade-right" className="title">
          Explore Most Popular Cars
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, CarName, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={CarName} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">
                    <b>{CarName}</b>
                  </h4>

                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        {/* <small> +1</small> */}
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    Rent Now <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
</div>
    </section>
  );
};

export default Main;
