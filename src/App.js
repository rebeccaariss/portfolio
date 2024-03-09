import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#projects">projects</a>
        <a href="#contact">contact</a>
      </nav>
      <section id="home">
        <h1>Hi! I'm Rebecca.</h1>
      </section>
      <section id="about">
        <h2>This is an h2</h2>
      </section>
      <section id="projects">
        <p>This is a paragraph</p>
      </section>
      <section id="contact">
        {/* icons */}
      </section>
    </div>
  );
}

export default App;
