import React from 'react';
import { connect } from 'react-redux';
import todosActions from '../../redux/todos/todos-actions';
import './Filter.scss';

const Filter = ({ value, onChange }) => (
  <div className="filter-wrapper">
    <label className="filter">
      <p className="filter__text">Filter by name:</p>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="filter__input"
      />
    </label>
  </div>
);

const mapStateToProps = state => ({
  value: state.todos.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(todosActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
