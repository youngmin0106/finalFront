import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import announcement from "../../mockData/announcement";

function NoticeDetail({ userInfo, setAuth, cs }) {

  const { no } = useParams();
  const [noticeDetail, setNoticeDetail] = useState([]);
  const [loding, setLoding] = useState(true);
  const navigate = useNavigate();

  const csupdatebtn = () => {
    navigate(`/notice/${no}/update`);
  }

  const backbtn = () => {
    navigate('/cs');
  }

  useEffect(() => {
    if (no.startsWith('공지')) {
      // '공지'인 경우, 파싱된 번호를 찾아서 설정
      const noticeNo = parseInt(no.replace('공지', ''), 10);
      const mockData = announcement.find(item => item.no === `공지${noticeNo}`);

      if (mockData) {
        setNoticeDetail(mockData);
        setLoding(false);
      } else {
        // 묵 데이터가 없다면 404 페이지로 이동 또는 다른 처리 수행
        setLoding(false);
      }
    } else {
      // '공지'가 아닌 경우, 실제 데이터를 서버에서 가져오기
      axiosInstance.get(`/notice/${no}`)
        .then(response => {
          setNoticeDetail(response.data);
          setLoding(false);
        })
        .catch(error => {
          console.log(error);
          setLoding(false);
        });
    }
  }, [no]);


  return (
    <div className="write">
      <div className="title-input">
        <span className="titlespan">제목</span>
        <input className="writetitle" type="text" name="title" value={noticeDetail.title} disabled />
      </div>
      <br />

      <div>
        <span className="contentspan" >내용</span>
        <textarea className="contentarea"
          disabled
          value={noticeDetail.content}
          name="contents"
          cols="74"
          rows="15"
        ></textarea>
      </div>
      <br />
      <div className="clickbtn">
        {
          cs && cs.member && cs.member.username == noticeDetail.member.username ?
            <Button variant="outline-primary" className="sumitbtn" onClick={csupdatebtn}>수정</Button>
            :
            <div></div>

        }
        {
          cs && cs.member && cs.member.username == noticeDetail.member.username ?
            <Button variant="outline-danger" className="resetbtn" type="reset"
              onClick={() => {
                if (cs && cs.member && cs.member.username != noticeDetail.member.username) {
                  alert('작성자만 삭제가능합니다.');
                  console.log(cs.member);
                  console.log(noticeDetail.member)
                  return;
                }
                axiosInstance.delete('/notice', { params: { 'no': noticeDetail.no } })
                  .then(response => {
                    alert(response.data);
                    navigate('/cs');
                  }).catch(error => {
                    console.log(error);
                  })
              }}
            >삭제</Button> : <div></div>
        }
        <Button variant="outline-info" className="backbtn" onClick={backbtn}>목록</Button>{' '}
      </div>
    </div>
  );
}

export default NoticeDetail;