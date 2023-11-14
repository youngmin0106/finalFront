import { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";
import './TransPostList.css';
import { Link, useLocation } from "react-router-dom";
import PaginationComponent from "../pagination/PaginationComponent";


function TransPostList({ isLoading, setIsLoading, search, setSearch, setIsCheck, setSelectedGame }) {
  const [transList, setTransList] = useState([]); // 기존 데이터
  const [searchList, setSearchList] = useState([]); // 필터링 데이터
  const [showList, setShowList] = useState([]); // 필터링 된 데이터 초기값 담아두기 (구매 가능한 목록, 판매 완료된 목록 띄울때 필요)
  const [currentPage, setCurrentPage] = useState(1); // 처음 현재페이지
  const itemsPerPage = 10; // 게시물 10개씩 

  const location = useLocation();
  const selectedGame = location.state ? location.state.game : ''; // 

  const tdStyle = {
    position : 'relative'
  };

  const divStyle = {
    position : 'absolute',
    top : '0%',
    left : '0%',
    width : '100%',
    height : '100%',
    textAlign : 'center',
    backgroundColor : '#519D9E',
    opacity : '0.5',
    color : 'white',
    fontSize : '25px'
  };

  useEffect(() => {
    axiosInstance.get("/transPost")
      .then((response) => {
        setTransList(response.data);
        setShowList(response.data);
        setSearchList(response.data);
        const truncatedList = response.data.slice(0, 5).map((showList) => {
          if (showList.title.length > 27) {
            showList.title = showList.title.slice(0, 27) + " ..."; // 제목 길이 제한
          }
          return showList;
        });
        setShowList(truncatedList)
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // 선택한 게임에 따라 데이터를 필터링
  useEffect(() => {
    if (selectedGame) {
      const filteredList = transList.filter((trans) => trans.game === selectedGame);
      setShowList(filteredList);
    } else {
      setShowList(transList);
    }
  }, [selectedGame, transList]);

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
      case '직접입력':
        return postPrice >= search.minPrice && postPrice <= search.maxPrice;
      default:
        return true; // 가격 필터가 선택되지 않은 경우 모든 게시물 표시
    }
  }

  // 검색결과 필터 핸들러
  const handlefilter = (searchTrem) => {
    if (searchTrem) {
      const filteredList = transList.filter((trans) => {
        return (
          trans.title.includes(search.keyword) &&
          (!search.game || trans.game === search.game) &&
          (!search.server || trans.server === search.server) &&
          (!search.price || priceFilter(trans.price, search.price))
        );
      });
      setSearchList(filteredList);
      setShowList(filteredList);
    } else {
      setSearchList(transList);
      setShowList(transList);
    }
    document.querySelector('#all').checked = true;
  }

  const transTypeFilter = (e) => {

    console.log(searchList);

    if (e.target.id === 'buy') {
      setShowList(searchList.filter((trans => trans.trans === "READY")));
    } else if (e.target.id === 'soldOut') {
      setShowList(searchList.filter((trans => trans.trans === "DONE")));
    } else {
      setShowList(searchList);
    }

  }

  const handleSort = (sortType) => {
    let sortedList = [...showList];

    switch (sortType) {
      case 'new':
        sortedList.sort((a, b) => new Date(b.createdate) - new Date(a.createdate));
        break;
      case 'high':
        sortedList.sort((a, b) => b.price - a.price);
        break;
      case 'low':
        sortedList.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }

    setShowList(sortedList);
  };





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
    setShowList(transList);
    setSearchList(transList);
  }

  console.log(searchList)

  if (isLoading) {
    return <div>로딩중 ...</div>;
  }
  return (

    <div className="TransPostList">
      <div className="postListBtn">
        <button type="reset" className="noClick" onClick={cancelHandler}>검색 초기화</button>
        <button className="click" onClick={handlefilter}>검색</button>
      </div>
      <h3 className="title">물품리스트</h3>
      <div className="select">
        <div>
          <input type="radio" id="all" name="list" onClick={transTypeFilter} />
          <label htmlFor="all">전체 목록</label>
          <input type="radio" id="buy" name="list" onClick={transTypeFilter} />
          <label htmlFor="buy">구매 가능한 목록</label>
          <input type="radio" id="soldOut" name="list" onClick={transTypeFilter} />
          <label htmlFor="soldOut">판매 완료된 목록</label>
        </div>
        <div>
          <input type="radio" id="new" name="order" onClick={() => handleSort('new')} />
          <label htmlFor="new">최신등록순</label>
          <input type="radio" id="high" name="order" onClick={() => handleSort('high')} />
          <label htmlFor="high">높은가격순</label>
          <input type="radio" id="low" name="order" onClick={() => handleSort('low')} />
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
          {showList
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((trans, i) => (
              <tr key={`row-${i}`}>
                <td style={tdStyle}>
                {trans.trans === "DONE" && (
                  <div style={divStyle}>
                    </div>
                )}
                  {trans.server}
                  </td>

                <td style={tdStyle}>
                {trans.trans === "DONE" && (
                  <div style={divStyle}>
                  </div>
                )}
                {trans.game}</td>

                <td style={{ position: "relative", textAlign : "center", lineHeight : "2" }}>
                  {trans.trans === "DONE" && (
                    <div style={divStyle}>
                      판매완료
                    </div>
                  )}
                  <Link to={`/transDetail/${trans.id}`} className="titleDetail">
                    {trans.title}
                  </Link>
                </td>

                <td style={tdStyle}>
                  {trans.trans === "DONE" && (
                    <div style={divStyle}>
                    </div>
                  )}
                  {`${trans.price.toLocaleString('ko-KR')}원`}
                  </td>

                <td style={tdStyle}>
                  {trans.trans === "DONE" && (
                    <div style={divStyle}></div>
                  )}
                  {trans.createdate}
                  </td>
              </tr>
            ))}


        </tbody>
      </table>
      <PaginationComponent
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={searchList.length}
        onPageChange={(page) => setCurrentPage(page)}
      />

    </div>
  )
}



export default TransPostList;