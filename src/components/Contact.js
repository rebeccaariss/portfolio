import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn, faMediumM } from '@fortawesome/free-brands-svg-icons';
import { faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section id='contact'>
      <div id='social-icons'>
        {/* GitHub */}
        <a href='https://github.com/rebeccaariss' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGithubAlt} className='icon' />
        </a>

        {/* LinkedIn */}
        <a href='https://linkedin.com/in/rebeccaariss' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faLinkedinIn} className='icon' />
        </a>

        {/* Medium */}
          <a href='https://rebeccaariss.medium.com/' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faMediumM} className='icon' />
          </a>

        {/* Resume */}
          <a href='https://flowcv.com/resume/arohtm656b' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faFile} className='icon' />
          </a>
          
        {/* Email */}
          <a href='mailto:rebeccaariss.dev@gmail.com'>
            <FontAwesomeIcon icon={faEnvelope} className='icon' />
          </a>
      </div>
    </section>
  );
};

export default Contact;