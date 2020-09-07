import React from 'react';
import { Button, Grid } from '@material-ui/core';
import Header from './components/Header';
import TodoListItem from './components/TodoListItem';

const todos: Array<Todo> = [
  { text: 'Nail TS', complete: false },
  { text: 'Manage time', complete: true },
];

function App() {
  return (
    <div className='App'>
      <Grid container direction='column'>
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={10} sm={8}>
            <TodoListItem todo={todos[0]} />
            <Button variant='contained' color='primary'>
              Click me here!
            </Button>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
