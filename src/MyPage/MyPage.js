import './MyPage.css';
import tier from './tier.png'

function MyPage() {

  return (
    <div>
    
    
    <h2 style={{marginLeft : "10%", marginBottom : "2%"}}>- 마이페이지</h2>


    <ul>
	<li><a className="job" href="0">나의 판매 물품</a></li>
	<li><a href="1">내가 등록한 물품</a></li>
	<li><a href="2">판매중</a></li>
	<li><a href="3">판매 취소 완료</a></li>
	<li><a href='4'>판매 완료</a></li>
  <li><a className="job" href="0">나의 구매 물품</a></li>
	<li><a href="1">구매중</a></li>
	<li><a href="2">구매 취소완료</a></li>
	<li><a href="3">구매 취소</a></li>
  <li><a className="job" href="0">마일리지 관리</a></li>
	<li><a href="1">마일리지 내역</a></li>
	<li><a href="2">마일리지 충전</a></li>
  <li><a className="job" href="0">나의 정보 관리</a></li>
	<li><a href="1">회원정보 수정</a></li>
	<li><a href="2">관심 물품</a></li>
	<li><a href="3">회원 탈퇴</a></li>
</ul>
  
  <div className="main">
    <h3><span style={{color : ""}}>실버</span>등급까지 4건의 거래완료가 남았습니다!</h3>
      <img src={tier} style={{border : "0.5px solid #eee"}} alt="티어"></img>
   <p></p>

  <table width={"882px"}>
    <tbody>

    <tr>
    <td style={{ padding: "60px", border: "0.5px solid #eee", textAlign: "center" }}>
      <div>~</div>
      <div>내 보유 마일리지</div>
      <div style={{ fontWeight: "bold", fontSize: "25px" }}>1,000원</div>
      <button style={{backgroundColor :"white", border : "white", color : "blue", fontWeight : "bold"}}>충전</button>
    </td>

  <td style={{ padding: "60px", border: "0.5px solid #eee", textAlign: "center" }}>
      <div>♡</div>
      <div>관심물품</div>
      <div style={{ fontWeight: "bold", fontSize: "25px" }}>0 개</div>
      <div>&nbsp;</div>
    </td>
    </tr>
    </tbody>
</table>

<h3>▶ 거래현황</h3>

<p/>
<h3 style={{color : 'blue', opacity : 0.7, fontWeight : 'bold'}}>판매현황</h3>
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

<h3 style={{color : 'blue', opacity : 0.7, fontWeight : 'bold'}}>구매현황</h3>
<table className='sell' width={"882px"}> 
    <tbody>
      <tr>
        <td className='sellBox gradation1'>
          <div className='round'>STEP 1</div>
          <div>구매중</div>
          <div>0 건</div>
        </td>

        <td className='sellBox gradation2'>
          <div className='round'>STEP 2</div>
          <div>구매 취소완료</div>
          <div>0 건</div>
        </td>

        <td className='sellBox gradation4'>
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
  );
}

export default MyPage;