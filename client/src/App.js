import React, { Component, View } from "react";
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="App">
      <nav style={{background:`black`,width:`100%`,height:`60px`,top:`0`}} >
      <p style={{float:`left`,paddingLeft:`20px`,color:`white`}}>ample</p>
      <p style={{float:`right`,paddingRight:`20px`,color:`white`}}>login | join</p>
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
