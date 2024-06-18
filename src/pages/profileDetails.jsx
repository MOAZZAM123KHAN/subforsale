import React from 'react'
import { Grid, Typography } from "@mui/material"; 
import Profile from '../customer/Components/Profile';
const profileDetails = () => {
  return (
    <div className=" border border-black">
    <Grid container spacing={3} className="mt-10">
      <Grid>
        <div>
          <Profile/>
        </div>
      </Grid>
      <Grid></Grid>
      <Grid></Grid>
      <Grid></Grid>
    </Grid>
    </div>
    
  )
}

export default profileDetails