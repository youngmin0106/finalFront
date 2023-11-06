import { Route, Routes } from 'react-router-dom';
import './App.css';
import Notice from './CsPage/Notice/Notice';
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

import MemberType from './SignUp/MemberType';
import 'bootstrap/dist/css/bootstrap.min.css';
import MemberAgree from './SignUp/MemberAgree';
import MemberSignup from './SignUp/MemberSignup';
import SignupSuccess from './SignUp/SignUpSuccess';
import Login from './Login/Login';
import { useState } from 'react';
import KakaoLogin from './Login/KakaoLogin';
import GoogleLogin from './Login/GoogleLogin';
import IdSerch from './Login/IdSerch';
import AccountSales from './Page/Account Sales/AccountSales'
import TransPost from './Page/Trans Post/TransPost'
import TransDetail from './Page/Trans Detail/TransDetail'
import Main from './Page/Main/Main';
import CsList from './CsPage/CsList';


function App() {
 // 로딩중
 const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);  // 로그아웃상태

  const [userInfo, setUserInfo] = useState({username:'', name:''}); // 서버로부터 받아온 사용자 정보를 저장할 state 생성
  const [trans, setTrans] = useState({
    price: '',
    game: '',
    server: '',
    title: '',
    content: '',
    member: userInfo
  });
  const [cs,setCs] = useState({
    title : '',
    content : '',
    member : userInfo
  })
 

  return (
    <div className="App">
      <Header />
        <Routes>

          <Route path="/" element={<Main/>} />
          <Route path='/insertTrans' element={<AccountSales userInfo={userInfo} trans={trans} setTrans={setTrans}/>} />
          <Route path='/transPost' element={<TransPost userInfo={userInfo} isLoading={isLoading} setIsLoading={setIsLoading}/>} />
          <Route path='/transDetail/:id' element={<TransDetail userInfo={userInfo} trans={trans}/>} />

          <Route path='/csList' element={<CsList setIsAuth={setIsAuth} userInfo={userInfo} cs={cs} setCs={setCs}/>} />
          <Route path='/cs' element={<Notice setIsAuth={setIsAuth} userInfo={userInfo} />} />
          <Route path='/questions' element={<Questions setIsAuth={setIsAuth} userInfo={userInfo}/>} />
          <Route path='/onetoone' element={<Onetoone setIsAuth={setIsAuth} userInfo={userInfo} />} />
          <Route path='/onetoonewrite' element={<WriteOnetoOne  userInfo={userInfo} cs={cs} setCs={setCs}/>} />
          <Route path='/noticewirte' element={<WriteNotice userInfo={userInfo} cs={cs} setCs={setCs} />} />
          <Route path='/questionwrite' element={<WriteQuestion  userInfo={userInfo} cs={cs} setCs={setCs}/>} />
          <Route path='/questions/:no' element={<QuestionDetail  userInfo={userInfo} cs={cs}/>} />
          <Route path='/notice/:no' element={<NoticeDetail  userInfo={userInfo} cs={cs}/>} />
          <Route path='/onetoone/:no' element={<OnetoOneDetail userInfo={userInfo} cs={cs}/>} />
          <Route path="/notice/:no/update" element={<NoticeUpdate   userInfo={userInfo} cs={cs}/>} />
          <Route path='/questions/:no/update' element={<QuestionUpdate  cs={cs}/>} />
          <Route path='/onetoone/:no/update' element={<OnetoOneUpdate  cs={cs}/>} />

          <Route path="/member-type" element={<MemberType/>} />
          <Route path="/member-agree" element={<MemberAgree />} />
          <Route path="/member-sign" element={<MemberSignup />} />
          <Route path="/signup-success" element={<SignupSuccess />} />

          <Route path="/login-page" element = {<Login setIsAuth={setIsAuth} setUserInfo={setUserInfo} userInfo={userInfo}/>} />
          <Route path='/oauth/kakao' element={<KakaoLogin setCs={setCs} setIsAuth={setIsAuth} setUserInfo={setUserInfo} setTrans={setTrans}/>} />
          <Route path='/oauth/google' element={<GoogleLogin />} />
          
          <Route path='/idserch' element={<IdSerch />} />
        
        </Routes>
      </div>


  );
}

export default App;
