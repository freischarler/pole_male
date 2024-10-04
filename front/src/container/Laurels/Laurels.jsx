import React from "react";
import { data, images } from "../../constants";
import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant_black">
        {title}
      </p>
      <p className="p__opensans_black">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {

  return (
  <div className="app__wrapper_laurels section__padding" id="awards">
    <div className="app__wrapper_img">
      <img src={images.pole_competencia_01} alt="pole_colors" />
    </div>

    <div className="app__wrapper_info_center">
      <h2 className="headtext__cormorant_black" style={{ textAlign: "center" }}>Competencias</h2>
      <h3 className="h__subtitle_black" style={{ textAlign: "center" }}>Cada premio refleja todo mi esfuerzo y dedicación en esta apasionante disciplina.</h3>
      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.pole_competencia_02} alt="pole_colors" />
    </div>
  

    
  </div>
)};

export default Laurels;
