import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Nav_Bar/NavBar";
import Landing_Page from "./Pages/Landing_Page";
import Sign_In from "./Component/Sign_In/Sign_In";
import Sign_Up from "./Component/Sign_Up/Sign_Up";
import StepContext from "./Component/Sign_Up/StepContext";
import Dashboard_Hero from "./Pages/Dashboard_Hero";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing_Page />} />
        <Route path="/sign-in" element={<Sign_In />} />
        <Route
          path="/sign-up"
          element={
            <StepContext>
              <Sign_Up />
            </StepContext>
          }
        />
        <Route path="/dashboard" element={<Dashboard_Hero />} />
      </Routes>
    </BrowserRouter>
  );
}
