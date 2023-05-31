import React, { useState } from "react";

export default function Footer() {
  return (
    <footer className="two-column">
      <div className="wrapper">
        <ul>
          <li>
            Designed &amp; coded by <strong>Daniel Pape</strong>
            <br />
            in a green part of England
          </li>
        </ul>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:hello@bydanielpape.com">hello@bydanielpape.com</a>
          </li>
          <li>
            Twitter:{" "}
            <a href="https://www.twitter.com/bydanielpape" target="_blank">
              /bydanielpape
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/bydanielpape" target="_blank">
              /bydanielpape
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
