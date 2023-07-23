import React from 'react';
import './Footer.css';
import { FaInstagram,FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { Link as LinkS } from 'react-scroll';

const Footer = () => {
  return (
    <footer>
      <LinkS to="header" className="footer__logo">ILKIN HAJIYEV</LinkS>
      <ul className='permalinks'>
        <LinkS smooth={true} duration={700} to="header">Home</LinkS>
        <LinkS smooth={true} duration={700} to="about">About</LinkS>
        <LinkS smooth={true} duration={700} to="experience">Experience</LinkS>
        <LinkS smooth={true} duration={700} to="services">Services</LinkS>
        <LinkS smooth={true} duration={700} to="portfolio">Portfolio</LinkS>
        <LinkS smooth={true} duration={700} to="contact">Contact</LinkS>
      </ul>
      <div className='footer__socials'>
        <a href="https://instagram.com/__haciyev__19" rel="noreferrer" target='_blank'>
          <FaInstagram />
        </a>
        <a href="https://github.com/hac1yev" rel="noreferrer" target='_blank'>
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/haj1yev/" rel="noreferrer" target='_blank'>
          <BsLinkedin />
        </a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Ilkin Hajiyev. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
