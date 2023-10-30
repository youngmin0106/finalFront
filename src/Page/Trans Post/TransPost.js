import { useState } from "react";
import TransPostList from "../../component/transPost/TransPostList";
import TransSearch from "../../component/transPost/TransSearch";

function TransPost ({ isLoading, setIsLoading }) {


  // 게임 서버 버튼 클릭, 검색어 또는 가격 직접입력 후
  // 검색 버튼을 누르면 실행할 함수, state를 만들고 props로 보내줘야함

  // 검색어를 어떻게 해야할지랑 직접입력 가격은 min max로 나눠서 이상이하 조건을 걸어 state에 담기?
  // 검색어는 특정 단어를 적었을시 그 단어에 해당되는 게시물을 찾아 보여줘야함
  // TransPostList => page 구현 해야함
  
  const [search, setSearch] = useState({
    keyword: '',
    price:'',
    game: '',
    server: ''
  });

  const handleSearch = (criteria) => {
    setSearch(criteria);
  };

  
  return(
    <div className="TransPost">
      <div>
        <TransSearch search={search} setSearch={setSearch} handleSearch={handleSearch}/>
      </div>
      <div>
        <TransPostList isLoading={isLoading} setIsLoading={setIsLoading} search={search}/>
      </div>

    </div>
  )
}

export default TransPost;