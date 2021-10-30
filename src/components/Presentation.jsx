/* eslint-disable react/prefer-stateless-function */
import React from "react";
import ImgPresentation from "../img/Imagem lucas presetation.png";
import "../styles/Presentation.css";

class Presentation extends React.Component {
  render() {
    return (
      <div className="presentation">
        <section className="presentation-container">
          <div className="presentation-img-container">
            <img className="presentation-img" src={ImgPresentation} alt="Foto de Lucas Nonato" />
          </div>
          <div className="presentation-text-container">
            <h1>Eu sou Lucas Nonato</h1>
            <h1>
              Desenvolvedor Web <br />
              <span className="presentation-span">Full-Stack</span>
            </h1>
            <h1>UX Designer</h1>
          </div>
        </section>
      </div>
    );
  }
}
export default Presentation;
