import React from "react";
import cocktail from "../cocktails.jpg";

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit dolores
        soluta fugiat dolor veritatis cum aut repudiandae ratione, eaque earum
        eos quidem sunt totam rem. Omnis at consequuntur praesentium?
      </p>
      <img className='cocktail' src={cocktail} alt='cocktail' />
    </section>
  );
};

export default About;
