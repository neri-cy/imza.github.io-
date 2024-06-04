import React from "react";
import Logo from "../Assets/imza-logo-complet-6.svg";
import slogo from "../Assets/imza-text-3.svg"
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          {/* <img src={Logo} style={{ width: "50px" }} alt="" /> */}
          <img src={slogo} className="p-2" style={{width:"100px"}} />
        </div>
        <div className="footer-icons">
          <p className="flex">
            {" "}
            <BsTwitter style={{ marginBottom: "5px" }} />
            Twitter
          </p>
          <p className="flex">
            {" "}
            <SiLinkedin style={{ marginBottom: "5px" }} /> LinkedIn
          </p>

          <p className="flex">
            {" "}
            <BsYoutube style={{ marginBottom: "5px" }} /> Youtube
          </p>

          <p className="flex">
            {" "}
            <FaFacebookF /> Facebook{" "}
          </p>
        </div>
      </div>

      <div className="footer-section-two">
        <div className="footer-section-columns">
         
        <a href="#home">Accueil</a>
        <a href="#billing">Tarifs</a>
        <a href="#work">Comment ça marche ?</a>
        <a href="#about">Qu'est-ce que Imza?</a>
        <a href="#support">Vous avez besoin d'aide ?</a>
        </div>
        <div className="footer-section-columns">
          <span>Aide</span>
          <span>Partager</span>
        </div>
        <div className="footer-section-columns">
          <span>(+213)-5333-7783</span>
          <span>hello@Imza.dz</span>
          <span>press@Imza.dz</span>
          <span>contact@Imza.dz</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Politique de confidentialité</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
