import MemberHeader from "./MemberHeader";
import TextField from '@mui/material/TextField';
import './SignUpCss/MemberSignup.css';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function MemberSignup() {

  const navigate = useNavigate();

  // const tfStyle = {
  //   width : "75%"
  // }

  return(
    <div className="component">

      <MemberHeader progress={65}/>

      <div className="signupForm">
        <table className="signupTable">
          <tbody>
            <tr>
              <th>아이디</th>
              <TextField fullWidth={true} id="outlined-id-input" label="ID를 입력하세요."
              type="text" />
            </tr> <br />

            <tr>
              <th>비밀번호</th>
              <TextField fullWidth={true} id="outlined-pw-input" label="비밀번호를 입력하세요."
              type="password" autoComplete="current-password" />
            </tr> <br />

            <tr>
              <th>비밀번호 재확인</th>
              <TextField fullWidth={true} id="outlined-pwchk-input" label="비밀번호를 한번 더 입력하세요."
              type="password" autoComplete="current-password" />
            </tr> <br />

            <tr>
              <th>Email</th>
              <TextField fullWidth={true} id="outlined-email-input" label="Email 입력하세요."
              type="email" />
            </tr> <br />

            <tr>
              <th>생년월일</th>
              <TextField fullWidth={true} id="outlined-birthday-input" label="예시) 97xxxx"
              type="text" />
              <th><Button id = "signBtn" variant="contained">본인 인증</Button></th>
            </tr> <br />

            <tr>
              <th>전화번호</th>
              <TextField fullWidth={true} id="outlined-phoneNum-input" label="-없이 숫자만 입력하세요"
              type="text" />
            </tr> <br />

            <tr>
              <th>주소</th>
              <TextField fullWidth={true} id="outlined-address-input" label="주소를 검색하세요."
              type="text" />
              <th><Button id = "signBtn" variant="contained" endIcon>주소 검색</Button></th>
            </tr> <br />

            <tr>
              <th>상세주소</th>
              <TextField fullWidth={true} id="outlined-detailAddress-input" label="상세주소를 입력하세요."
              type="text" />
            </tr> <br />

          </tbody>
        </table>
      </div>

      <Button variant="outlined" onClick={() => {
        navigate("/");
      }}>취소</Button>
      <Button variant="contained" onClick={() => {
        navigate("/member-agree");
      }}>이전</Button>
      <Button variant="contained">가입하기</Button>
    </div>
  );
}

export default MemberSignup;

