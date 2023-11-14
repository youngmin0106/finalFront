import MyPageBar from "../MyPageBar/MyPageBar";
import './ListPages.css';
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import axiosInstance from "../../../axiosInstance";


function ListPages( {list, pageType, point, userInfo, testTrans, trans, setIntransList, IntransList} ) {

  let {id} = useParams();
  let content = '';
  let url = '';
  console.log({id})
  
  if ( id === '1' ) {
    content = list[0].name;
    url = list[0].url;
  } else if(id === '2') {
    content = list[1].name;
    url = list[1].url;
  } else if(id === '3') {
    content = list[2].name;
    url = list[2].url
  } else if(id === '4') {
    content = list[3].name;
    url = list[3].url
  } else if(id === '5') {
    content = list[4].name;
    url = list[4].url
  }
  
  useEffect(() => {
    let encodedUsername = encodeURIComponent(userInfo.username);

    axiosInstance.get(url + `/${encodedUsername}`)
    .then((response) => {
      console.log(response.data);
      setIntransList(response.data);

    }).catch((error) => {
      console.log(error);
    })
    
  }, [id, list, setIntransList, userInfo.username])

  return (
    <div className="listPages">
      <MyPageBar point={point} userInfo={userInfo}></MyPageBar>
    
      <div className="main">
      <h6 style={{fontWeight : "bold"}}>{userInfo.username}님의 {content} 물품 {IntransList.length}개</h6>
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
          {IntransList && IntransList.map((intransList, index) => (
            <tr key={index} style={{paddingTop: "20px", borderBottom : "0.5px solid #eee"}}>
              <td style={{paddingTop: "20px"}}>
                <span style={{fontWeight : "bold"}}><Link to = {`/inTrans/${intransList.id}`}>{intransList.title}</Link></span><br /> {/* 판매 제목 */}
                {intransList.date} <br /> {/* 판매 시간 */}
                판매자: {intransList.member.username} &nbsp; 연락처: {intransList.member.phone}
              </td>
              <td>
                <span style={{color: "blue", fontWeight: "bold"}}>{intransList.price}</span>원
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