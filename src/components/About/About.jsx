import React from 'react';
import './About.css';
import ME from '../../assets/ilkin-haciyev-bg.png';
import { FaAward,FaGraduationCap } from 'react-icons/fa';
import { AiFillFolder } from 'react-icons/ai';
import { Link as LinkS } from 'react-scroll';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me-about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
          <article data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" className="about__card">
              <FaGraduationCap className='about__icon' />
              <h5>Education</h5>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <small>DIA (2017-2021)</small>
                <small>UNEC (2021-2023)</small>
              </div>
            </article>
            <article data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" className="about__card">
              <AiFillFolder className='about__icon' />
              <h5>Projects</h5>
              <small>9+ Completed</small>
            </article>
          </div>
          <p data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
            Hello, I'm a Front-end Developer. I love to work hard and develop myself in this field and also I always 
            eager to learn and apply new technologies in this field. React JS is my favorite and most used technology.
          </p>
          <LinkS to="contact" smooth={true} duration={700} className='btn btn-primary'>Let's Talk</LinkS>
        </div>
      </div>
    </section>
  );
};

export default About;