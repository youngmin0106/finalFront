

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Notice from './CsPage/Notice/Notice';
import { useState } from 'react';
import Header from './component/Header';

import Questions from './CsPage/Question/Question';
import Onetoone from './CsPage/OnetoOne/Onetoone';
import WriteNotice from './CsPage/Notice/WriteNotice';
import WriteQuestion from './CsPage/Question/WriteQuestion';
import QuestionDetail from './CsPage/Question/QuestionDetail';
import NoticeDetail from './CsPage/Notice/NoticeDetail';
import NoticeUpdate from './CsPage/Notice/NoticeUpdate';
import QuestionUpdate from './CsPage/Question/QuestionUpdate';
import WriteOnetoOne from './CsPage/OnetoOne/WriteOnetoOne';
import OnetoOneUpdate from './CsPage/OnetoOne/OnetoOneUpdate';
import OnetoOneDetail from './CsPage/OnetoOne/OnetoOneDetail';
import Main from './CsPage/Main';

import MemberType from './SignUp/MemberType';
import 'bootstrap/dist/css/bootstrap.min.css';

import MemberAgree from './SignUp/MemberAgree';
import MemberSignup from './SignUp/MemberSignup';
import SignupSuccess from './SignUp/SignUpSuccess';
import Login from './Login/Login';

import KakaoLogin from './Login/KakaoLogin';
import GoogleLogin from './Login/GoogleLogin';


function App() {

  const [isAuth, setIsAuth] = useState(false);  // 로그아웃상태
  const [userInfo, setUserInfo] = useState({
    username: ''
  }); // 서버로부터 받아온 사용자 정보를 저장할 state 생성

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/main' element={<Main />} />
        <Route path='/cs' element={<Notice />} />
        <Route path='/questions' element={<Questions />} />
        <Route path='/onetoone' element={<Onetoone />} />
        <Route path='/onetoonewrite' element={<WriteOnetoOne />} />
        <Route path='/noticewirte' element={<WriteNotice userInfo={userInfo} />} />
        <Route path='/questionwrite' element={<WriteQuestion />} />
        <Route path='/questions/:no' element={<QuestionDetail />} />
        <Route path='/notice/:no' element={<NoticeDetail userInfo={userInfo} />} />
        <Route path='/onetoone/:no' element={<OnetoOneDetail />} />
        <Route path="/notice/:no/update" element={<NoticeUpdate />} />
        <Route path='/questions/:no/update' element={<QuestionUpdate />} />
        <Route path='/onetoone/:no/update' element={<OnetoOneUpdate />} />
        <Route path="/member-type" element={<MemberType />} />
        <Route path="/member-agree" element={<MemberAgree />} />
        <Route path="/member-sign" element={<MemberSignup />} />
        <Route path="/signup-success" element={<SignupSuccess />} />
        <Route path="/login-page" element={<Login setIsAuth={setIsAuth} setUserInfo={setUserInfo} />} />
        <Route path='/oauth/kakao' element={<KakaoLogin />} />
        <Route path='/oauth/google' element={<GoogleLogin />} />
      </Routes>
    </div>
  );
}

export default App;
