import React from "react";

const Contact = () => {
  return (
    <div id="support" className="contact-page-wrapper">
      <h1 className="primary-heading">Vous avez des questions en tête?</h1>
      <h1 className="primary-heading">Laissez-nous vous aider</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
