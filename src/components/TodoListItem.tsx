import React from 'react';
import './styles/TodoListItem.css';

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  return (
    <li>
      <label className={todo.complete ? 'complete' : undefined}>
        <input type='checkbox' checked={todo.complete} />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoListItem;
