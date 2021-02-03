import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Cta from './components/Cta'

function App() {
  return (
    <div className="App">
      <header className="site-navbar">
        <Navbar />
      </header>
      <section className="site-hero">
        <Hero />
      </section>
      <section className="site-featured">
        <Featured />
      </section>
      <section className="site-cta">
        <Cta />
      </section>
      <footer className="site-footer">
        <p>&#169; 2021 Alan Tran. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
