import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom';
import EditDestination from '../components/EditDestination';
import { CiEdit } from "react-icons/ci";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '../components/Card';


const Itineraries = () => {
  return (
    <CssBaseline>
      <Container maxWidth="xs" sx={{marginTop:"40px"}}>
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <Typography variant="h4" style={{marginRight: "10px"}}> Itinerary Title </Typography>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
        </div>

        <Grid container spacing={2}>
          <Grid item style={{display:"flex"}}>
            <p>Country:</p>
            <Typography style={{border:"1px solid", borderRadius:"5px", width: '100%'}}>$1000</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item style={{ display: 'flex', marginTop: '10px' }}>
            <p>Budget:</p>
            <Typography style={{ border: '1px solid', borderRadius: '5px' }}>$1000</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ width: '100%'}}>
          <Grid item style={{ display: 'flex', marginTop: '10px', marginBottom:"10px"}}>
            <Card data={'country'} />
          </Grid>
        </Grid>

        <Button variant="outlined" alignItems="center">Add</Button>

      </Container>
    </CssBaseline>
  )
}

export default Itineraries

// 'container mx-auto flex flex-col w-full justify-center items-center'
