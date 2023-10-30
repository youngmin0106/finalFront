import './MyPageBar.css';
import bronze from './Tier/bronze.png';
import silver from './Tier/silver.png';
import gold from './Tier/gold.png';
import diamond from './Tier/diamond.png';
import platinum from './Tier/platinum.png';




function MyPageBar( { point, userInfo } ) {
 
  const getTier = () => {
    if (point > 300) {
      return <img src={platinum} style={{width : "100px", textAlign : "center"}} alt="플래티넘"></img>;
    } else if (point > 100) {
      return <img src={diamond} style={{width : "100px", textAlign : "center"}} alt="다이아몬드"></img>;
    } else if (point > 50) {
      return <img src={gold} style={{width : "100px", textAlign : "center"}} alt="골드"></img>;
    } else if (point >= 5) {
      return <img src={silver} style={{width : "100px", textAlign : "center"}} alt="실버"></img>;
    } else {
      return <img src={bronze} style={{width : "100px", textAlign : "center"}} alt="브론즈"></img>;
    }
  };

  const getTierValue = () => {
    if (point > 300) {
      return "챌린저";
    } else if (point > 100) {
      return "다이아몬드";
    } else if (point > 50) {
      return "골드";
    } else if (point >= 5) {
      return "실버";
    } else {
      return "브론즈";
    }
  };
  
  

  
  
  return (
    <div className='myPageBar'>
      <h2 style={{marginLeft : "10%", marginBottom : "2%", fontSize : "25px"}}><a href='/mypage'>- 마이페이지</a></h2>


      <ul className='ulList' style={{borderTop : "2px solid #519D9E"}}>
        <br></br>
        <li style={{textAlign : "center"}}>{getTier()}</li>
        <li style={{textAlign : "center"}}><span style={{fontWeight : "bold"}}>{userInfo.id}</span>님의 등급은</li>
        <li style={{textAlign : "center"}}><span style={{fontWeight : "bold"}}>{getTierValue()}</span>({point}점)입니다</li>
        <br></br>
        <li><a className="job" href="0" onClick={(e) => {
          e.preventDefault();
        }}>나의 판매 물품</a></li>
        <li><a href="/listPages/1">내가 등록한 물품</a></li>
        <li><a href="/listPages/2">판매중</a></li>
        <li><a href="/listPages/3">판매 취소 완료</a></li>
        <li><a href="/listPages/4">판매 완료</a></li>
        <li><a className="job" href="0" onClick={(e) => {
          e.preventDefault();
        }}>나의 구매 물품</a></li>
        <li><a href="/listPages/5">구매중</a></li>
        <li><a href="/listPages/6">구매 취소완료</a></li>
        <li><a href="/listPages/7">구매 취소</a></li>
        <li><a className="job" href="0" onClick={(e) => {
          e.preventDefault();
        }}>마일리지 관리</a></li>
        <li><a href="1">마일리지 내역</a></li>
        <li><a href="/mileage">마일리지 충전</a></li>
        <li><a className="job" href="0" onClick={(e) => {
          e.preventDefault();
        }}>나의 정보 관리</a></li>
        <li><a href="/updateInfo">회원정보 수정</a></li>
        <li><a href="/deleteInfo">회원 탈퇴</a></li>
      </ul>
    </div>
  );
}

export default MyPageBar;