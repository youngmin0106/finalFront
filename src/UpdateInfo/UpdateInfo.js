import { Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './UpdateInfo.css'

function UpdateInfo( {userInfo} ) {
  
  return (


    <div className="wrapper">
    
    <Form style={{width : "350px"}} >
      <div className="bar">
        <h3 style={{fontWeight : "bold"}}>회원 비밀번호 확인</h3>
        <div style={{textAlign : "center"}}>비밀번호를 한번 더 입력해주세요!</div>
        <br></br>
      </div>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <div className="userId">회원 아이디</div>
        <Form.Label><div className="loginUserId">{userInfo.id}</div></Form.Label> {/* 로그인한 유저 ID 출려갷야함 */}
        <Form.Control type="password" placeholder="비밀번호" />
      </Form.Group>
      <Button variant="primary" type="submit" style={{width : "350px", backgroundColor : "#40A940", border : "none"}}>
        확인
      </Button>
    </Form>

    </div>
    
  );
}

export default UpdateInfo;