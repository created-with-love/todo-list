import './App.css';
import TodoList from './TodoList';
import React, { Component } from 'react';
import initialTodos from './data-json/todoListData.json';
import s from './TodoList/TodoList.module.css';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    // вычисляю количество "готовых" элементов
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );

    return (
      <>
        <div className={s.Todos__Statistic}>
          <p>Общее количество: {todos.length}</p>
          <p>Количество выполненных: {completedTodos}</p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
