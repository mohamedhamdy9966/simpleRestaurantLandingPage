import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h2 className="app__footer-headtext">Contact Us</h2>
        <p className="p__opensans">Cairo,Egypt</p>
        <p className="p__opensans">0402218758</p>
        <p className="p__opensans">01207226094</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">lorem lorem lorem lorem</p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h2 className="app__footer-headtext">Working Hours</h2>
        <p className="p__opensans">Saturday-Thursday</p>
        <p className="p__opensans">11:00 am - 04:00 am</p>
        <p className="p__opensans">Friday</p>
        <p className="p__opensans">01:00 pm - 04:00 am</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">copyrights B&W</p>
    </div>
  </div>
);

export default Footer;
