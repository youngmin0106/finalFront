import React, { useState, useEffect } from "react";
import axiosInstance from "../../../axiosInstance";
import PaginationComponent from "../../../component/pagination/PaginationComponent";
import Search from "../../../component/search/Search";
import { Link } from "react-router-dom";



function Onetoone() {
  const [oneList, setOneList] = useState([]);
  const [oneLoading, setOneLogind] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    if (oneLoading) {
      loadOneList();
    }
  }, [oneLoading]);

 

  const increaseViews = (postId) => {
    axiosInstance
      .put(`/onetoone/${postId}/views`)
      .then(() => {
        loadOneList();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadOneList = () => {
    axiosInstance
      .get("/onetoone")
      .then((response) => {
      
        setOneList(response.data);
        setOneLogind(false);
      })
      .catch((error) => {
        console.log(error);
        setOneLogind(false);
      });
  };

  return (
    <div className="notice">
        <h2 style={{ marginLeft : "10%", fontSize : "25px", marginTop : "10%" ,width : "10%"}}>- 1:1문의</h2>
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
            <h3>1:1문의</h3>
          </div>
        </div>
     
     
        <Search         
          increaseViews={increaseViews}
          data={oneList}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          path={"/onetoonewrite"}
          ad={"/onetoone"}
        />
          
        <PaginationComponent
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={oneList.length}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </section>
    </div>
  );
}

export default Onetoone;
