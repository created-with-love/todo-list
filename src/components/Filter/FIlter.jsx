import React from 'react';
import './Filter.scss';

const Filter = ({ value, onChange }) => (
  <label className="filter">
    <p className="filter__text">Filter by name:</p>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="filter__input"
    />
  </label>
);

export default Filter;
