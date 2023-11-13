import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";
import question from "../../../mockData/question";


function QuestionDetail({ userInfo, cs }) {

  const { no } = useParams();
  const [questionDetail, setQuestionDetail] = useState([]);
  const [loding, setLoding] = useState(true);
  const navigate = useNavigate();

  const questionupdatebtn = () => {
    navigate(`/questions/${no}/update`);
  }

  const backbtn = () => {
    navigate('/questions');
  }

  useEffect(() => {
    if (no.startsWith('질문')) {
      // '질문'인 경우, 파싱된 번호를 찾아서 설정
      const questionNo = parseInt(no.replace('질문', ''), 10);
      const mockData = question.find(item => item.no === `질문${questionNo}`);

      if (mockData) {
        setQuestionDetail(mockData);
        setLoding(false);
      } else {
        // 묵 데이터가 없다면 404 페이지로 이동 또는 다른 처리 수행
        setLoding(false);
      }
    } else {
      // '질문'가 아닌 경우, 실제 데이터를 서버에서 가져오기
      axiosInstance.get(`/questions/${no}`)
        .then(response => {
          setQuestionDetail(response.data);
          setLoding(false);
        })
        .catch(error => {
          console.log(error);
          setLoding(false);
        });
    }
  }, [no]);


  console.log(questionDetail);

  if (loding)
    return <div>로딩중</div>


    return(
      <div className="WriteNotice">
      <div className="table">
        <div className="title">
          <p className="th">제목</p>
          <input className="writetitle" type="text" name="title" value={questionDetail.title} disabled />
        </div>
        <div className="writer">
          <p className="th">작성자</p>
          <p className="writename">{questionDetail.member.name}</p>
        </div>
      </div>
      <div className="content">
        <textarea
          value={questionDetail.content}
          disabled
          name="content"
        ></textarea>
      </div>
      <div className="clickbtn">
        {
          cs.member.username == questionDetail.member.username ?
          <button  className="click" onClick={questionupdatebtn}>수정</button> :
          <div></div>
        }
        {
           cs.member.username == questionDetail.member.username ?
          <button  className="noClick" type="reset" 
          onClick={()=>{
         
            axiosInstance.delete('/questions', {params : {'no':questionDetail.no}})
            .then(response=>{ 
              alert(response.data);
              navigate('/questions');
            }).catch(error=>{
              console.log(error);
            })}}
            >삭제</button>:
            <div></div>
          }
      <button  className="backClick" onClick={backbtn}>목록</button>{' '}
      </div>
    </div>
    );
  }
  
  export default QuestionDetail;