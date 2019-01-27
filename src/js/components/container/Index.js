import React, { Component } from "react";
import ReactDOM from "react-dom";

import Input from "../presentational/Input.js";

class IndexPage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { email, password } = this.state;
    return (
      <div className="container">
      <div className="row jumbotron">
        <div className="col-md-6 offset-md-2">
          <h4>Hello!</h4>
          <h4>This is a basic react app. Can be a boilerplate.</h4>
        </div>
      </div>
    </div>
    );
  }
}
export default IndexPage;
