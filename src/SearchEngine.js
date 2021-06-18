import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import "./SearchEngine.css";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState(null);
  let [searchResults, setSearchResults] = useState(null);
  let [images, setImages] = useState(null);

  function handleDictionaryResponse(response) {
    setSearchResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setImages(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    // API documentation: https://dictionaryapi.dev/
    let apiDictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
    axios.get(apiDictionaryUrl).then(handleDictionaryResponse);

    // API documentation: https://www.pexels.com/api/documentation/
    let apiPexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    let apiPexelsKey =
      "563492ad6f91700001000001cf5efbcbc3fd41759e13f101d6b2cb52";
    let headers = { Authorization: `Bearer ${apiPexelsKey}` };
    axios.get(apiPexelsUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <section className="SearchForm">
        <div className="row">
          <form onSubmit={search}>
            <input
              type="search"
              onChange={handleKeywordChange}
              className="SearchField"
            />
          </form>
        </div>
      </section>
      <SearchResults searchResults={searchResults} images={images} />
    </div>
  );
}
