import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodoFrom from './components/AddTodoForm';

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

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== '' &&
      setTodos([...todos, { text: newTodo, complete: false }]);
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
            <AddTodoFrom addTodo={addTodo} />
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
