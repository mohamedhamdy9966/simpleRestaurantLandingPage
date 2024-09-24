import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper-img_reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div>
      <SubHeading title="chef word" />
      <h2 className="headtext__cormorant">we believe in quality</h2>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote"/>
          <p className="p__opensans">lorem lorem lorem lorem</p>
        </div>
        <p className="p__opensans">lorem lorem lorem</p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef Amr Medhat</p>
        <img src={images.sign} alt="sign"/>
      </div>
    </div>
  </div>
);

export default Chef;
