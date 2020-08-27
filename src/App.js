import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';

function App() {
  const [user, setUser]=useState([])
  useEffect(()=>{
    const fetchData=async()=>{
      const result= await Axios.get('https://jsonplaceholder.typicode.com/users')
      setUser(result.data)
    }
    fetchData()

    //Axios.get('https://jsonplaceholder.typicode.com/users')
    //.then(res =>setUser(res.data))
    //.catch(er=>console.log(er))

  },[])
  return (
    <div className="App">
      {user.map(el=><div style={{border:"1px solid black"}}>
      <p>{el.name}</p>
      <p>{el.email}</p>
      <p>{el.address.street}</p>
      </div>)}
    </div>
  );
}

export default App;
