import React, { useState, ChangeEvent, FormEvent } from 'react';
// import {createStyles, makeStyles, Theme} from '@material-ui/styles'
import { TextField, Button } from '@material-ui/core';

interface AddTodoFormProps {
  addTodo: AddTodo;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form>
      <TextField
        id='standard-basic'
        label='To-do item...'
        value={newTodo}
        onChange={handleChange}
      />
      <Button
        type='submit'
        onClick={handleSubmit}
        variant='contained'
        color='primary'
      >
        Add item
      </Button>
    </form>
  );
};

export default AddTodoForm;
