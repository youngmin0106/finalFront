import React, { useState, useEffect } from "react";
import axiosInstance from "../../../axiosInstance";
import PaginationComponent from "../../../component/pagination/PaginationComponent";
import Search from "../../../component/search/Search";
import { Link } from "react-router-dom";
import announcement from "../../../mockData/announcement";
import "../CSS/Notice.css";

function Notice({userInfo ,cs ,setCs}) {
  const [noticeList, setNoticeList] = useState([]);
  const [isNoticeLoading, setIsNoticeLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
 
  useEffect(() => {
    if (isNoticeLoading) {
      loadNoticeList();
    }
  }, [isNoticeLoading]);

 

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
       
        setNoticeList([
          ...announcement,
          ...response.data
        ]);

        setIsNoticeLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsNoticeLoading(false);
      });
  };

  return (
    <div className="notice">
        <h2 style={{ marginLeft : "10%", fontSize : "25px", marginTop : "10%" ,width : "10%"}}>- 공지사항</h2>
      <ul className="ulList">
        <li>
          <Link to={"/cs"}>공지사항</Link>
        </li>
        <li>
          <Link to={"/questions"}>자주묻는질문</Link>
        </li>
        <li>
          <Link to={"/onetoone"}>1:1문의</Link>
        </li>
      </ul>

      <section className="noti">
        <div className="page-title">
          <div className="container">
            <h3>공지사항</h3>
          </div>
        </div>
     
     
        <Search         
          increaseViews={increaseViews}
          data={noticeList}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          path={"/noticewirte"}
          ad={"/notice"}
          userInfo={userInfo}
          cs={cs}
          setCs={setCs}
        />
          
        <PaginationComponent
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={noticeList.length}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </section>
    </div>
  );
}

export default Notice;