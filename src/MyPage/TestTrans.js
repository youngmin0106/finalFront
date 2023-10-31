import { Button } from "react-bootstrap";
import axiosInstance from "../axiosInstance";
import { useNavigate } from "react-router-dom";

function TestTrans( {userInfo, testTrans, setTestTrans } ) {

  // 인계
  console.log(testTrans[0].transId)

  const navigate = useNavigate();

  const turnOverBtn = () => {
    let transId = testTrans[0].transId;
    axiosInstance.post('/testSellTrans', transId)
      .then(response => {
        alert(response.data);
        console.log(response.data);
  
        setTestTrans((testTrans) => ({
          ...testTrans,
          sellerChk : 'true'
        }));
        
      }).catch(error => {
        console.log(error);
      });
  }

  // 인수
  const takeOverBtn = () => {
    let transId = testTrans[0].transId;
    axiosInstance.post('/testBuyTrans', transId)
      .then(response => {
        alert(response.data);
        alert('거래완료');
        navigate('/')
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      });
  }

  const testButton = () => {
    if (userInfo.id === testTrans[0].buyerId && testTrans[0].sellerChk === 'true') {
      return <Button onClick={takeOverBtn}>인수</Button>
    } else if (userInfo.id === testTrans[0].sellerId) {
      return <Button onClick={turnOverBtn}>인계</Button>
    } else {
      return null;
    }
  }

  return (
    <div style={{marginLeft : "20%", width : "1000px"}}>
      <table style={{textAlign : "center", border : "0.5px solid #eee", width : "800px"}}>
        <tbody>
          <tr>
            <td style={{borderRight : "0.5px solid #eee", borderBottom : "0.5px solid #eee", backgroundColor : "green", opacity : "0.5", color : "white"}}>거래번호</td>
            <th style={{borderBottom : "0.5px solid #eee"}}>{testTrans[0].transId}</th>
          </tr>
          
          <tr>
            <td style={{borderRight : "0.5px solid #eee", borderBottom : "0.5px solid #eee", backgroundColor : "green", opacity : "0.5", color : "white"}}>판매자명</td>
            <th style={{borderBottom : "0.5px solid #eee"}}>{testTrans[0].name}</th>
          </tr>
          <tr>
            <td style={{borderRight : "0.5px solid #eee", borderBottom : "0.5px solid #eee", backgroundColor : "green", opacity : "0.5", color : "white"}}>연락처</td>
            <th style={{borderBottom : "0.5px solid #eee"}}>{userInfo.phone}</th>
          </tr>
          <tr>
            <td style={{borderRight : "0.5px solid #eee", borderBottom : "0.5px solid #eee", backgroundColor : "green", opacity : "0.5", color : "white"}}>게임이름</td>
            <th style={{borderBottom : "0.5px solid #eee"}}>{testTrans[0].game}</th>
          </tr>

          <tr>
            <td style={{borderRight : "0.5px solid #eee", borderBottom : "0.5px solid #eee", backgroundColor : "green", opacity : "0.5", color : "white"}}>서버명</td>
            <th style={{borderBottom : "0.5px solid #eee"}}>{testTrans[0].server}</th>
          </tr>
            <td style={{borderRight : "0.5px solid #eee", borderBottom : "0.5px solid #eee", backgroundColor : "green", opacity : "0.5", color : "white"}}>가격</td>
            <th style={{borderBottom : "0.5px solid #eee"}}>{testTrans[0].price}</th>
          <tr>
            <td style={{borderRight : "0.5px solid #eee", borderBottom : "0.5px solid #eee", backgroundColor : "green", opacity : "0.5", color : "white"}}>내용</td>
            <th style={{borderBottom : "0.5px solid #eee"}}>{testTrans[0].content}</th>
          </tr>

        </tbody>
      </table>
          <br></br>
          <div style={{marginRight : "80%"}}>
          {testButton()}
          </div>
    </div>
/* <div className='payMain'>
<br></br>
<div>
  <h4>카카오페이</h4>
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
        <th style={thStyle}>카카오페이 한도 확인 </th>
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
      <td style={tdStyle}>충전신청금액</td>
      <th style={thStyle}><Form.Control type="text" className="mileage" placeholder="1,000원 이상 결제가능"/></th>
    </tr>
  </tbody>
</table>
<hr></hr> */
  );
}

export default TestTrans;