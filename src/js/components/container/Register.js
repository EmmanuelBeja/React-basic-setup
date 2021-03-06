import React, { Component } from "react";
import ReactDOM from "react-dom";

import Input from "../presentational/Input.js";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { email, username, password } = this.state;
    return (
      <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h4>Register</h4>
          <hr />
          <form id="article-form">
            <Input
              text="Email"
              label="email"
              type="text"
              id="email"
              value={email}
              handleChange={this.handleChange}
            />
            <Input
              text="Username"
              label="username"
              type="text"
              id="username"
              value={username}
              handleChange={this.handleChange}
            />
            <Input
              text="Password"
              label="password"
              type="password"
              id="password"
              value={password}
              handleChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    </div>
    );
  }
}
export default Register;
