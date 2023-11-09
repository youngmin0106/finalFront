import { useEffect, useState } from "react";
import PaginationComponent from "../../component/PaginationComponent";
import Search from "../../component/Search";
import axiosInstance from "../../axiosInstance";
import { Link } from "react-router-dom";



function Questions() {
    const [questionList, setQuestionList] = useState([]);
    const [isQuestionLoading, setIsQuestionLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
  
    useEffect(() => {
      if (isQuestionLoading) {
        loadQuestionList();
      }
    }, [isQuestionLoading]);
  
   
  
    const increaseViews = (postId) => {
      axiosInstance
        .put(`/questions/${postId}/views`)
        .then(() => {
          loadQuestionList();
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const loadQuestionList = () => {
        axiosInstance
          .get("/questions")
          .then((response) => {
           
            setQuestionList(response.data);
            setIsQuestionLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setIsQuestionLoading(false);
          });
      };
    return (
        <div className="notice">
        <h2 style={{marginLeft : "10%", fontSize : "25px", marginTop : "10%" ,width : "10%"}}>- 자주묻는질문</h2>
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
            <h3>자주묻는질문</h3>
          </div>
        </div>

        <Search
          increaseViews={increaseViews}
          data={questionList}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          path={"/questionwrite"}
          ad={"/questions"}
        />
        <PaginationComponent
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={questionList.length}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </section>
    </div>
    );
}

export default Questions;