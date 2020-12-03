import React from 'react';
import './Filter.scss';

const Filter = ({ value, onChange }) => (
  <label class="filter">
    <p class="filter__text">Filter by name:</p>
    <input
      type="text"
      value={value}
      onChange={onChange}
      class="filter__input"
    />
  </label>
);

export default Filter;
