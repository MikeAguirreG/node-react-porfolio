import React ,{ useState } from 'react';
import './App.css';
import axios from 'axios';

import { Transition, animated } from "react-spring";
import Main from "./components/Main";
import Pages from "./components/Pages";
import Navbar from './components/Navbar';
const App = () => {

  const [values, setData] = useState();
  const getData = () => {
    // axios.get('/api')
    //   .then(res => setData(res))
    //   .catch(err => console.log(err)) 
  }

  React.useEffect(() => getData(), []);



  return (
    <div>
    <Pages />
    </div>
  );
}

export default App;
