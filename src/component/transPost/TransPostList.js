import { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";
import './TransPostList.css';

function TransPostList ( {isLoading, setIsLoading, search, priceFilter} ) {
  const [transList, setTransList] = useState([]);
  const [aa, setAa] = useState([]);

  // useEffect(() => {
  //   const list = transList.filter(trans => trans.price <= 1000000);

  //   setAa(list)

  // }, [transList])
  //console.log(aa)



  const filteredTransList = transList.filter((trans) => {
    const isMatch =
      trans.title.includes(search.keyword) &&
      (!search.game || trans.game === search.game) &&
      (!search.server || trans.server === search.server) &&
      (!search.price || priceFilter(trans.price, search.price));

    return isMatch;
  });


  console.log(filteredTransList);

  useEffect(() => {
    axiosInstance.get("/transPost")
      .then((response) => {
        setTransList(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search, setIsLoading]);

//console.log(transList);

  if (isLoading) {
    return <div>로딩중 ...</div>;
  }
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
          {
            transList.map((trans, i) => {
              return(
                
                <tr key={i}>
                  <td>{trans.server}</td>
                  <td>{trans.game}</td>
                  <td>{trans.title}</td>
                  <td>{trans.price.toLocaleString('ko-KR')}원</td>
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