import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./SearchResults.css";

export default function SearchResults(props) {
  if (props.searchResults) {
    return (
      <div className="SearchResults">
        <div className="row">
          <div className="col-5">
            <div class="sticky-top">
              <h3>{props.searchResults.word}</h3>
              {props.searchResults.phonetics.map(function (phonetic, index) {
                return (
                  <div key={index}>
                    <Phonetics phonetic={phonetic} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-7 Meanings">
            {props.searchResults.meanings.map(function (meaning, index) {
              return (
                <div key={index}>
                  <Meaning meaning={meaning} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
