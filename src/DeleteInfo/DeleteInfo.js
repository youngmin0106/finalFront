import { useRef, useState } from "react";
import { Button, Form, Overlay } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './DeleteInfo.css';
import '../MyPage/MyPageBar.css';
import MyPageBar from "../MyPage/MyPageBar";
import axiosInstance from "../axiosInstance";
import { useNavigate } from "react-router-dom";

// const deleteInfo = (() => {
  
// })



function DeleteInfo( {userInfo} ) {

  const [show, setShow] = useState(false);
  const target = useRef(null);

  const navigate = useNavigate();

  return (
    
    <div className="deleteInfo">
      <MyPageBar userInfo={userInfo} ></MyPageBar>

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
          {/* 보통 통계내려고 탈퇴사유 받지만 아직 탈퇴사유 저장은 하고있지않음 */}
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
        axiosInstance.post('/unregister', userInfo) // 로그인에서 구현한 정보 추가해야함, MemberController
        .then(response => {
          alert("회원탈퇴 완료");
          navigate('/');
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