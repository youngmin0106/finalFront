import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CsPage/CsCss/Notice.css";

function Search2({ increaseViews, data, setCurrentPage, currentPage ,itemsPerPage}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const filteredResults = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
    setCurrentPage(1);
  };

  const handleListClick = () => {
    setSearchTerm("");
    setSearchResults(data);
    setCurrentPage(1);
  };
 
  return (
    <div className="notice">
      <div id="board-search">
        <div className="container">
          <div className="search-window">
            <form action="">
              <div className="search-wrap">
                <div id="search" className="blind"></div>
                <input
                  id="search"
                  type="search"
                  name=""
                  placeholder="검색어를 입력해주세요."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="button" className="btn btn-dark" onClick={handleSearch}>
                  검색
                </button>
              </div>
              <div>
                <Link to="/write">
                  <button className="btn btn-dark add">글작성</button>
                </Link>
                <button className="btn btn-dark" onClick={handleListClick}>
                  목록
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div id="board-list">
        <div className="container">
          <table className="board-table">
            <thead>
              <tr>
                <th scope="col" className="th-num">
                  번호
                </th>
                <th scope="col" className="th-title">
                  제목
                </th>
                <th scope="col" className="th-date">
                  등록일
                </th>
                <th scope="col" className="th-cnt">
                  조회수
                </th>
              </tr>
            </thead>
            <tbody>
              {
              searchResults           
                .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                .map((data, i) => (
                  
                  <tr key={i}>
                    <td>{data.no}</td>
                    <th>
                      <Link
                        to={`/notice/${data.no}`}
                        onClick={() => increaseViews(data.no)}
                      >
                        {data.title}
                      </Link>
                    </th>
                    <td>{data.createDate}</td>
                    <td>{data.cnt}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Search2;
