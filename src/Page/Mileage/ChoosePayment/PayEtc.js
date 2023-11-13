import { Button, Form } from "react-bootstrap";
import './Toss.css';
import notReady from './serviceNot.png'


// 구현할 수도 있는 결제 내역
function PayEtc() {

  const tdStyle = {
    padding: '10px', // 필요에 따라 적절한 패딩 값으로 조정하세요
    fontWeight : 'bold'
  };

  const thStyle = {
    padding : '10px',
    fontWeight : 100
  };

  return (
    <div className="payMain">
      <br></br>
      <div>
        <h4>돈복사버그</h4>
        <hr></hr>
        <img src={notReady} alt="서비스준비중" width={"800px"}></img>
        </div>
    </div>
  );
}

export default PayEtc;