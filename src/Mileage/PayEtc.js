import './Toss.css';
import notReady from './serviceNot.png'


function PayEtc() {

  const tdStyle = {
    padding: '10px',
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