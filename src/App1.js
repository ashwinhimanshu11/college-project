import React from "react";
import './index.css';
import { Link } from "react-router-dom";

const App1 = () => {
    return (
        <div>
            <header>
                <h2>Air and Water Quality Monitoring System</h2>
            </header>
            <section>
                <nav>
                    <a className="anchor-home" href="/">Home</a>
                    <a className="anchor-about" href="/about">About</a>
                    <a className="anchor-contact" href="/contact">Contact</a>
                </nav>
            </section>
            <section className="air-section">
                <h3>AIR QUALITY</h3>
                <p>
                    One of the key components of our system is the air quality monitoring module. This module measures several important parameters of the air, including particulate matter (PM), carbon monoxide (CO), nitrogen dioxide (NO2), ethanol, and ammonia gas (NH3). These pollutants are commonly found in the air and can have negative impacts on human health, such as respiratory problems, heart disease, and cancer.<br />

                    Our air quality monitoring module uses advanced sensors to measure these pollutants in real-time, and transmits the data to our website where it is analyzed and displayed for users. You can view the air quality data in real-time, as well as historical data for a particular location, to understand how air quality changes over time.<br />

                    In addition, we provide recommendations and tips on how to reduce your exposure to harmful pollutants and improve the air quality around you. This includes advice on reducing emissions from vehicles, using clean energy sources, and reducing waste.<br />

                    We are committed to providing accurate and reliable air quality data to our users, and believe that by working together, we can make our environment cleaner and healthier for everyone.
                    <img src="https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/c/5/c589443e4997a588f05a8fd4002f8494f4457134ea1197ca7be4c347c72d2a77/air-quality-monitoring-mc-slide1.png"></img>
                </p>
                <Link to="/air-quality">
                    <button>Collected Data</button>
                </Link>
            </section>
            <section className="water-section">
                <h3>WATER QUALITY</h3>
                <p>
                    In addition to monitoring air quality, our system also measures various parameters of water quality. Water quality is an important concern as it affects not only our health, but also the health of our ecosystems and wildlife. Our water quality monitoring module measures several important parameters, including pH, temperature, dissolved oxygen, total dissolved solids (TDS), and turbidity.<br />

                    These parameters are used to assess the overall health of the water and to detect any potential contaminants that may be present. Our water quality monitoring module uses advanced sensors to measure these parameters in real-time, and transmits the data to our website where it is analyzed and displayed for users.<br />

                    You can view the water quality data in real-time, as well as historical data for a particular location, to understand how water quality changes over time. We also provide recommendations and tips on how to reduce your exposure to harmful contaminants and improve the water quality in your local environment. This includes advice on reducing waste, using environmentally-friendly cleaning products, and properly disposing of hazardous materials.<br />

                    We are committed to providing accurate and reliable water quality data to our users, and believe that by working together, we can make our environment cleaner and healthier for everyone.
                    <img src="https://www.energyly.com/assets/images/water-monitoring-system.webp"></img>
                </p>
                <Link to="/water-quality">
                    <button>Collected Data</button>
                </Link>
            </section>
        </div>
    );
};

export default App1;

