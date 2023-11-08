import { Link } from "react-router-dom"
import './Main.css';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";
import axiosInstance from "../../axiosInstance";
import { useEffect } from "react";
import announcement from "../../mockData/announcement";
import question from "../../mockData/question";

function Main() {
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
  useEffect(() => {
    // 묵 데이터 목록에서 제목만 추출
    const truncatedList = question.map((data) => {
      return { no: data.no, title: data.title };
    });
    setMiniList(truncatedList);
  }, []);

  return (
    <div className="Main">
      <div className="carouselImg">
        <Carousel>
          <Carousel.Item>
            <img src="https://via.placeholder.com/1300x400" alt="샘플이미지" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://via.placeholder.com/1300x400" alt="샘플이미지" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://via.placeholder.com/1300x400" alt="샘플이미지" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="firstLayout">
        <div className="firstItem one">
          <h6>자주묻는질문</h6>
          <hr />
          <div>
            {question.map((data, i) => {
              return (
                <div key={i}>
                <Link to={data.no === `질문${i}` ? `/questions/질문${i}` : `/questions/${data.no}`} className="linkTitle">
                  <div>{data.title}</div>
                </Link>
              </div>
              )
            })}
          </div>
        </div>

        <div className="firstItem two">
          <h6>공지사항</h6>
          <hr />
          <div>
            {/* 공지사항 들어가면 내용뽑을때 이렇게 해야 Tab키나 enter키가 먹음
            <pre>
              {announcement[0].content}
            </pre> */}
            {announcement.map((data, i) => {
              return (
                <div key={i}>
                     <Link to={data.no === `공지${i}` ? `/announcement/공지${i}` : `/announcement/${data.no}`} className="linkTitle">
                  <div>{data.title}</div>
                </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>


      <div className="secondLayout">
        <h6>아이콘 or 마일리지충전 or 검색순위</h6>
        <hr />
        <div>

        </div>
      </div>

      <div className="thirdLayout">
        <div className="thirdItem one">
          <h6>🎬 동영상 컨텐츠</h6>
          <hr />
          <div className="youtube">
            <iframe src="https://www.youtube.com/embed/sBPMbjMc-7E?si=4FZk-3qbn3HrYC3n" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/ppCt2J6rGvg?si=1lzjs09SQK7SDqB4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
        <div className="thirdItem two cs">
          <h6>고객센터</h6>
          <hr />
          <h2>☎ 1997-1999</h2>
          {/* <p>📞 1997-1999</p> */}
          <p>365일 24시간 연중무휴</p>
        </div>

      </div>
    </div>
  )
}

export default Main;