import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from './../Footer'
import './style.css';
import auth from './auth'
class Login extends Component {
  constructor() {
    super();
    this.state = {
        name:"",
      email: "",
      password: "",
      errors: {}
    };
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
    name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
auth.login(userData)
.catch(function (error) {
  return alert('add fail message')
})
.then(res=>{
     if(res) {
      res.status == 200 ? 
      
      alert('add success message')  : alert('add fail message') }
    })
    auth.findUser(userData)
    .then(res=>{

      const userDataPublic = {
        name: res.data[0].name,
          email: res.data[0].email,
          samples: res.data[0].samples
        };
         localStorage.setItem('user', JSON.stringify(userDataPublic));
       window.location = '/user'
    })
  };

render() {
    const { errors } = this.state;
return (
      <div className="container loginContent">
        <div className="row loginFormWrapper">
          <div className="">
           
            <div className="" style={{ paddingTop: "40px" }}>
                <h1>login</h1>
              <p className="grey-text">
                Don't have an account? <Link to="/register">Join</Link>
              </p>
            </div>
            <form noValidate className='loginForm' onSubmit={this.onSubmit}>
              <div className="input-field ">
                <input
                  placeholder='email'
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                />
              </div>
              <div className="input-field ">
                <input
                  placeholder='password'
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
              </div>
              <div className=" loginButton">
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
                  login
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
export default Login;