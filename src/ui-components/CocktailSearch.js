import React, { useState } from "react";
import DataGrid from "./DataGrid";

function CocktailSearch({ handleSubmit }) {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setSearchResult(
          data.drinks.length > 5 ? data.drinks.slice(0, 5) : data.drinks
        );
      });
  };

  return (
    <main>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="searchInput">Search for a Cocktail:</label>
        <input
          id="searchInput"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Search"}
        </button>
      </form>
      {searchResult && <DataGrid data={searchResult} />}
    </main>
  );
}

export default CocktailSearch;
