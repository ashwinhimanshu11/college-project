import React from "react";

const Contact = () => {
    return (
        <div>
            <header>
                <h2>AIR AND WATER QUALITY MONITORING SYSTEM</h2>
                <h3>CONTACT US</h3>
            </header>
            <section>
                <nav>
                    <a className="anchor-home" href="/">Home</a>
                    <a className="anchor-about" href="/about">About</a>
                    <a className="anchor-contact" href="/contact">Contact</a>
                </nav>
            </section>
            <section className="contact-section">
                <ul>
                    <li>
                        1. Varun Sachan
                    </li>
                    <li>
                        2. Venna Venkata Siva Reddy
                    </li>
                    <li>
                        3. Ashwin Himanshu
                    </li>
                    <li>
                        4. Utkarsh Gupta
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Contact;