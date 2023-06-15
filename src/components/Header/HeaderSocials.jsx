import React from 'react';
import { BsLinkedin,BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/haj1yev/" rel="noreferrer" target='_blank'>
            <BsLinkedin />
        </a>
        <a href="https://github.com/hac1yev" rel="noreferrer" target='_blank'>
            <FaGithub />
        </a>
        <a href="https://instagram.com/__haciyev__19" rel="noreferrer" target='_blank'>
            <BsInstagram />
        </a>
    </div>
  );
};

export default HeaderSocials;