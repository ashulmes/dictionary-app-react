import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4 className="PartOfSpeech">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <small>
                <div className="Example">{definition.example}</div>
                <Synonyms synonyms={definition.synonyms} />
              </small>
            </p>
          </div>
        );
      })}
    </div>
  );
}
