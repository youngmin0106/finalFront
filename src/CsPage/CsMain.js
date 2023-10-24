
import { Link } from "react-router-dom";
import "../CsPage/CsCss/CsMain.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function CsMain() {
  return (
    <div>


    <h2 style={{marginLeft : "10%", marginBottom : "1%", fontSize : "25px" ,marginTop : "10%"}}>- 고객센터</h2>
    <ul className='ulList'>
      <li><a href="/cs">공지사항</a></li>
      <li><a href="2">자주묻는질문</a></li>
      <li><a href="3">1:1문의</a></li>
    </ul>

  <div className="boxcard">
      <div className="card card-1">
        <div className="st"><a href="/cs">공지사항</a></div>
        <div className="st">[공지사항] 개인정보 처리방침 변경안내</div>
        <div className="st">공지사항 안내입니다. 이용해주셔서 감...</div>
        <div className="st">공지사항 안내입니다. 이용해주셔서 감...</div>
        </div>
      <div className="card card-2"></div>
      <div className="card card-3"></div>
  </div>

  </div>
    
  );
}

export default CsMain;