import './MyPageBar.css';
import bronze from './Tier/bronze.png';
import silver from './Tier/silver.png';
import gold from './Tier/gold.png';
import diamond from './Tier/diamond.png';
import platinum from './Tier/platinum.png';
import { Link } from 'react-router-dom';




function MyPageBar( { point, userInfo } ) {
 
  const getTier = () => {
    if (userInfo.transactionPoints > 300) {
      return <img src={platinum} style={{width : "100px", textAlign : "center"}} alt="플래티넘"></img>;
    } else if (userInfo.transactionPoints > 100) {
      return <img src={diamond} style={{width : "100px", textAlign : "center"}} alt="다이아몬드"></img>;
    } else if (userInfo.transactionPoints > 50) {
      return <img src={gold} style={{width : "100px", textAlign : "center"}} alt="골드"></img>;
    } else if (userInfo.transactionPoints >= 5) {
      return <img src={silver} style={{width : "100px", textAlign : "center"}} alt="실버"></img>;
    } else {
      return <img src={bronze} style={{width : "100px", textAlign : "center"}} alt="브론즈"></img>;
    }
  };

  const getTierValue = () => {
    if (userInfo.transactionPoints > 300) {
      return "챌린저";
    } else if (userInfo.transactionPoints > 100) {
      return "다이아몬드";
    } else if (userInfo.transactionPoints > 50) {
      return "골드";
    } else if (userInfo.transactionPoints >= 5) {
      return "실버";
    } else {
      return "브론즈";
    }
  };

  return (
    <div className='myPageBar'>
      <br></br>
      {/* <h2 style={{marginLeft : "10%", marginBottom : "2%", fontSize : "25px"}}><Link to = "/mypage">- 마이페이지</Link></h2> */}


      <ul className='ulList' style={{borderTop : "2px solid #519D9E"}}>
        <br></br>
        <li style={{textAlign : "center"}}>{getTier()}</li>
        <li style={{textAlign : "center"}}><span style={{fontWeight : "bold"}}>{userInfo.username}</span>님의 등급은</li>
        <li style={{textAlign : "center"}}><span style={{fontWeight : "bold"}}>{getTierValue()}</span>({userInfo.transactionPoints}점)입니다</li>
        <br></br>
        <li><a className="job" href="0" onClick={(e) => {
          e.preventDefault();
        }}>나의 판매 물품</a></li>
        <li><Link to = "/listPages/1">내가 등록한 물품</Link></li>
        <li><Link to = "/listPages/2">판매중</Link></li>
        <li><Link to = "/listPages/3">판매 취소완료</Link></li>
        <li><Link to = "/listPages/4">판매 완료</Link></li>
        <li><a className="job" href="0" onClick={(e) => {
          e.preventDefault();
        }}>나의 구매 물품</a></li>
        <li><Link to = "/listPages/5">구매중</Link></li>
        <li><Link to = "/listPages/6">구매 취소완료</Link></li>
        <li><Link to = "/listPages/7">구매 취소</Link></li>
        <li><a className="job" href="0" onClick={(e) => {
          e.preventDefault();
        }}>마일리지 관리</a></li>
        <li><a href="1">마일리지 내역</a></li>
        <li><Link to ="/mileage" >마일리지 충전</Link></li>
        <li><a className="job" href="0" onClick={(e) => {
          e.preventDefault();
        }}>나의 정보 관리</a></li>
        <li><Link to ="/updateInfo">회원정보 수정</Link></li>
        <li><Link to ="/deleteInfo">회원 탈퇴</Link></li>
        <li><a className='job' href="1" onClick={(e) => {
          e.preventDefault(); // 임시 헤더용 li 태그
        }}>임시 이동 li</a></li>
        <li><Link to="/transPost">거래페이지</Link></li>
        <li><Link to="/insertTrans">판매등록</Link></li>
      </ul>
    </div>
  );
}

export default MyPageBar;