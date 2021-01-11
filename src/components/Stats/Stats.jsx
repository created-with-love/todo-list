import React from 'react';
import { connect } from 'react-redux';
import './Stats.scss';

const Stats = ({ total, completed }) => (
  <div className="Stats">
    <p className="Stats__item">
      <span className="Stats__value">{total}</span>
      <span className="Stats__label">Total tasks</span>
    </p>
    <p className="Stats__item">
      <span className="Stats__value">{completed}</span>
      <span className="Stats__label">Completed</span>
    </p>
  </div>
);

const calculateCompletedItems = items => {
  return items.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
};

const mapStateToProps = state => ({
  total: state.todos.items.length,
  completed: calculateCompletedItems(state.todos.items),
});

export default connect(mapStateToProps, null)(Stats);
