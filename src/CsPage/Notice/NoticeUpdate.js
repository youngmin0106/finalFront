
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axiosInstance from "../../axiosInstance";
import { useNavigate, useParams } from "react-router-dom";

function NoticeUpdate() {

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
    axiosInstance.put(`/notice/${no}/update`, csupdate) // "/notice/:no/update"에 실제 게시물 ID를 전달
      .then((response) => {
        alert("게시물이 수정되었습니다.");
        navigate('/cs');
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return(
    <div className="write">
      <input type="hidden" />
    <div className="title-input">
      <span className="titlespan">제목</span>
      <input className="writetitle" type="text" name="title" value={csupdate.title} onChange={changeHandler}/>
    </div>
    <br/>

    <div>
      <span className="contentspan">내용</span>
      <textarea className="contentarea"
        name="content"
        cols="74"
        rows="15"
        value={csupdate.content}   
        onChange={changeHandler}
      ></textarea>
    </div>
    <br />
    <div className="clickbtn">
    <Button variant="outline-primary" className="sumitbtn" onClick={updatePost}>수정</Button>{' '}
    <Button variant="outline-danger" className="resetbtn" type="reset" onClick={backbtn}>취소</Button>{' '}
     </div>
   </div>
  );
}

export default NoticeUpdate;