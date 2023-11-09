
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axiosInstance from "../../axiosInstance";
import { useNavigate, useParams } from "react-router-dom";

function NoticeUpdate({userInfo,setAuth ,cs}) {

  const {no} = useParams();
  const navigate = useNavigate();

   // 상태 변수 초기값을 설정
   const [csupdate, setCsUpdate] = useState({
    title: "",
    content: "",
  });

  const backbtn = () => {
    navigate(-1);
  };

  // 게시물 데이터를 불러와 상태 변수에 설정하는 함수
  const loadCsUpdateData = () => {
    axiosInstance.get(`/notice/${no}`) 
      .then((response) => {
        const data = response.data;
        setCsUpdate(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(()=>{
    axiosInstance.get(`/notice/${no}`)
    .then(response=>{
      setCsUpdate(response.data);

    }).catch(error =>{
      console.log(error);
  
    })
  },[no])

  useEffect(() => {
    loadCsUpdateData();
  }, []);

  // 입력 필드 값이 변경될 때 호출되는 함수
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setCsUpdate({
      ...csupdate,
      [name]: value,
    });
  };

  // 게시물 수정을 수행하는 함수
  const updatePost = () => {
    {
      if(cs.member.username === csupdate.member.username){
        axiosInstance.put(`/notice/${no}/update`, csupdate) // "/notice/:no/update"에 실제 게시물 ID를 전달
          .then((response) => {
            alert("게시물이 수정되었습니다.");
            navigate('/cs');
          })
          .catch((error) => {
            console.log(error);
            alert("본인 게시물만 수정 가능합니다");
          });
      }else{
        <div></div>
      }
    }
  };


  return(
    <div className="WriteNotice">
    <div className="table">
      <div className="title">
        <p className="th">제목</p>
        <input className="writetitle" type="text" name="title" value={csupdate.title} onChange={changeHandler}   />
      </div>
      <div className="writer">
        <p className="th">작성자</p>
        <p className="writename">{cs.member.name}</p>
      </div>
    </div>
    <div className="content">
      <textarea
        value={csupdate.content}   
        onChange={changeHandler}
        name="content"
      ></textarea>
    </div>
    <div className="clickbtn">
     
    <button  className="click" onClick={updatePost}>수정</button>{' '}
    <button className="noClick" type="reset" onClick={backbtn}>취소</button>{' '}
     </div>
   </div>
  );
}

export default NoticeUpdate;