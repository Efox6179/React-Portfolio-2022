import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css';


function App() {
  return (
    <HashRouter>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>

  );
}

export default App;

       