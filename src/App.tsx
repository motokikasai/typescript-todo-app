import React, { useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import Header from './components/Header';
import TodoList from './components/TodoList';

const initialTodos: Array<Todo> = [
  { text: 'Nail TS', complete: true },
  { text: 'Manage time', complete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className='App'>
      <Grid container direction='column'>
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={10} sm={8}>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <Button variant='contained' color='primary'>
              Click me here!
            </Button>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
