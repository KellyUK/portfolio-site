import React from "react";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

function App() {
  library.add(fab, faEnvelope);
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path="/" />
        <Portfolio path="/portfolio" />
        <About path="/about" />
        <Contact path="/contact" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
