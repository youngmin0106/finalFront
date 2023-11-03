import './App.css';
import MemberType from './SignUp/MemberType';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import MemberAgree from './SignUp/MemberAgree';
import MemberSignup from './SignUp/MemberSignup';
import SignupSuccess from './SignUp/SignUpSuccess';
import Login from './Login/Login';
import { useEffect, useState } from 'react';
import KakaoLogin from './Login/KakaoLogin';
import GoogleLogin from './Login/GoogleLogin';
import AccountSales from './Page/Account Sales/AccountSales'
import TransPost from './Page/Trans Post/TransPost'
import TransDetail from './Page/Trans Detail/TransDetail'
import axiosInstance from './axiosInstance';
import Main from './Page/Main/Main';

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
    member: userInfo //-> 이게 자꾸 null로 뜸 해결해야함 ~!~!~!~!~!~!~!~!~!
  });
 

  // useEffect(() => {
  //   if(isAuth) {
  //     axiosInstance.get('/userInfo')
  //       .then(response => {
  //         setUserInfo(response.data.member[0]);
  //         console.log(response.data);
  //         console.log(response.data.member.username);
  //       }).catch(error => {
  //         console.log(error);
  //       })
  //   }
  // }, [isAuth])
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Main/>} />
          <Route path="/member-type" element={<MemberType/>} />
          <Route path="/member-agree" element={<MemberAgree />} />
          <Route path="/member-sign" element={<MemberSignup />} />
          <Route path="/signup-success" element={<SignupSuccess />} />
          <Route path="/login-page" element = {<Login setIsAuth={setIsAuth} setUserInfo={setUserInfo} userInfo={userInfo}/>} />
          <Route path='/oauth/kakao' element={<KakaoLogin setIsAuth={setIsAuth} setUserInfo={setUserInfo} setTrans={setTrans}/>} />
          <Route path='/oauth/google' element={<GoogleLogin />} />
          <Route path='/insertTrans' element={<AccountSales userInfo={userInfo} trans={trans} setTrans={setTrans}/>} />
        <Route path='/transPost' element={<TransPost userInfo={userInfo} isLoading={isLoading} setIsLoading={setIsLoading}/>} />
        <Route path='/transDetail/:id' element={<TransDetail userInfo={userInfo} trans={trans}/>} />
        
        </Routes>
      </div>

  );
}

export default App;
