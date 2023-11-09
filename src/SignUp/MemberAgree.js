// 약관동의

import { useState } from "react";
import MemberHeader from "./MemberHeader";
import './SignUpCss/MemberAgree.css';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import PrivacyAgree from "../mockData/PrivacyAgree";
import PolicyAgree from "../mockData/PolicyAgree";


function MemberAgree({ progress }) {

  const navigate = useNavigate();

  const [allAgree, setAllAgree] = useState(false); // 전체동의 여부 확인
  const [agrees, setAgrees] = useState({
    termAgree: false, //이용약관동의 여부 확인
    personalAgree: false //개인정보 동의 여부 확인
  })

  //체크박스 개별 동의여부 확인 핸들러.
  const agreeChangeHandler = (e) => {

    const { name, checked } = e.target;
    // 이전 동의 상태 복사
    setAgrees((data) => ({ ...data, [name]: checked }));

    // agrees 객체를 가져와 every 메서드를 이용하여 전체가 true인 지 확인
    const allChecked = Object.values({ ...agrees, [name]: checked })
      .every((value) => value === true);

    setAllAgree(allChecked); // true가 되면 동의 상태를 업데이트함.
  }

  //전체 체크박스 변경해주는 핸들러,
  const allAgreeChangeHandler = (e) => {
    const { checked } = e.target;
    setAgrees(() => ({
      termAgree: checked,
      personalAgree: checked
    })); //동의 체크박스를 전부 체크해줌.
    setAllAgree(checked);
  }


  return (
    <div className="MemberAgree">
      <MemberHeader progress={40} />

      <div className="agreePage">
        <label>약관 동의</label> <br /><br />
        <ul>
          <li>
            <label htmlFor="agree_all_check">전체 약관 및 동의 {'>'} </label>

            <input type="checkbox" id="agree_all_check" name="agree_all_check"
              checked={allAgree} onChange={allAgreeChangeHandler} /> <hr />
          </li>

          <li>
            <label htmlFor="agree_term_check"> [필수]이용 약관 동의 {'>'} </label>

            <input type="checkbox" id="agree_term_check" name="termAgree" required
              checked={agrees.termAgree} onChange={agreeChangeHandler} />
          </li>
          <br />
          <textarea name="opinion" cols="130" rows="5" readOnly >
            {PrivacyAgree().trim()}
          </textarea>
          <br /> <br />

          <li>
            <label htmlFor="agree_person_check">[필수]개인정보 수집 및 이용 동의 {'>'} </label>
            <input type="checkbox" id="agree_person_check" name="personalAgree" required
              checked={agrees.personalAgree} onChange={agreeChangeHandler} />
          </li> <br />

          <textarea name="opinion" cols="130" rows="5" readOnly >
            {PolicyAgree().trim()}
          </textarea>
          <br />
        </ul>
      </div>
      <div className="agreeButton">
        <Button style={{ backgroundColor: "#9DC8C8" }} id="back" variant="contained"
          onClick={() => {
            navigate("/");
          }}>이전</Button>
        <Button style={{ backgroundColor: "#9DC8C8" }} id="next" variant="contained"
          onClick={() => {
            if ((allAgree)) {
              navigate("/member-sign");
            } else {
              alert("동의 여부를 확인하세요.")
            }
          }}>다음</Button>
      </div>
    </div>
  );
}

export default MemberAgree;



