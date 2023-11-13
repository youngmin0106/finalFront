import { useState } from "react";
import axiosInstance from "../../../axiosInstance";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import DaumPostcode from 'react-daum-postcode';
import './KaGooSignup.css';
import { useEffect } from "react";
import MemberHeader from "../MemberHeader/MemberHeader";

function KaGooSignup({ userInfo, setIsAuth, setIsHeader }) {

  useEffect(() => {
    setIsHeader(false);
  },[setIsHeader])

  const [isPhoneInspection, setIsPhoneInspection] = useState(false);
  const [isEmailInspection, setIsEmailInspection] = useState(false);

  const phoneRegExp = /^01([0|1|6|7|8|9])?([0-9]{3,4})?([0-9]{4})$/;
  const emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

  const navigate = useNavigate();

  const tfStyle = {
    width: "800px",
    margin: "8px 0",
  };

  const BtnStyle = {
    width: "50px",
    height: "50px",
    fontSize: "12px",
    margin: "0 10px",
    backgroundColor: "#9DC8C8",
  };

  const [KaGooData, setKaGooData] = useState({
    username: userInfo.username,
    password: 'kagoo123',
    name: userInfo.name,
    email: userInfo.email,
    birthdate: '',
    phone: '',
    address: '',
    detailAddress: '',
  });

  const [isDaumPostOpen, setIsDaumPostOpen] = useState(false);

  const openDaumPost = () => {
    setIsDaumPostOpen(true);
  };

  const completeHandle = (data) => {
    setKaGooData({
      ...KaGooData,
      address: data.address,
    });

    setIsDaumPostOpen(false);
  };

  const inputChangeHandler = (e) => {
    const { id, value } = e.target;
    setKaGooData({
      ...KaGooData,
      [id]: value,
    });

    if (phoneRegExp.test(KaGooData.phone)) {
      setIsPhoneInspection(true);
    }
    if (emailRegExp.test(KaGooData.email)) {
      setIsEmailInspection(true);
    }
  };

  const presentYear = new Date().getFullYear();
  const age = presentYear - KaGooData.birthdate.substring(0, 4);
  const [isPersonalSuccess, setIsPersonalSuccess] = useState(false);

  const completeCertified = () => {
    if (KaGooData.birthdate === "") {
      alert("생년월일을 입력하세요");
      return;
    }

    if (age > 19) {
      alert("본인 인증완료");
      setIsPersonalSuccess(true);
    } else {
      alert("19세 미만 인증 불가");
      setIsPersonalSuccess(false);
    }
  };

  const KaGooSuccess = () => {
    let blankField = true;

    for (let id in KaGooData) {
      if (KaGooData[id] === "") {
        blankField = false;
        break;
      }
    }

    if (blankField && isPhoneInspection && isEmailInspection && isPersonalSuccess) {
      axiosInstance.put('/kagoosignup', KaGooData)
        .then((response) => {
          alert(response.data);
          setIsAuth(true);
          setIsHeader(true);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (!blankField) {
      alert("빈 칸 확인");
    } else if (!isPhoneInspection) {
      alert("전화번호 형식을 확인하세요.");
    } else if (!isEmailInspection) {
      alert("이메일 형식을 확인하세요.");
    }
  };

  return (
    <div className="kaGooSignup">
      <MemberHeader progress={65} />
      <div className="signupForm">
        <div className="signupContainer">
          <div className="textFieldContainer">
            <p>아이디</p>
            <div className="BtnTextField">
              <TextField sx={tfStyle} id="username" label={KaGooData.username} type="text" disabled />
            </div>
          </div>

          <div className="textFieldContainer">
            <p>이름</p>
            <TextField sx={tfStyle} id="name" label={KaGooData.name}
              value={KaGooData.name} onChange={inputChangeHandler} type="text" disabled />
          </div>

          <div className="textFieldContainer">
            <p>이메일</p>
            <TextField sx={tfStyle} id="email" label={KaGooData.email}
              value={KaGooData.email} onChange={inputChangeHandler} type="email" disabled />
          </div>

          <div className="textFieldContainer">
            <p>생년월일</p>
            <div className="BtnTextField">
              <TextField sx={tfStyle} id="birthdate" label="생년월일 (예시: 1997xxxx)"
                value={KaGooData.birthdate} onChange={inputChangeHandler} type="text" />
            </div>
            <div>
              <Button id="signBtn" variant="contained" style={BtnStyle} onClick={completeCertified}> 본인 인증 </Button>
            </div>
          </div>

          <div className="textFieldContainer">
            <p>전화번호</p>
            <TextField sx={tfStyle} id="phone" label="-없이 입력하세요"
              value={KaGooData.phone} onChange={inputChangeHandler} type="text" />
          </div>

          <div className="textFieldContainer">
            <p>주소</p>
            <div className="BtnTextField">
              <TextField sx={tfStyle} id="address" label="주소 검색하세요."
                value={KaGooData.address} onChange={inputChangeHandler} type="text" disabled/>
            </div>
            <div>
              <Button id="signBtn" variant="contained" style={BtnStyle} onClick={openDaumPost}>
                주소 검색 </Button>
            </div>
          </div>

          {isDaumPostOpen && (
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
          )}

          <div className="textFieldContainer">
            <p>상세주소</p>
            <TextField sx={tfStyle} id="detailAddress" label="상세주소를 입력하세요."
              value={KaGooData.detailAddress} onChange={inputChangeHandler} type="text" />
          </div>
        </div>
      </div>

      <div className="rightBtn">
        <Button style={{ backgroundColor: "#9DC8C8" }} variant="contained" onClick={() => {
          setIsHeader(true);
          navigate("/");
        }}> 취소 </Button>
        <Button style={{ backgroundColor: "#9DC8C8" }} variant="contained" onClick={KaGooSuccess} >가입하기</Button>
      </div>

    </div>
  );

}

export default KaGooSignup;




