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

      </div>
      <div className="secondLayout">

      </div>
      <div className="thirdLayout">
        <div className="thirdItem">
          <h5>자주묻는질문</h5>
          <hr />
          <div>

          </div>
        </div>
        <div className="thirdItem cs">
          <h4>고객센터</h4>
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