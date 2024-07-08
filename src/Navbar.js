import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar({ src, setTitles ,setloader}) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    setloader(true);
    try {
      
      const response = await fetch(`https://openlibrary.org/search.json?q=${searchQuery}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      const data = await response.json();
      const titles = data.docs.map((doc) => doc.title);
      setTitles(titles);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
    finally {
      setloader(false); // Ensure loader is stopped after data is fetched or an error occurred
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Curd Operation
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <span style={{ fontSize: "1.8rem" }}>Curd</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ContactForm">
                <span style={{ fontSize: "1.8rem" }}>Contact Us</span>
              </Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearchSubmit} style={{ marginRight: "1rem" }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for books"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="Profile">
                <img
                  src={src}
                  alt="Profile"
                  className="rounded-circle"
                  style={{ width: "80px", height: "80px" }}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
