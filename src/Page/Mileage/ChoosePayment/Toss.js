// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import axiosInstance from '../axiosInstance';
// import { Button, Form } from 'react-bootstrap';
// import './Toss.css';

// const Toss = ( {userInfo, setUserInfo} ) => {

//   useEffect(() => {
//     const jquery = document.createElement("script");
//     jquery.src = "http://code.jquery.com/jquery-1.12.4.min.js";
//     const iamport = document.createElement("script");
//     iamport.src = "http://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
//     document.head.appendChild(jquery);
//     document.head.appendChild(iamport);
//     return () => {
//       document.head.removeChild(jquery);
//       document.head.removeChild(iamport);
//     };
//   }, []);
  
//   const tdStyle = {
//     padding: '10px', 
//     fontWeight : 'bold'
//   };

//   const thStyle = {
//     padding : '10px',
//     fontWeight : 100
//   };

//   const [money, setMoney] = useState(userInfo.mileage);

//   const requestPay = () => {

//     const d = document.querySelector('.mileage').value;

//     const oriMoney = parseInt(money);
//     const chargeMoney = parseInt(d);
//     const totalMoney = oriMoney + chargeMoney;

//     setMoney(totalMoney);
//     console.log(totalMoney);

//     const { IMP } = window;
//     IMP.init('imp43772371');

//     IMP.request_pay({
//       pg: 'tosspay',
//       pay_method: 'tosstest',
//       merchant_uid: new Date().getTime(),
//       name: '테스트 상품',
//       amount: d,
//       buyer_email: 'test@naver.com',
//       buyer_name: 'test2',
//       buyer_tel: '010-1234-5678',
//       buyer_addr: '서울특별시',
//       buyer_postcode: '123-456',
//     }, async (rsp) => {
//       try {
//         const { data } = await axios.post('http://localhost:8282/verifyIamport/' + rsp.imp_uid);
//         console.log(data)
//         if (rsp.paid_amount === data.response.amount) {
//           axiosInstance.post('/payCultureland', {id : "test2" , userInfo:userInfo, mileage: totalMoney})
//           .then(response => {
//               alert(response.data);
//               console.log("마일리지 충전 완료");
//               setUserInfo(response.data);
//             }).catch(error => {
//               console.log(error);
//             });
//           alert('결제 성공');
//         } else {
//           alert('결제 실패');
//         }
//       } catch (error) {
//         console.error('Error while verifying payment:', error);
//         console.log(rsp.paid_amount)
//         alert('결제 실패');
//       }
//     });
//   };


//   return (
//     <div className='payMain'>
//       <br></br>
//       <div>
//         <h4>카카오페이</h4>
//         <hr></hr>
//         <table>
//           <tbody>
//             <tr>
//               <td style={tdStyle}>마일리지 종류</td>
//               <th style={thStyle}>구매전용 마일리지 (출금불가)</th>
//             </tr>
//             <tr>
//               <td style={tdStyle}>충전 수수료</td>
//               <th style={thStyle}>0%</th>
//             </tr>
//             <tr>
//               <td style={tdStyle}>충전 한도</td>
//               <th style={thStyle}>결제 가능 카드 별 카카오페이 한도 확인 </th>
//             </tr>
//           </tbody>
//         </table>
//         <ul className="tossReadme">
//         </ul>
//       </div>
//       <hr></hr>
//       <table>
//         <tbody>
//           <tr>
//             <td style={tdStyle}>충전신청금액</td>
//             <th style={thStyle}><Form.Control type="text" className="mileage" placeholder="1,000원 이상 결제가능"/></th>
//           </tr>
//         </tbody>
//       </table>
//       <hr></hr>
//       <div style={{textAlign : "center"}}>
//       <Button className="payReq" onClick={requestPay}>충전신청</Button>
//       </div>
//     </div>
//   );
// };

// export default Toss;

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
              <th style={thStyle}>20%</th>
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