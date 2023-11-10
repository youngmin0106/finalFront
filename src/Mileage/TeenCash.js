import { Button, Form } from "react-bootstrap";
import './Toss.css';
import notReady from './serviceNot.png'

// 구현할 수도 있는 결제방식 (틴캐시)
function TeenCash() {

  return (
    <div className="payMain">
      <div>
        <h4>틴캐시</h4>
        <hr></hr>
        <div className="img">
          <img src={notReady} alt="서비스준비중"></img>
        </div>
        </div>
    </div>
  );
}

export default TeenCash;