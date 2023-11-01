import './App.css';
import MemberType from './SignUp/MemberType';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import MemberAgree from './SignUp/MemberAgree';
import MemberSignup from './SignUp/MemberSignup';
import SignupSuccess from './SignUp/SignUpSuccess';
import Login from './Login/Login';
import { useState } from 'react';
import KakaoLogin from './Login/KakaoLogin';


function App() {

  const [isAuth, setIsAuth] = useState(false);  // 로그아웃상태
  const [userInfo, setUserInfo] = useState({
    
  }); // 서버로부터 받아온 사용자 정보를 저장할 state 생성

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<MemberType/>} />
          <Route path="/member-agree" element={<MemberAgree />} />
          <Route path="/member-sign" element={<MemberSignup />} />
          <Route path="/signup-success" element={<SignupSuccess />} />
          <Route path="/login-page" element = {<Login setIsAuth={setIsAuth} setUserInfo={setUserInfo}/>} />
          <Route path='/oauth/kakao' element={<KakaoLogin/>} />
        
        </Routes>
      </div>
  );
}

export default App;
