import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from './../Footer'
import './style.css';
import auth from './auth';
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    auth.join(newUser)
    .catch(function (error) {
      return console.log(error)
    })
    .then(res=>{
         if(res) {
          res.status == 200 ? alert('link to homepage and change nav bar') : alert('add fail message') }
      })
console.log(newUser);
  };
render() {
    const { errors } = this.state;
return (
      <div className="container loginContent">
        <div className="row loginFormWrapper">
          <div className="col">
            
            <div className="col" style={{ paddingTop: "10px" }}>
              <h1>join</h1>
              <p className="grey-text">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col">
                <input
                  placeholder='name'
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                />
              </div>
              <div className="input-field col">
                <input
                  placeholder='email'
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                />
              </div>
              <div className="input-field col">
                <input
                  placeholder='password'
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
              </div>
              <div className="input-field col">
                <input
                  placeholder='confirm password'
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                />
              </div>
              <div className="col joinButton">
                <button
                  style={{
                    width: "150px",
                    height: "30px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='foot'>
        <Footer />
        </div>
      </div>
    );
  }
}
export default Register;