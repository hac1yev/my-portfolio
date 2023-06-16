import React from 'react';
import './Experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2> 
      <div className='container experience__container' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500">
        <div className='experience__frontend'>
          <h1>Frontend Development</h1>
          <div className='experience__content'>
            <div className='experience__center'>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
            <div className='experience__center'>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
            <div className="experience__center">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Javascript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
            <div className="experience__center">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
            <div className="experience__center">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
            <div className="experience__center">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Redux</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
            <div className="experience__center">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Redux Toolkit</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
            <div className="experience__center">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>REST API</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;