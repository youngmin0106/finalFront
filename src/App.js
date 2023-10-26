
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import AccountSales from './Page/Account Sales/AccountSales';
import AccountPost from './Page/Trans Post/TransPostList';


function App() {
  const [isAuth, setAuth] = useState(false);  // 로그아웃상태
  const [userInfo, setUserInfo] = useState({
    username:''
  }); // 서버로부터 받아온 사용자 정보를 저장할 state 생성
  return (
    <div className="App">
      <Routes>
        <Route path='/insertAccount' element={<AccountSales userInfo={userInfo} />} />
        <Route path='/transPost' element={<AccountPost userInfo={userInfo} />} />
        
      </Routes>
    </div>
  );
}

export default App;
