import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./Pagination.css";

function PaginationRounded({ noticeList, itemsPerPage, onPageChange }) {
  if (!noticeList) {
    noticeList = [];
  }
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(noticeList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleChangePage = (event, page) => {
    setCurrentPage(page);
    onPageChange(page);
  };
  return (
    <div className="pagination">
      <Stack direction="row" spacing={2} justifyContent="center">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handleChangePage}
          shape="rounded"
        />
      </Stack>
    </div>
  );
}

export default PaginationRounded;
