import React from "react";
import "./AboutUS.css";

const AboutUS = () => {
  return (
    <section className="we-offer-area text-center bg-gray p-lg-5 ">
      <div className="container-fluid ">
        <div className="row">
          <div className="centerDiv">
            <span>
              Our <span className="sp">Services</span>
            </span>
            <span>
              What We <span className="sp">Offer</span> For You
            </span>
          </div>
        </div>

        <div className="row our-offer-items less-carousel">
          {/* <!-- Single Item --> */}
          <div className="col-md-3 col-sm-6 equal-height">
            <div className="item">
              <i class="fa-solid fa-truck-plane"></i>
              <h4>Airport Transport</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          {/* <!-- End Single Item -->

                    <!-- Single Item --> */}
          <div className="col-md-3 col-sm-6 equal-height">
            <div className="item">
              <i class="fa-solid fa-calendar-days"></i>
              <h4>Daily Rental</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          {/* <!-- End Single Item -->

                    <!-- Single Item --> */}
          <div className="col-md-3 col-sm-6 equal-height">
            <div className="item">
              <i class="fa-solid fa-hourglass-half"></i>
              <h4>Hourly Rental</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          {/* <!-- End Single Item -->

                    <!-- Single Item --> */}
          <div className="col-md-3 col-sm-6 equal-height">
            <div className="item">
              <i class="fa-solid fa-cart-flatbed-suitcase"></i>
              <h4>Holiday Packages</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          {/* <!-- End Single Item --> */}
        </div>
      </div>
    </section>
  );
};

export default AboutUS;
