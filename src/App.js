
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Notice from './CsPage/Notice';
import { useState } from 'react';
import WriteNotice from './CsPage/WriteNotice';
import Header from './component/Header';
import CsMain from './CsPage/CsMain';
import Questions from './CsPage/Question';
import Onetoone from './CsPage/Onetoone';
import WriteDetail from './CsPage/CsDetail';
import CsDetail from './CsPage/CsDetail';
import CsUpdate from './CsPage/CsUpdate';
import PaginationRounded from './component/PaginationRounded';


function App() {
  const [isAuth, setAuth] = useState(false);  // 로그아웃상태
  const [userInfo, setUserInfo] = useState({
    username: ''
  }); // 서버로부터 받아온 사용자 정보를 저장할 state 생성
  return (
    <div className="App">
      <Header/>
      <Routes>
       <Route path='/csmain' element={<CsMain/>}/>
       <Route path='/cs' element={<Notice />} />
       <Route path='/questions' element={<Questions/>}/>
       <Route path='/onetoone' element={<Onetoone/>}/>
       <Route path='/write' element={<WriteNotice userInfo={userInfo}/>} />
       <Route path='/writedetail' element={<WriteDetail/>}/>
       <Route path='/notice/:no' element={<CsDetail userInfo={userInfo}/>} />
       <Route path="/notice/:no/update" element={<CsUpdate />} />
       <Route path='/notice/pages' element={<PaginationRounded/>}/>
      </Routes>
    </div>
  );
}

export default App;
