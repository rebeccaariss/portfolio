import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn, faMediumM } from '@fortawesome/free-brands-svg-icons';
import { faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className='App'>
      <nav>
        <a href='#home'>home</a>
        <a href='#about'>about</a>
        <a href='#projects'>projects</a>
        <a href='#contact'>contact</a>
      </nav>
      <section id='home'>
        <h1>Hi! I'm Rebecca.</h1>
      </section>
      <section id='about'>
        <h2>This is an h2</h2>
      </section>
      <section id='projects'>
        <p>This is a paragraph</p>
      </section>
      <section id='contact'>
        <div class='social-icons'>
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
