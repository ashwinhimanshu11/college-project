import React from "react";
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App1 from "./App1";
import About from "./About";
import Contact from "./Contact";
import AirQuality from "./Air-quality";
import WaterQuality from "./Water-quality";

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<App1 />} ></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/air-quality" element={<AirQuality />}></Route>
                    <Route path="/water-quality" element={<WaterQuality />}></Route>
                </Routes>
            </Router>
        </div>
    );
};

export default App;

