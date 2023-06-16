import React, { useRef } from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ra2eal7', 'template_xte6kvm', form.current, 'LG4fxLuafTfEpZxPD');

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className='contact__options'>
          <article className="contact__option" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>ilkinhaciyev955@gmail.com</h5>   
            <a href="mailto:ilkinhaciyev955@gmail.com">Send a message</a>
          </article>
          <article className="contact__option" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500">
            <FaInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>__haciyev__19</h5>   
            <a href="https://www.instagram.com/__haciyev__19" rel="noreferrer" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" />
          <input type="email" name='email' placeholder='Your Email' required data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" />
          <textarea name="message" placeholder='Your Message' rows="7" required data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500"></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;