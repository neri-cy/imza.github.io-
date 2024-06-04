import React from "react";
import upload from "../Assets/icons8-upload-64.png";
import send from "../Assets/icons8-send-64.png";
import recieve from "../Assets/icons8-mailing-48.png";

const Work = () => {
  const workInfoData = [
    {
      image: upload,
      title: "Créez un document ",
      text: "Téléchargez ou créez votre document directement dans Imza.",
    },
    {
      image: send,
      title: "Envoyez pour signature ",
      text: "Ajoutez les destinataires et envoyez pour signature en un clic.",
    },
    {
      image: recieve,
      title: "Recevez la signature ",
      text: "Recevez des notifications dès que le document est signé.",
    },
  ];
  return (
    <div id="work" className="work-section-wrapper">
      <div className="work-section-top">
        
        <h1 className="primary-heading">Comment ça marche ?</h1>
        <p className="primary-text">
        Un processus simple que nous pouvons le résumer en 3 étapes faciles
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} style={{width:"70px"}} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
