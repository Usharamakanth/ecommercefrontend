import React from "react";
import _ from "lodash";
import propTypes from "prop-types";
const Pagination = props => {
  //if itemsCount = 9  and pageSize = 4
  //i.e we have to display 4 items in each page
  //we will have total three pages
  const { itemsCount, pageSize, currentPage } = props;
  //number of pages = 9/4 = 2.25
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => props.onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
//add type checking after defining the component
Pagination.propTypes = {
  itemsCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired
};

export default Pagination;
