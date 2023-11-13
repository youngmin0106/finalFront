import MemberHeader from "../MemberHeader/MemberHeader";
import TextField from '@mui/material/TextField';
import './MemberSignup.css';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../../../axiosInstance";
import DaumPostcode from 'react-daum-postcode';

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
    backgroundColor: "#9DC8C8"
  };

  const [memberData, setMemberData] = useState({
    username : '',
    password : '',
    pwChk : '',
    name : '',
    email : '',
    birthdate : '',
    phone : '',
    address : '',
    detailAddress : ''
  });

  const [isIdInspection, setIsIdInspection] = useState(false);
  const [isPwInspection, setIsPwInspection] = useState(false);
  const [isPhoneInspection, setIsPhoneInspection] = useState(false);
  const [isEmailInspection, setIsEmailInspection] = useState(false);

  const idRegExp = /^[a-zA-Z0-9](?=.*[a-zA-Z])(?=.*[0-9]).{3,12}$/g;
  const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{1,10}$/;
  const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  const emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

  const [pwErrorMsg, setpwErrorMsg] = useState("");

  // 입력값 받아오기
  const [isPasswordChk, setIsPasswoardChk] = useState(false);
  const inputChangeHandler = (e) => {
    const { id, value } = e.target;
      setMemberData({
      ...memberData,
      [id] : value
    });

    if (id === "username" && idRegExp.test(value)) {
      setIsIdInspection(true);
    }
    if (id === "password" && passwordRegExp.test(value)) {
      setIsPwInspection(true);
    }
    if (id === "phone" && phoneRegExp.test(value)) {
      setIsPhoneInspection(true);
    }
    if (id === "email" && emailRegExp.test(value)) {
      setIsEmailInspection(true);
    }

    if(id === "pwChk" && memberData.password !== value) {
      setpwErrorMsg("비밀번호가 다릅니다")
      setIsPasswoardChk(false);
    } else if(id === "pwChk" && memberData.password === value) {
      setpwErrorMsg("비밀번호가 같습니다")
      setIsPasswoardChk(true);
    } else if(memberData.pwChk === "") {
      setpwErrorMsg("")
    }
  };

  const presentYear = new Date().getFullYear(); // 현재 년도 계산
  const age = presentYear - memberData.birthdate.substring(0, 4); //지금 나이 계산
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

  // 아이디 중복체크를 위함.
  const [isIdOverLapChk, setIsIdOverLapChk] = useState(false);

  const overLapIdChk = () => {
    if (idRegExp.test(memberData.username)) {
      axiosInstance.post('/idoverlap', { username: memberData.username })
        .then((response) => {
          if (response.status === 200) {
            alert("사용가능 아이디");
            setIsIdOverLapChk(true);
          }
        }).catch((error) => {
          alert("중복 아이디 입니다");
        });
    } else {
      alert("아이디 형식을 확인하세요");
    }
  };

  // 주소 검색창 열림 닫힘 여부
  const [isDaumPostOpen, setIsDaumPostOpen] = useState(false);

  // 주소 검색창이 열릴 때
  const openDaumPost = () => {
      setIsDaumPostOpen(true);
  };

  // 주소 선택이 완료되었을 때 실행될 함수
  const completeHandle = (data) => {
    setMemberData({
      ...memberData,
      address: data.address,
    });

    setIsDaumPostOpen(false);
  };

  //로그인 하기 위한 조건(1. 공란여부, 2.인증확인여부, 3. 비밀번호 다름여부)
  const SignupSuccess = (e) => {

    e.preventDefault();

    let blankField = true;
  
    for(let id in memberData) {
      if(memberData[id] === "") {
        blankField = false;
        break;
      }
    }
    if (blankField && isPersonalSuccess && isPasswordChk && isIdOverLapChk 
          && isIdInspection && isPwInspection && isPhoneInspection && isEmailInspection) {
      alert("회원가입 완료");
  
      axiosInstance.post('/signup', memberData)
      .then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.log(error);
      })
      navigate("/signup-success");
    } else if (!blankField) {
      alert("빈 칸 확인");
    } else if (!isPersonalSuccess){
      alert("본인인증을 하세요");
    } else if (!isPasswordChk) {
      alert("비밀번호가 다릅니다.");
    } else if (!isIdOverLapChk) {
      alert("아이디 중복체크 하세요.");
    } else if (!isIdInspection) {
      alert("아이디 형식을 확인하세요.")
    } else if (!isPwInspection) {
      alert("비밀번호 형식을 확인하세요.")
    } else if (!isPhoneInspection) {
      alert("전화번호 형식을 확인하세요.")
    } else if (!isEmailInspection) {
      alert("이메일 형식을 확인하세요.")
    }
  }

  return (
    <div className="MemberSignup">
      <MemberHeader progress={65} />

      <div className="signupForm">
        <div className="signupContainer">

          <div className="textFieldContainer">
            <p>아이디</p>
            <div className="BtnTextField">
              <TextField sx={tfStyle} id="username" value={memberData.username} onChange = { inputChangeHandler } 
                label="아이디 입력하세요." type="text" />
            </div>
            <div>
              <Button id="signBtn" variant="contained" style={BtnStyle} onClick={ overLapIdChk }> 중복 체크 </Button>
            </div>
          </div>
            <p className="idInspection"> 영문과 숫자로 조합된 4~12글자로 생성해주세요. </p>

          <div className="textFieldContainer">
            <p>비밀번호</p>
            <TextField sx={tfStyle} id="password" value={memberData.password} onChange = { inputChangeHandler } 
              label="비밀번호 입력하세요." type="password" />
          </div>
          <p className="pwInspection"> 영문 대소문자 + 숫자  + 특수문자 + 길이 1~10자리 사이 문자열(반드시 모두 포함) </p>


          <div className="textFieldContainer">
            <p>비밀번호 확인</p>
            <TextField sx={tfStyle} id="pwChk" value={memberData.pwChk} onChange = { inputChangeHandler } 
              label="비밀번호 재확인" type="password" />
          </div>
          <p className =
            {`errorMsg ${pwErrorMsg === '비밀번호가 다릅니다' ? 'redText' : 'blueText'}`}>
        {pwErrorMsg}</p>

        <div className="textFieldContainer">
            <p>이름</p>
            <TextField sx={tfStyle} id="name" value={memberData.name} onChange = { inputChangeHandler } 
              label="이름을 입력하세요." type="text" />
          </div>

          <div className="textFieldContainer">
            <p>이메일</p>
            <TextField sx={tfStyle} id="email" value={memberData.email} onChange = { inputChangeHandler } 
              label="Email 입력하세요." type="email" />
          </div>

          <div className="textFieldContainer">
            <p>생년월일</p>
            <div className="BtnTextField">
              <TextField sx={tfStyle} id="birthdate" value={memberData.birthdate} onChange = { inputChangeHandler }
                label="생년월일 (예시: 1997xxxx)" type="text" />
            </div>
            <div>
              <Button id="signBtn" variant="contained" style={BtnStyle} onClick={ completeCertified }> 본인 인증 </Button>
            </div>
          </div>

          <div className="textFieldContainer">
            <p>전화번호</p>
            <TextField sx={tfStyle} id="phone" value={memberData.phone} onChange = { inputChangeHandler } 
              label="전화번호 입력하세요" type="text" />
          </div>

          <div className="textFieldContainer">
            <p>주소</p>
            <div className="BtnTextField">
              <TextField sx={tfStyle} id="address" value={memberData.address} onChange={inputChangeHandler}
                label="주소 검색하세요." type="text" />
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
                height : '400px',
                margin : 'auto'
              }} 
              onComplete={completeHandle}/>
              <Button id="signBtn" variant="contained" style={BtnStyle} onClick={() => {
                setIsDaumPostOpen(false);
              }}> 닫기 </Button>
            </div>
          }

          <div className="textFieldContainer">
            <p>상세주소</p>
            <TextField sx={tfStyle} id="detailAddress" value={memberData.detailAddress} onChange = { inputChangeHandler } 
              label="상세주소를 입력하세요." type="text" />
          </div>

      </div>
    </div>

      <div className="underBtn">
        <Button style={{ backgroundColor: "#9DC8C8" }} variant="contained" onClick={() => navigate("/member-agree")}> 이전 </Button>
        <div className="rightBtn">
          <Button style={{ backgroundColor: "#9DC8C8" }} variant="contained" onClick={() => navigate("/")}> 취소 </Button>
          <Button style={{ backgroundColor: "#9DC8C8" }} variant="contained" onClick={ SignupSuccess }>가입하기</Button>
        </div>
      </div>
    </div>
  );
}

export default MemberSignup;

