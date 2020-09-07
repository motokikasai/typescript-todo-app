import React, { useState, ChangeEvent } from 'react';

const AddTodoForm = () => {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  return (
    <form>
      <input type='text' value={newTodo} onChange={handleChange} />
      <button type='submit'>Add todo</button>
    </form>
  );
};

export default AddTodoForm;
