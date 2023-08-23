import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/global.png';
import IMG2 from '../../assets/ddf.png';
import IMG3 from '../../assets/auto.png';
import IMG4 from '../../assets/is.png';
import IMG5 from '../../assets/kaizen.png';
import IMG6 from '../../assets/bitrix.png';

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
    demo: 'https://kaizen.butagrup.az/'
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
    demo: 'https://ddf-redux.netlify.app/'
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
    demo: 'https://auction-buta.netlify.app/'
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
              <h3>{title}</h3>
              <div className='portfolio-buttons'>
                <a href={github} className='btn' rel="noreferrer" target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  );
};

export default Portfolio;
