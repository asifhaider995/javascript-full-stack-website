import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
// import $ from 'jquery';

import headerImg from './assets/img/header-bg-2.jpg';

////////////// Pages ////////////////

import Header from './pages/Header';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

/////////// Components //////////////

import Navbar from './components/Navbar';

////////////////////////////////////

function App() {
  return (
    <div id="page-top">
      <Router>
        <Navbar />
        <Route exact path='/' component={() => <Header image={headerImg} title="Adventures" subtitle='You Imagine, We Create' btnText='Get Started'/>} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/about' component={About} />
        <Route exact path='/team' component={Team} />
        <Route exact path='/contact' component={Contact} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
