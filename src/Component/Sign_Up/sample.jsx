
// <div className="mb-3">
// <label className="mb-2">
//   <b>
//     Address
//     <span className="text-danger">*</span>
//   </b>
// </label>
// <input
//   style={{ color: "var(--grayText)" }}
//   type="text"
//   className="form-control focus-ring focus-ring-light "
//   placeholder="Enter Your Company Address"
// />
//               </div>
// <div className="mb-3 d-lg-flex gap-4 d-flex justify-content-between">
//   <div className="w-50">
//     <label className="mb-2">
//       <b>
//         City
//         <span className="text-danger">*</span>
//       </b>
//     </label>
//     <input
//       style={{ color: "var(--grayText)" }}
//       type="Email ID"
//       className="form-control focus-ring focus-ring-light "
//       placeholder="Enter Your City"
//     />
//   </div>
//   <div className="w-50">
//     <label className="mb-2">
//       <b className="text-nowrap">
//         State
//         <span className="text-danger">*</span>
//       </b>
//     </label>
//     <input
//       style={{ color: "var(--grayText)" }}
//       type="text"
//       className="form-control focus-ring focus-ring-light "
//       placeholder="Enter Your State"
//     />

// {/* <input
//   style={{ color: "var(--grayText)" }}
//   type="text"
//   className="form-control focus-ring focus-ring-light "
//   placeholder="Enter Your Country"
// /> */}
//   </div>
// </div>
// <div className="mb-5 d-lg-flex gap-4 d-flex justify-content-between">
//   <div className="w-50">
//     <label className="mb-2">
//       <b>
//         Country
//         <span className="text-danger">*</span>
//       </b>
//     </label>
//     <input
//       style={{ color: "var(--grayText)" }}
//       type="Email ID"
//       className="form-control focus-ring focus-ring-light "
//       placeholder="Enter Your Country"
//     />
//   </div>
//   <div className="w-50">
//     <label className="mb-2">
//       <b className="text-nowrap">
//         Pincode
//         <span className="text-danger">*</span>
//       </b>
//     </label>
//     <input
//       style={{ color: "var(--grayText)" }}
//       type="text"
//       className="form-control focus-ring focus-ring-light "
//       placeholder="Enter Your Pincode"
//     />
//   </div>
// </div>

// <button className="btn btn-outline-light w-100 btn-size mt-1">
//   Next
// </button>
// <div className="text-center mt-5">
//   <span style={{ color: "var(--grayText)" }}>
//     Already have an Account?
//   </span>
//   <Link to={"/sign-up"} style={{ color: "#127384" }}>
//     &nbsp; Sign In
//   </Link>
// </div>

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Sign_Up.css";

// const Sign_Up = () => {

//   return (
//     <>
//     <div className="signUp">
//     <div class="containers">
//         <header>Registration</header>
//         <form action="#">
//             <div class="form first">
//                 <div class="details personal">
//                     <span class="title">Personal Details</span>
//                     <div class="fields">
//                         <div class="input-field">
//                             <label>Full Name</label>
//                             <input type="text" placeholder="Enter your name" required />
//                         </div>
//                         {/* <div class="input-field">
//                             <label>Date of Birth</label>
//                             <input type="date" placeholder="Enter birth date" required />
//                         </div> */}
//                         <div class="input-field">
//                             <label>Email</label>
//                             <input type="text" placeholder="Enter your email" required />
//                         </div>
//                         <div class="input-field">
//                             <label>Mobile Number</label>
//                             <input type="number" placeholder="Enter mobile number" required />
//                         </div>
//                         <div class="input-field">
//                             <label>Alert Mobile Number</label>
//                             <input type="number" placeholder="Enter mobile number" required />
//                         </div>
//                         <div class="input-field">
//                             <label>Gender</label>
//                             <select required>
//                                 <option disabled selected>Select gender</option>
//                                 <option>Male</option>
//                                 <option>Female</option>
//                                 <option>Others</option>
//                             </select>
//                         </div>
//                         <div class="input-field">
//                             <label>Occupation</label>
//                             <input type="text" placeholder="Enter your ccupation" required />
//                         </div>
//                     </div>
//                 </div>
//                 <div class="details ID">
//                     <span class="title">Identity Details</span>
//                     <div class="fields">
//                         <div class="input-field">
//                             <label>ID Type</label>
//                             <input type="text" placeholder="Enter ID type" required />
//                         </div>
//                         <div class="input-field">
//                             <label>ID Number</label>
//                             <input type="number" placeholder="Enter ID number" required />
//                         </div>
//                         <div class="input-field">
//                             <label>Issued Authority</label>
//                             <input type="text" placeholder="Enter issued authority" required />
//                         </div>
//                         <div class="input-field">
//                             <label>Issued State</label>
//                             <input type="text" placeholder="Enter issued state" required />
//                         </div>
//                         <div class="input-field">
//                             <label>Issued Date</label>
//                             <input type="date" placeholder="Enter your issued date" required />
//                         </div>
//                         <div class="input-field">
//                             <label>Expiry Date</label>
//                             <input type="date" placeholder="Enter expiry date" required />
//                         </div>
//                     </div>
//                     <button class="nextBtn">
//                         <span class="btnText">Next</span>
//                         <i class="uil uil-navigator"></i>
//                     </button>
//                 </div>
//             </div>
//             <div class="form second">
//                 <div class="details address">
//                     <span class="title">Address Details</span>
//                     <div class="fields">
//                         <div class="input-field">
//                             <label>Address Type</label>
//                             <input type="text" placeholder="Permanent or Temporary" required />
//                         </div>
//                         <div class="input-field">
//                             <label>Nationality</label>
//                             <input type="text" placeholder="Enter nationality" required />
//                         </div>
//                         <div class="input-field">
//                             <label>State</label>
//                             <input type="text" placeholder="Enter your state" required />
//                         </div>
//                         <div class="input-field">
//                             <label>District</label>
//                             <input type="text" placeholder="Enter your district" required />
//                         </div>
//                         <div class="input-field">
//                             <label>Block Number</label>
//                             <input type="number" placeholder="Enter block number" required />
//                         </div>
//                         <div class="input-field">
//                             <label>Ward Number</label>
//                             <input type="number" placeholder="Enter ward number" required />
//                         </div>
//                     </div>
//                 </div>
//                 <div class="details family">
//                     <span class="title">Family Details</span>
//                     <div class="fields">
//                         <div class="input-field">
//                             <label>Father Name</label>
//                             <input type="text" placeholder="Enter father name" required />
//                         </div>
//                         <div class="input-field">
//                             <label>Mother Name</label>
//                             <input type="text" placeholder="Enter mother name" required />
//                         </div>
//                         <div class="input-field">
//                             <label>Grandfather</label>
//                             <input type="text" placeholder="Enter grandfther name" required />
//                         </div>
//                         <div class="input-field">
//                             <label>Spouse Name</label>
//                             <input type="text" placeholder="Enter spouse name" required />
//                         </div>
//                         <div class="input-field">
//                             <label>Father in Law</label>
//                             <input type="text" placeholder="Father in law name" required />
//                         </div>
//                         <div class="input-field">
//                             <label>Mother in Law</label>
//                             <input type="text" placeholder="Mother in law name" required />
//                         </div>
//                     </div>
//                     <div class="buttons">
//                         <div class="backBtn">
//                             <i class="uil uil-navigator"></i>
//                             <span class="btnText">Back</span>
//                         </div>

//                         <button class="sumbit">
//                             <span class="btnText">Submit</span>
//                             <i class="uil uil-navigator"></i>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     </div>
//     </div>

//     </>
//   );
// };

// export default Sign_Up;
