import './App.css';
import { Grid, Typography, Box } from "@mui/material"
import Navbar from './components/navbar';
import MyCard from './components/card';
import { getMatches } from './API/API';
import React, { Fragment, useEffect, useState } from 'react';


function App() {

  const [matches, setMatches] = useState([]);
  
  useEffect(()=>{
    getMatches()
        .then( data => {
          setMatches([...data.data]);
          console.log("DATA:", data.data);
        })
        .catch( err => alert("Could not load the data"));
  },[]);


  return (
    <div className="App">
      <Navbar />
      <Typography className='heading' variant='h3' mt="2">Welcome to Live Cricket</Typography>
      <Typography className='heading' variant='h5' mt='2'>(t-20 matches)</Typography>
      <Grid container justifyContent='center'>
        <Box  className='card-box'>
          {matches.map((match)=> (
            <Fragment>
              {(match.matchType==="t20")? (<MyCard key={match.id} match={match} />):("")}
            </Fragment>
          ))}
        </Box>
      </Grid>
    </div>
  );
}

export default App;
