import { Button } from "react-bootstrap";
import "../CSS/WriteNotice.css";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";
import { useState } from "react";

function WriteQuestion({userInfo ,cs , setCs}){

  console.log(cs);

  const navigate = useNavigate();
  const changeHandler = (e) =>{
    setCs({
      ...cs,
      [e.target.name] : e.target.value 
    })
  }
  return(
    <div className="WriteNotice">
    <div className="table">
      <div className="title">
        <p className="th">제목</p>
        <input className="writetitle" type="text" name="title" onChange={changeHandler} />
      </div>
      <div className="writer">
        <p className="th">작성자</p>
        <p className="writename">{cs.member.name}</p>
      </div>
    </div>
    <div className="content">
      <textarea
        onChange={changeHandler}
        name="content"
      ></textarea>
    </div>
      <div className="clickbtn">
      <button  className="click" onClick={()=>{
          axiosInstance.post('/questions', {cs : cs, username : cs.username, title : cs.title, content : cs.content , member : userInfo})
          .then(response=>{
              alert(response.data);
              navigate('/questions');
          }).catch(error=>{
              console.log(error);
              // alert('로그인 후 사용하세요');
          })
      }}>작성</button>{' '}
      <Link to={"/questions"} className="linknone"><button className="noClick" type="reset">취소</button>{' '}</Link>
      </div>
    </div>
  );
}

export default WriteQuestion;