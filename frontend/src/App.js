import React from 'react';
import { Typography, Grid, AppBar, Container, Grow } from '@material-ui/core';
import dejaview from './images/dejaview.png';

const App = () => {
  return (
   <Container maxidth="lg">
     <AppBar position="static" color="inherit">
       <Typography variant="h2" align="center">DejaView</Typography>
       <img src={dejaview} alt="dejaview" height="60" />
     </AppBar>
     <Grow in>
       <Container>
         <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>

          </Grid>
          <Grid item xs={12} sm={4}>
            
          </Grid>
         </Grid>
       </Container>
     </Grow>
   </Container>
  );
}

export default App;
