
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Notice from './CsPage/Notice';
import { useState } from 'react';
import WriteNotice from './CsPage/WriteNotice';

function App() {
  const [isAuth, setAuth] = useState(false);  // 로그아웃상태
  const [userInfo, setUserInfo] = useState({
    username:''
  }); // 서버로부터 받아온 사용자 정보를 저장할 state 생성
  return (
    <div className="App">
      <Routes>
       <Route path='/list' element={<Notice userInfo={userInfo}/>} />
       <Route path='/write' element={<WriteNotice userInfo={userInfo}/>} />
      </Routes>
    </div>
  );
}

export default App;
