import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import {  useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../axiosInstance";

function CsDetail(){

  const {no} = useParams();
  const [csDetail,setCsDetail] = useState();
  const [loding,setLoding] = useState(true);
  const navigate = useNavigate();

  const csupdatebtn=()=>{
    navigate(`/notice/${no}/update`);
  }

  const backbtn=()=>{
    navigate(-1);
  }
  
  useEffect(()=>{
    axiosInstance.get(`/notice/${no}`)
    .then(response=>{
      setCsDetail(response.data);
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
      <input className="writetitle" type="text" name="title"  value={csDetail.title} disabled/>
    </div>
    <br />

    <div>
      <span className="contentspan" >내용</span>
      <textarea className="contentarea"
        disabled
        value={csDetail.content}
        name="contents"
        cols="74"
        rows="15"   
      ></textarea>
    </div>
    <br />
    <div className="clickbtn">
    <Button variant="outline-primary" className="sumitbtn" onClick={csupdatebtn}>수정</Button>{' '}
    <Button variant="outline-danger" className="resetbtn" type="reset" 
      // onClick={()=>{
      // if(유저아이디 != csDetail.no){
      //   alert('작성자만 삭제가능합니다.');
      //   return;
      // }
      // axiosInstance.delete('/notice', {params : {'id':csDetail.no}})
      // .then(response=>{ 
      //   alert(response.data);
      //   navigate('/');
      // }).catch(error=>{
      //   console.log(error);
      // })}}
      >삭제</Button>{' '}
    <Button variant="outline-info" className="backbtn" onClick={backbtn}>목록</Button>{' '}
    </div>
  </div>
  );
}

export default CsDetail;