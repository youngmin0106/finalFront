
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import AccountSales from './Page/Account Sales/AccountSales';
import TransPost from './Page/Trans Post/TransPost';

function App() {
  // 로딩중
  const [isLoading, setIsLoading] = useState(true);
  // 로그아웃 상태
  const [isAuth, setAuth] = useState(false);
  // 서버로부터 받아온 사용자 정보를 저장할 state 생성
  const [userInfo, setUserInfo] = useState({
    username:''
  });
  return (
    <div className="App">
      <Routes>
        <Route path='/insertTrans' element={<AccountSales userInfo={userInfo}/>} />
        <Route path='/transPost' element={<TransPost userInfo={userInfo} isLoading={isLoading} setIsLoading={setIsLoading}/>} />
        
      </Routes>
    </div>
  );
}

export default App;
