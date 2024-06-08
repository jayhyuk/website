import * as React from 'react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Paper sx={{
      marginTop: '0',
      width: '100%',
      position: 'fixed',
      top: 0,
      backgroundColor: "black",
      color: 'white',

    }} component="footer" square variant="outlined">
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1
          }}
        >
          <div>

          </div>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,

          }}
        >
          <Typography variant="caption" color="white">
            Home | Resume | Contact me
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}