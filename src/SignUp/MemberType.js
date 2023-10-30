// 회원 유형 선택

import './SignUpCss/MemberType.css';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import MemberHeader from "./MemberHeader";


function MemberType() {

  const navigate = useNavigate();

  return(

    <div className="MemberType">
      <MemberHeader progress = {15}/>

      <div className="Subscription">
        <div className="GeneralMem">
          <h1>일반 회원</h1>
          <div className = "typeText" ><p> 19세 이상 내국인 </p></div>
            <Button style={{ backgroundColor: "#9DC8C8" }} variant="contained" onClick={() => {
              navigate('/member-agree')
              
            }}>가입하기</Button>
        </div>

        <div className="ForeignMem">
          <h1>외국인 회원</h1>
          <div className = "typeText" ><p> 국내 거주 외국인 </p></div>
          <Button style={{ backgroundColor: "#9DC8C8" }} variant="contained" onClick={() => {
            alert("준비중입니다.")
          }}>가입하기(준비중)</Button>
        </div>
      </div>
    </div>
  );
}

export default MemberType;

