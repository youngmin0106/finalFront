import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./Pagination.css";

function PaginationComponent({ currentPage, itemsPerPage, totalItems, onPageChange }) {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  return (
    <Stack spacing={2} className="stackpag">
      <Pagination
        className="pagination"
        count={pageCount}
        page={currentPage}
        onChange={(event, page) => onPageChange(page)}
        shape="rounded"
      />
    </Stack>
  );
}

export default PaginationComponent;
