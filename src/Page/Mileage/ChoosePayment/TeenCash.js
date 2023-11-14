import './Toss.css';
import notReady from './img/serviceNot.png'


function TeenCash() {

  return (
    <div className="payMain">
      <div>
        <h4>틴캐시</h4>
        <hr></hr>
        <div className="img">
          <img src={notReady} alt="서비스준비중"></img>
        </div>
        </div>
    </div>
  );
}

export default TeenCash;