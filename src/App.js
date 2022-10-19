import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import "./App.css";
import Intro from "./components/intro";
import Services from "./components/services/services";

function App() {
  return (
    <>
     <Navbar/>
    <Intro/>
    <Services/>
    </>
  
  );
}

export default App;
