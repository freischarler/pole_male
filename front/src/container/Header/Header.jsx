import React from "react";
import "./Header.css";

const Header = () => (
  <div className="app__header_bg app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h1 className="app__header-h1 fade-in">Poledance trainer</h1>
      <h2 className="h__subtitle fade-in" style={{ margin: "2rem 0" }}>
      Explora el equilibrio perfecto entre el arte y el ejercicio físico. Vive la experiencia que transforma tu cuerpo y mente.{" "}
      </h2>
      <button type="button" className="custom__button_white fade-in">
        Explore Menu
      </button>
    </div>

    {/*<div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>*/}
  </div>
);

export default Header;
