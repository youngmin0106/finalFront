import { Button } from "react-bootstrap";
import "../CsCss/WriteNotice.css";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import { useState } from "react";

function WriteOnetoOne({userInfo ,cs ,setCs}){

 
  const navigate = useNavigate();
  const changeHandler = (e) =>{
    setCs({
      ...cs,
      [e.target.name] : e.target.value 
    })
  }
  return(
    <div className="write">
      <div className="title-input">
        <span className="titlespan">제목</span>
        <input className="writetitle" type="text" name="title" onChange={changeHandler} />
      </div>
      <br />

      <div>
        <span className="contentspan">내용</span>
        <textarea className="contentarea" 
          onChange={changeHandler}
          name="content"
          cols="74"
          rows="15"   
        ></textarea>
      </div>
      <br />
      <div className="clickbtn">
      <Button variant="outline-primary" className="sumitbtn" onClick={()=>{
          axiosInstance.post('/onetoone',cs)
          .then(response=>{
              alert(response.data);
              navigate('/onetoone');
          }).catch(error=>{
              console.log(error);
              // alert('로그인 후 사용하세요');
          })
      }}>작성</Button>{' '}
      <Link to={"/onetoone"} className="linknone"><Button variant="outline-danger" className="resetbtn" type="reset">취소</Button>{' '}</Link>
      </div>
    </div>
  );
}

export default WriteOnetoOne;