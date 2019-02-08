import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import UserHistory from './components/UserPages/UserHistory'
import SearchPage from './components/SearchPage';
import PrivacyPolicy from './components/PrivacyPolicy'
import Contact from './components/ContactPage';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import logo from './Images/ampleLogo.png'

import "./App.css";

class App extends Component {
  
    state = {
    user: {
      name:'',
      email:'',
      purchasedSamples:[]
    }

  }

    componentWillMount(){
      if(JSON.parse(localStorage.getItem('user'))){
      const { name, email } = JSON.parse(localStorage.getItem('user'))
      this.setState({user:{name,email}})}
    }

      navLogInCheck(){
       return this.state.user.name === '' ? <div>
          <div style={{float:`left`,diplay:`inline`,border:`none`,borderRight:`solid white 2px`,paddingRight:`10px`,marginRight:`10px`}} >
          <a className="ample"href='/register' style={{color:`white`, textDecoration:`none`,fontSize:`22px`,display:`inline`}}>join </a>
          </div>
          <a className="ample"href='/login' style={{color:`white`, textDecoration:`none`,fontSize:`22px`,display:`inline`}}> login</a> </div>
          :
<div>
          <div style={{float:`left`,diplay:`inline`,border:`none`,borderRight:`solid white 2px`,paddingRight:`10px`,marginRight:`10px`}} >
          <a className="ample"href='/user' style={{color:`white`, textDecoration:`none`,fontSize:`22px`,display:`inline`}}>{ this.state.user.name } </a>
          </div>
          <a className="ample" onClick={this.signOut} href='/' style={{color:`white`, textDecoration:`none`,fontSize:`22px`,display:`inline`}}> sign out</a> </div>
        
      }

      signOut(){
        localStorage.clear();
      }
  render() { 
    return (
      <div className="App">
      <nav style={{background:`black`,width:`100%`,height:`60px`,top:`0`,verticalAlign:`middle`}} >
      <img style={{float:`left`,width:`30px`, marginTop:`15px`,marginLeft:`30px`}} src={logo}/>
      <a className="ample"href='/' style={{float:`left`,color:`white`, textDecoration:`none`,marginLeft:`30px`,marginTop:'15px', fontSize:`30px`}} > amples</a>
      <div style={{float:`right`,marginRight:`30px`,marginTop:'20px', }}>
        { this.navLogInCheck() }
        </div>
      </nav>
        <Router>
          <div>
             <Route path="/" exact component={HomePage} />
             <Route path="/search" exact component={SearchPage} />
             <Route exact path="/register" component={Register} />
             <Route exact path="/login" component={Login} />
             <Route path="/privacyPolicy" exact component={PrivacyPolicy} />
             <Route path="/contact" exact component={Contact} />
             <Route path="/user" exact render={()=><UserHistory samples={JSON.parse(localStorage.getItem('user'))}/>} />
             </div>
        </Router>
      </div>
    );
  }
}

export default App;
