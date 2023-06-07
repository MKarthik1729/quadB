// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import AverageDisplay from './components/AverageDisplay';
import Navbar from './components/Navbar';
import Table from './components/Table';
import { dark } from './components/colors';
import axios from 'axios'
function App() {
  const [data,setData] = useState()
  const [fetch,setFetch] = useState('BTC')
  useEffect(() => {
    axios.get(`http://localhost:4000/data/${fetch}`)
    .then(data=>setData(data))
  }, [fetch])
  
  return (
    <div className="App App-header" style={{backgroundColor:dark}}>

    <Navbar setFetch={setFetch} fetch={fetch} />
   {data && <AverageDisplay data={data.data} />}
    {data &&<Table data={data.data} />}
    <p>copy rights or foot</p>
    </div>
  );
}

export default App;
