import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import mainView from "./views/mainView";
import "../src/sass/styles.css";


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={mainView}></Route>
      </Switch>
    </Router>
  );
}
