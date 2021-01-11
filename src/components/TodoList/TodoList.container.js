import { connect } from 'react-redux';
import todosActions from '../../redux/todos/todos-actions';
import TodoList from './TodoList';

// Обёртка над TodoList для вынесения логики

const getVisibleTodos = (allTodos, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allTodos.filter(todo =>
    todo.text.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => {
  const { filter, items } = state.todos;
  const visibleTodos = getVisibleTodos(items, filter);

  return {
    todos: visibleTodos,
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(todosActions.deleteTodo(id)),
  onToggleCompleted: id => dispatch(todosActions.toggleCompleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
