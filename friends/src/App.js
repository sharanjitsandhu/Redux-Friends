import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Protected from "./components/Protected";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

// STEP I - Wrap everything inside Router. Add a Public route, a login route
// and a protected route
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
          <h2>Friends(Redux App)</h2>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={Protected} />
        </div>
      </Router>
    );
  }
}

export default App;
