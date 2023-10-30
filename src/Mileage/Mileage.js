import { useState } from 'react';
import './Mileage.css';
import Toss from './Toss';
import Cultureland from './Cultureland';
import CreditCard from './CreditCard';
import Phone from './Phone';
import BankTransfer from './BankTransfer';
import HPhone from './HPhone';
import TeenCash from './TeenCash';
import KakaoPay from './KakaoPay';

function Mileage( {userInfo, setUserInfo} ) {

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const getContent = () => {
    switch (selectedItem) {
      case "토스페이":
        return <div>토스페이 내용</div>;
      case "신용카드":
        return <div>신용카드 충전 내용</div>;
      case "휴대폰":
        return <div>휴대폰(ARS) 충전 내용</div>;
      case "무통장입금":
        return <div>무통장 입금 내용</div>;
      case "전화결제":
        return <div>전화결제(ARS) 충전 내용</div>;
      case "문화상품권":
        return <div>문화상품권 충전 내용</div>;
      case "틴캐시":
        return <div>틴캐시 내용</div>;
      case "돈복사버그":
        return <div>돈복사버그 내용</div>;
      default:
        return null;
    }
  };

  return (
    <div className="Mileage">
      <h4>마일리지 충전</h4>
      <div className="choosePayment">충전수단 선택</div>
      <ul className='payul'>
        <li onClick={() => handleItemClick("토스페이")}>토스페이</li>
        <li onClick={() => handleItemClick("신용카드")}>신용카드</li>
        <li onClick={() => handleItemClick("휴대폰")}>휴대폰</li>
        <li onClick={() => handleItemClick("무통장입금")}>무통장입금</li>
        <li onClick={() => handleItemClick("전화결제")}>전화결제</li>
        <li onClick={() => handleItemClick("문화상품권")}>문화상품권</li>
        <li onClick={() => handleItemClick("틴캐시")}>틴캐시</li>
        <li onClick={() => handleItemClick("카카오페이")}>카카오페이</li>
      </ul>
      <div className="content">
        {selectedItem === "토스페이" && <div className='payopt'><Toss userInfo={userInfo} setUserInfo={setUserInfo}></Toss></div>}
        {selectedItem === "신용카드" && <div className='payopt'><CreditCard userInfo={userInfo} setUserInfo={setUserInfo}></CreditCard></div>}
        {selectedItem === "휴대폰" && <div className='payopt'><Phone></Phone></div>}
        {selectedItem === "무통장입금" && <div className='payopt'><BankTransfer userInfo={userInfo} setUserInfo={setUserInfo}></BankTransfer></div>}
        {selectedItem === "전화결제" && <div className='payopt'><HPhone></HPhone> </div>}
        {selectedItem === "문화상품권" && <div className='payopt'><Cultureland userInfo={userInfo} setUserInfo={setUserInfo}></Cultureland></div>}
        {selectedItem === "틴캐시" && <div className='payopt'><TeenCash></TeenCash></div>}
        {selectedItem === "카카오페이" && <div className='paypot'><KakaoPay userInfo={userInfo} setUserInfo={setUserInfo}></KakaoPay></div> }
      </div>
    </div>
  );
}

export default Mileage;