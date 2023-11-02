import Button from '@mui/material/Button';
import MemberHeader from "./MemberHeader";
import './SignUpCss/SignupSuccess.css';
import { useNavigate } from "react-router-dom";


function SignupSuccess() {

  const navigate = useNavigate();

  return (

    <div className="SignUpSuccess">
      <MemberHeader progress={100} />

      <div className='successComponent'>
        <p className='signSuccessText'>회원 가입 완료 <br />
          로그인 후 이용하세요.</p>

        <div className='successBtn'>
          <div className='loginBtn'>
            <Button variant="contained" onClick={() => 
                navigate("/login-page")}> 로그인 페이지로 이동 </Button>
          </div>

          <div className='mainBtn'>
            <Button variant="contained" onClick={() => 
                navigate("/")}> 메인 페이지로 이동 </Button>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default SignupSuccess;




