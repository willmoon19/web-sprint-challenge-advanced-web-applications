import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import "./styles.scss";
import axiosWithAuth from "./helpers/axiosWithAuth";

function App() {

  const handleLogout = () => {
    axiosWithAuth().post("/#")
    .then(res => {
      localStorage.removeItem("token")
      window.location.href = "/"
    })
    .catch(err => console.log(err))
  };

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" onClick={handleLogout} href="#">logout</a>
        </header> 
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
        <ul>
          <li>
          {localStorage.getItem("token")?<Link to="/protected">Protected Page</Link>:<div>Please Log in</div>}
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/protected" component={BubblePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.