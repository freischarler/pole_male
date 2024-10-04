import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: " ¿Necesito experiencia previa para tomar clases de PoleSport o PoleDance?",
      answer: "No, nuestras clases están diseñadas para todos los niveles, desde principiantes hasta avanzados. Si eres nuevo/a, puedes unirte a las clases introductorias donde aprenderás los movimientos básicos y técnicas fundamentales.",
    },
    {
      question: "¿Qué debo llevar a clase?",
      answer: "Recomendamos llevar ropa ajustada (como shorts y tops), ya que el contacto directo de la piel con la barra es necesario para realizar los movimientos. También es importante traer una botella de agua y toalla. Evita el uso de cremas corporales antes de la clase para asegurar un buen agarre.",
    },
    {
      question: "¿Hay algún límite de edad o condición física para practicar PoleSport?",
      answer: "No hay límite de edad para practicar PoleSport o PoleDance. Sin embargo, siempre recomendamos consultar a tu médico si tienes alguna condición física que pueda afectar tu capacidad para realizar ejercicio. Nuestras clases se adaptan a cada nivel, por lo que podrás progresar a tu propio ritmo.",
    },
    {
      question: "¿Cuántas clases debo tomar para ver resultados?",
      answer: "Los resultados dependen de la frecuencia y dedicación en las clases. Generalmente, los alumnos notan mejoras en fuerza, flexibilidad y coordinación después de un mes de práctica constante. Lo importante es disfrutar el proceso y progresar paso a paso.",
    }
  ];

  return (
    <div className="app__faq"> {/*TODO!!! add a class name here*/}
        <div className="app__specialMenu-title">
          <h1 className="headtext__cormorant_black fade-in">FAQs</h1>
          <h2 className="p__opensans_black fade-in-2">¿Tienes dudas? Aquí respondemos las preguntas más comunes sobre clases, equipo y niveles para que estés lista/o desde el día uno.</h2>  
        </div>

        <div className="accordion fade-in-2">
        {questions.map((item, index) => (
            <div className="accordion-item" key={index}>
            <button
                className={`accordion-header ${activeIndex === index ? "active" : ""}`} 
                onClick={() => toggleAccordion(index)}
            >
                {item.question}
            </button>
            <div
                className="accordion-content"
                style={{ display: activeIndex === index ? "block" : "none" }}
            >
                <h3 className="h__subtitle_black">{item.answer}</h3>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Faq;
