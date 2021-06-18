import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      This app was coded by Alex Sumner-Hulmes. It is{" "}
      <a
        href="https://github.com/ashulmes/dictionary-app-react"
        target="_blank"
        rel="noreferrer"
        title="GitHub | This will open in a new tab"
      >
        open-sourced on GitHub
      </a>{" "}
      and{" "}
      <a
        href="https://www.netlify.com/"
        target="_blank"
        rel="noreferrer"
        title="Netlify | This will open in a new tab"
      >
        hosted on Netlify
      </a>
      .
    </div>
  );
}
