import React from 'react';
import karityDemo from '../assets/karity-demo.gif';
import linkfolioDemo1 from '../assets/linkfolio-demo-1.gif';
// import linkfolioDemo2 from '../assets/linkfolio-demo-2.gif';
import photoLabsDemo from '../assets/photolabs-demo.gif';

function Projects() {
  return (
    <section id='projects'>
      <section id='karity'>
        <a href='https://github.com/rebeccaariss/charity-registry' target='blank' alt='Karity GitHub Repo'>
          <h2>Karity</h2>
        </a>
        <a href='https://github.com/rebeccaariss/charity-registry' target='blank' alt='Karity GitHub Repo'>
          <img src={karityDemo} alt='Karity Demo'/>
        </a>
      </section>
      <section id='linkfolio'>
        <a href='https://github.com/rebeccaariss/resource-wall' target='blank' alt='Linkfolio GitHub Repo'>
          <h2>Linkfolio</h2>
        </a>
        <a href='https://github.com/rebeccaariss/resource-wall' target='blank' alt='Linkfolio GitHub Repo'>
          <img src={linkfolioDemo1} alt='Linkfolio Demo 1'/>
        </a>
      </section>
      <section id='photolabs'>
        <a href='https://github.com/rebeccaariss/photolabs-starter' target='blank' alt='PhotoLabs GitHub Repo'>
          <h2>PhotoLabs</h2>
        </a>
        <a href='https://github.com/rebeccaariss/photolabs-starter' target='blank' alt='PhotoLabs GitHub Repo'>
          <img src={photoLabsDemo} alt='Photolabs Demo'/>
        </a>
      </section>
    </section>
  );
};

export default Projects;