import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import User from "./components/user";
import Friends from "./components/friends";
import CreateUser from "./components/createUser";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={User} />

        <Route path="/friends" exact component={Friends} />
        <Route path="/user" exact component={CreateUser} />
      </div>
    </Router>
  );
};

export default App;
