import React, { useState } from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/ilkin-haciyev.png';
import HeaderSocials from './HeaderSocials';
import Nav from '../Nav/Nav';
import { BsArrowDownCircle } from 'react-icons/bs';
import { Link as LinkS } from 'react-scroll';

const Header = () => {
  const [activeNav,setActiveNav] = useState('#');

  return (
    <header id="header">
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Ilkin Hajiyev</h1>
        <div className="text-light">Front-End Developer</div>
        <CTA  />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt="me" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <LinkS 
            to="contact" 
            smooth={true}
            duration={700}
            spy={true}
            delay={0}
            exact="true" 
            onClick={() => setActiveNav('contact')} 
            className={activeNav === 'contact' ? 'scroll__down active' : 'scroll__down'}
            style={{ width: '117px',cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}
          >
            Scroll Down
            <BsArrowDownCircle style={{ fontSize: '1.2rem' }} />
          </LinkS>
        </div>
      </div>
      <Nav activeNav={activeNav} setActiveNav={setActiveNav} />
    </header>
  );
};

export default Header;