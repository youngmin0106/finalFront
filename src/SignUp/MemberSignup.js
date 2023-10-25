import MemberHeader from "./MemberHeader";
import TextField from '@mui/material/TextField';
import './SignUpCss/MemberSignup.css';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../axiosInstance";

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
    username : '',
    email : '',
    birthdate : '',
    phone : '',
    address : '',
    detailAddress : ''
  });
  
  const [pwErrorMsg, setpwErrorMsg] = useState("");

  // 입력값 받아오기
  const inputChangeHandler = (e) => {
    const { id, value } = e.target;
      setMemberData({
      ...MemberData,
      [id] : value
    });

    if(id === "pwChk" && MemberData.pw !== value) {
      setpwErrorMsg("비밀번호가 다릅니다")
    } else if(id === "pwChk" && MemberData.pw === value) {
      setpwErrorMsg("비밀번호가 같습니다")
    } else if(MemberData.pwChk === "") {
      setpwErrorMsg("")
    }
  };

  const presentYear = new Date().getFullYear(); // 현재 년도 계산
  const age = presentYear - MemberData.birthdate.substring(0, 4); //지금 나이 계산
  const [isPersonalSuccess, setIsPersonalSuccess] = useState(false); //인증 완료 여부

  // 나이 인증 확인.
  const completeCertified = () => {
    if(age > 19) {
      alert("본인 인증완료");
      setIsPersonalSuccess(true);
    } else {
      alert("19세 미만 인증 불가")
      setIsPersonalSuccess(false);
    }
  }

  //로그인 하기 위한 조건(1. 공란여부, 2.인증확인여부, 3. 비밀번호 다름여부)
  const SignupSuccess = () => {

    let blankField = true;

    for(let id in MemberData) {
      if(MemberData[id] === "") {
        blankField = false;
        break;
      }
    }
    if (blankField && isPersonalSuccess) {
      alert("회원가입 완료");

      axiosInstance.post('/signup', MemberData)
      .then((response) => {
        console.log(response.data);
        alert("전송");
      }).catch((error) => {
        console.log(error);
        alert("실패");
      })
    } else if (!blankField) {
      alert("빈 칸 확인");
    } else if (!isPersonalSuccess){
      alert("본인인증을 하세요");
    } 

  }

  // 아이디 중복체크를 위함.
  const overLapIdChk = () => {

    axiosInstance.post('/idoverlap', { id : MemberData.id })
      .then((response) => {
        if (response.status === 200){
          console.log(response);
          alert("사용가능 아이디");
        }
      }).catch((error) => {
        console.log(error);
        alert("중복 아이디 입니다");
      })

  }

  return (
    <div className="component">
      <MemberHeader progress={65} />

      <div className="signupForm">
        <div className="signupContainer">

          <div className="textFieldContainer">
            <p>아이디</p>
            <div className="BtnTextField">
              <TextField sx={tfStyle} id="id" value={MemberData.id} onChange = { inputChangeHandler } 
                label="아이디 입력하세요." type="text" />
            </div>
            <div>
              <Button id="signBtn" variant="contained" style={BtnStyle} onClick={ overLapIdChk }> 중복 체크 </Button>
            </div>
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
            <p>이름</p>
            <TextField sx={tfStyle} id="username" value={MemberData.username} onChange = { inputChangeHandler } 
              label="이름을 입력하세요." type="text" />
          </div>

          <div className="textFieldContainer">
            <p>이메일</p>
            <TextField sx={tfStyle} id="email" value={MemberData.email} onChange = { inputChangeHandler } 
              label="Email 입력하세요." type="email" />
          </div>

          <div className="textFieldContainer">
            <p>생년월일</p>
            <div className="BtnTextField">
              <TextField sx={tfStyle} id="birthdate" value={MemberData.birthdate} onChange = { inputChangeHandler }
                label="생년월일 (예시: 1997xxxx)" type="text" />
            </div>
            <div>
              <Button id="signBtn" variant="contained" style={BtnStyle} onClick={ completeCertified }> 본인 인증 </Button>
            </div>
          </div>

          <div className="textFieldContainer">
            <p>전화번호</p>
            <TextField sx={tfStyle} id="phone" value={MemberData.phone} onChange = { inputChangeHandler } 
              label="전화번호 (-없이 숫자만 입력하세요)" type="text" />
          </div>

          <div className="textFieldContainer">
            <p>주소</p>
            <div className="BtnTextField">
              <TextField sx={tfStyle} id="address" value={MemberData.address} onChange = { inputChangeHandler } 
                label="주소 검색하세요." type="text" />
            </div>
            <div>
              <Button id="signBtn" variant="contained" style={BtnStyle}> 주소 검색 </Button>
            </div>
          </div>

          <div className="textFieldContainer">
            <p>상세주소</p>
            <TextField sx={tfStyle} id="detailAddress" value={MemberData.detailAddress} onChange = { inputChangeHandler } 
              label="상세주소를 입력하세요." type="text" />
          </div>

        </div>
      </div>
      <div className="underBtn">
        <Button variant="outlined" onClick={() => navigate("/member-agree")}> 이전 </Button>
        <div className="rightBtn">
          <Button variant="contained" onClick={() => navigate("/")}> 취소 </Button>
          <Button variant="contained" onClick={ SignupSuccess }>가입하기</Button>
        </div>
      </div>
    </div>
  );
}

export default MemberSignup;

