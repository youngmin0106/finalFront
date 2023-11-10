import { TextField } from "@mui/material";
import { useState } from "react";
import { Button } from "react-bootstrap";
import DaumPostcode from 'react-daum-postcode';
import './SignUpCss/UpdateMember.css';
import axiosInstance from "../axiosInstance";
import { useNavigate } from "react-router-dom";

function UpdateMember({ userInfo }) {

  const [isPwInspection, setIsPwInspection] = useState(false);
  const [isPhoneInspection, setIsPhoneInspection] = useState(false);
  const [isEmailInspection, setIsEmailInspection] = useState(false);
  const [isPasswordChk, setIsPasswoardChk] = useState(false);

  const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{1,10}$/;
  const phoneRegExp = /^01([0|1|6|7|8|9])?([0-9]{3,4})?([0-9]{4})$/;
  const emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

  const [pwErrorMsg, setpwErrorMsg] = useState("");

  const navigate = useNavigate();

  const tfStyle = {
    width: "800px",
    margin: "8px 0",
  }

  const BtnStyle = {
    width: "50px",
    height: "50px",
    fontSize: "12px",
    margin: "0 10px",
    backgroundColor: "#9DC8C8"
  };

  const [UpdateData, setUpdateData] = useState({
    username: userInfo.username,
    password: '',
    pwChk: '',
    name: userInfo.name,
    email: userInfo.email,
    birthdate: userInfo.birthdate,
    phone: userInfo.phone,
    address: userInfo.address,
    detailAddress: userInfo.detailAddress
  });
  
  // 주소 검색창 열림 닫힘 여부
  const [isDaumPostOpen, setIsDaumPostOpen] = useState(false);

  // 주소 검색창이 열릴 때
  const openDaumPost = () => {
    setIsDaumPostOpen(true);
  };

  const completeHandle = (data) => {
    setUpdateData({
      ...UpdateData,
      address: data.address,
    });

    setIsDaumPostOpen(false);
  };


  const inputChangeHandler = (e) => {
    const { id, value } = e.target;
    setUpdateData({
      ...UpdateData,
      [id]: value
    });

    if (passwordRegExp.test(UpdateData.password)) {
      setIsPwInspection(true);
    }
    if (phoneRegExp.test(UpdateData.phone)) {
      setIsPhoneInspection(true);
    }
    if (emailRegExp.test(UpdateData.email)) {
      setIsEmailInspection(true);
    }

    if (id === "pwChk") {
      if (UpdateData.password === value) {
        setpwErrorMsg("비밀번호가 같습니다");
        setIsPasswoardChk(true);
      } else {
        setpwErrorMsg("비밀번호가 다릅니다");
        setIsPasswoardChk(false);
      }
    } else if (id === "password") {
      setpwErrorMsg("비밀번호가 다릅니다");

      if (UpdateData.password && UpdateData.pwChk === value) {
        setpwErrorMsg("비밀번호가 같습니다");
        setIsPasswoardChk(true);
      }
    }
  }

  const updateSuccess = () => {

    let blankField = true;

    for (let id in UpdateData) {
      if (UpdateData[id] === "") {
        blankField = false;
        break;
      }
    }

    if (blankField && isPasswordChk && isPwInspection && isPhoneInspection && isEmailInspection) {

      console.log(UpdateData);

      axiosInstance.put('/updateMember', UpdateData)
        .then((response) => {
          alert(response.data);
          navigate("/login-page")
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (!blankField) {
      alert("빈 칸 확인");
    } else if (!isPasswordChk) {
      alert("비밀번호가 다릅니다.");
    } else if (!isPwInspection) {
      alert("비밀번호 형식을 확인하세요.");
    } else if (!isPhoneInspection) {
      alert("전화번호 형식을 확인하세요.");
    } else if (!isEmailInspection) {
      alert("이메일 형식을 확인하세요.");
    }
  }

  return (
    <div className="UpdateMember">
      <div className="signupForm">
        <div className="signupContainer">
          <div className="textFieldContainer">
            <p>아이디</p>

            <div className="BtnTextField">
              <TextField sx={tfStyle} id="username" label={UpdateData.username} type="text" disabled />
            </div>
          </div>

          <div className="textFieldContainer">
            <p>비밀번호</p>
            <TextField sx={tfStyle} id="password" value={UpdateData.password} onChange={inputChangeHandler}
              label="변경할 비밀번호 입력하세요." type="password" />
          </div>
          <p className="pwInspection"> 영문 포함 + 숫자 포함 + 특수문자 + 길이 1~10자리 사이 문자열(반드시 모두 포함) </p>

          <div className="textFieldContainer">
            <p>비밀번호 확인</p>
            <TextField sx={tfStyle} id="pwChk" value={UpdateData.pwChk} onChange={inputChangeHandler}
              label="비밀번호 재확인" type="password" />
          </div>
          <p className={`errorMsg ${pwErrorMsg === '비밀번호가 다릅니다' ? 'redText' : 'blueText'}`}>
            {pwErrorMsg}
          </p>

          <div className="textFieldContainer">
            <p>이름</p>
            <TextField sx={tfStyle} id="name" label={UpdateData.name}
              value={UpdateData.name} onChange={inputChangeHandler} type="text" />
          </div>

          <div className="textFieldContainer">
            <p>이메일</p>
            <TextField sx={tfStyle} id="email" label={UpdateData.email}
              value={UpdateData.email} onChange={inputChangeHandler} type="email" />
          </div>

          <div className="textFieldContainer">
            <p>생년월일</p>
            <div className="BtnTextField">
              <TextField sx={tfStyle} id="birthdate" label={UpdateData.birthdate} type="text" disabled />
            </div>
          </div>

          <div className="textFieldContainer">
            <p>전화번호</p>
            <TextField sx={tfStyle} id="phone" label={UpdateData.phone}
              value={UpdateData.phone} onChange={inputChangeHandler} type="text" />
          </div>

          <div className="textFieldContainer">
            <p>주소</p>
            <div className="BtnTextField">
              <TextField sx={tfStyle} id="address" label={UpdateData.address}
                value={UpdateData.address} onChange={inputChangeHandler} type="text" />
            </div>
            <div>
              <Button id="signBtn" variant="contained" style={BtnStyle} onClick={openDaumPost}>
                주소 검색 </Button>
            </div>
          </div>

          {
            isDaumPostOpen &&
            <div className="MyaddressBox">
              <DaumPostcode style={{
                display: isDaumPostOpen ? 'block' : 'none',
                height: '400px',
                margin: 'auto'
              }}
              onComplete={completeHandle} />
              <Button id="signBtn" variant="contained" style={BtnStyle} onClick={() => {
                setIsDaumPostOpen(false);
              }}> 닫기 </Button>
            </div>
          }

          <div className="textFieldContainer">
            <p>상세주소</p>
            <TextField sx={tfStyle} id="detailAddress" label={UpdateData.detailAddress}
              value={UpdateData.detailAddress} onChange={inputChangeHandler} type="text" />
          </div>
        </div>
      </div>

      <div className="rightBtn">
        <Button style={{ backgroundColor: "#9DC8C8" }} variant="contained" onClick={() => {
          navigate("/");
        }}> 취소 </Button>
        <Button style={{ backgroundColor: "#9DC8C8" }} variant="contained" onClick={updateSuccess} >수정하기</Button>
      </div>

    </div>
  );
}

export default UpdateMember;




