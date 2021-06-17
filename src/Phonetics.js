import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <h4>
        <button
          type="button"
          className="btn btn-light"
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
        >
          ▶
        </button>{" "}
        <span className="PhoneticText">{props.phonetic.text}</span>
      </h4>
    </div>
  );
}
