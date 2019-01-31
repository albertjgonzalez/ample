import React, { Component, View } from "react";
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar sticky='top' style={{color:`black`,height:`50px`}}>
      <p style={{float:`left`,padding:`10px`,color:`white`}}>ample</p>
      </Navbar>
        <Router>
          <div>
             <Route path="/" exact component={HomePage} />
             <Route path="/Search" exact component={SearchPage} />
             </div>
        </Router>
      </div>
    );
  }
}

export default App;
