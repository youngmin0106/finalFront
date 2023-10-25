import { Button, Form } from "react-bootstrap";
import './Toss.css';
import notReady from './serviceNot.png'


function BankTransfer() {

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
        <h4>무통장입금</h4>
        <hr></hr>
        <img src={notReady} alt="서비스준비중" width={"800px"}></img>
        {/* <table>
          <tbody>
            <tr>
              <td style={tdStyle}>마일리지 종류</td>
              <th style={thStyle}>구매전용 마일리지 (출금불가)</th>
            </tr>
            <tr>
              <td style={tdStyle}>충전 수수료</td>
              <th style={thStyle}>30%</th>
            </tr>
            <tr>
              <td style={tdStyle}>충전 한도</td>
              <th style={thStyle}>결제 가능 카드 별 한도 확인 </th>
            </tr>
          </tbody>
        </table>
        <ul className="tossReadme">
          <img src={notReady} alt="서비스준비중"></img>
        </ul>
      </div>
      <hr></hr>
      <table>
        <tbody>
          <tr>
            <td style={tdStyle}>충전신청금액</td>
            <th style={thStyle}><Form.Control type="text" placeholder="1,000원 이상 결제가능" /></th>
          </tr>
        </tbody>
      </table>
      <hr></hr>
      <div style={{textAlign : "center"}}>
      <Button className="payReq">충전신청</Button>
      </div> */}
        </div>
    </div>
  );
}

export default BankTransfer;