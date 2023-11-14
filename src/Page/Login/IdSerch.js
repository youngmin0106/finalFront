import { Button, TextField } from "@mui/material";
import { useState } from 'react';
import './IdSerch.css';
import axiosInstance from "../../axiosInstance";
import { useEffect } from "react";

function IdSerch( {setIsHeader} ) {

  useEffect(() => {
    setIsHeader(false);
  }, [setIsHeader])

  const [PhoneData, setPhoneData] = useState({
    phone: '',
    password : ''
  });

  const [getIdPw, setGetIdPw] = useState({

  });

  const inputChangeHandler = (e) => {
    const { id, value } = e.target;
    setPhoneData({
      [id]: value
    });
  }

  const idSerchHandler = () => {

    axiosInstance.post('/idserch', PhoneData)
      .then((response) => {
        console.log(response.data);
        setGetIdPw(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const pwChangeHandler = () => {

    const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    const newPassword = PhoneData.password;

    if(!passwordRegExp.test(newPassword)) {
      alert('비밀번호는 영문 대문자, 영문 소문자, 숫자, 특수문자를 포함하여 최소 8자 이상이어야 합니다.');
      return;
    }

    const requestData = {
      phone: getIdPw.phone, 
      password: PhoneData.password
    };

    axiosInstance.post('/pwchange', requestData)
      .then((response) => {
        alert(response.data);
        window.close();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="IdSerch">

      <h2>회원정보 찾기</h2>
      <p className="phoneText">휴대폰번호로 찾기</p>
      
      <div className="phoneserch">
        <TextField style = {{width : '300px'}} id="phone" value={PhoneData.phone} onChange={inputChangeHandler}
          label="휴대폰번호를 입력하세요." type="text" />
        <Button onClick={idSerchHandler} style={{ backgroundColor: "#9DC8C8", height: "53px" }} variant="contained">검색</Button>
      </div>

      <div className="phoneIdPw">
        id : {getIdPw.username}<br /><br />
      </div>

      <div className="changePw">
        <TextField style = {{width : '300px'}} id="password" value={PhoneData.password} onChange={inputChangeHandler} 
          label="새로운 비밀번호를 입력하세요" type="password" />
        <Button onClick={ pwChangeHandler } style={{ backgroundColor: "#9DC8C8", height: "53px" }} variant="contained">변경</Button>
      </div>

    </div>

  );
}

export default IdSerch;


