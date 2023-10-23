import AnimatedExample from "./bootstrap/AnimatedExample";
import './SignUpCss/MemberHeader.css';


function MemberHeader({ progress }) {
    return (
        <div>
            <h2 className="SignupText">- 회원가입 </h2>

            <div className="MemberStep">
                <h4>STEP1</h4>
                <h4>STEP2</h4>
                <h4>STEP3</h4>
                <h4>STEP4</h4>
            </div>

            <AnimatedExample progress={progress} />

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
        </div>
    );
}

export default MemberHeader;

