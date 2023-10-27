
import { Link } from "react-router-dom";
import "../CsPage/CsCss/CsMain.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TfiCheck, TfiAnnouncement, TfiComment } from "react-icons/tfi";
import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";
function CsMain() {
  const [miniList, setMiniList] = useState([]);
  const [isNoticeLoading, setIsNoticeLoading] = useState(true);
  const [noticeList, setNoticeList] = useState([]);

  const loadNoticeList = () => {
    axiosInstance
      .get("/notice")
      .then((response) => {
        setNoticeList(response.data);
        const truncatedList = response.data.slice(0, 5).map((notice) => {
          if (notice.title.length > 27) {
            notice.title = notice.title.slice(0, 27) + " ..."; // 제목 길이 제한
          }
          return notice;
        });
        setMiniList(truncatedList.slice(0, 5)); // 처음 5개 항목만 miniList에 설정
        setIsNoticeLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsNoticeLoading(false);
      });
  };

  useEffect(() => {
    loadNoticeList(); // 페이지가 로드될 때 공지사항 데이터를 가져옵니다.
  }, []);
  return (
    <div className="csmain">


      <h2 style={{ marginLeft: "10%", marginBottom: "1%", fontSize: "25px", marginTop: "10%" }}>- 고객센터</h2>
      <ul className='ulListcs'>
        <li><a href="/cs">공지사항</a></li>
        <li><a href="/questions">자주묻는질문</a></li>
        <li><a href="/onetoone">1:1문의</a></li>
      </ul>
      <table className="table-fill cstab">
        <thead>
          <tr>
            <th className="text-left"><TfiAnnouncement className="TfiAnnouncement" /><Link to={"/cs"} style={{ color: "black" }}>공지사항</Link><Link to={"/cs"} style={{ color: "black" }} className="plus">+</Link></th>
          </tr>
        </thead>
        {miniList.map((notice, i) => {
          return (
            <tbody className="table-hover" key={i}>
              <tr>
                {/* 공지사항 제목을 클릭하면 상세 페이지로 이동하도록 수정 */}
                <td className="text-left">
                  <Link to={`/notice/${notice.no}`} className="linktitle">
                    {notice.title}
                  </Link>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <table className="table-fill questiontab">
        <thead>
          <tr>
            <th className="text-left"><TfiComment className="TfiComment" /><Link to={"/questions"} style={{ color: "black" }}>자주묻는질문</Link><Link to={"/cs"} style={{ color: "black" }} className="plus">+</Link></th>
          </tr>
        </thead>
        {/* {
        miniList.map((notice, i) => {
          return (
              <tbody className="table-hover" key={i}>
                <tr>
                  <td className="text-left">{notice.title}</td>
                </tr>
              </tbody>
          );
        })
      } */}
      </table>
      <table className="table-fill onetoonetab">
        <thead>
          <tr>
            <th className="text-left"><TfiCheck className="TfiCheck" /><Link to={"/onetoone"} style={{ color: "black" }}>1:1문의</Link><Link to={"/cs"} style={{ color: "black" }} className="plus">+</Link></th>
          </tr>
        </thead>
        {/* {
        miniList.map((notice, i) => {
          return (
              <tbody className="table-hover" key={i}>
                <tr>
                  <td className="text-left">{notice.title}</td>
                </tr>
              </tbody>
          );
        })
      } */}
      </table>
    </div>



  );
}

export default CsMain;
