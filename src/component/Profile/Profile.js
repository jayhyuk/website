import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';

export default function Profile() {
  return (
    <section>
      <Grid container spacing={1} >
        <Grid xs={2} />
        <Grid xs={8}>
        <center>
          <Grid container spacing={3} display='flex' justifyContent='center'  alignItems="center">
            <Grid xs={4} justifyContent="center"  alignItems="center"> 
              <Avatar
                alt="Jirapong Wattanatom"
                src="/images/jay.jpeg"
                sx={{ width: 56, height: 56 }}
              />
            </Grid>
            <Grid xs={4} justifyContent="center" >
              <h4>Jirapong Wattanatom</h4>
              <h5>Devops - Site Reliability Engineer@Agoda</h5>
              <h5>Improve uptime, Incident management<br/> Alerts & Monitoring, Anomaly Detection</h5>
            </Grid>
            <Grid xs={4} justifyContent="center"  alignItems="center">
              <h5>Email: jay.jiraponw@gmail.com</h5>
              <h5>Tel: (+66) 860140076 </h5>
              <h5>Github: https://github.com/jayhyuk </h5>
            </Grid> 
          </Grid>
          </center>
        </Grid>
        <Grid xs={2} />
      </Grid>
    </section>
  );
}