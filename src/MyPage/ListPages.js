import MyPageBar from "./MyPageBar";
import './ListPages.css';
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useParams } from "react-router-dom";


function ListPages( {list, pageType, point, userInfo, testTrans} ) {

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
    <div className="listPages">
      <MyPageBar point={point} userInfo={userInfo}></MyPageBar>
    
      <div className="main">
      <h6 style={{fontWeight : "bold"}}>{userInfo.username}님의 {content} 물품 (전체 : $개)</h6>
      <table>

        <tbody style={{border : "0.5px solid #eee", borderTop : "0.5px solid #519D9E"}}>
          <tr>
            <td style={{width : "500px", paddingRight : "10px", textAlign : "center", fontWeight : "bold"}}>서버</td>
            <td style={{width : "200px", paddingRight : "10px", textAlign : "center", fontWeight : "bold"}}>기본가격<br/>구매금액</td>
            <td style={{width : "200px", paddingRight : "10px", textAlign : "center", fontWeight : "bold"}}>설정</td>
          </tr>
        </tbody>

        {
          <tfoot style={{textAlign: "center"}}>
          {testTrans.map((testTrans, index) => (
            <tr key={index} style={{paddingTop: "20px", borderBottom : "0.5px solid #eee"}}>
              <td style={{paddingTop: "20px"}}>
                <span style={{fontWeight : "bold"}}><a href="/testTrans">{testTrans.title}</a></span><br /> {/* 판매 제목 */}
                {testTrans.date} <br /> {/* 판매 시간 */}
                판매자: {userInfo.username} &nbsp; 연락처: {userInfo.phone}
              </td>
              <td>
                <span style={{color: "blue", fontWeight: "bold"}}>{testTrans.price}</span>원
              </td> {/* 판매 가격 */}
              <td>
                <Button className="chat">채팅</Button>{' '}&nbsp;
                {/* <Button className="prevChat">이전채팅</Button>{' '}&nbsp; */}
              </td>
            </tr>
          ))}
        </tfoot>
        }

      </table>
      </div>
    
    </div>
  );
}

export default ListPages;