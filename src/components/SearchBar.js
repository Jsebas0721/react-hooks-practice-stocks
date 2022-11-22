import React, { useState } from "react";

function SearchBar({setSortStocks, setFilteredStocks}) {
  const [sortAlpha , setSortAlhpa] = useState(false);
  const [sortPrice , setSortPrice] = useState(false);
  


  function handleChange(e){
    if(e.target.name === "sort"){
      if(e.target.value === "Alphabetically"){
        console.log(e.target.value);
        setSortAlhpa(!sortAlpha);
        setSortPrice(sortPrice => sortPrice = false);
        setSortStocks(e.target.value);
      }else if( e.target.value === "Price"){
        setSortPrice(!sortPrice); 
        setSortAlhpa(sortAlpha => sortAlpha = false); 
        console.log(e.target.value);
        setSortStocks(e.target.value);
      }
    }else if(e.target.name === "filter"){
        console.log(e.target.value);
        setFilteredStocks(e.target.value);
       
    }
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortAlpha}
          onChange={handleChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortPrice}
          onChange={handleChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select name="filter" onChange={handleChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
