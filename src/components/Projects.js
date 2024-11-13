import React from 'react';
import matchyMatchyDemo from '../assets/matchy-matchy-demo.gif';
import karityDemo from '../assets/karity-demo.gif';
import linkfolioDemo1 from '../assets/linkfolio-demo-1.gif';
// import linkfolioDemo2 from '../assets/linkfolio-demo-2.gif';
import photoLabsDemo from '../assets/photolabs-demo.gif';

const CONTENT = [
  {
    id: 'matchymatchy',
    title: 'matchy matchy',
    link: 'https://github.com/rebeccaariss/matchy-matchy',
    linkAlt: 'matchy matchy GitHub Repo',
    img: matchyMatchyDemo,
    imgAlt: 'matchy matchy Demo',
    text: [
      <p>🚧 <em>Work in progress</em> 🚧</p>,
      <p>A minimalist and nostalgic card-matching game featuring some of my favourite emojis. You can follow along for progress updates in my dev log <a href='https://github.com/rebeccaariss/matchy-matchy/blob/main/README.md' target='blank' rel='noopener noreferrer' alt='matchy matchy README'>here!</a></p>
    ]
  },
  {
    id: 'karity',
    title: 'Karity',
    link: 'https://github.com/rebeccaariss/charity-registry',
    linkAlt: 'Karity GitHub Repo',
    img: karityDemo,
    imgAlt: 'Karity Demo',
    text: [
      <strong><p>Lighthouse Labs Final Team Project: Karity – A Charity & Nonprofit Requests App</p></strong>,
      <p>Organizations specify exactly what they need (items, money, volunteers); users can fulfill requests and follow their favourite organizations for updates.</p>
    ]
  },
  {
    id: 'linkfolio',
    title: 'Linkfolio',
    link: 'https://github.com/rebeccaariss/resource-wall',
    linkAlt: 'Linkfolio GitHub Repo',
    img: linkfolioDemo1,
    imgAlt: 'Linkfolio Demo',
    text: [
      <strong><p>Lighthouse Labs Midterm Team Project: Linkfolio</p></strong>,
      <p>A Pinterest clone for archiving educational resources.</p>
    ]
  },
  {
    id: 'photolabs',
    title: 'PhotoLabs',
    link: 'https://github.com/rebeccaariss/photolabs-starter',
    linkAlt: 'PhotoLabs GitHub Repo',
    img: photoLabsDemo,
    imgAlt: 'PhotoLabs Demo',
    text: [
      <strong><p>PhotoLabs</p></strong>,
      <p>React SPA (single-page application) for viewing and liking photos, viewing similar photos, and viewing photos by category.</p>
    ]
  },
];

function Projects() {
  return (
    <section id='projects'>
      <section id='matchymatchy'>
        <a href='https://github.com/rebeccaariss/matchy-matchy' target='blank' rel='noopener noreferrer' alt='matchy matchy GitHub Repo'>
          <h2>matchy matchy</h2>
        </a>
        <br></br>
        <a href='https://github.com/rebeccaariss/matchy-matchy' target='blank' rel='noopener noreferrer' alt='matchy matchy GitHub Repo'>
          <img src={matchyMatchyDemo} alt='matchy matchy Demo'/>
        </a>
        <br></br>
        <p>🚧 <em>Work in progress</em> 🚧</p>
        <br></br>
        <p>A minimalist and nostalgic card-matching game featuring some of my favourite emojis. You can follow along for progress updates in my dev log <a href='https://github.com/rebeccaariss/matchy-matchy/blob/main/README.md' target='blank' rel='noopener noreferrer' alt='matchy matchy README'>here!</a></p>
      </section>

      <section id='karity'>
        <a href='https://github.com/rebeccaariss/charity-registry' target='blank' rel='noopener noreferrer' alt='Karity GitHub Repo'>
          <h2>Karity</h2>
        </a>
        <br></br>
        <a href='https://github.com/rebeccaariss/charity-registry' target='blank' rel='noopener noreferrer' alt='Karity GitHub Repo'>
          <img src={karityDemo} alt='Karity Demo'/>
        </a>
        <br></br>
        <strong><p>Lighthouse Labs Final Team Project: Karity – A Charity & Nonprofit Requests App</p></strong>
        <br></br>
        <p>Organizations specify exactly what they need (items, money, volunteers); users can fulfill requests and follow their favourite organizations for updates.</p>
      </section>

      <section id='linkfolio'>
        <a href='https://github.com/rebeccaariss/resource-wall' target='blank' rel='noopener noreferrer' alt='Linkfolio GitHub Repo'>
          <h2>Linkfolio</h2>
        </a>
        <br></br>
        <a href='https://github.com/rebeccaariss/resource-wall' target='blank' rel='noopener noreferrer' alt='Linkfolio GitHub Repo'>
          <img src={linkfolioDemo1} alt='Linkfolio Demo 1'/>
        </a>
        <br></br>
        <strong><p>Lighthouse Labs Team Project: Linkfolio</p></strong>
        <br></br>
        <p>A Pinterest clone for archiving educational resources.</p>
      </section>

      <section id='photolabs'>
        <a href='https://github.com/rebeccaariss/photolabs-starter' target='blank' rel='noopener noreferrer' alt='PhotoLabs GitHub Repo'>
          <h2>PhotoLabs</h2>
        </a>
        <br></br>
        <a href='https://github.com/rebeccaariss/photolabs-starter' target='blank' rel='noopener noreferrer' alt='PhotoLabs GitHub Repo'>
          <img src={photoLabsDemo} alt='Photolabs Demo'/>
        </a>
        <br></br>
        <strong><p>PhotoLabs</p></strong>
        <br></br>
        <p>React SPA (single-page application) for viewing and liking photos, viewing similar photos, and viewing photos by category.</p>
      </section>
    </section>
  );
};

export default Projects;