import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";
import { Link } from "react-router-dom";

function Notice( { userInfo } ) {

  const [noticeList,setNoticeList] = useState();
  const [isnoticeLoding,setissetNoticeLoding] = useState(true);

 
  useEffect(() => {
    axiosInstance.get('/notice')
      .then(response => {
   
        setNoticeList(response.data);
        setissetNoticeLoding(false);
      }).catch(error => {
        console.log(error);
      })
  }, [])
  if (isnoticeLoding)
    return <div>

    </div>
  return (
    <div>
      ㅇㅇㅇ
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
        {
            noticeList.map((notice, i) => {
              return (
                <tr key={i}>
                  <td>{notice.id}</td>
                  <td>
                    <Link to={`/notice/${notice.id}`}>
                      {notice.title}
                    </Link>
                  </td>
                  <td></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default Notice;