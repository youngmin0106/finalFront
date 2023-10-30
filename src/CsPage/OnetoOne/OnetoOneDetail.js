import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import {  useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../axiosInstance";

function OnetoOneDetail(){

  const {no} = useParams();
  const [oneDetail,setOneDetail] = useState();
  const [loding,setLoding] = useState(true);
  const navigate = useNavigate();

  const onetooneupdatebtn=()=>{
    navigate(`/onetoone/${no}/update`);
  }

  const backbtn=()=>{
    navigate("/onetoone");
  }
  
  useEffect(()=>{
    axiosInstance.get(`/onetoone/${no}`)
    .then(response=>{
      setOneDetail(response.data);
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
      <input className="writetitle" type="text" name="title"  value={oneDetail.title} disabled/>
    </div>
    <br />

    <div>
      <span className="contentspan" >내용</span>
      <textarea className="contentarea"
        disabled
        value={oneDetail.content}
        name="contents"
        cols="74"
        rows="15"   
      ></textarea>
    </div>
    <br />
    <div className="clickbtn">
    <Button variant="outline-primary" className="sumitbtn" onClick={onetooneupdatebtn}>수정</Button>{' '}
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

export default OnetoOneDetail;