import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Doctor from "./components/Doctor";
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/doctor" component={Doctor} />
        <Route path="/Aboutus" component={Aboutus} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
