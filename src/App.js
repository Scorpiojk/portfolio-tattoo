import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Artists from "./pages/Artists"
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Menu" exact component={Menu} />
          <Route path="/Artists" exact component={Artists} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

