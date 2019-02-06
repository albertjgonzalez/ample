import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    const userDataPublic = {
      name: this.state.name,
        email: this.state.email
      };
auth.login(userData)
.catch(function (error) {
  return alert('add fail message')
})
.then(res=>{
     if(res) {
      res.status == 200 ? alert('link to homepage and change nav bar') : alert('add fail message') }
  })
  localStorage.setItem('user', JSON.stringify(userDataPublic));
console.log(userDataPublic)
  };
render() {
    const { errors } = this.state;
return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col">
            <Link to="/">
              <i>keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="name"
                />
                <label htmlFor="email">Name</label>
              </div>
              <div className="input-field col">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="col" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;