import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.image) {
    return (
      <div className="col-4">
        <a href={props.image.src.original} target="_blank" rel="noreferrer">
          <img src={props.image.src.landscape} className="img-fluid" alt="" />
        </a>
      </div>
    );
  } else {
    return null;
  }
}
