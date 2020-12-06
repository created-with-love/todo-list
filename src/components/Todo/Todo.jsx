import React from 'react';
import './Todo.scss';
import IconButton from '../../components/IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

const Todo = ({ text, onToggleCompleted, onDeleteTodo, completed }) => (
  <>
    <label className="TodoList__label">
      <input
        type="checkbox"
        className="TodoList__checkbox"
        checked={completed}
        onChange={onToggleCompleted}
      />
      <p className="TodoList__text">{text}</p>
    </label>

    <IconButton
      className="IconButton IconButton__close"
      aria-label="delete element icon"
      onClick={onDeleteTodo}
    >
      <DeleteIcon width="32" height="32" fill="#black" />
    </IconButton>
  </>
);

export default Todo;
