import React from 'react';
import ContactForm from '../components/contactForm';
import '../css/Contact.css';

export default function Contact() {
  return (<>
    <section id="Contact" className="master-padding">
      <h2 className="contact-title">Contact Me</h2>
      <ContactForm/>
      
    </section>
    <div className="contact-icons">
       <a className="icon-anchor" href="https://github.com/kevindsteeleii"><i class="fab fa-github-square"/></a>
       <a className="icon-anchor" href="https://www.linkedin.com/in/kevindsteeleii/"><i className="fab fa-linkedin"/></a>
       <a className="icon-anchor" href="https://medium.com/@kevindsteeleii"><i class="fab fa-medium"/></a>
    </div>
  </>);
}
