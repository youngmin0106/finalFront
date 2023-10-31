import { useState } from "react";
import TransPostList from "../../component/transPost/TransPostList";
import server from "../../mockData/server";
import option from "../../mockData/option";
import './TransPost.css';

function TransPost({ isLoading, setIsLoading }) {


  // 게임 서버 버튼 클릭, 검색어 또는 가격 직접입력 후
  // 검색 버튼을 누르면 실행할 함수, state를 만들고 props로 보내줘야함

  // 검색어를 어떻게 해야할지랑 직접입력 가격은 min max로 나눠서 이상이하 조건을 걸어 state에 담기?
  // 검색어는 특정 단어를 적었을시 그 단어에 해당되는 게시물을 찾아 보여줘야함
  // TransPostList => page 구현 해야함

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


  const priceFilter = (postPrice, selectedPrice) => {
    switch (selectedPrice) {
      case '100만원이하':
        return postPrice <= 1000000;
      case '100~200만원':
        return postPrice >= 1000000 && postPrice <= 2000000;
      case '200~500만원':
        return postPrice >= 2000000 && postPrice <= 5000000;
      case '500만원이상':
        return postPrice >= 5000000;
      // case '직접입력' : 
      //   return postPrice >= search.minPrice && postPrice <= search.maxPrice;
      default:
        return true; // 가격 필터가 선택되지 않은 경우 모든 게시물 표시
    }
  }

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

    document.querySelectorAll('button[name="price"]').forEach((button) => {
      if (button.value !== '직접입력') {
        button.classList.add('noClick');
      }
    });
    e.target.classList.remove('noClick');
    e.target.classList.add('click');
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

  // 취소 버튼 모든것을 초기화하는 함수
  const cancelHandler = () => {
    // 검색어 초기화
    const keywordInput = document.querySelector('input[name="keyword"]');
    if (keywordInput) {
      keywordInput.value = '';
    }
  
    // 가격 초기화
    document.querySelectorAll('button[name="price"]').forEach((button) => {
      button.classList.add('noClick');
      button.classList.remove('click');
    });
  
    // 직접입력 input 초기화
    const minPriceInput = document.querySelector('input[name="minPrice"]');
    const maxPriceInput = document.querySelector('input[name="maxPrice"]');
    if (minPriceInput && maxPriceInput) {
      minPriceInput.value = '';
      maxPriceInput.value = '';
    }
    setIsCheck(false);
  
    // 게임명 초기화
    setSelectedGame('ServerSelect');
  
    // 서버 + 나머지 value 값 초기화
    setSearch({
      keyword: '',
      price: '',
      game: '',
      server: ''
    });
  }

  const handleSearch = () => {
    // 검색 버튼 클릭 시 실행되는 함수
    // 여기에서 필요한 검색 조건을 설정하고 TransPostList에 전달

    // 예시: 검색 조건을 설정하고 isLoading을 true로 설정
    setIsLoading(true);

    // TransPostList로 검색 조건 전달
    // TransPostList는 이 조건을 사용하여 데이터를 필터링할 것입니다.
    // setSearch 함수를 사용하여 search 상태 업데이트
    setSearch({
      keyword: '검색어 값',
      price: '가격 범위',
      game: '게임명',
      server: '서버'
    });
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
                {/* <input
        type="text"
        placeholder="검색어를 입력해주세요."
        value={search.keyword}
        onChange={(e) => setSearch({ ...search, keyword: e.target.value })}
      /> */}
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
                    isCheck && (<><input type="text" placeholder="0" className="square" name="minPrice" />
                      <span>원 ~</span>
                      <input type="text" placeholder="0" className="square" name="maxPrice" />
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
        <div className="btn">
          <button type="reset" className="noClick" onClick={cancelHandler}>검색 초기화</button>
          <button className="click" onClick={handleSearch}>검색</button>
        </div>
      </div>
      <TransPostList isLoading={isLoading} setIsLoading={setIsLoading} search={search} priceFilter={priceFilter} />
    </>
  )

}

export default TransPost;