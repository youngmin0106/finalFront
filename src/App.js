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
import GoogleLogin from './Login/GoogleLogin';
import AccountSales from './Page/Account Sales/AccountSales'
import TransPost from './Page/Trans Post/TransPost'
import TransDetail from './Page/Trans Detail/TransDetail'

function App() {
 // 로딩중
 const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);  // 로그아웃상태
  const [userInfo, setUserInfo] = useState({
    username: ''
  }); // 서버로부터 받아온 사용자 정보를 저장할 state 생성
  // useEffect(() => {
  //   if(!isAuth) {
  //     axiosInstance.get('/userInfo')
  //       .then(response => {
  //         setUserInfo(response.data);
          
  //       }).catch(error => {
  //         console.log(error);
  //       })
  //   }
  // }, [isAuth])
  return (
    <div className="App">
        <Routes>
          <Route path="/member-type" element={<MemberType/>} />
          <Route path="/member-agree" element={<MemberAgree />} />
          <Route path="/member-sign" element={<MemberSignup />} />
          <Route path="/signup-success" element={<SignupSuccess />} />
          <Route path="/login-page" element = {<Login setIsAuth={setIsAuth} setUserInfo={setUserInfo}/>} />
          <Route path='/oauth/kakao' element={<KakaoLogin setUserInfo={setUserInfo}/>} />
          <Route path='/oauth/google' element={<GoogleLogin />} />
          <Route path='/insertTrans' element={<AccountSales userInfo={userInfo}/>} />
        <Route path='/transPost' element={<TransPost userInfo={userInfo} isLoading={isLoading} setIsLoading={setIsLoading}/>} />
        <Route path='/transDetail/:id' element={<TransDetail userInfo={userInfo}/>} />
        
        </Routes>
      </div>

  );
}

export default App;
