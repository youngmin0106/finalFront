import { Button } from 'react-bootstrap';
import './MyPage.css';
import tier3 from './tier3.png';
import MyPageBar from './MyPageBar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function MyPage({ point, userInfo }) {
  
  console.log(userInfo.mileage);
  

  const number = "" + userInfo.mileage;
  const number2 = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  const [showImage, setShowImage] = useState(false);

  const toggleImage = () => {
    const tierImage = document.querySelector('.showTier');

    if(!showImage) {
      tierImage.style.display = 'block'
    } else {
      tierImage.style.display = 'none'
    }
    setShowImage(!showImage);
  }
  

  let nextTier;
  
  const getTierValue = () => {
    if (userInfo.transactionPoints >= 301) {
      return "와우";
    } else if (userInfo.transactionPoints > 100) {
      nextTier = 301 - userInfo.transactionPoints;
      return "챌린저";
    } else if (userInfo.transactionPoints > 50) {
      nextTier = 101 - userInfo.transactionPoints;
      return "다이아몬드";
    } else if (userInfo.transactionPoints >= 5) {
      nextTier = 51 - userInfo.transactionPoints;
      return "골드";
    } else {
      nextTier = 6 - userInfo.transactionPoints
      return "실버";
    } 
  };
  
  return (
    <div className='myPage'>
      <div className='font'>
    
    <MyPageBar userInfo={userInfo}></MyPageBar>

  <div className="main">
    {     
          userInfo.transactionPoints < 301 && (
          <h3 style={{ fontSize: "20px" }}>
            <span style={{ fontWeight: "bold" }}>{getTierValue()}</span> 등급까지 {nextTier}건의 거래완료가 남았습니다!
          </h3>
        )}
      <img src={tier3} className='showTier' style={{border : "0.5px solid #eee", borderTop : "2px solid #519D9E", borderRadius : "5px", display : "none"}} alt="티어"></img>
      <Button onClick={toggleImage} className='showImage'>{showImage  ? '닫기' : '등급보기'}</Button>
   <p></p>

  <table width={"882px"}>
    <tbody>

    <tr>
    <td style={{ padding: "60px", border: "0.5px solid #eee", borderTop : "2px solid #519D9E", borderRadius : "5px", textAlign: "center" }}>
      <div>~</div>
      <div>내 보유 마일리지</div>
      <div style={{ fontWeight: "bold", fontSize: "25px" }}>{number2} 원</div>
      <Link to='/mileage' style={{backgroundColor :"white", border : "white", color : "blue", fontWeight : "bold", textDecoration : "none"}}>충전</Link>
    </td>

  {/* 나중에 구현 할수도 있음 (게시글 즐겨찾기) */}
  {/* <td style={{ padding: "60px", border: "0.5px solid #eee", textAlign: "center" }}>
      <div>♡</div>
      <div>관심물품</div>
      <div style={{ fontWeight: "bold", fontSize: "25px" }}>0 개</div>
      <div>&nbsp;</div>
    </td> */}
    </tr>
    </tbody>
</table>
<br></br>
<h3 style={{fontSize : "20px"}}>▶ 거래현황</h3>

<p/>
<h3 style={{color : '#58C9B9', opacity : 0.5, fontWeight : 'bold', fontSize : "20px"}}>판매현황</h3>
<table className='sell' width={"882px"}> 
    <tbody>
      <tr>
        <td className='sellBox gradation1'>
          <div className='round'>STEP 1</div>
          <div>등록</div>
          <div>0 건</div>
        </td>

        <td className='sellBox gradation2'>
          <div className='round'>STEP 2</div>
          <div>판매중</div>
          <div>0 건</div>
        </td>

        <td className='sellBox gradation3'>
          <div className='round'>STEP 3</div>
          <div>판매 취소 완료</div>
          <div>0 건</div>
        </td>

        <td className='sellBox gradation4'>
          <div className='round'>STEP 4</div>
          <div>판매 완료</div>
          <div>0 건</div>
        </td>
      </tr>
    </tbody>
</table>
<br></br>
<h3 style={{color : '#D1B6E1', opacity : 0.5, fontWeight : 'bold', fontSize : "20px"}}>구매현황</h3>
<table className='sell' width={"882px"}> 
    <tbody>
      <tr>
        <td className='sellBox gradation5'>
          <div className='round'>STEP 1</div>
          <div>구매중</div>
          <div>0 건</div>
        </td>

        <td className='sellBox gradation6'>
          <div className='round'>STEP 2</div>
          <div>구매 취소완료</div>
          <div>0 건</div>
        </td>

        <td className='sellBox gradation7'>
          <div className='round'>STEP 4</div>
          <div>구매 완료</div>
          <div>0 건</div>
        </td>
      </tr>
    </tbody>
</table>
    

  {/* <p>overflow: auto; 를 사용하여 영역을 벗어나는 부분의 스크롤 유뮤를 자동으로 합니다.</p>
  <p>화면을 스크롤해보면 왼쪽 메뉴바는 그대로 있고 오른쪽 내용만 스크롤됩니다.</p>
  <p>....</p>
  <p>....</p>
  <p>....</p>
  <p>....</p>
  <p>....</p> */}

</div>



    </div>
    </div>
  );
}

export default MyPage;