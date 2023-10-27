import { Button, Form } from "react-bootstrap";
import './Toss.css';
import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";


function Cultureland( {userInfo, setUserInfo} ) {


  const tdStyle = {
    padding: '10px', 
    fontWeight : 'bold'
  };

  const thStyle = {
    padding : '10px',
    fontWeight : 100
  };

    const [serialNumber, setSerialNumber] = useState(['', '', '', '']);

    const [money, setMoney] = useState(userInfo.mileage);

    const handleInputChange = (index, e) => {
      const value = e.target.value;
      if (value.length <= 4 && /^\d*$/.test(value)) {
        const newSerialNumber = [...serialNumber];
        newSerialNumber[index] = value;
        setSerialNumber(newSerialNumber);
        // 번호입력 4번째 칸 전이면서 4자리수를 다 입력했으면 다음 입력칸으로 넘겨줌
        if (value.length === 4 && index < 3) {
          const nextInput = document.getElementById(`input-${index + 1}`);
          nextInput && nextInput.focus();
        }
      }
    };

    const setMoneyHandler = () => {

      const d = document.querySelector('.mileage').value;

      const oriMoney = parseInt(money);
      const chargeMoney = parseInt(d);
      const totalMoney = oriMoney + chargeMoney;

      setMoney(totalMoney);

        
      console.log(totalMoney);
      return totalMoney;
    }
    
    const setTotalMoney = () => {

      const totalMoney = setMoneyHandler()
      
      console.log(userInfo.id)
      
      axiosInstance.post('/payCultureland', {id : userInfo.id , userInfo:userInfo, mileage:totalMoney})
      .then(response => {
          alert(response.data);
          console.log("마일리지 충전 완료");
          setUserInfo(response.data);
        }).catch(error => {
          console.log(error);
        });
    }

  return (
    <div className="payMain">
      <br></br>
      <div>
        <h4>문화상품권</h4>
        <hr></hr>
        <table>
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
              <th style={thStyle}>결제 가능 카드 별 문화상품권 한도 확인 </th>
            </tr>
          </tbody>
        </table>
        <ul className="tossReadme">
          {/* <li style={{color : "#767676"}}>토스페이 결제를 통하여 마일리지 충전이 가능합니다.</li>
          <li style={{color : "#767676"}}>충전 수수료 5% ( 충전 수수료 제외한 금액 구매전용 마일리지 충전 )</li>
          <li style={{color : "#767676"}}>토스페이를 이용하여 구매전용 마일리지(출금 서비스 이용불가) 충전을 하실 수 있습니다.</li>
          <li style={{color : "#767676"}}>충전 후 전액을 사용하지 않았거나 판매자와 거래가 진행이 안 될 경우, 출금신청시 승인취소로 진행됩니다.</li>
          <li style={{color : "#767676"}}>(충전금액 중 일부라도 사용한 경우 출금서비스 이용불가)</li>
          <li style={{color : "#767676"}}>그냥 출금하지마세용</li> */}
        </ul>
      </div>
      <hr></hr>
      <table>
        <tbody>
          <tr>
            <td style={tdStyle}>충전신청금액</td>
            <th style={thStyle}><Form.Control type="text" className="mileage" placeholder="1,000원 이상 결제가능"/></th>
          </tr>
          <tr>
            <td style={tdStyle}>번호입력</td>
            <th style={thStyle}>{serialNumber.map((value, index) => (
        <Form.Control
          key={index}
          id={`input-${index}`}
          type="text"
          maxLength="4"
          value={value}
          onChange={(e) => handleInputChange(index, e)}
          style={{ width: '70px', marginRight: '10px', float : 'left' }}
        />
      ))}</th>
          </tr>
        </tbody>
      </table>
      <hr></hr>
      <div style={{textAlign : "center"}}>
      <Button className="payReq" onClick={setTotalMoney}>충전신청</Button>
      </div>
        
    </div>
  );
}


export default Cultureland;