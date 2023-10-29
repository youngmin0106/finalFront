import { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";
import './TransPostList.css';
import { Link } from "react-router-dom";

function TransPostList ( {isLoading, setIsLoding} ) {
  const [transList, setTransList] = useState();

  useEffect(() => {
    axiosInstance.get('/transPost')
        .then(respones => {
          setTransList(respones.data);
          setIsLoding(false);
        }).catch(error => {
          console.log(error);
        })
  }, [])

  if(isLoading) {
    return <div>로딩중 .....</div>
  }

  console.log(transList);

  return(
    <div className="TransPostList">
      <h3 className="title">물품리스트</h3>
      <div className="select">
        <div>
          <input type="radio" id="all" name="list"/>
          <label htmlFor="all">전체 목록</label>
          <input type="radio" id="buy" name="list"/>
          <label htmlFor="buy">구매 가능한 목록</label>
          <input type="radio" id="soldOut" name="list"/>
          <label htmlFor="soldOut">판매 완료된 목록</label>
        </div>
        <div>
          <input type="radio" id="new" name="order"/>
          <label htmlFor="new">최신등록순</label>
          <input type="radio" id="high" name="order"/>
          <label htmlFor="high">높은가격순</label>
          <input type="radio" id="low" name="order"/>
          <label htmlFor="low">낮은가격순</label>
          </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>서버</th>
            <th>게임</th>
            <th>제목</th>
            <th>가격</th>
            <th>등록일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>server</td>
            <td>game</td>
            <td>title</td>
            <td>price</td>
            <td>date</td>
          </tr>
          {
            transList.map((trans, i) => {
              return(
                
                <tr key={i}>
                  <td>{trans.server}</td>
                  <td>{trans.game}</td>
                  <td>{trans.title}</td>
                  <td>{trans.price}</td>
                  <td>{trans.createdate}</td>
                </tr>
               
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default TransPostList;