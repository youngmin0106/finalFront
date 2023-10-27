import { useState } from "react";
import option from "../../mockData/option";
import server from "../../mockData/server";
import './TransSearch.css';

function TransSearch() {

  const [selectedGame, setSelectedGame] = useState('ServerSelect');

  const [search, setSearch] = useState({
    keyword: '',
    price:'',
    game: '',
    server: '',
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

  const selectGame = (gameId) => {
    setSelectedGame(gameId);
    setSearch({
      ...search,
      game: gameId
  });
  }

    // 가격 버튼 스타일 클래스 추가/제거 함수
    const togglePriceButton = (e) => {
      // 선택된 가격 버튼의 값을 가져옴
      const selectedPrice = e.target.value;
      
      // 모든 가격 버튼에 'noClick' 클래스 추가
      document.querySelectorAll('.btn button[name="price"]').forEach((button) => {
        button.classList.add('noClick');
        button.classList.remove('click');
      });
      
      // 선택된 가격 버튼에 'click' 클래스 추가
      e.target.classList.remove('noClick');
      e.target.classList.add('click');
      
      // 가격 입력란의 값을 업데이트
      setSearch({
        ...search,
        price: selectedPrice
      });
    }

  return(

   <div className="TransSearch">
    
      <table>
      
        <tbody>
          <tr>
            <th>검색</th>
            <td>
              <span>제목 + 내용</span>
              <div className="keywordSearch">
                <input name="keyword" type="text" placeholder="검색어를 입력해주세요." onChange={keywordHandler}/>
                <button>🔍</button>
              </div>
            </td>     
          </tr>
          <tr>
            <th>가격</th>
            <td>
            <div className="btn">
              <button name="price" onClick={togglePriceButton} value={'100만원이하'} className="noClick">100만원 이하</button>
              <button name="price" onClick={togglePriceButton} value={'100~200만원'} className="noClick">100 ~ 200만원</button>
              <button name="price" onClick={togglePriceButton} value={'200~500만원'} className="noClick">200 ~ 500만원</button>
              <button name="price" onClick={togglePriceButton} value={'500만원이상'} className="noClick">500만원 이상</button>
              </div>
              <div>
                <p>직접입력</p>
                <input type="text" placeholder="0" className="square"/>
                <span>원 ~</span>
                <input type="text" placeholder="0" className="square"/>
                <span>원</span>
              </div>
            </td>
          </tr>
          <tr>
            <th>게임명</th>
            <td> 
            <div className="btn">
              {
                option.map((data, i) => {
                  return(
                    <button className={` ${selectedGame === data.id ? 'click' : 'noClick'}`}
                            name="game" 
                            key={i} 
                            value={data.id}
                            onClick={() => {
                              selectGame(data.id);
                            }}> 
                      {data.gameName}
                    </button>
                  )
                })
              }
              </div>
            </td>
          </tr>
          <tr>
            <th>서버</th>
            <td>
              <div className="btn">
            {
                selectedGame && server[selectedGame].map((data, i) => {
                  return(
                    <button className={` ${ data === search.server ? 'click' : 'noClick'}`}
                            value={data}
                            key={i}
                            name="server"
                            onClick={changeHandler}>
                      {data}
                    </button>
                  )
                })
              }
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="btn">
        <button type="reset" className="noClick">취소</button>
        <button type="submit" className="click">검색</button>
      </div>
      
   </div>
  )
}

export default TransSearch;