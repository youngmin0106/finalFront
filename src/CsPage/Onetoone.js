import { Link } from "react-router-dom";
import PaginationRounded from "../component/PaginationRounded";

function Onetoone(){
  return(
    <div className="notice">

    <div>
    <ul className='ulList'>
        <h2 style={{ fontSize : "25px"}}>- 1:1문의</h2>
      <li><a href="/onetoone">1:1문의</a></li>
      <li><a href="/cs">공지사항</a></li>
      <li><a href="/questions">자주묻는질문</a></li>
    </ul>
    </div>
        <section className="noti">
      <div className="page-title">
            <div className="container">
                <h3>1:1문의</h3>
            </div>
        </div>
        <div id="board-search">
            <div className="container">
                <div className="search-window">
                    <form action="">
                        <div className="search-wrap">
                            <div id="search" className="blind">1:1문의 검색</div>
                            <input id="search" type="search" name="" placeholder="검색어를 입력해주세요." />
                            <button type="submit" className="btn btn-dark">검색</button>
                        </div>
                        <div>
                          <Link to="/write"><button className="btn btn-dark add">글작성</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div id="board-list">
            <div className="container">
                <table className="board-table">
                    <thead>
                    <tr>
                        <th scope="col" className="th-num">번호</th>
                        <th scope="col" className="th-title">제목</th>
                        <th scope="col" className="th-date">등록일</th>
                        <th scope="col" className="th-cnt">조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>3</td>
                        <th>
                          <a href="#!">1:1문의글 입니다.</a>
                          <p>테스트</p>
                        </th>
                        <td>2017.07.13</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <th><a href="#!">1:1문의글 입니다.</a></th>
                        <td>2017.06.15</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <th><a href="#!">1:1문의글 입니다.</a></th>
                        <td>2017.06.15</td>
                        <td>0</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    
    </section>
    <PaginationRounded/>
    </div>
  );
}

export default Onetoone;