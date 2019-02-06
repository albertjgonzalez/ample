import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import PrivacyPolicy from './components/PrivacyPolicy'
import Contact from './components/ContactPage';
import AuthHelperMethods from './components/AuthHelperMethods';
import withAuth from './components/withAuth';
import logo from './Images/ampleLogo.png'

import "./App.css";

class App extends Component {
  render() { 
    return (
      <div className="App">
      <nav style={{background:`black`,width:`100%`,height:`60px`,top:`0`,verticalAlign:`middle`}} >
      <img style={{float:`left`,width:`30px`, marginTop:`15px`,marginLeft:`30px`}} src={logo}/>
      <a className="ample"href='/' style={{float:`left`,color:`white`, textDecoration:`none`,marginLeft:`30px`,marginTop:'15px', fontSize:`30px`}} > amples</a>
      <div style={{float:`right`,marginRight:`30px`,marginTop:'20px', }}>

      <div style={{float:`left`,diplay:`inline`,border:`none`,borderRight:`solid white 2px`,paddingRight:`5px`,marginRight:`5px`}} >
      <a className="ample"href='/' style={{color:`white`, textDecoration:`none`,fontSize:`22px`,display:`inline`}}>join </a>
      </div>
      <a className="ample"href='/' style={{color:`white`, textDecoration:`none`,fontSize:`22px`,display:`inline`}}> login</a>
      </div>
      </nav>
        <Router>
          <div>
             <Route path="/search" exact component={SearchPage} />
             <Route path="/" exact component={HomePage} />
             <Route path="/privacyPolicy" exact component={PrivacyPolicy} />
             <Route path="/contact" exact component={Contact} />
             </div>
        </Router>
      </div>
    );
  }
}

export default App;
