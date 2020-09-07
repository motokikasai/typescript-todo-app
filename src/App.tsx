import React from 'react';
import { Button, Grid } from '@material-ui/core';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Grid container direction='column'>
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={1} sm={2} />
          <Grid item xs={10} sm={8}>
            <h1>hello Typescript!</h1>
            <Button variant='contained' color='primary'>
              Click me here!
            </Button>
          </Grid>
          <Grid item xs={1} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
