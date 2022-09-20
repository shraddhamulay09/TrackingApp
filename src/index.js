import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PickUp from "./PickUp";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import PickupForm from "./PickupForm";
import Pickup_ from "./Pickup_";
import NewForm from "./NewForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <React.StrictMode>
      <App />
    </React.StrictMode> */}

    <Router>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/pickup_" element={<Pickup_ />} />
        <Route path="/newform" element={<NewForm />}></Route>
      </Routes>
    </Router>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
