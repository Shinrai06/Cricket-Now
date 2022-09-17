import './App.css';
import {Button, Card } from "@mui/material"
import Navbar from './components/navbar';
import MyCard from './components/card';
import { getMatches } from './API/API';
import React, { useEffect, useState } from 'react';


function App() {

  const [matches, setMatches] = useState([]);
  
  useEffect(()=>{
    getMatches()
        .then((data)=>{
          setMatches(data.matches);
          console.log(data);
        })
        .catch((err)=>alert("Could not load the data"));
  },[]);


  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to Live Cricket</h1>
      {
        matches.map((match)=>{
          <MyCard match="match" />
        })
      }
      <Button variant="contained" color='primary'>Click me!!</Button>
    </div>
  );
}

export default App;
