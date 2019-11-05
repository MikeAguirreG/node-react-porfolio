import React, { useEffect } from 'react';
import './App.css';
import ReactGA from 'react-ga';
import Pages from './components/Pages';

const App = () => {
  useEffect(() => {
    initializeReactGA();
  }, []);

  const initializeReactGA = () => {
    ReactGA.initialize('UA-151021167-1');
    ReactGA.pageview('/homepage');
  };

  return <Pages />;
};

export default App;
