import React from "react";
import "./Pagination.scss";
import { useState } from "react";

function Pagination({ searchParams, setSearchParams, totalPages }) {
  const [pages, setPages] = useState([1, 2, 3, 4, 5]);

  const clickHandler = (page) => {
    setSearchParams((prev) => ({ ...prev, currentPage: page }));

    if (page < 3) {
        if(page < 2){
            setPages([page, page + 1, page + 2, page + 3, page + 4]);
            return;
        }
      setPages([page - 1, page, page + 1, page + 2, page + 3]);
      return;
    }
    if (page > totalPages - 2) {
        if(page > totalPages - 1){
            setPages([page - 4, page - 3, page - 2, page - 1, page]);
            return;
        }
        setPages([page - 3, page - 2, page - 1, page, page + 1]);
      return;
    }
    setPages([page - 2, page - 1, page, page + 1, page + 2]);
  };

  return (
    <div className="pagination">
      {pages.map(page => (
        <div
          key={page}
          className={
            searchParams.currentPage === page ? "page current" : "page"
          }
          onClick={() => clickHandler(page)}
        >
          {page}
        </div>
      ))}
    </div>
  );
}

export default Pagination;
