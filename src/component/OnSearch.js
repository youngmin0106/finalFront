//검색 컴포넌트
import React, { useState } from "react";
import { Link } from "react-router-dom";

function OnSearch({ onSearch,path }) {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleReset = () => {
    setSearchTerm("");
    onSearch(""); //리셋
  };

  return (
    <div className="search-window">
      <div className="search-wrap">
        <input
          type="search"
          placeholder="검색어를 입력해주세요."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button" className="btn btn-dark" onClick={handleSearch}>
          검색
        </button>
      </div>
       <Link to={path}>
          <button className="btn btn-dark add">글작성</button>
        </Link>
        <button className="btn btn-dark" onClick={handleReset}>
          초기화
        </button>
   
    </div>
  );
}

export default OnSearch;
