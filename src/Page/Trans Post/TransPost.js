import { useState } from "react";
import TransPostList from "../../component/transPost/TransPostList";
import server from "../../mockData/server";
import option from "../../mockData/option";
import './TransPost.css';

function TransPost({ isLoading, setIsLoading }) {
  const [search, setSearch] = useState({
    keyword: '',
    price: '',
    game: '',
    server: '',
    minPrice: '',
    maxPrice: '',
  });
  const [selectedGame, setSelectedGame] = useState('ServerSelect');
  const [isCheck, setIsCheck] = useState(false);

  const changeHandler = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  const selectGame = (gameId) => {
    setSelectedGame(gameId);
    setSearch({
      ...search,
      game: gameId
    });
  }

  const clickHandler = (e) => {
    setIsCheck(!isCheck);
    const selectedPrice = e.target.value;
    document.querySelectorAll('button[name="price"]').forEach((button) => {
      if (button.value !== '직접입력') {
        button.classList.add('noClick');
      }
    });
    e.target.classList.remove('noClick');
    e.target.classList.add('click');
        // 가격 입력란의 값을 업데이트
        setSearch({
          ...search,
          price: selectedPrice
        });
  }

  // 가격 버튼 스타일 클래스 추가/제거 함수
  const togglePriceButton = (e) => {
    // 선택된 가격 버튼의 값을 가져옴
    const selectedPrice = e.target.value;
    // 모든 가격 버튼에 'noClick'
    document.querySelectorAll('button[name="price"]').forEach((button) => {
      button.classList.add('noClick');
      button.classList.remove('click');
      if (button.value !== '직접입력') {
        button.classList.add('noClick');
      }
    });
    // 선택된 가격 버튼에 'click'
    e.target.classList.remove('noClick');
    e.target.classList.add('click');
    // 가격 입력란의 값을 업데이트
    setSearch({
      ...search,
      price: selectedPrice
    });
    // 직접 입력 버튼이 아닌 경우 isCheck를 false로 설정
    if (selectedPrice !== '직접입력') {
      setIsCheck(false);
    }
  }

  return (
    <>
      <div className="TransPost">
        <h1 className="title">캐릭터 거래</h1>
        <table>
          <tbody>
            <tr>
              <th>검색</th>
              <td className="keywordSearch">
                <p>제목</p>
                <input name="keyword" type="text" placeholder="검색어를 입력해주세요." onChange={changeHandler} />
              </td>
            </tr>
            <tr>
              <th>가격</th>
              <td>
                <div>
                  <button name="price" onClick={togglePriceButton} value={'100만원이하'} className="noClick">100만원 이하</button>
                  <button name="price" onClick={togglePriceButton} value={'100~200만원'} className="noClick">100 ~ 200만원</button>
                  <button name="price" onClick={togglePriceButton} value={'200~500만원'} className="noClick">200 ~ 500만원</button>
                  <button name="price" onClick={togglePriceButton} value={'500만원이상'} className="noClick">500만원 이상</button>
                  <button name="price" onClick={clickHandler} value={'직접입력'} className="noClick" >직접입력</button>
                  {
                    isCheck && (<><input type="text" placeholder="0" className="square" name="minPrice" onChange={changeHandler} />
                      <span>원 ~</span>
                      <input type="text" placeholder="0" className="square" name="maxPrice" onChange={changeHandler} />
                      <span>원</span></>)
                  }

                </div>
              </td>
            </tr>
            <tr>
              <th>게임명</th>
              <td>

                {
                  option.map((data, i) => {
                    return (
                      <button className={` ${selectedGame === data.id ? 'click' : 'noClick'}`}
                        name="game"
                        key={i}
                        value={data.id}
                        onClick={() => {
                          selectGame(data.id);
                          setSearch({
                            ...search,
                            server: '',
                            game: data.id
                          });

                        }}>
                        {data.gameName}
                      </button>
                    )
                  })
                }

              </td>
            </tr>
            <tr>
              <th>서버</th>
              <td>
                {
                  selectedGame && server[selectedGame].map((data, i) => {
                    return (
                      <button className={` ${data === search.server ? 'click' : 'noClick'}`}
                        value={data}
                        key={i}
                        name="server"
                        onClick={changeHandler}>
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
      <TransPostList isLoading={isLoading} setIsLoading={setIsLoading} search={search} setIsCheck={setIsCheck} setSelectedGame={setSelectedGame} setSearch={setSearch} />
    </>
  )

}

export default TransPost;