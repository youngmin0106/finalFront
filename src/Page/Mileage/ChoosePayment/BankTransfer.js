import './Toss.css';
import notReady from './img/serviceNot.png'


function BankTransfer() {

  return (
    <div className="payMain">
        <h4>무통장입금</h4>
        <hr></hr>
        <div className="img">
          <img src={notReady} alt="서비스준비중"></img>
        </div>
    </div>
  );
}

export default BankTransfer;