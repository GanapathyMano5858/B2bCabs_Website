import React from "react";
import "./KeyFeatures.css"

const KeyFeatures = () => {
  return (
    <section className="we-offer-area text-center bg-gray p-lg-4 ">
      <div className="container-fluid ">
        <div className="row KeyFeatures">
          <span className="mb-0">
            Key <span className="sp">Features</span>
          </span>
          <span className="mb-4">
            Make Your<span className="sp">Trip Your</span> Way With Us
          </span>
        </div>

        <div className="row our-offer-items less-carousel">
          {/* <!-- Single Item --> */}
          <div className="col-md-3 col-sm-6 equal-height">
            <div className="item">
              <i class="fa-solid fa-truck-plane"></i>
              <h4>Corporate Account</h4>
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
              <h4>Advance Booking</h4>
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
              <h4>Customer Support</h4>
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
              <h4>Airport Executive</h4>
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

export default KeyFeatures;

// 101270578780
