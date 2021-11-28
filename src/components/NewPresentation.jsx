import React from "react";
import imgLucasPresentation from '../img/lucasPresentation.svg'

const NewPresentation = (props) => {
  return (
    <div style={{
      margin: '0 64px 0 64px',
      display: 'flex'
      }}>
      <div style={{height: '420px'}}>
        <img style={{height: '100%'}} src={imgLucasPresentation} alt="" />
      </div>
      <div>
        <div >
          <a href="#experience">
            Experiência
          </a>
          <a href="#skills" >
            Habilidades
          </a>
          <a href="#portfolio">
            Portfolio
          </a>
          <a href="#contact">
            Contato
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewPresentation;