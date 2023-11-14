
import { Link } from "react-router-dom";
import "../CSS/NoticeMain.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  TfiAnnouncement } from "react-icons/tfi";
import { useEffect, useState } from "react";
import axiosInstance from "../../../axiosInstance";

function CsMain({cs,setCs}) {
  const [miniList, setMiniList] = useState([]);
  const [isNoticeLoading, setIsNoticeLoading] = useState(true);
  const [noticeList, setNoticeList] = useState([]);

  const loadNoticeList = () => {
    axiosInstance.get("/notice")
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
      <table className="table-fill cstab">
        <thead>
          <tr>
            <th className="text-left"><TfiAnnouncement className="TfiAnnouncement" /><Link to={"/cs"} style={{ color: "black" }}>공지사항</Link><Link to={"/cs"} style={{ color: "black" }} className="plus">+</Link></th>
          </tr>
        </thead>
        {miniList.map((notice, i) => {
          return (
            <tbody className="table-hover" key={i}>
              <tr >
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
    </div>
  );
}

export default CsMain;
