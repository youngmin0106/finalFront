import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="firstLayout">
        <b>회사소개</b>
        <b>이용약관</b>
        <b>개인정보 처리방침</b>
        <b>청소년 보호정책</b>
        <b>이메일수집거부?</b>
        <b>제휴문의</b>
        <b>고객센터</b>
      </div>
      <div className="secondLayout">
        <div className="logo">로고</div>
        <div>
          <div className="firstItem">
            <p>상호명: 사이트명</p>
            <p>|</p>
            <p>개발자: 최상운, 조준수, 안영민, 박윤희</p>
            <p>|</p>
            <p>연락처: 1997-1999</p>
            <p>|</p>
            <p>사업자 번호: ???-??-?????</p>
            <p>|</p>
            <p>통신판매업신고번호 제 2023-서울강서-????호</p>
            <p>|</p>
          </div>
          <div className="scondItem">
            <p>주소: 서울특별시 강서구 화곡로 149 3층, 4층, 5층(이젠아카데미주소로 했음)</p>
            <p>|</p>
            <p>copyright ⓒ 2023 사이트명 All right reserved</p>
            <p></p>
          </div>

          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;