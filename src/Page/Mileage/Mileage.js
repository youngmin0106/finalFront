import { useState } from 'react';
import './Mileage.css';
import Toss from './ChoosePayment/Toss';
import Cultureland from './ChoosePayment/Cultureland';
import CreditCard from './ChoosePayment/CreditCard';
import Phone from './ChoosePayment/Phone';
import BankTransfer from './ChoosePayment/BankTransfer';
import TeenCash from './ChoosePayment/TeenCash';
import KakaoPay from './ChoosePayment/KakaoPay';
import Payco from './ChoosePayment/Payco';

function Mileage( {userInfo, setUserInfo, trans, setTrans} ) {

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="Mileage">
      <h4>마일리지 충전</h4>
      <ul className='payul'>
      <div className="choosePayment">충전수단 선택</div>
        <li onClick={() => handleItemClick("토스페이")}>토스페이</li>
        <li onClick={() => handleItemClick("신용카드")}>신용카드</li>
        <li onClick={() => handleItemClick("휴대폰")}>휴대폰</li>
        <li onClick={() => handleItemClick("무통장입금")}>무통장입금</li>
        <li onClick={() => handleItemClick("페이코")}>페이코</li>
        <li onClick={() => handleItemClick("문화상품권")}>문화상품권</li>
        <li onClick={() => handleItemClick("틴캐시")}>틴캐시</li>
        <li onClick={() => handleItemClick("카카오페이")}>카카오페이</li>
      </ul>
      <div className="content">
        {selectedItem === "토스페이" && <div className='payopt'><Toss userInfo={userInfo} setUserInfo={setUserInfo} trans={trans} setTrans={setTrans}></Toss></div>}
        {selectedItem === "신용카드" && <div className='payopt'><CreditCard userInfo={userInfo} setUserInfo={setUserInfo} trans={trans} setTrans={setTrans}></CreditCard></div>}
        {selectedItem === "휴대폰" && <div className='payopt'><Phone userInfo={userInfo} setUserInfo={setUserInfo} trans={trans} setTrans={setTrans}></Phone></div>}
        {selectedItem === "무통장입금" && <div className='payopt'><BankTransfer userInfo={userInfo} setUserInfo={setUserInfo} trans={trans} setTrans={setTrans}></BankTransfer></div>}
        {selectedItem === "페이코" && <div className='payopt'><Payco userInfo={userInfo} setUserInfo={setUserInfo} trans={trans} setTrans={setTrans}></Payco></div>}
        {selectedItem === "문화상품권" && <div className='payopt'><Cultureland userInfo={userInfo} setUserInfo={setUserInfo} trans={trans} setTrans={setTrans}></Cultureland></div>}
        {selectedItem === "틴캐시" && <div className='payopt'><TeenCash></TeenCash></div>}
        {selectedItem === "카카오페이" && <div className='paypot'><KakaoPay userInfo={userInfo} setUserInfo={setUserInfo} trans={trans} setTrans={setTrans}></KakaoPay></div> }
      </div>
      </div>
  );
}

export default Mileage;