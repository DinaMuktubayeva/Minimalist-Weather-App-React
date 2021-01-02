import React from 'react';

function Form({ search, getSearch, updateSearch }) {
  return (
    <div className="Navbar">
    <form onSubmit={getSearch} >
      <input
        id="fieldID"
        type="text" autoFocus
        value={search}
        onChange={updateSearch}
        className="search-bar"
      />
      <button type="submit" className="search-button">
        <i className="fas fa-search"></i>
      </button>
      </form>
    </div>
  );
}

export default Form;