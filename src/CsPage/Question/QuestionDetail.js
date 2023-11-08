import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import question from "../../mockData/question";


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


  return (
    <div className="write">
      <div className="title-input">
        <span className="titlespan">제목</span>
        <input className="writetitle" type="text" name="title" value={questionDetail.title} disabled />
      </div>
      <br />

      <div>
        <span className="contentspan" >내용</span>
        <textarea className="contentarea"
          disabled
          value={questionDetail.content}
          name="contents"
          cols="74"
          rows="15"
        ></textarea>
      </div>

      <br />
      <div className="clickbtn">
        {
          cs && cs.member && cs.member.username == questionDetail.member.username ?
            <Button variant="outline-primary" className="sumitbtn" onClick={questionupdatebtn}>수정</Button> :
            <div></div>
        }
        {
          cs && cs.member && cs.member.username == questionDetail.member.username ?
            <Button variant="outline-danger" className="resetbtn" type="reset"
              onClick={() => {

                axiosInstance.delete('/questions', { params: { 'no': questionDetail.no } })
                  .then(response => {
                    alert(response.data);
                    navigate('/questions');
                  }).catch(error => {
                    console.log(error);
                  })
              }}
            >삭제</Button> :
            <div></div>
        }
        <Button variant="outline-info" className="backbtn" onClick={backbtn}>목록</Button>{' '}
      </div>
    </div>
  );
}

export default QuestionDetail;