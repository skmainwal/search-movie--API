import React, { useState } from "react";
import "./Nav.css";

import { SearchOutlined } from "@material-ui/icons";

function Nav({ getData }) {
  const [query, setQuery] = useState("");
  const changeHandler = (e) => {
    // console.log(e.target.value);
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData(query);
    setQuery("");
  };

  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Netflix Logo"
      />
      <div className="nav__searchNav">
        <form onSubmit={onSubmit}>
          <div className="nav__search">
            <div className="nav__searchContainer">
              <SearchOutlined />
              <input
                type="type"
                placeholder="Search a movie"
                onChange={changeHandler}
                value={query}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Nav;
