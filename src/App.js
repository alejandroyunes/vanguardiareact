import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Navbar'
import Billboard from './Billboard'
import TextDetails from './components/TextDetails'
import ProductCard from './components/ProductCard'
import HalfLaptop from './components/halfLaptop'


export default function App() {
  return (
    <Router>
    <Navbar/>
    <Billboard/>
    <TextDetails/>
      <HalfLaptop/>
    <ProductCard/>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>

    </Router>
  );
}


function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
