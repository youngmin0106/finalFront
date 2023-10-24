import MemberHeader from "./MemberHeader";
import TextField from '@mui/material/TextField';
import './SignUpCss/MemberSignup.css';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function MemberSignup() {
  const navigate = useNavigate();

  const tfStyle = {
    width : "800px",
    margin: "8px 0",
  }

  const BtnStyle = {
    width: "50px",
    height: "50px",
    fontSize: "12px",
    margin: "0 10px",
  };

  const [MemberData, setMemberData] = useState({
    id : '',
    pw : '',
    pwChk : '',
    email : '',
    birthday : '',
    phoneNum : '',
    address : '',
    detailaddress : ''
  });
  
  const [pwErrorMsg, setpwErrorMsg] = useState("");
  const inputChangeHandler = (e) => {
    const { id, value } = e.target;
      setMemberData({
      ...MemberData,
      [id] : value
    });
    // console.log(`${id} : ${value}`);
    if(id === "pwChk" && MemberData.pw !== value) {
      setpwErrorMsg("비밀번호가 다릅니다")
    } else if(id === "pwChk" && MemberData.pw !== value) {
      setpwErrorMsg("비밀번호가 같습니다")
    } else if(MemberData.pwChk === "") {
      setpwErrorMsg("")
    }
  };

  const presentYear = new Date().getFullYear(); // 현재 년도 계산
  const age = presentYear - MemberData.birthday.substring(0, 2);

  const completeCertified = () => {
    if(presentYear - age >= 19) {
      console.log("인증완료");
    } else {
      console.log("만 19세 미만 회원가입 불가");
    }
  }

  return (
    <div className="component">
      <MemberHeader progress={65} />

      <div className="signupForm">
        <div className="signupContainer">

          <div className="textFieldContainer">
            <p>아이디</p>
            <TextField sx={tfStyle} id="id" value={MemberData.id} onChange = { inputChangeHandler } 
              label="아이디 입력하세요." type="text" />
          </div>

          <div className="textFieldContainer">
            <p>비밀번호</p>
            <TextField sx={tfStyle} id="pw" value={MemberData.pw} onChange = { inputChangeHandler } 
              label="비밀번호 입력하세요." type="password" />
          </div>

          <div className="textFieldContainer">
            <p>비밀번호 확인</p>
            <TextField sx={tfStyle} id="pwChk" value={MemberData.pwChk} onChange = { inputChangeHandler } 
              label="비밀번호 재확인" type="password" />
          </div>
          <p className =
            {`errorMsg ${pwErrorMsg === '비밀번호가 다릅니다' ? 'redText' : 'blueText'}`}>
        {pwErrorMsg}</p>

          <div className="textFieldContainer">
            <p>이메일</p>
            <TextField sx={tfStyle} id="email" value={MemberData.email} onChange = { inputChangeHandler } 
              label="Email 입력하세요." type="email" />
          </div>

          <div className="textFieldContainer">
            <p>생년월일</p>
            <TextField sx={tfStyle} id="birthday" value={MemberData.birthday} onChange = { inputChangeHandler }
              label="생년월일 (예시: 97xxxx)" type="text" />
            <Button id="signBtn" variant="contained" style={BtnStyle} onClick={ completeCertified }> 본인 인증 </Button>
          </div>

          <div className="textFieldContainer">
            <p>전화번호</p>
            <TextField sx={tfStyle} id="phoneNum" value={MemberData.phoneNum} onChange = { inputChangeHandler } 
              label="전화번호 (-없이 숫자만 입력하세요)" type="text" />
          </div>

          <div className="textFieldContainer">
            <p>주소</p>
            <TextField sx={tfStyle} id="address" value={MemberData.address} onChange = { inputChangeHandler } 
              label="주소 검색하세요." type="text" />
            <Button id="signBtn" variant="contained" style={BtnStyle}> 주소 검색 </Button>
          </div>

          <div className="textFieldContainer">
            <p>상세주소</p>
            <TextField sx={tfStyle} id="detailaddress" value={MemberData.detailaddress} onChange = { inputChangeHandler } 
              label="상세주소를 입력하세요." type="text" />
          </div>

        </div>
      </div>
      <div className="underBtn">
        <Button variant="outlined" onClick={() => navigate("/member-agree")}> 이전 </Button>
        <div className="rightBtn">
          <Button variant="contained" onClick={() => navigate("/")}> 취소 </Button>
          <Button variant="contained">가입하기</Button>
        </div>
      </div>
    </div>
  );
}

export default MemberSignup;

