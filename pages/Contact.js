import React from "react";
import { FaPhoneAlt, FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="section contact-section">
      <h1 className="section-title">Contact Us</h1>
      <div style={{ textAlign: "center" }}>
        <FaPhoneAlt style={{ fontSize: "3em", color: "white" }} />
        <h2>Call Us at</h2>
        <h3>1-800-TippleFusion</h3>
      </div>

      <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
        <FaMailBulk style={{ fontSize: "3em", color: "white" }} />
        <h2>Email Us At</h2>
        <h3>cocktail@tipplefusion.com</h3>
      </div>
    </section>
  );
};

export default Contact;
