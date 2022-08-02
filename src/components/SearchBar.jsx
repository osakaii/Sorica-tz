import React from "react";
import "./SearchBar.scss";

function SearchBar({ searchParams, setSearchParams }) {
  return (
    <div className="SearchBar">
      <div className="SearchBar-item">
        <p>поиск по коду</p>
        <input
          type="text"
          className="search"
          value={searchParams.code}
          onChange={(e) =>
            setSearchParams((prev) => ({ ...prev, code: e.target.value }))
          }
        />
      </div>

      <div className="SearchBar-item">
        <p>сортировка по</p>
        <select
          className="search-select"
          onChange={(e) =>
            setSearchParams((prev) => ({ ...prev, value: e.target.value }))
          }
        >
          <option value="asc">возрастанию</option>
          <option value="desc">убыванию</option>
        </select>
      </div>

      <div className="SearchBar-item">
        <p>сортировка по</p>
        <select
          className="search-select"
          onChange={(e) =>
            setSearchParams((prev) => ({ ...prev, key: e.target.value }))
          }
        >
          <option value="price">цене</option>
          <option value="name">названию</option>
        </select>
      </div>

      <div className="SearchBar-item">
        <p> кол-во</p>
        <input
          type="number"
          className="search-select input-pagesize"
          value={searchParams.pagesize === 0? '' : searchParams.pagesize}
          onChange={(e) =>
            setSearchParams((prev) => ({
              ...prev,
              pagesize: e.target.value <= 0 ? 0 : e.target.value,
            }))
          }
        />
      </div>
    </div>
  );
}

export default SearchBar;
