import { ListGroup } from 'react-bootstrap';
import './MyPage.css';
import tier from './tier.png';
import MyPageBar from './MyPageBar';


function MyPage() {

  return (
    <div className='font'>
    
    <MyPageBar></MyPageBar>

    {/* <ul>
    <ListGroup>
      <ListGroup.Item>No style</ListGroup.Item>
      <ListGroup.Item variant="primary">Primary</ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        Secondary
      </ListGroup.Item>
      <ListGroup.Item action variant="success">
        Success
      </ListGroup.Item>
      <ListGroup.Item action variant="danger">
        Danger
      </ListGroup.Item>
      <ListGroup.Item action variant="warning">
        Warning
      </ListGroup.Item>
      <ListGroup.Item action variant="info">
        Info
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
        Light
      </ListGroup.Item>
      <ListGroup.Item action variant="dark">
        Dark
      </ListGroup.Item>
    </ListGroup>
    </ul> */}
  
  <div className="main">
    <h3 style={{fontSize : "20px"}}><span>실버</span>등급까지 4건의 거래완료가 남았습니다!</h3>
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
<br></br>
<h3 style={{fontSize : "20px"}}>▶ 거래현황</h3>

<p/>
<h3 style={{color : '#40A940', opacity : 0.5, fontWeight : 'bold', fontSize : "20px"}}>판매현황</h3>
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
<h3 style={{color : '#40A940', opacity : 0.5, fontWeight : 'bold', fontSize : "20px"}}>구매현황</h3>
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