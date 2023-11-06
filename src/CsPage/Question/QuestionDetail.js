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
    <div className="write">
    <div className="title-input">
      <span className="titlespan">제목</span>
      <input className="writetitle" type="text" name="title"  value={questionDetail.title} disabled/>
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
        cs.member.username == questionDetail.member.username ?
        <Button variant="outline-primary" className="sumitbtn" onClick={questionupdatebtn}>수정</Button> :
        <div></div>
      }
      {
         cs.member.username == questionDetail.member.username ?
        <Button variant="outline-danger" className="resetbtn" type="reset" 
        onClick={()=>{
       
          axiosInstance.delete('/questions', {params : {'no':questionDetail.no}})
          .then(response=>{ 
            alert(response.data);
            navigate('/questions');
          }).catch(error=>{
            console.log(error);
          })}}
          >삭제</Button>:
          <div></div>
        }
    <Button variant="outline-info" className="backbtn" onClick={backbtn}>목록</Button>{' '}
    </div>
  </div>
  );
}

export default QuestionDetail;