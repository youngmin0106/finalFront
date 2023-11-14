import { Button, Form } from "react-bootstrap";
import './Toss.css';


function Toss() {

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
      <div>
        <h4>토스페이</h4>
        <hr></hr>
        <table>
          <tbody>
            <tr>
              <td style={tdStyle}>마일리지 종류</td>
              <th style={thStyle}>구매전용 마일리지 (출금불가)</th>
            </tr>
            <tr>
              <td style={tdStyle}>충전 수수료</td>
              <th style={thStyle}>0%</th>
            </tr>
            <tr>
              <td style={tdStyle}>충전 한도</td>
              <th style={thStyle}>결제 가능 카드 별 토스페이 한도 확인 </th>
            </tr>
          </tbody>
        </table>
        <ul className="tossReadme">
          <li style={{color : "#767676"}}>토스페이 결제를 통하여 마일리지 충전이 가능합니다.</li>
          <li style={{color : "#767676"}}>충전 수수료 5% ( 충전 수수료 제외한 금액 구매전용 마일리지 충전 )</li>
          <li style={{color : "#767676"}}>토스페이를 이용하여 구매전용 마일리지(출금 서비스 이용불가) 충전을 하실 수 있습니다.</li>
          <li style={{color : "#767676"}}>충전 후 전액을 사용하지 않았거나 판매자와 거래가 진행이 안 될 경우, 출금신청시 승인취소로 진행됩니다.</li>
          <li style={{color : "#767676"}}>(충전금액 중 일부라도 사용한 경우 출금서비스 이용불가)</li>
          <li style={{color : "#767676"}}>그냥 출금하지마세용</li>
        </ul>
      </div>
      <hr></hr>
      <table>
        <tbody>
          <tr>
            <td style={tdStyle}>충전신청금액</td>
            <th style={thStyle}><Form.Control type="text" placeholder="준비중 ( 안할수도 있음 )" /></th>
          </tr>
        </tbody>
      </table>
      <hr></hr>
      <div style={{textAlign : "center"}}>
      <Button className="payReq">충전신청</Button>
      </div>
        
    </div>
  );
}

export default Toss;