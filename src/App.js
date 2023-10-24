
import { useState } from 'react';
import './App.css';
import MyPage from './MyPage/MyPage';
import { Route, Routes } from 'react-router-dom';
import UpdateInfo from './UpdateInfo/UpdateInfo';

function App() {
  const [isAuth, setAuth] = useState(false);  // 로그아웃상태
  const [userInfo, setUserInfo] = useState({
    username:''
  }); // 서버로부터 받아온 사용자 정보를 저장할 state 생성
  return (

    <div className="App">
      
    {/* <MyPage></MyPage> */}
      <Routes>
        <Route path='/mypage' element={<MyPage />}></Route>
        <Route path='/updateInfo' element={<UpdateInfo />}></Route>
     </Routes>

    </div>

  );
}

export default App;
