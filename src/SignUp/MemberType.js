// 회원 유형 선택

import { useState } from "react";
import './SignUpCss/MemberType.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import MemberHeader from "./MemberHeader";

function MemberType() {

  const [progress, setProgress] = useState(15);

  const buttonclickHandler = () => {
    setProgress(40);
  };

  return(
    <div className="component">

      <MemberHeader progress = {progress}/>

      <div className="Subscription">
        <div className="GeneralMem">
          <h1>일반 회원</h1>
          <p> 19세 이상 내국인 </p>
          <Link to="/member-agree">
            <Button variant="contained" onClick={buttonclickHandler}>가입하기</Button>
          </Link>
        </div>

        <div className="ForeignMem">
          <h1>외국인 회원</h1>
          <p> 국내 거주 외국인 </p>
          <Button variant="contained" onClick={() => {
            alert("준비중입니다.")
          }}>가입하기(준비중)</Button>
        </div>
      </div>
    </div>
  );
}

export default MemberType;

