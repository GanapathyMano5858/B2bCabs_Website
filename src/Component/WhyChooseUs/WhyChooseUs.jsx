import React from "react";
import "./WhyChooseUs.css";
import pigbank from "../../Asset/piggy-bank.svg";
import time from "../../Asset/24-7.svg";
import onepoint from "../../Asset/all cab in one point.svg";

// const Leftsidedata = [
//   {
//     id: 1,
//     imgsrc: "https://www.svgrepo.com/show/490000/airport-transfer.svg",
//     Title: "Cost Efficieny",
//     description:
//       "The epitome of romance, Bora Bora is one of the best ravel destinations in the World.",
//   },
//   {
//     id: 2,
//     imgsrc: "https://www.svgrepo.com/show/436179/calendar-date-schedule.svg",
//     Title: "Time Saveing",
//     description:
//       "The epitome of romance, Bora Bora is one of the best ravel destinations in the World.",
//   },
//   {
//     id: 3,
//     imgsrc: "https://www.svgrepo.com/show/490411/time-half-past.svg",
//     Title: "Safety & Security",
//     description:
//       "The epitome of romance, Bora Bora is one of the best ravel destinations in the World.",
//   },
//   {
//     id: 4,
//     imgsrc:
//       "https://seekicon.com/free-icon-download/person-walking-luggage_1.svg",
//     Title: "All variety cabs in one point",
//     description:
//       "The epitome of romance, Bora Bora is one of the best ravel destinations in the World.",
//   },
// ];
// const Rightsidedata = [
//   {
//     id: 1,
//     imgsrc: "https://www.svgrepo.com/show/490000/airport-transfer.svg",
//     Title: "Technology Integration",
//     description:
//       "The epitome of romance, Bora Bora is one of the best ravel destinations in the World.",
//   },
//   {
//     id: 2,
//     imgsrc: "https://www.svgrepo.com/show/436179/calendar-date-schedule.svg",
//     Title: "24/7 Availability",
//     description:
//       "The epitome of romance, Bora Bora is one of the best ravel destinations in the World.",
//   },
//   {
//     id: 3,
//     imgsrc: "https://www.svgrepo.com/show/490411/time-half-past.svg",
//     Title: "Scalability",
//     description:
//       "The epitome of romance, Bora Bora is one of the best ravel destinations in the World.",
//   },
//   {
//     id: 4,
//     imgsrc:
//       "https://seekicon.com/free-icon-download/person-walking-luggage_1.svg",
//     Title: "Holiday Packages",
//     description:
//       "The epitome of romance, Bora Bora is one of the best ravel destinations in the World.",
//   },
// ];

const WhyChooseUs = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-auto text-center whyChooseUs">
            {/* <span></span> */}

            <span>
              <span className="sp">Why </span>Choose Us
            </span>
            <br />
            <span>
              What We <span className="sp">Offer</span> For You
            </span>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 p-lg-3 ">
            <div className="d-md-flex pb-3">
              <div className=" col-lg-2 text-md-center m-auto p-3">
                <img src={pigbank} alt="" className="" style={{width:"2.5rem"}} />
              </div>
              <div className="col-lg-10">
                <div className="display-6 ps-3" style={{color:"var(--PrimaryColor)"}} >Cost Efficieny</div>
                <div className="p-3" style={{ color: "var(--paraColor)" }}>
                  The epitome of romance, Bora Bora is one of the best ravel
                  destinations in the World.
                </div>
              </div>
            </div>

            <div className="d-md-flex pb-3">
              <div className=" col-lg-2 text-md-center m-auto p-3 ">
              <i class="fa-solid fa-user-clock icon"></i>
              </div>
              <div className="col-lg-10">
                <div className="display-6 ps-3"  style={{color:"var(--PrimaryColor)"}}>Time Saving</div>
                <div className="p-3" style={{ color: "var(--paraColor)" }}>
                  The epitome of romance, Bora Bora is one of the best ravel
                  destinations in the World.
                </div>
              </div>
            </div>

            <div className="d-md-flex pb-3">
              <div className=" col-lg-2 text-md-center m-auto p-3 ">
                <i class="fa-solid fa-user-shield icon"></i>
              </div>
              <div className="col-lg-10">
                <div className="display-6 ps-3"  style={{color:"var(--PrimaryColor)"}}>Safety & Security</div>
                <div className="p-3" style={{ color: "var(--paraColor)" }}>
                  The epitome of romance, Bora Bora is one of the best ravel
                  destinations in the World.
                </div>
              </div>
            </div>

            <div className="d-md-flex pb-3">
              <div className=" col-lg-2 text-md-center m-auto p-3 ">
             <img src={onepoint} alt="" style={{width:"2.5rem"}}/>
              </div>
              <div className="col-lg-10">
                <div className="display-6 ps-3"  style={{color:"var(--PrimaryColor)"}}>All type of cabs</div>
                <div className="p-3" style={{ color: "var(--paraColor)" }}>
                  The epitome of romance, Bora Bora is one of the best ravel
                  destinations in the World.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-lg-3 ">
            <div className="d-md-flex pb-3">
              <div className=" col-lg-2 text-md-center m-auto p-3 ">
                <i class="fa-solid fa-microchip icon"></i>
              </div>
              <div className="col-lg-10">
                <div className="display-6 ps-3"  style={{color:"var(--PrimaryColor)"}}>Technology Integration</div>
                <div className="p-3" style={{ color: "var(--paraColor)" }}>
                  The epitome of romance, Bora Bora is one of the best ravel
                  destinations in the World.
                </div>
              </div>
            </div>

            <div className="d-md-flex pb-3">
              <div className=" col-lg-2 text-md-center m-auto p-3 ">
                <img src={time} alt="" style={{width:"2.5rem"}}/>
              </div>
              <div className="col-lg-10">
                <div className="display-6 ps-3"  style={{color:"var(--PrimaryColor)"}}>24/7 Availability</div>
                <div className="p-3" style={{ color: "var(--paraColor)" }}>
                  The epitome of romance, Bora Bora is one of the best ravel
                  destinations in the World.
                </div>
              </div>
            </div>

            <div className="d-md-flex pb-3">
              <div className=" col-lg-2 text-md-center m-auto p-3 ">
              <i class="fa-solid fa-scale-balanced icon"></i>
              </div>
              <div className="col-lg-10">
                <div className="display-6 ps-3"  style={{color:"var(--PrimaryColor)"}}>Scalability</div>
                <div className="p-3" style={{ color: "var(--paraColor)" }}>
                  The epitome of romance, Bora Bora is one of the best ravel
                  destinations in the World.
                </div>
              </div>
            </div>

            <div className="d-md-flex pb-3">
              <div className=" col-lg-2 text-md-center m-auto p-3 ">
                <i class="fa-solid fa-gear icon  "></i>
              </div>
              <div className="col-lg-10">
                <div className="display-6 ps-3"  style={{color:"var(--PrimaryColor)"}}>Holiday Packages</div>
                <div className="p-3" style={{ color: "var(--paraColor)" }}>
                  The epitome of romance, Bora Bora is one of the best ravel
                  destinations in the World.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
