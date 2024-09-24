import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title="Newsletter" />
      <h2 className='headtext__cormorant'>Subscribe</h2>
      <p className='p__opensans'>Never miss</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type='email' placeholder='email' />
      <button className='custom__button'>Suscribe</button>
    </div>
  </div>
);

export default Newsletter;
