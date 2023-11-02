import { Button, TextField } from "@mui/material";
import { useState } from "react";
import './LoginCss/IdSerch.css';
import axiosInstance from "../axiosInstance";

function IdSerch() {

  const [PhoneData, setPhoneData] = useState({
    phone : ''
  });

  const [IdPw, setIdPw] = useState({

  });

  const inputChangeHandler = (e) => {
    const { id, value } = e.target;
      setPhoneData({
      [id] : value
    });
  }
  console.log(PhoneData);

  const idSerchHandler = () => {

    axiosInstance.post('/idpwserch', PhoneData)
      .then((response) => {
        console.log(response.data);
        setIdPw(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }


  return(
    <div className="IdSerch">

      <h2>회원정보 찾기</h2>

      <div className = "phoneserch">
        <p className="phoneText">휴대폰번호로 찾기</p>
        <TextField id="phone" value={PhoneData.phone} onChange = { inputChangeHandler } 
                label="휴대폰번호를 입력하세요." type="text" />
        <Button onClick = { idSerchHandler } style={{ backgroundColor: "#9DC8C8", height : "53px" }} variant="contained">검색</Button>
      </div>
      <div className="phoneIdPw"> 
        id : {IdPw.username}<br />
        pw : {IdPw.password}
      </div>
    </div>

  );
}

export default IdSerch;


