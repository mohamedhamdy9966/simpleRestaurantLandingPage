import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutUs app__bg flex__center section__padding' id='about'>
    <div className='app__aboutUs-overlay flex__center'>
      <img src={images.G} alt='g letter' />
    </div>
    <div className='app__aboutUs-content flex-center'>
      <div className='app__aboutUs-content_about'>
        <h2 className='headtext__cormorant'>About Us</h2>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>lorem lorem lorem lorem lorem lorem lorem</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>

      <div className='app__aboutUs-content_knife flex__center'>
        <img src={images.knife} alt='about-knife' />
      </div>

      <div className='app__aboutUs-content_history'>
        <h2 className='headtext__cormorant'>Our History</h2>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>lorem lorem lorem lorem lorem lorem</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
