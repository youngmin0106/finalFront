import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";
import "../CsPage/CsCss/Notice.css";
import { Link } from "react-router-dom/dist";
import CsMain from "./CsMain";

function Notice() {

  
  // const [noticeList,setNoticeList] = useState();
  // const [isnoticeLoding,setissetNoticeLoding] = useState(true);
  
  
  // useEffect(() => {
  //   axiosInstance.get('/notice')
  //   .then(response => {
      
  //     setNoticeList(response.data);
  //     setissetNoticeLoding(false);
  //   }).catch(error => {
  //     console.log(error);
  //   })
  // }, [])
  return (
      <div className="notice">

<div>
<ul className='ulList'>
    <h2 style={{ fontSize : "25px"}}>- 공지사항</h2>
  <li><a href="/cs">공지사항</a></li>
  <li><a href="2">자주묻는질문</a></li>
  <li><a href="3">1:1문의</a></li>
</ul>
</div>
    <section className="noti">
  <div className="page-title">
        <div className="container">
            <h3>공지사항</h3>
        </div>
    </div>
    <div id="board-search">
        <div className="container">
            <div className="search-window">
                <form action="">
                    <div className="search-wrap">
                        <div id="search" className="blind">공지사항 내용 검색</div>
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
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>3</td>
                    <th>
                      <a href="#!">[공지사항] 개인정보 처리방침 변경안내처리방침</a>
                      <p>테스트</p>
                    </th>
                    <td>2017.07.13</td>
                </tr>
                <tr>
                    <td>2</td>
                    <th><a href="#!">공지사항 안내입니다. 이용해주셔서 감사합니다</a></th>
                    <td>2017.06.15</td>
                </tr>
                <tr>
                    <td>1</td>
                    <th><a href="#!">공지사항 안내입니다. 이용해주셔서 감사합니다</a></th>
                    <td>2017.06.15</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

</section>
</div>
  );
}
export default Notice;