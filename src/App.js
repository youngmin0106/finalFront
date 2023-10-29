
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import AccountSales from './Page/Account Sales/AccountSales';
import TransPost from './Page/Trans Post/TransPost';


function App() {
  const [isLoading, setIsLoding] = useState(true);
  const [isAuth, setAuth] = useState(false);  // 로그아웃상태
  const [userInfo, setUserInfo] = useState({
    username:''
  }); // 서버로부터 받아온 사용자 정보를 저장할 state 생성
  return (
    <div className="App">
      <Routes>
        <Route path='/insertTrans' element={<AccountSales userInfo={userInfo} />} />
        <Route path='/transPost' element={<TransPost userInfo={userInfo} isLoading={isLoading} setIsLoding={setIsLoding}/>} />
        
      </Routes>
    </div>
  );
}

export default App;
