// 회원 유형 선택

import AnimatedExample from "./bootstrap/AnimatedExample";
import './SignUpCss/MemberType.css';
import Button from '@mui/material/Button';

function MemberType() {
  return(
    <div className="component">

      <h2 className="SignupText">- 회원가입 </h2>

      <div className="MemberStep">
        <h4>STEP1</h4>
        <h4>STEP2</h4>
        <h4>STEP3</h4>
        <h4>STEP4444444555555</h4>
      </div>

      <AnimatedExample />

      <div className="MemberImg">
        <h4>👨‍👨‍👧‍👧</h4>
        <h4>📃</h4>
        <h4>📖</h4>
        <h4>✌</h4>
      </div>

      <div className="MemberText">
        <h4>회원 유형 선택</h4>
        <h4>약관동의/실명확인</h4>
        <h4>정보 입력</h4>
        <h4>가입 완료</h4>
      </div>

      <div className="Subscription">
        <div className="GeneralMem">
          <h1>일반 회원</h1>
          <p> 19세 이상 내국인 </p>
          <Button variant="contained">가입하기</Button>
        </div>

        <div className="ForeignMem">
          <h1>외국인 회원</h1>
          <p> 국내 거주 외국인 </p>
          <Button variant="contained">가입하기(준비중)</Button>
        </div>
      </div>

    </div>
  );
}

export default MemberType;









