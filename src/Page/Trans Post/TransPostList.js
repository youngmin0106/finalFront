import { useEffect, useState } from "react";
import option from "../../mockData/option";
import server from "../../mockData/server";
import './TransPostList.css';

function TransPostList( {userInfo} ) {

  const [search, setSearch] = useState({
    minPrice: '', // 최소 가격을 저장하는 상태
    maxPrice: '', // 최대 가격을 저장하는 상태
    game: '',
    server: '',
    keyword: ''
  });

  const changeHandler = (e) => {
    setSearch({
      ...search,
      [e.target.name] : e.target.value
    })
  }

  const keywordHandler = (e) => {
    const keywordValue = e.target.value;
    setSearch({
      ...search,
      keyword: keywordValue,
    });
  }
  // 하나의 묶음으로 최대최소가격입력할때
  // const filterPrice = (e) => {
  //   // 가격 입력란에서 입력된 값을 추출
  //   const [minPrice, maxPrice] = e.target.value.split('~').map(value => value.trim());
  //   // 가격 입력을 적절한 형태로 업데이트
  //   setSearch({
  //     ...search,
  //     price: `${minPrice} ~ ${maxPrice}`,
  //   });
  // }

  const filterPrice = (e) => {
    // 가격 입력란에서 입력된 값을 추출
    const [minPrice, maxPrice] = e.target.value.split('~').map(value => value.trim());
    // 가격 입력을 적절한 형태로 업데이트
    setSearch({
      ...search,
      minPrice,
      maxPrice,
    });
  }


  const [selectedGame, setSelectedGame] = useState('ServerSelect');

  const selectGame = (gameId) => {
    setSelectedGame(gameId);
  }
  return(

   <div className="TransPostList">
      <h1>캐릭터 거래</h1>
      <table>
        <tbody>
          <tr>
            <th>검색</th>
            <td>
              <span>제목 + 내용</span>
              <input name="keyword" type="text" placeholder="검색어를 입력해주세요." onChange={keywordHandler} />
              <button>🔍</button>
            </td>     
          </tr>
          <tr>
            <th>가격</th>
            <td>
              <button name="price" onClick={changeHandler} value={'100만원 ↓'}>100만원 이하</button>
              <button name="price"   onClick={changeHandler} value={'100~200만원'}>100~200만원</button>
              <button name="price"  onClick={changeHandler} value={'200만원 ↑'}>200만원 이상</button>
              <div>
                <p>직접입력</p>
                <input type="text" placeholder="0" className="square" value={search.minPrice} onChange={filterPrice} />
                <span>원 ~</span>
                <input type="text" placeholder="0" className="square" value={search.maxPrice} onChange={filterPrice} />
                <span>원</span>
              </div>
            </td>
          </tr>
          <tr>
            <th>게임명</th>
            <td name="game"> 
              {
                option.map((data, i) => {
                  return(
                    <button className={`button ${selectedGame === data.id ? 'click' : 'noClick'}`} name="game" key={i} 
                    onClick={() => {
                      selectGame(data.id);
                    }}
                     value={data.id}> 
                      {data.gameName}
                    </button>
                  )
                })
              }
            </td>
          </tr>
          <tr>
            <th>서버</th>
            <td name="server">
            {
                selectedGame && server[selectedGame].map((data, i) => {
                  return(
                    <button className={`button ${selectedGame === data.id ? 'click' : 'noClick'}`} value={data} key={i} onClick={changeHandler}>
                      {data}
                    </button>
                  )
                })
              }
            </td>
          </tr>
        </tbody>
      </table>
   </div>
  )
}

export default TransPostList;