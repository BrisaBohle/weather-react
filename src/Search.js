import React from "react";
import "./Search.css";
export default function Search() {
  return (
    <div className="search-city">
      <form className="search-engine">
        <div className="input-group mb-3 search-field">
          <input
            type="text"
            className="form-control"
            placeholder="Search City"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-outline-secondary submit-button shadow-sm"
          ></input>{" "}
          <button type="button" className="btn btn-outline-secondary">
            Current
          </button>
        </div>
      </form>
    </div>
  );
}
