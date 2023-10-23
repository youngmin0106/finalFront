import './MyPage.css';
import tier from './tier.png'

function MyPage() {

  return (
    <div>
    

    <h1>마이페이지</h1>


    <ul>
	<li><a class="job" href="0">나의 판매 물품</a></li>
	<li><a href="1">내가 등록한 물품</a></li>
	<li><a href="2">판매중</a></li>
	<li><a href="3">판매 취소 완료</a></li>
	<li><a href='4'>판매 완료</a></li>
  <li><a class="job" href="0">나의 구매 물품</a></li>
	<li><a href="1">구매중</a></li>
	<li><a href="2">구매 취소완료</a></li>
	<li><a href="3">구매 취소</a></li>
  <li><a class="job" href="0">마일리지 관리</a></li>
	<li><a href="1">마일리지 내역</a></li>
	<li><a href="2">마일리지 충전</a></li>
  <li><a class="job" href="0">나의 정보 관리</a></li>
	<li><a href="1">회원정보 수정</a></li>
	<li><a href="2">관심 물품</a></li>
	<li><a href="3">회원 탈퇴</a></li>
</ul>
  
  <div class="main">
    <h3>??등급까지 ?건의 거래완료가 남았습니다!</h3>
    <img src={tier} style={{border : "0.5px solid #eee"}} alt="티어"></img>
    

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

export default MyPage