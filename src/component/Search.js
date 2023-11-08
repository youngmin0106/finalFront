// 데이터 렌더링
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CsPage/CsCss/Notice.css";
import OnSearch from "./OnSearch";
import question from "../mockData/question";
import announcement from "../mockData/announcement";

function Search({ increaseViews, data, currentPage, itemsPerPage ,path , ad ,userInfo}) {
  const [searchResults, setSearchResults] = useState([]);
  
  useEffect(()=>{
    setSearchResults([...question, ...announcement, ...data])
  },[question,announcement,data])

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const filteredResults = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([...question, ...announcement, ...data])
    }
  };
  
  return (
    <div className="searchcomp">
      <div id="board-search">
        <div className="container">
          <OnSearch onSearch={handleSearch} path={path} userInfo={userInfo}/>
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
                <th scope="col" className= "th-title">
                  제목
                </th>
                <th scope="col" className= "th-title">
                  작성자
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
              {searchResults
                .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                .map((data, i) => (
                  <tr key={i}>
                    <td>{data.no}</td>
                    <th>
                      <Link
                        to={`${ad}/${data.no}`}
                        onClick={() => increaseViews(data.no)}
                      >
                        {data.title}
                      </Link>
                    </th>
                    {/* 나중에  <td>{data.member.username}</td> 로 고치셈 */}
                    {data.member  ? <td>{data.member.username}</td> : <td></td>}  
                    {/* <td>{data.member.username}</td> */}
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

export default Search;
