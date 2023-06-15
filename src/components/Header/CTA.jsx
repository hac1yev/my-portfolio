import React from 'react';
import CV from '../../assets/ihcv.pdf';
import { Link as LinkS } from 'react-scroll';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <LinkS to="contact" smooth={true} duration={700} className='btn btn-primary'>Let's Talk</LinkS>
    </div>
  );
};

export default CTA;