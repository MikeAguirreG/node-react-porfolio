import React ,{ useEffect } from 'react';
import './App.css';
import ReactGA from "react-ga";
// import axios from 'axios';
import Pages from "./components/Pages";

const App = () => {

  useEffect(() => {
    ReactGA.initialize('UA-151021167-1');
  }, [])
  
  return (
    <Pages />
  );
}

export default App;
