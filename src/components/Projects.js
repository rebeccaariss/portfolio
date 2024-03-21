import React from 'react';
import karityDemo from '../assets/karity-demo.gif';
import linkfolioDemo1 from '../assets/linkfolio-demo-1.gif';
// import linkfolioDemo2 from '../assets/linkfolio-demo-2.gif';
import photoLabsDemo from '../assets/photolabs-demo.gif';

function Projects() {
  return (
    <section id='projects'>
      {/* <h2>🔧 <em>This section is under construction</em> 🚧</h2> */}
      <div id='karity'>
        <h2>Karity</h2>
        <img src={karityDemo} alt='Karity Demo'/>
      </div>
      <div id='linkfolio'>
        <h2>Linkfolio</h2>
        <img src={linkfolioDemo1} alt='Linkfolio Demo 1'/>
        {/* <img src={linkfolioDemo2} alt='Linkfolio Demo 2'/> */}
      </div>
      <div id='photolabs'>
        <h2>PhotoLabs</h2>
        <img src={photoLabsDemo} alt='Photolabs Demo'/>
      </div>
    </section>
  );
};

export default Projects;