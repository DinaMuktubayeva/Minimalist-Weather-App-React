import React from 'react';
import '../App.css';

function Form({ search, getSearch, updateSearch }) {
  return (
    <form onSubmit={getSearch} className="search-form" >
      <input
        id="fieldID"
        type="text" autoFocus
        value={search}
        onChange={updateSearch}
        className="search-bar"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>);
}

export default Form;