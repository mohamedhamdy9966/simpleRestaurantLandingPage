import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h2 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h2>
      <div className="app__wrapper-content">
        <p className="p__opensans">lorem lorem lorem lorem lorem lorem</p>
        <p className="p__cormorant" style={{ color: '#DCCA87' , margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">lorem lorem lorem lorem lorem lorem</p>
        <p className="p__opensans">lorem lorem lorem lorem lorem lorem</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>View More</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
