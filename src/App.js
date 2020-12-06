import React, { Component } from 'react';
import shortid from 'shortid';
import Container from './components/Container';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import Filter from './components/Filter';
import initialTodos from './data-json/todoListData.json';
import Modal from './components/Modal';
import IconButton from './components/IconButton';
import { ReactComponent as AddIcon } from './icons/add.svg';
import { ReactComponent as CloseIcon } from './icons/close.svg';

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    // Вызывается единожды после 1-го рендера
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    // нужно делать проверку перед работой с методом setState, иначе приложение зациклится (рендер-сетстейт-рендер)
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;
    // Вызывается каждый раз, когда были обновления в state или передаваемых пропсах(если это потомок)
    if (nextTodos !== prevState) {
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }

    // вариант2 для закрытия модалки после добавления элемента
    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <div>
          <p>Total count: {totalTodoCount}</p>
          <p>Completed: {completedTodoCount}</p>
        </div>
        <IconButton>
          <AddIcon
            width="40"
            height="40"
            fill="#black"
            onClick={this.toggleModal}
          />
        </IconButton>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <IconButton className="Modal__close IconButton">
              <CloseIcon
                width="32"
                height="32"
                fill="#black"
                onClick={this.toggleModal}
              />
            </IconButton>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}

        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </Container>
    );
  }
}

export default App;