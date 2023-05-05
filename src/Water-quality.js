import React from "react";

const WaterQuality = () => {
    return (
        <div>
            <header>
                <h2>AIR AND WATER QUALITY MONITORING SYSTEM</h2>
                <h3>WATER QUALITY DATA</h3>
            </header>
            <section>
                <nav>
                    <a className="anchor-home" href="/">Home</a>
                    <a className="anchor-about" href="/about">About</a>
                    <a className="anchor-contact" href="/contact">Contact</a>
                </nav>
            </section>
            <section className="water-section">
                <p>
                    <img src="../images/pH.png"></img>
                    <img src="../images/Turbidity.png"></img>
                    <img src="../images/Depth.png"></img>
                </p>
            </section>
        </div>
    );
};

export default WaterQuality;
