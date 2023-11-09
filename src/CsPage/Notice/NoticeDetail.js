import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import {  useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../axiosInstance";

function NoticeDetail({userInfo,setAuth ,cs}){

  const {no} = useParams();
  const [noticeDetail,setNoticeDetail] = useState();
  const [loding,setLoding] = useState(true);
  const navigate = useNavigate();

  const csupdatebtn=()=>{

      navigate(`/notice/${no}/update`);

  }
  
  const backbtn=()=>{
    navigate('/cs');
  }
  
  useEffect(()=>{
    axiosInstance.get(`/notice/${no}`)
    .then(response=>{
      setNoticeDetail(response.data);
      
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
        <input className="writetitle" type="text" name="title" value={noticeDetail.title} disabled />
      </div>
      <div className="writer">
        <p className="th">작성자</p>
        <p className="writename">{noticeDetail.member.name}</p>
      </div>
    </div>
    <div className="content">
      <textarea
        value={noticeDetail.content}
        disabled
        name="content"
      ></textarea>
    </div>
    <div className="clickbtn">
    {
      cs.member.username == noticeDetail.member.username ?
      <button  className="click" onClick={csupdatebtn}>수정</button>   
      :
      <div></div>

    }
    {
      cs.member.username == noticeDetail.member.username ? 
      <button className="noClick" type="reset" 
      onClick={()=>{
        if(cs.member.username != noticeDetail.member.username){
          alert('작성자만 삭제가능합니다.');
        console.log(cs.member);
        console.log(noticeDetail.member)
        return;
      }
      axiosInstance.delete('/notice', {params : {'no':noticeDetail.no}})
      .then(response=>{ 
        alert(response.data);
        navigate('/cs');
      }).catch(error=>{
        console.log(error);
      })}}
      >삭제</button> : <div></div>
    }
    <button  className="backClick" onClick={backbtn}>목록</button>{' '}
    </div>
  </div>
  );
}

export default NoticeDetail;