import React from "react";

function Bookstore({ titles }) {
  return (
    <div className="container">
      <h2>Book Titles</h2>
      <ul>
        {titles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Bookstore;
