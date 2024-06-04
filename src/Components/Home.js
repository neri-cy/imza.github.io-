import React from "react";
import background from "../Assets/background1.jpg"
import { FiArrowRight } from "react-icons/fi";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className="home-container">
     
      <div className="home-banner-container">
      <div className="home-bannerImage-container">
          <img src={background} style={{borderRadius:"1000px"}} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Simplifiez Vos Signatures Avec Imza
          </h1>
          <p className="primary-text">
          La solution de signature électronique la plus rapide, sécurisée et fiable
          </p>
          <div className="flex gap-6">
          <button className="secondary-button">
          Essayer maintenant <FiArrowRight />{" "}
          </button>
          <button className="secondary-button ">
            <BsFillPlayCircleFill /> <span className="ml-4"> Voir Vidéo</span> 
          </button> 
          </div>
          
        </div>
        <div className="home-image-section">
          {/* <img src={BannerImage} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
