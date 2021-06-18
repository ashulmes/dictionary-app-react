import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <h4>
        <a
          href={props.phonetic.audio}
          type="button"
          className="btn btn-light"
          target="_blank"
          rel="noreferrer"
        >
          ▶
        </a>{" "}
        <span className="PhoneticText">{props.phonetic.text}</span>
      </h4>
    </div>
  );
}
