import './App.css';

import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

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
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
