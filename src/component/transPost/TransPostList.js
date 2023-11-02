import { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";
import './TransPostList.css';
import PaginationRounded from "../Pagination/PaginationRounded";
import { Link } from "react-router-dom";

function TransPostList({ isLoading, setIsLoading, search, setSearch, setIsCheck, setSelectedGame }) {
  const [transList, setTransList] = useState([]); // 기존 데이터
  const [searchList, setSearchList] = useState([]); // 필터링 데이터
  // const [searchTrem, setSearchTrem] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // 처음 현재페이지
  const itemsPerPage = 10; // 게시물 10개씩 


  useEffect(() => {
    axiosInstance.get("/transPost")
      .then((response) => {
        setTransList(response.data);
        setSearchList(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
    } else {
      setSearchList(transList);
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
    setSearchList(transList);
  }


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
          <input type="radio" id="all" name="list" />
          <label htmlFor="all">전체 목록</label>
          <input type="radio" id="buy" name="list" />
          <label htmlFor="buy">구매 가능한 목록</label>
          <input type="radio" id="soldOut" name="list" />
          <label htmlFor="soldOut">판매 완료된 목록</label>
        </div>
        <div>
          <input type="radio" id="new" name="order" />
          <label htmlFor="new">최신등록순</label>
          <input type="radio" id="high" name="order" />
          <label htmlFor="high">높은가격순</label>
          <input type="radio" id="low" name="order" />
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
            searchList
              .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
              .map((trans, i) => {
                return (
                  <tr key={i}>
                    <td>{trans.server}</td>
                    <td>{trans.game}</td>
                    <td>
                      <Link to={`/transDetail/${trans.id}`} className="titleDetail">
                        {trans.title}
                      </Link>
                    </td>
                    <td>{trans.price.toLocaleString('ko-KR')}원</td>
                    <td>{trans.createdate}</td>
                  </tr>

                )
              })
          }

        </tbody>
      </table>
      <PaginationRounded
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={searchList.length}
        onPageChange={(page) => setCurrentPage(page)}
      />

    </div>
  )
}



export default TransPostList;