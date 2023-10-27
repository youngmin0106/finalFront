// 약관동의

import { useState } from "react";
import MemberHeader from "./MemberHeader";
import './SignUpCss/MemberAgree.css';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


function MemberAgree({ progress }) {

  const navigate = useNavigate();

  const [allAgree, setAllAgree] = useState(false); // 전체동의 여부 확인
  const [agrees, setAgrees] = useState ({
    termAgree : false, //이용약관동의 여부 확인
    personalAgree : false //개인정보 동의 여부 확인
  })
  
  //체크박스 개별 동의여부 확인 핸들러.
  const agreeChangeHandler = (e) => {

    const { name, checked } = e.target;
    // 이전 동의 상태 복사
    setAgrees((data) => ({ ...data, [name] : checked })); 

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
    <div className="component">
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
              checked={agrees.termAgree}  onChange={ agreeChangeHandler }/> 
          </li>
          <br />
          <textarea name="opinion" cols="130" rows="5" readOnly >
            이 헌법시행 당시의 법령과 조약은 이 헌법에 위배되지 아니하는 한 그 효력을 지속한다. 국회는 선전포고, 국군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의 주류에 대한 동의권을 가진다.
            국군의 조직과 편성은 법률로 정한다. 외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가 보장된다. 국가는 지역간의 균형있는 발전을 위하여 지역경제를 육성할 의무를 진다.
            대통령의 국법상 행위는 문서로써 하며, 이 문서에는 국무총리와 관계 국무위원이 부서한다. 군사에 관한 것도 또한 같다. 중앙선거관리위원회는 대통령이 임명하는 3인, 국회에서 선출하는 3인과 대법원장이 지명하는 3인의 위원으로 구성한다. 위원장은 위원중에서 호선한다.
            모든 국민은 통신의 비밀을 침해받지 아니한다. 체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.
            대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다. 국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의 발전에 노력하여야 한다.
          </textarea>
          <br /> <br />

          <li>
            <label htmlFor="agree_person_check">[필수]개인정보 수집 및 이용 동의 {'>'} </label>
            <input type="checkbox" id="agree_person_check" name="personalAgree" required
              checked={agrees.personalAgree} onChange={ agreeChangeHandler }/>
          </li> <br />

          <textarea name="opinion" cols="130" rows="5" readOnly >
            이 헌법시행 당시의 법령과 조약은 이 헌법에 위배되지 아니하는 한 그 효력을 지속한다. 국회는 선전포고, 국군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의 주류에 대한 동의권을 가진다.
            국군의 조직과 편성은 법률로 정한다. 외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가 보장된다. 국가는 지역간의 균형있는 발전을 위하여 지역경제를 육성할 의무를 진다.
            대통령의 국법상 행위는 문서로써 하며, 이 문서에는 국무총리와 관계 국무위원이 부서한다. 군사에 관한 것도 또한 같다. 중앙선거관리위원회는 대통령이 임명하는 3인, 국회에서 선출하는 3인과 대법원장이 지명하는 3인의 위원으로 구성한다. 위원장은 위원중에서 호선한다.
            모든 국민은 통신의 비밀을 침해받지 아니한다. 체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.
            대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다. 국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의 발전에 노력하여야 한다.
          </textarea>
          <br />
        </ul>
        </div>
        <div className ="agreeButton">
          <Button style={{ backgroundColor: "#9DC8C8" }} id="back" variant="contained"
            onClick={() => {
              navigate("/");
          }}>이전</Button>
          <Button style={{ backgroundColor: "#9DC8C8" }} id ="next" variant="contained" 
            onClick={() => {
              if((allAgree)) {
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



