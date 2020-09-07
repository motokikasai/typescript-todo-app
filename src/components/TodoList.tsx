import React from 'react';
import TodoListItem from './TodoListItem';
import { v4 as uuidv4 } from 'uuid';

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <TodoListItem key={uuidv4} todo={todo} toggleTodo={toggleTodo} />
        );
      })}
    </ul>
  );
};

export default TodoList;
