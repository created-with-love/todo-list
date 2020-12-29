import React from 'react';
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

export default Filter;
