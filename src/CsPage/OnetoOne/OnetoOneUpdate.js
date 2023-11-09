import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import { Button } from "react-bootstrap";


function OnetoOneUpdate({cs}){
  const {no} = useParams();
  const navigate = useNavigate();

   // 상태 변수 초기값을 설정
   const [oneUpdate, setOneUpdate] = useState({
    title: "",
    content: "",
  });

  const backbtn = () => {
    navigate(-1);
  };

  // 게시물 데이터를 불러와 상태 변수에 설정하는 함수
  const loadOneUpdateData = () => {
   
      axiosInstance.get(`/onetoone/${no}/`) 
        .then((response) => {
          const data = response.data;
          setOneUpdate(data);
        })
        .catch((error) => {
          console.log(error);
        });
  };
  useEffect(() => {
    axiosInstance.get(`/onetoone/${no}`)
      .then(response => {
        setOneUpdate(response.data);
       
      }).catch(error => {
        console.log(error);
       
      })
  }, [no])

  useEffect(() => {
    loadOneUpdateData();
  }, []);

  // 입력 필드 값이 변경될 때 호출되는 함수
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setOneUpdate({
      ...oneUpdate,
      [name]: value,
    });
  };

  // 게시물 수정을 수행하는 함수
  const updatePost = () => {
    {
      if(cs.member.username === oneUpdate.member.username){

        axiosInstance.put(`/onetoone/${no}/update`, oneUpdate) // "/notice/:no/update"에 실제 게시물 ID를 전달
        .then((response) => {
          alert("게시물이 수정되었습니다.");
          navigate('/onetoone');
        })
        .catch((error) => {
          console.log(error);
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
        <input className="writetitle" type="text" name="title" value={oneUpdate.title} onChange={changeHandler}   />
      </div>
      <div className="writer">
        <p className="th">작성자</p>
        <p className="writename">{cs.member.name}</p>
      </div>
    </div>
    <div className="content">
      <textarea
        value={oneUpdate.content}   
        onChange={changeHandler}
        name="content"
      ></textarea>
    </div>
    <div className="clickbtn">
    <button  className="click" onClick={updatePost}>수정</button>{' '}
    <button  className="noClick" type="reset" onClick={backbtn}>취소</button>{' '}
     </div>
   </div>
  );
}

export default OnetoOneUpdate;