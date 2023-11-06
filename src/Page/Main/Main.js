import { Link } from "react-router-dom"
import './Main.css';
import Carousel from 'react-bootstrap/Carousel';

function Main() {
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
          <h6>🎬 동영상 컨텐츠</h6>
          <hr />
          <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/sBPMbjMc-7E?si=4FZk-3qbn3HrYC3n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ppCt2J6rGvg?si=1lzjs09SQK7SDqB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
        <div className="firstItem two">
          <h6>검색순위 또는 마일리지충전 또는 아이콘</h6>
          <hr />
          <div>

          </div>
        </div>
      </div>

      <div className="secondLayout">
      <h6>공지사항</h6>
          <hr />
          <div>

          </div>
      </div>

      <div className="thirdLayout">
        <div className="thirdItem one">
          <h6>자주묻는질문</h6>
          <hr />
          <div>

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