import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
// import types from './todos-types';

const addTodo = createAction('todos/Add', text => ({
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
}));

const deleteTodo = createAction('todos/Delete');
const changeFilter = createAction('todos/ChangeFilter');
const toggleCompleted = createAction('todos/ToggleCompleted');

// const addTodo = (text) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     text,
//     completed: false,
//   },
// });

// const deleteTodo = (todoId) => ({
//   type: types.DELETE,
//   payload: todoId,
// });

// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// const toggleCompleted = (id) => ({
//   type: types.TOGGLE_COMPLETED,
//   payload: id,
// });

export default { addTodo, deleteTodo, changeFilter, toggleCompleted };
