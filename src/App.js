import React, { Component } from "react";

import Main from "./js/components/container/Routes";
import Navigation from "./js/components/container/Navigation";

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navigation />
      <div className="container">
      <Main/>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
