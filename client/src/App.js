import React, { Component } from "react";
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './Images/ampleLogo.png'

import "./App.css";

class App extends Component {
  render() { 
    return (
      <div className="App">
      <nav style={{background:`black`,width:`100%`,height:`60px`,top:`0`,verticalAlign:`middle`}} >
      <div style={{float:`left`,fontSize:'24px',paddingBottom:`50px`}}>
      <img style={{width:`30px`, marginTop:`10px`,marginLeft:`30px`}} src={logo}/>
      <a href='/' style={{color:`white`, textDecoration:`none`,marginLeft:`20px`}} > ample</a>
      </div>
      <p style={{float:`right`,paddingRight:`20px`,color:`white`,marginTop:`20px`}}>login | join</p>
      </nav>
        <Router>
          <div>
             <Route path="/search" exact component={SearchPage} />
             <Route path="/" exact component={HomePage} />
             </div>
        </Router>
      </div>
    );
  }
}

export default App;
