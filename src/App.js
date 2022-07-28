import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfile from "./Pages/Portfile.js";


export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path = '/' element={<Home/>}/>
          <Route path ='/About' element={<About />}/>
          <Route path ='/Portfile' element={<Portfile />}/>
        </Routes>
      </Router>
    );
  }
}