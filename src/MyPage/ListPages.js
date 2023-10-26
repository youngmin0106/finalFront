import MyPageBar from "./MyPageBar";
import './ListPages.css';
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useParams } from "react-router-dom";


function ListPages( {list, pageType, point} ) {

  let {id} = useParams();
  let content = '';
  console.log({id})
  
  if ( id === '1' ) {
    content = list[0].name;
  } else if(id === '2') {
    content = list[1].name;
  } else if(id === '3') {
    content = list[2].name;
  } else if(id === '4') {
    content = list[3].name;
  } else if(id === '5') {
    content = list[4].name;
  } else if(id === '6') {
    content = list[5].name;
  } else if(id === '7') {
    content = list[6].name;
  }

  return (
    <div>
      <MyPageBar point={point}></MyPageBar>
    
      <div className="main">
      <h6 style={{fontWeight : "bold"}}>tester님의 {content} 물품 (전체 : $개)</h6>
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
               <td style={{paddingTop : "20px"}}>메이플 메소 팝니다<br></br> {/* 판매 제목 넣기 */} 
            2023-10-24 16:51:00 <br></br> {/* 판매 시간, 판매자, 연락처 데이터 넣기 */}
            판매자 : tester &nbsp; 연락처 : 010-1234-5678
          </td> 
          <td><span style={{color : "#40A940", fontWeight : "bold"}}>1,000</span>원</td> {/* 판매 가격 넣을 자리*/} 
          <td><Button className="chat">채팅</Button>{' '}&nbsp;
              <Button className="prevChat">이전채팅</Button>{' '}&nbsp;
          </td>
            </tr>
          </tfoot>

      </table>
      </div>
    
    </div>
  );
}

export default ListPages;