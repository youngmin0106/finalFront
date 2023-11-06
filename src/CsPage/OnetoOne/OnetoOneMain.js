import { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";
import { TfiCheck } from "react-icons/tfi";
import { Link } from "react-router-dom";
import "../CsCss/OneMain.css";

function OnetoOneMain(){
  const [oneMiniList, setOneMiniList] = useState([]);
  const [isOneLoading, setIsOneLoading] = useState(true);
  const [oneList, setOneList] = useState([]);

  const loadOneeList = () => {
    axiosInstance
      .get("/onetoone")
      .then((response) => {
        setOneList(response.data);
        const truncatedList = response.data.slice(0, 5).map((onetoone) => {
          if (onetoone.title.length > 27) {
            onetoone.title = onetoone.title.slice(0, 27) + " ..."; // 제목 길이 제한
          }
          return onetoone;
        });
        setOneMiniList(truncatedList.slice(0, 5)); // 처음 5개 항목만 miniList에 설정
        setIsOneLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsOneLoading(false);
      });
  };
  

  useEffect(() => {
    loadOneeList(); // 페이지가 로드될 때 공지사항 데이터를 가져옵니다.
  }, []);
  return(
    <div className="onemain">

    <table className="table-fill onetoonetab">
        <thead>
          <tr>
            <th className="text-left"><TfiCheck className="TfiCheck" /><Link to={"/onetoone"} style={{ color: "black" }}>1:1문의</Link><Link to={"/onetoone"} style={{ color: "black" }} className="plus">+</Link></th>
          </tr>
        </thead>
        {
          oneMiniList.map((onetoone, i) => {
            return (
              <tbody className="table-hover" key={i}>
                <tr>
                <td className="text-left">
                  <Link to={`/onetoone/${onetoone.no}`} className="linktitle">
                    {onetoone.title}
                  </Link>
                </td>
                </tr>
              </tbody>
          );
        })
      }
      </table>
      </div>
  );
}

export default OnetoOneMain;