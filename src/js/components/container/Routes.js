import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import IndexPage from "./Index";

class Main extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={IndexPage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
      </div>
    </Router>
    );
  }
}

export default Main;
