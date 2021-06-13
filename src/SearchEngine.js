import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import "./SearchEngine.css";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState(null);
  let [searchResults, setSearchResults] = useState(null);

  function handleResponse(response) {
    setSearchResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // API documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <section className="SearchForm">
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
      </section>
      <SearchResults searchResults={searchResults} />
    </div>
  );
}
