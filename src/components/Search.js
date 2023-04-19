import React from "react";

function Search({search, onSearch}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt"
          type="text"
          value={search} 
          onChange={(e) => onSearch(e.target.value)}
          />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
