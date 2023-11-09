import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import {  useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../axiosInstance";


function QuestionDetail({userInfo, cs}){

  const {no} = useParams();
  const [questionDetail,setQuestionDetail] = useState();
  const [loding,setLoding] = useState(true);
  const navigate = useNavigate();

  const questionupdatebtn=()=>{
    navigate(`/questions/${no}/update`);
  }

  const backbtn=()=>{
    navigate('/questions');
  }
  
  useEffect(()=>{
    axiosInstance.get(`/questions/${no}`)
    .then(response=>{
      setQuestionDetail(response.data);
      setLoding(false);
    }).catch(error =>{
      console.log(error);
      setLoding(false);
    })
  },[no])
  if(loding)
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