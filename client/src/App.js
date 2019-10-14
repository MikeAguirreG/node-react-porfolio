import React ,{ useState } from 'react';
import './App.css';
// import axios from 'axios';
import Pages from "./components/Pages";

const App = () => {

  // const [values, setData] = useState();
  // const getData = () => {
  //   axios.get('/api')
  //     .then(res => setData(res))
  //     .catch(err => console.log(err)) 
  // }
  // console.log(values)

  // React.useEffect(() => getData(), []);



  return (
    <div>
    <Pages />
    </div>
  );
}

export default App;
