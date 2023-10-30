import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import { Button } from "react-bootstrap";

function QuestionUpdate(){
  const {no} = useParams();
  const navigate = useNavigate();

   // 상태 변수 초기값을 설정
   const [questionUpdate, setQuestionUpdate] = useState({
    title: "",
    content: "",
  });

  const backbtn = () => {
    navigate(-1);
  };

  // 게시물 데이터를 불러와 상태 변수에 설정하는 함수
  const loadQuestionUpdateData = () => {
    axiosInstance.get(`/questions/${no}`) 
      .then((response) => {
        const data = response.data;
        setQuestionUpdate(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadQuestionUpdateData();
  }, []);

  // 입력 필드 값이 변경될 때 호출되는 함수
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setQuestionUpdate({
      ...questionUpdate,
      [name]: value,
    });
  };

  // 게시물 수정을 수행하는 함수
  const updatePost = () => {
    axiosInstance.put(`/questions/${no}/update`, questionUpdate) // "/notice/:no/update"에 실제 게시물 ID를 전달
      .then((response) => {
        alert("게시물이 수정되었습니다.");
        navigate('/questions');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return(
    <div className="write">
      <input type="hidden" />
    <div className="title-input">
      <span className="titlespan">제목</span>
      <input className="writetitle" type="text" name="title" value={questionUpdate.title} onChange={changeHandler}/>
    </div>
    <br/>

    <div>
      <span className="contentspan">내용</span>
      <textarea className="contentarea"
        name="content"
        cols="74"
        rows="15"
        value={questionUpdate.content}   
        onChange={changeHandler}
      ></textarea>
    </div>
    <br />
    <div className="clickbtn">
    <Button variant="outline-primary" className="sumitbtn" onClick={updatePost}>수정</Button>{' '}
    <Button variant="outline-danger" className="resetbtn" type="reset" onClick={backbtn}>취소</Button>{' '}
     </div>
   </div>
  );
}

export default QuestionUpdate;