import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Profile from './component/Profile/Profile'
import Header from './component/Header/header';
import Footer from './component/Footer/footer';

function App() {
  return (
    <div style={{ backgroundImage: "url('/images/mountain.jpg')", backgroundSize: "cover", height: "100vh", width: "100%", overflow: "hidden" }}  >
      <Grid container spacing={0} sx={{ width: '100%',height:'100%' }} >
        <Grid xs={12} >
          <center><Header></Header></center>
        </Grid>
        <Grid xs={12} >
          <center><Profile></Profile></center>
        </Grid>
        <Grid xs={12} >
          <center><Footer></Footer></center>
        </Grid>
      </Grid>
    </div>
  );
}
export default App;
