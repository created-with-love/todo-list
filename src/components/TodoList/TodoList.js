import React from 'react';
import './TodoList.scss';
import Todo from '../Todo';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <Todo
        key={id}
        id={id}
        text={text}
        completed={completed}
        onToggleCompleted={() => onToggleCompleted(id)}
        onDeleteTodo={() => onDeleteTodo(id)}
      />
    ))}
  </ul>
);

export default TodoList;
