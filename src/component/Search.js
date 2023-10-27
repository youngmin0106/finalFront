import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PaginationRounded from "./PaginationRounded";
import axiosInstance from "../axiosInstance";


function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]); // 검색 결과 저장
  const [noticeList, setNoticeList] = useState([]);
  const [isNoticeLoading, setIsNoticeLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // 필요에 따라 조정
 

  useEffect(() => {
    loadNoticeList();
}, []);

const increaseViews = (postId) => {
    axiosInstance
        .put(`/notice/${postId}/views`)
        .then(() => {
            loadNoticeList();
        })
        .catch((error) => {
            console.log(error);
        });
};

const loadNoticeList = () => {
    axiosInstance
        .get("/notice")
        .then((response) => {
            setNoticeList(response.data);
            setSearchResults(response.data); // 공지사항 목록을 검색 결과로 저장
            setIsNoticeLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setIsNoticeLoading(false);
        });
};

  const handleSearch = () => {
    const filteredResults = noticeList.filter((notice) =>
      notice.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
    setCurrentPage(1); // 검색 시 페이지를 첫 번째 페이지로 초기화
  };

  const handleListClick = () => {
    setSearchTerm(""); // 검색어 초기화
    setSearchResults(noticeList); // 전체 목록으로 돌아가기
    setCurrentPage(1); // 페이지 초기화
  };
  if (isNoticeLoading) return <div>로딩중..</div>;
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
                  <th scope="col" className="th-num">번호</th>
                  <th scope="col" className="th-title">제목</th>
                  <th scope="col" className="th-date">등록일</th>
                  <th scope="col" className="th-cnt">조회수</th>
                </tr>
              </thead>
              <tbody>
                {searchResults
                  .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                  .map((notice, i) => (
                    <tr key={i}>
                      <td>{notice.no}</td>
                      <th>
                        <Link
                          to={`/notice/${notice.no}`}
                          onClick={() => increaseViews(notice.no)}
                        >
                          {notice.title}
                        </Link>
                      </th>
                      <td>{notice.createDate}</td>
                      <td>{notice.cnt}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div> 
        <PaginationRounded
                noticeList={searchResults}
                itemsPerPage={itemsPerPage}
                onPageChange={(page) => setCurrentPage(page)}
            />  
    </div>
  );
}

export default Search;
