import React from 'react';
import { Button } from '@material-ui/core';

const AddTodoForm = () => {
  return (
    <form>
      <input type='text' />
      {/* <button type='submit'>Add todo</button> */}
      <Button variant='contained' color='primary'>
        Add todo
      </Button>
    </form>
  );
};

export default AddTodoForm;
