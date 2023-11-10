import { Button, Form } from "react-bootstrap";
import './Toss.css';
import notReady from './serviceNot.png'

// 일반전화(ARS) 결제 (근데 못함)
function HPhone() {

  return (
    <div className="payMain">
      <div>
        <h4>전화결제</h4>
        <hr></hr>
        <img src={notReady} alt="서비스준비중" width={"800px"}></img>
        </div>
    </div>
  );
}

export default HPhone;