// PaginationComponent.js

import React from "react";
import Pagination from "react-js-pagination";



function PaginationComponent({ currentPage, itemsPerPage, totalItems, onPageChange }) {
  return (
    <div className="pagination">
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={totalItems}
        pageRangeDisplayed={5}
        onChange={(page) => onPageChange(page)}
      />
    </div>
    
  );
}

export default PaginationComponent;
