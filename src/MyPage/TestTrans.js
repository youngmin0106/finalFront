import { Button } from "react-bootstrap";
import axiosInstance from "../axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import './Css/TestTrans.css';
import { useEffect } from "react";
import { useState } from "react";
import MyPageBar from "./MyPageBar";

function TestTrans( {userInfo, setUserInfo, trans, setTrans, startTransInfo, setStartTransInfo, transDetail, IntransList, setIntransList } ) {

  const [transInfo, setTransInfo] = useState({

  })

  const [intransInfo, setIntransInfo] = useState({

  })

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.get(`/intransInfo/${id}`)
    .then((response) => {
      console.log(response.data);
      setTransInfo(response.data.trans);
      setIntransInfo(response.data.intrans);
      setTrans({...trans, trans : "DONE"}); // 거래완료되서 trans정보도 갱신
    }).catch((error) => {
      console.log(error);
    })
    
  }, [])


  const turnOverBtn = () => {
    let transId = {id}
    console.log({id});
    axiosInstance.post('/sellTrans', intransInfo)
      .then(response => {
        alert(response.data);
        console.log(response.data);
  
        setIntransInfo((intransInfo) => ({
          ...intransInfo,
          sellerChk : true
        }));
        
      }).catch(error => {
        console.log(error);
      });
  }

  // 인수
  const takeOverBtn = () => {
    let transId = {id}
    axiosInstance.post('/buyTrans', {id : id, trans : transInfo, intrans : intransInfo})
      .then(response => {
        alert(response.data);
        alert('거래가 완료되었습니다');
        navigate('/mypage')
        setUserInfo({...userInfo, mileage : userInfo.mileage - transInfo.price})
      }).catch(error => {
        console.log(error);
      });
  }

  const returnHandler = () => {
    navigate(-1);
  }

  const testButton = () => {
    if (userInfo.username === intransInfo.buyerId && intransInfo.sellerChk && intransInfo.trans === "ING") {
      return <Button onClick={takeOverBtn} className="takeOver">인수</Button>
    } else if (userInfo.username === intransInfo.sellerId && !intransInfo.sellerChk) {
      return <Button onClick={turnOverBtn} className="turnOver">인계</Button>
    } else {
      return null;
    }
  }

  return (
    <div className="TestTrans" style={{marginTop : "5%"}}>

      <div className="transWrapper">

      <table style={{textAlign : "center", border : "0.5px solid #eee", width : "800px"}}>
        <thead>
          <tr>
            <th className="testTh">물품제목</th>
            <td className="testTd" colSpan={3}>{transInfo.title}</td>
            <td></td>
          </tr>

          <tr>
            <th className="testTh">게임</th>
            <td className="testTd">{transInfo.game}</td>
            <th className="testTh" style={{borderLeft : "1px solid #eee"}}>서버</th>
            <td className="testTd">{transInfo.server}</td>
          </tr>

          <tr>
            <th className="testTh">거래번호</th>
            <td className="testTd">{transInfo.id}</td>
            <th className="testTh" style={{borderLeft : "1px solid #eee"}}>가격</th>
            <td className="testTd">{transInfo.price}</td>
          </tr>

          <tr>
            <th className="testTh">판매자명</th>
            <td className="testTd" colSpan={3}>{intransInfo.sellerId}</td>
            <td></td>
          </tr>

          <tr>
            <th className="testTh">연락처</th>
            <td className="testTd" colSpan={3}>{transInfo.phone}</td>
            <td></td>
          </tr>
          
        </thead>
        <tbody>
      

        </tbody>
      </table>
          <br></br>
          <div>
          <Button className="returnHandler" onClick={returnHandler}>뒤로가기</Button>&nbsp;
          {testButton()}
          </div>
      </div>
    </div>
  );
}

export default TestTrans;