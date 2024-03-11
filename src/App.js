import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn, faMediumM } from '@fortawesome/free-brands-svg-icons';
import { faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className='App'>
      <nav>
        <a href='#home'>💻</a>
        <a href='#home'>home</a>
        <a href='#about'>about</a>
        <a href='#projects'>projects</a>
        <a href='#contact'>contact</a>
      </nav>
      <section id='home'>
        <h1>Rebecca Ariss</h1>
        <h2>Full Stack Web Developer</h2>
        <h2>–</h2>
      </section>
      <section id='about'>
        <h2>A little bit about me:</h2>
        <p>🩺 Background in healthcare and hospitality</p>
        <p>🎓 <a href='https://www.lighthouselabs.ca/en/employers' target='_blank' rel='noopener noreferrer'>Lighthouse Labs</a> grad</p>
        <p>👩🏼‍💻 Currently studying: <a href='https://www.udemy.com/course/complete-react-developer-zero-to-mastery/?couponCode=KEEPLEARNING' target='_blank' rel='noopener noreferrer'>Redux</a>, <a href='https://www.udacity.com/course/web-accessibility--ud891' target='_blank' rel='noopener noreferrer'>Web Accessibility</a></p>
        <p>🎧 Listening to: <a href='https://open.spotify.com/artist/2mVVjNmdjXZZDvhgQWiakk' target='_blank' rel='noopener noreferrer'>Khruangbin</a>, <a href='https://open.spotify.com/artist/3IunaFjvNKj98JW89JYv9u' target='_blank' rel='noopener noreferrer'>The Japanese House</a></p>
        <p>📖 Reading: <a href='https://www.goodreads.com/en/book/show/57945316' target='_blank' rel='noopener noreferrer'>Babel</a> by R.F. Kuang, <a href='https://www.goodreads.com/book/show/52905471-why-we-swim?ref=nav_sb_ss_1_11' target='_blank' rel='noopener noreferrer'>Why We Swim</a> by Bonnie Tsui</p>
        <p>🎮 Playing: <a href='https://www.nintendo.com/en-ca/store/products/eastward-octopia-70050000042973-switch/' target='_blank' rel='noopener noreferrer'>Octopia</a>, <a href='https://www.playstation.com/en-ca/games/kena-bridge-of-spirits/' target='_blank' rel='noopener noreferrer'>Kena: Bridge of Spirits</a></p>
      </section>
      <section id='projects'>
        <h2>🔧 <em>This section is under construction</em> 🚧</h2>
      </section>
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
    </div>
  );
}

export default App;
