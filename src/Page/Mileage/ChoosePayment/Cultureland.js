import { Button, Form } from "react-bootstrap";
import './Toss.css';
import { useState } from "react";
import axiosInstance from "../../../axiosInstance";
import { useNavigate } from "react-router-dom";


function Cultureland({ userInfo, setUserInfo, trans }) {


  const tdStyle = {
    padding: '10px',
    fontWeight: 'bold'
  };

  const thStyle = {
    padding: '10px',
    fontWeight: 100
  };


  const navigate = useNavigate();

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

    return totalMoney;
  }

  const setTotalMoney = () => {

    const totalMoney = setMoneyHandler()

    console.log(userInfo)
    console.log("이름 :" + userInfo.username);
    console.log("마일리지 : " + money);

    axiosInstance.post('/payCultureland', {...userInfo, mileage : totalMoney})
      .then(response => {
        alert(response.data);
        console.log("마일리지 충전 완료");
        setUserInfo({ ...userInfo, mileage: totalMoney });
        navigate('/mypage');
      }).catch(error => {
        console.log(error);
      });
  }

  return (
    <div className="payMain">
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
              <th style={thStyle}>0%</th>
            </tr>
            <tr>
              <td style={tdStyle}>충전 한도</td>
              <th style={thStyle}>문화상품권 한도 확인 </th>
            </tr>
          </tbody>
        </table>
        <ul className="tossReadme">
        </ul>
      </div>
      <hr></hr>
      <table>
        <tbody>
          <tr>
            <td style={tdStyle}>보유중인 마일리지</td>
            <th style={thStyle}>{userInfo.mileage}원</th>
          </tr>

          <tr>
            <td style={tdStyle}>충전신청금액</td>
            <th style={thStyle}><Form.Control type="text" className="mileage" placeholder="1,000원 이상 결제가능" /></th>
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
                style={{ width: '70px', marginRight: '10px', float: 'left' }}
              />
            ))}</th>
          </tr>
        </tbody>
      </table>
      <hr></hr>
      <div style={{ textAlign: "center" }}>
        <Button className="payReq" onClick={setTotalMoney}>충전신청</Button>
      </div>

    </div>
  );
}


export default Cultureland;