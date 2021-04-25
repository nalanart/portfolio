import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Cta from './components/Cta'
import Projects from './components/Projects'
import About from './components/About'
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="site-navbar">
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/">
            <section className="site-hero">
              <Hero />
            </section>
            <section className="site-featured">
              <Featured />
            </section>
            <section className="site-cta">
              <Cta />
            </section>
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
      <footer className="site-footer">
        <p>&#169; 2021 Alan Tran. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
