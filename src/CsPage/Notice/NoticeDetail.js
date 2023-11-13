import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import {  useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import announcement from "../../mockData/announcement";

function NoticeDetail({cs}){

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
  
  useEffect(() => {
    if (no.startsWith('공지')) {
      // '공지'인 경우, 파싱된 번호를 찾아서 설정
      const noticeNo = parseInt(no.replace('공지', ''), 10);
      const mockData = announcement.find(item => item.no === `공지${noticeNo}`);

      if (mockData) {
        setNoticeDetail(mockData);
        setLoding(false);
      } else {
        // 묵 데이터가 없다면 404 페이지로 이동 또는 다른 처리 수행
        setLoding(false);
      }
    } else {
      // '공지'가 아닌 경우, 실제 데이터를 서버에서 가져오기
      axiosInstance.get(`/notice/${no}`)
        .then(response => {
          setNoticeDetail(response.data);
          setLoding(false);
        })
        .catch(error => {
          console.log(error);
          setLoding(false);
        });
    }
  }, [no]);


  if(loding)
  return <div>로딩중</div>
  

  return(
    <div className="WriteNotice">
    <div className="table">
      <div className="title">
        <p className="th">제목</p>
        <input className="writetitle" type="text" name="title" value={noticeDetail.title} style={{backgroundColor : "white"}} disabled />
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