import MyPageBar from "./MyPageBar";
import './ListPages.css';
import { Button } from "react-bootstrap";


function ListPages( {list} ) {
  return (

    <div>
      <MyPageBar></MyPageBar>

      <div className="main">
      <h6 style={{fontWeight : "bold"}}>tester님의 {list[0].name} 물품 (전체 : $개)</h6>
      

      <table>

        <tbody style={{border : "0.5px solid #eee", borderTop : "0.5px solid #40A940"}}>
          <tr>
            <td style={{width : "500px", paddingRight : "10px", textAlign : "center", fontWeight : "bold"}}>서버</td>
            <td style={{width : "200px", paddingRight : "10px", textAlign : "center", fontWeight : "bold"}}>기본가격<br/>구매금액</td>
            <td style={{width : "200px", paddingRight : "10px", textAlign : "center", fontWeight : "bold"}}>설정</td>
          </tr>
        </tbody>

          <tfoot style={{textAlign : "center"}}>
            <tr style={{paddingTop : "20px"}}>
          <td style={{paddingTop : "20px"}}>메이플 메소 팝니다<br></br> {/* 판매 제목 */} 
            2023-10-24 16:51:00 <br></br> {/* 판매 시간 */}
            판매자 : tester1 &nbsp; 연락처 : 010-1234-5678
          </td> 
          <td><span style={{color : "#40A940", fontWeight : "bold"}}>1,000</span>원</td> {/* 판매 가격 넣을 자리*/} 
          <td><Button variant="success" style={{opacity : "0.5", backgroundColor : "black", border : "none"}}>채팅</Button>{' '}&nbsp;
              <Button variant="success" style={{opacity : "0.5", backgroundColor : "black", border : "none"}}>이전채팅</Button>{' '}&nbsp;
          </td>
            </tr>
          </tfoot>

      </table>
      </div>
    
    </div>
  );
}

export default ListPages;