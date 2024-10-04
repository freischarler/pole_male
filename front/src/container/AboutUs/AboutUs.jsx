import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus  flex__center section__padding"
    id="about"
  >
    {/*<div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>*/}

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about fade-in-left">
        <h1 className="headtext__cormorant_black">Sobre mí</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans_black fade-in-25">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom__button_black fade-in-25">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_polesillouete_white flex__center fade-in-2">
        <img src={images.about_us} alt="about_us" />
      </div>

      <div className="app__aboutus-content_history fade-in-right">
        <h1 className="headtext__cormorant_black">Mí historia</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans_black fade-in-25">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <button type="button" className="custom__button_black fade-in-25">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
