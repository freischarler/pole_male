import React from "react";
import { images } from "../../constants";
import "./Programs.css";

const Programs = () => (
  <div className="app__program_bg app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <h2 className="headtext__cormorant_black fade-in">Clases grupales online</h2>
      <h3 className="h__subtitle_black fade-in-2">Encuentra tu nivel perfecto, ya seas principiante o avanzado. Clases diseñadas para mejorar tu flexibilidad, fuerza y confianza.</h3>
    </div>

    <div className="image-container">
      <div className="image-box">
        <img src={images.program_polesport_01} alt="finus_img" className="app__wrapper_program_img fade-in"/>
        <h3 className="title fade-in-2">POLESPORT</h3>
        <h3 className="description fade-in-25">Acropole, fuerza, flex, dinámicos y giros. Mantén el equilibrio perfecto y realiza movimientos fluidos en un entorno controlado.</h3>
      </div>

      <div className="image-box">
        <img src={images.program_polesport_02} alt="finus_img" className="app__wrapper_program_img fade-in" />
        <h3 className="title fade-in-2">POLE GIRATORIO</h3>
        <h3 className="description fade-in-25">Experimenta la sensación de volar mientras realizas movimientos con fluidez y gracia en una barra que gira contigo. </h3>
      </div>

      <div className="image-box">
        <img src={images.program_polesport_03} alt="finus_img" className="app__wrapper_program_img fade-in" />
        <h3 className="title fade-in-2">Contenido Gratuito</h3>
        <h3 className="description fade-in-25">Videos, tutoriales y recursos disponibles para que puedas aprender y mejorar.</h3>
      </div>
    </div>

    {/*<div className="image-container">
      {data.programs.map((program, index) => (
        <div key={index} className="image-box">
          <div className="image-box">
            <img
              src={images[`program_polesport_0${index + 1}`]}
              alt={program.title}
              className="app__wrapper_program_img"
            />
            <h3 className="title">{program.title}</h3>
            <p className="description">{program.description}</p>
          </div>
        </div>
      ))}
    </div>
    */}

  </div>
);

export default Programs;
