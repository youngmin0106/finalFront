import { useEffect, useState } from "react";
import { TfiComment } from "react-icons/tfi";
import axiosInstance from "../../axiosInstance";
import { Link } from "react-router-dom";
import "../CsCss/QuestionMain.css";
function QuestionMain() {
  const [questionMiniList, setQuestionMiniList] = useState([]);
  const [isQuestionLoading, setIsQuestionLoading] = useState(true);
  const [questionList, setQuestionList] = useState([]);

  const loadQuestionList = () => {
    axiosInstance
      .get("/questions")
      .then((response) => {
        setQuestionList(response.data);
        const truncatedList = response.data.slice(0, 5).map((question) => {
          if (question.title.length > 27) {
            question.title = question.title.slice(0, 27) + " ..."; // 제목 길이 제한
          }
          return question;
        });
        setQuestionMiniList(truncatedList.slice(0, 5)); // 처음 5개 항목만 miniList에 설정
        setIsQuestionLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsQuestionLoading(false);
      });
  };
  useEffect(() => {
    loadQuestionList(); // 페이지가 로드될 때 공지사항 데이터를 가져옵니다.
  }, []);
  return (
    <div className="questionmain">

      <table className="table-fill questiontab">
        <thead>
          <tr>
            <th className="text-left"><TfiComment className="TfiComment" /><Link to={"/questions"} style={{ color: "black" }}>자주묻는질문</Link><Link to={"/questions"} style={{ color: "black" }} className="plus">+</Link></th>
          </tr>
        </thead>
        {
          questionMiniList.map((question, i) => {
            return (
              <tbody className="table-hover" key={i}>
                <tr>
                <td className="text-left">
                  <Link to={`/questions/${question.no}`} className="linktitle">
                    {question.title}
                  </Link>
                </td>
                </tr>
              </tbody>
            );
          })
        }
      </table>
    </div>

  );
}
export default QuestionMain;