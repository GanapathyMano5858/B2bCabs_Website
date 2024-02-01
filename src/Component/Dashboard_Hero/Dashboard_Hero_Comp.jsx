import React, { useState } from "react";
import { MdLocationSearching } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import "./Dashboard_Hero_Comp.css";
import backgroundVideo from "../../Asset/Background.webm";
import Ads from "../Ads/Ads";
import Dashboard_Ads from "../Ads/Dashboard_Ads";
import DatePicker from "../DatePicker/DatePicker";

const Dashboard_Hero_Comp = () => {
  const tabsData = [
    {
      id: 1,
      title: "Airport Transfer",
      firstRadioButtonLable: "From Airport",
      secondRadioButtonLable: "To Airport",
      first_input_box_placeholder: "Current Location",
      second_input_box_placeholder: "Enter Destination",
      third_input_box_placeholder: "Pick up Date & Time",
      icon: "FaLocationCrosshairs",
    },
    {
      id: 2,
      title: "Rental",
      firstRadioButtonLable: "Daily Rental",
      secondRadioButtonLable: "Hourly Rental",
      first_input_box_placeholder: "Current Location",
      second_input_box_placeholder: "Select Package",
      third_input_box_placeholder: "Pick up Date & Time",
    },
    {
      id: 3,
      title: "Holidays Package",
      first_input_box_placeholder: "Current Location",
      second_input_box_placeholder: "Enter Destination",
      third_input_box_placeholder: "Pick up Date & Time",
      fourth_input_box_placeholder: "Select Package",
    },
  ];

  // useState function start
  const [activeTab, setActiveTab] = useState(1);
  const [isToggled, setToggled] = useState(false);
  const [selectedOption, setSelectedOption] = useState("option1");
  // useState function end

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleCurrentLocation = (e) => {
    e.preventDefault();
    setToggled(!isToggled);
  };

  const handleToggle = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="hero-banner">
        <div className="overlay"></div>
        <video
          src={backgroundVideo}
          muted
          autoPlay
          loop
          type="video/mp4"
        ></video>
      </div>
      <div className="container-lg container-fluid position-relative height">
        <div className="row justify-content-center ">
          <div className="col-lg-12 mobile_sc">
            <div className="col-md-4 justify-content-around tab_box">
              {tabsData.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab_btn ${activeTab === tab.id ? "actives" : ""}`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.title}
                </button>
              ))}
              {/* <div className="line" style={{ width: `${10 * (activeTab + 1)}px`, left: `${90 * activeTab}px` }}></div> */}
            </div>
            <div className="content_box">
              {tabsData.map((tab) => (
                <div
                  key={tab.id}
                  className={`content ${activeTab === tab.id ? "active" : ""}`}
                >
                  {/* <form action=""> */}
                  <div className={`row ${tab.id === 3 ? "d-none" : ""} pb-2`}>
                    <div className="radio-input-wrapper d-flex col-md-5 gap-2">
                      <label className="label px-0 px-sm-2 px-md-3 py-1 py-sm-2">
                        <input
                          type="radio"
                          id="exampleRadios1"
                          className="radio-type"
                          value="option1"
                          checked={selectedOption === "option1"}
                          onChange={() => handleToggle("option1")}
                        />
                        <div class="label-text">
                          {tab.firstRadioButtonLable}
                        </div>
                      </label>
                      <label className="label px-0 px-sm-2 px-md-3 py-1 py-sm-2">
                        <input
                          type="radio"
                          id="exampleRadios2"
                          className="radio-type"
                          value="option2"
                          checked={selectedOption === "option2"}
                          onChange={() => handleToggle("option2")}
                        />
                        <div class="label-text">
                          {tab.secondRadioButtonLable}
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="row justify-content-between align-items-center position-relative">
                    <div className=" col-lg-3 col-md-3 z-1">
                      <div className="inputdiv px-3 py-lg-3 py-md-2  m-0 d-flex align-items-center justify-content-between">
                        <label className="greencircle position-relative"></label>
                        <input
                          type="text"
                          className=" inputbox w-75"
                          placeholder={tab.first_input_box_placeholder}
                        />
                        <button
                          className="currentlocationbtn"
                          onClick={handleCurrentLocation}
                        >
                          <MdLocationSearching
                            className={`${
                              isToggled ? "clicked" : "notclicked"
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    <hr className="hrLine  d-block d-sm-none d-md-block d-lg-block d-xl-block" />

                    <div className="divline d-none d-sm-block d-md-none d-lg-none d-xl-none">
                      <hr className="hrLine" />
                    </div>
                    <div className=" col-lg-3 col-md-3 z-1">
                      <div className="inputdiv px-3 py-lg-3 py-md-2  m-0 d-flex align-items-center justify-content-between">
                        <label className="redcirlce"></label>
                        <input
                          type="text"
                          className=" inputbox w-75"
                          placeholder={tab.second_input_box_placeholder}
                        />
                        <button className="currentlocationbtn opacity-0">
                          <MdLocationSearching />
                        </button>
                      </div>
                    </div>
                    <hr className="hrLine  d-block d-sm-none" />

                    <div className="divline d-none d-sm-block d-md-none d-lg-none d-xl-none">
                      <hr className="hrLine" />
                    </div>
                    <div className=" col-lg-3 col-md-3 z-1">
                      <div className="px-3 py-lg-3 py-md-2  m-0 d-flex align-items-center justify-content-between">
                        <FaCalendarAlt className="opacity-0 "/>
                        <DatePicker className="inputdiv w-100" />
                        {/* <button className="currentlocationbtn opacity-0">
                          <MdLocationSearching />
                        </button> */}
                      </div>
                    </div>
                    {/* <div className="col-lg-4 col-md-4 z-3"><input type="text" className="inputbox px-lg-4 py-lg-3 py-md-2  px-md-3 m-0" placeholder = {tab.second_input_box_placeholder} /></div> */}
                    <div className="col-lg-3 col-md-3 z-1">
                      <button
                        type="submit"
                        className="text-nowrap search_btn w-100 py-lg-3 px-lg-4 py-md-2 px-md-3 text-light"
                      >
                        SEARCH &nbsp;
                        <span style={{ color: "#3cef83" }}>CABS</span>
                      </button>
                    </div>
                  </div>

                  {/* </form> */}
                </div>
              ))}
            </div>
            <Dashboard_Ads/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard_Hero_Comp;
