import React from 'react';
import {Paper, Grid} from '@material-ui/core';
import Body from './Body';
import Head from './Head';
import Footer from './Footer';

function App() {
  return (<>
  <Head/>
    <Grid container>
        <Grid item xs/>

      <Grid item xs={12}>
        <Paper elevation={3}>
          <Body/>
          <Footer/>
        </Paper>
      </Grid>

        <Grid item xs/>
    </Grid>
    </>);
}

export default App;
