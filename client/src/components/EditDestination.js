import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';


const EditDestination = () => {
  return (
    <div>
        <Typography variant ="h4" style={{marginTop:"10px"}}> Destination </Typography>
        <Grid container spacing={2}>
            
        </Grid>
        <p>name</p>
        <p>Cost</p>
        <p>notes</p>

        {/* <Grid container spacing={2}>
          <Grid item style={{display:"flex"}}>
            <p>Country:</p>
            <Typography style={{border:"1px solid", borderRadius:"5px", width: '100%'}}>$1000</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item style={{display:"flex", marginTop:"10px"}}>
            <p>Budget:</p>
            <Typography style={{border:"1px solid", borderRadius:"5px"}}>$1000</Typography>
          </Grid>
        </Grid> */}
    </div>
  )
}

export default EditDestination
