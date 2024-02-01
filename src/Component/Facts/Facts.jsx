import React from "react";
import "./Facts.css";
import car from "../../Asset/facts-left.png";
import line from "../../Asset/facts-right.png";

const Facts = () => {
  return (
    <section className="facts facts-number">
      <div className="facts-left">
        <img src={car} alt="" className="img-fluid" />
      </div>
      <div className="facts-right">
        <img src={line} alt="" className="img-fluid " />
      </div>
      <div className="container ">
        <div className="row mb-5 ">
          <h2 className="text-white text-center ">Facts By The Numbers</h2>
          <p className="col-lg-7 text-center  m-auto text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            iusto maxime eos similique id dolore culpa quaerat dolorem quidem
            quod minus tempore, sed provident vel odio odit labore dolores!
            Fugit.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 d-flex">
            <div className="count-group flex-fill ">
              <div className="d-flex align-items-center ">
                <div className="count-img">
                  <i class="fa-regular fa-heart"></i>
                </div>
                <div className="count-content">
                  <h4>16K+</h4>
                  <p className="m-0">Happy Customer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 d-flex">
            <div className="count-group flex-fill ">
              <div className="d-flex align-items-center ">
                <div className="count-img">
                <i class="fa-solid fa-car"></i>
                </div>
                <div className="count-content">
                  <h4>2547+</h4>
                  <p className="m-0">Count of Cars</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 d-flex">
            <div className="count-group flex-fill ">
              <div className="d-flex align-items-center ">
                <div className="count-img">
                <i class="fa-solid fa-headphones"></i>
                </div>
                <div className="count-content">
                  <h4>625K+</h4>
                  <p className="m-0">Car Center Solutions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 d-flex">
            <div className="count-group flex-fill ">
              <div className="d-flex align-items-center ">
                <div className="count-img">
                <i class="fa-solid fa-clock-rotate-left"></i>   
                </div>
                <div className="count-content">
                  <h4>200K+</h4>
                  <p className="m-0">Total Kilometer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
