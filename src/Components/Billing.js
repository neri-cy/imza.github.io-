import React from "react";


const Billing = () => {
  const workInfoData = [
    {
      title: "Essai Gratuit de 7 Jours",
      text: "Découvrez Imza avec un essai gratuit d'une semaine, comprenant un nombre limité de signatures simples.",
      button: "Essayez gratuitement",
    },
    {
      title: "Plan Petit Volume",
      text: "Idéal pour les professionnels individuels ou les petites entreprises ayant des besoins limités en signatures électroniques avancées.",
      button: "Choisissez ce plan",
    },
    {
      title: "Plan Volume Moyen",
      button: "Choisissez ce plan",
      text: "Parfait pour les entreprises de taille moyenne avec des besoins modérés en signatures électroniques.",
      //   caract: ["Nombre de signatures électroniques avancées : [nombre]","Support client"]
    },
    {
      title: "Plan Grand Volume",
      text: "Conçu pour les grandes entreprises avec des besoins élevés en signatures électroniques.",
      button: "Choisissez ce plan",
    },
    {
      title: "Solution Entreprise",
      text: "Une solution personnalisée pour les grandes structures, avec installation sur votre propre serveur pour une sécurité et un contrôle maximaux",
      button: "Contactez-nous pour un devis personnalisé",
    },
  ];
  return (
    <div id="billing" className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Nos Plans Tarifaires</h1>
        <p className="primary-text">
          Des solutions flexibles pour répondre à tous vos besoins de signature
          électronique.
        </p>
      </div>
      <div className="overflow-x-scroll">
      <div className="flex flex-wrap ">
          {workInfoData.map((data) => (
            <div className="work-section-info" key={data.title}>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
              <button className="secondary-button">{data.button}</button>
            </div>
          ))}
        </div>
      </div>
        
      
    </div>
  );
};

export default Billing;
