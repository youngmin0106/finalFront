import { useRef, useState } from "react";
import { Button, Form, Overlay } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './DeleteInfo.css';
import '../MyPage/MyPageBar.css';
import MyPageBar from "../MyPage/MyPageBar";
import axiosInstance from "../axiosInstance";

// const deleteInfo = (() => {
  
// })



function DeleteInfo( {point, userInfo} ) {

  const [show, setShow] = useState(false);
  const target = useRef(null);

  const [memberData, setMemberData] = useState({
    id : 'test',
    pw : '1234'
  });

  return (
    
    <div className="deleteInfo">
      <MyPageBar point={point} userInfo={userInfo} ></MyPageBar>

      <div className="main">
      <h3>회원탈퇴</h3>
        <div className="beforeDelete">
          <div className="delete1">탈퇴 시 정보는 <span style={{color : "red"}}>즉시파기</span>되며 복구가 불가합니다.<br></br>
          회원탈퇴를 진행하시려면 회원탈퇴 사유 선택 후 '회원탈퇴'를 클릭하여 주십시오</div>
          <br></br>
          <br></br>
          <div className="selectOpt">
          <br></br>
          <br></br>
          <h5 style={{textAlign : "left"}}>탈퇴사유</h5>
          <Form.Select aria-label="Default select example" className="selectForm">
                 <option disabled defaultValue={"선택"}>선택</option>
                 <option value="1">기타</option>
                 <option value="2">더 이상 사용하지 않음</option>
                 <option value="3">원하는 물품이 없음</option>
               </Form.Select>
          
          <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
        회원탈퇴 전 확인
      </Button>
      <Overlay target={target.current} show={show} placement="left">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            가지마세요..
          </div>
        )}
      </Overlay>
      &nbsp;
      <Button onClick={() => {
        axiosInstance.post('/unregister', {
          id : 'test'
        }) // 로그인에서 구현한 정보 추가해야함, MemberController
        .then(response => {
          alert(response.data);
          console.log("회원탈퇴 완료")
        }).catch(error => {
          console.log(error);
        })
      }}>회원탈퇴</Button>
      </div>
        </div>

      







      </div>



    </div>
  );
}

export default DeleteInfo;