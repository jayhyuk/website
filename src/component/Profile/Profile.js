import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

export default function Profile() {
  return (
    <section>
      <br />
      <Grid container spacing={0} justifyContent="flex-end" sx={{ width:'100%',height:'100%'}} alignItems="center">
        <Grid item xs={12}>
          <center>

            <Grid container spacing={1} justifyContent="flex-end" alignItems="center"
              sx={{
                boxShadow: 2,
                border: 0,
                width:'100%',
                height:'100%',
                backgroundColor: '#00000055',
                color: 'white',
              }}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={4} justifyContent="flex-start" alignItems="center">
                <Avatar
                  alt="Jirapong Wattanatom"
                  src="/images/jay.jpeg"
                  sx={{ width: 128, height: 128 }}
                />
              </Grid>
              <Grid item xs={4} justifyContent="flex-start" alignItems="center">
                <h1>Hi ! I'm Jirapong Wattanatom</h1>
                <h5>Devops - Site Reliability Engineer@Agoda</h5>
                <h5>Improve uptime, Incident management<br /> Alerts & Monitoring, Anomaly Detection</h5>
                <h5>Email: jay.jiraponw@gmail.com</h5>
                <h5>Tel: (+66) 860140076 </h5>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </center>
        </Grid>
      </Grid>
      <br />
    </section>
  );
}
