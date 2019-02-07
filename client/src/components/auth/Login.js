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
      res.status == 200 ? alert('link to homepage and change nav bar') : alert('add fail message') }
    })
    auth.findUser(userData)
    .then(res=>{
      const samplelist = this.createSamplesObj(res.data[0].samples)
      const userDataPublic = {
        name: res.data[0].name,
          email: res.data[0].email,
          samples: samplelist
        };
      localStorage.setItem('user', JSON.stringify(userDataPublic));
    })
  };

  createSamplesObj(string){
    const samplesArray=[]
    string = (JSON.stringify(string)).match(/\[(.*?)\]/g)
    string.map(sample=>{
      samplesArray.push({name:sample.match(/\'(.*?)\'/g)[0].replace(/['"]+/g, ''),type:sample.match(/\'(.*?)\'/g)[1].replace(/['"]+/g, '')})
    })
    return samplesArray
  }
render() {
    const { errors } = this.state;
return (
      <div className="container loginContent">
        <div className="row loginFormWrapper">
          <div className="col">
           
            <div className="col" style={{ paddingTop: "40px" }}>
                <h1>login</h1>
              <p className="grey-text">
                Don't have an account? <Link to="/register">Join</Link>
              </p>
            </div>
            <form noValidate className='loginForm' onSubmit={this.onSubmit}>
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
              <div className="col loginButton">
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