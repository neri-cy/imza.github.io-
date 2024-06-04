import React from "react";
import AboutBackground from "../Assets/background2.jpg";

const About = () => {
  return (
    <div id="about" className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} style={{borderRadius:"900px"}} alt="" />
      </div>
      <div className="about-section-image-container">
        {/* <img src={AboutBackgroundImage} alt="" /> */}
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">À propos</p>
        <h1 className="primary-heading">
        Qu'est-ce que Imza?
        </h1>
        <p className="primary-text">
        Imza est une solution de signature électronique conçue pour 
        simplifier et sécuriser vos processus de signature. 
        Que vous soyez une petite entreprise ou une grande organisation, 
        Imza offre une plateforme intuitive et robuste pour toutes vos
         transactions électroniques.
        </p>
        
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          
        </div>
      </div>
    </div>
  );
};

export default About;
