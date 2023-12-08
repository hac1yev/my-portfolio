import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/global.png';
import IMG2 from '../../assets/ddf.png';
import IMG3 from '../../assets/auto.png';
import IMG4 from '../../assets/is.png';
import IMG5 from '../../assets/kaizen.png';
import IMG6 from '../../assets/bitrix.png';
import IMG7 from '../../assets/cfg-metro.jpeg';
import IMG8 from '../../assets/shenbay.jpeg';
import IMG9 from '../../assets/rent-a-car.jpeg';

const data = [
  {
    id: 1,
    image: IMG6,
    title: 'Internal project of the Buta Grup',
    github: 'https://github.com/hac1yev/bitrix-buta',
    demo: 'https://bitrix.butagrup.com.tr/'
  },
  {
    id: 2,
    image: IMG5,
    title: 'Internal project of the Buta Grup',
    github: 'https://github.com/hac1yev/kaizen-neww',
    demo: 'https://kaizen.az/'
  },
  {
    id: 3,
    image: IMG4,
    title: 'Internal project of the Buta Grup',
    github: 'https://github.com/hac1yev/1is-buta',
    demo: 'https://1is.az/'
  },
  {
    id: 4,
    image: IMG2,
    title: 'Ongoing React JS Project for Dashkasan Iron Ore',
    github: 'https://github.com/hac1yev/ddf-redux',
    demo: 'http://ddf.az/'
  },
  {
    id: 5,
    image: IMG1,
    title: 'Web Page of the Forum to be Organized by the Media Development Agency of the Republic of Azerbaijan (media.gov.az)',
    github: 'https://github.com/hac1yev/global-media',
    demo: 'https://globalmediaforum.com/'
  },
  {
    id: 6,
    image: IMG3,
    title: "Ongoing external Front-end Project of Buta Grup",
    github: 'https://github.com/hac1yev/auto-herrac',
    demo: 'https://avtoherrac.com/'
  },
  {
    id: 7,
    image: IMG7,
    title: "Ongoing external Front-end Project of Buta Grup",
    github: 'https://github.com/hac1yev/cfg_metro',
    demo: 'https://cfg-metro.netlify.app/'
  },
  {
    id: 8,
    image: IMG8,
    title: "Ongoing external Front-end Project of Buta Grup",
    github: 'https://github.com/hac1yev/bayburt_senbay',
    demo: 'https://shenbay.netlify.app/'
  },
  {
    id: 9,
    image: IMG9,
    title: "My ongoing freelance project",
    github: 'https://github.com/hac1yev/rent_a_car',
    demo: 'https://rentacar79.netlify.app/'
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => (
            <article key={id} className='portfolio__item' data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="500">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                height: 'calc(100% - 220px)'
              }}>
                <h3>{title}</h3>
                <div className='portfolio-buttons'>
                  <a href={github} className='btn' rel="noreferrer" target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
                </div>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  );
};

export default Portfolio;
