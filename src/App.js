import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import UpdateInfo from './UpdateInfo/UpdateInfo';
import DeleteInfo from './DeleteInfo/DeleteInfo';
import MyPage from './MyPage/MyPage';
import ListPages from './MyPage/ListPages';
import Mileage from './Mileage/Mileage';
import TestTrans from './MyPage/TestTrans';
import './App.css';
import MemberType from './SignUp/MemberType';
import 'bootstrap/dist/css/bootstrap.min.css';
import MemberAgree from './SignUp/MemberAgree';
import MemberSignup from './SignUp/MemberSignup';
import SignupSuccess from './SignUp/SignUpSuccess';
import Login from './Login/Login';
import KakaoLogin from './Login/KakaoLogin';
import GoogleLogin from './Login/GoogleLogin';
import AccountSales from './Page/Account Sales/AccountSales'
import TransPost from './Page/Trans Post/TransPost'
import TransDetail from './Page/Trans Detail/TransDetail'
import Main from './Page/Main/Main';

// listOption : 마이페이지 좌측 리스트 나의 판매/구매 물품 항목들 눌렀을때 상단에 뜨는 문구 state로 저장
const listOption = [
  // 나의 판매 물품 항목
  {
    id: 1,
    name: '등록한'
  },
  {
    id: 2,
    name: '거래중인'
  },
  {
    id: 3,
    name: '판매 취소된'
  },
  {
    id: 4,
    name: '판매 완료된'
  },
  // 나의 구매 물품 항목
  {
    id: 5,
    name: '구매중인'
  },
  {
    id: 6,
    name: '구매 취소된'
  },
  {
    id: 7,
    name: '구매 완료된'
  }
]

const testBoardList = [
  {
    id: 2,
    name: '홍길동',
    content: "판매 테스트 1",
    title: "테스트 거래 게시글 1",
    memberid: 'test3',
    price: 10000,
    game: '메이플스토리',
    server: '루나',
    phone: '010-1234-5678',
    buyerId: 'test4',
    sellerId: 'test3',
    transId: 5,
    sellerChk: 'true'
  },
  {
    id: 3,
    name: '홍길동',
    content: "판매 테스트 2",
    title: "테스트 거래 게시글 2",
    memberid: 'test3',
    price: 20000,
    game: '메이플스토리',
    server: '루나',
    phone: '010-1234-5678',
    buyerId: 'test4',
    sellerId: 'test3'
  },
  {
    id: 4,
    name: '홍길동',
    content: "판매 테스트 3",
    title: "테스트 거래 게시글 3",
    memberid: 'test3',
    price: 30000,
    game: '메이플스토리',
    server: '루나',
    phone: '010-1234-5678',
    buyerId: 'test4',
    sellerId: 'test3'
  }
]



function App() {
  // 로딩중
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);  // 로그아웃상태

  const [userInfo, setUserInfo] = useState({ username: '', name: '' }); // 서버로부터 받아온 사용자 정보를 저장할 state 생성
  const [trans, setTrans] = useState({
    price: '',
    game: '',
    server: '',
    title: '',
    content: '',
    member: userInfo //-> 이게 자꾸 null로 뜸 해결해야함 ~!~!~!~!~!~!~!~!~!
  });

  const [testTrans, setTestTrans] = useState(testBoardList)


  const [list, setList] = useState(listOption);
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
    <div>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/member-type" element={<MemberType />} />
        <Route path="/member-agree" element={<MemberAgree />} />
        <Route path="/member-sign" element={<MemberSignup />} />
        <Route path="/login-page" element={<Login setIsAuth={setIsAuth} setUserInfo={setUserInfo} userInfo={userInfo} />} />
        <Route path='/oauth/kakao' element={<KakaoLogin setIsAuth={setIsAuth} setUserInfo={setUserInfo} setTrans={setTrans} />} />
        <Route path='/oauth/google' element={<GoogleLogin />} />
        <Route path='/insertTrans' element={<AccountSales userInfo={userInfo} trans={trans} setTrans={setTrans} />} />
        <Route path='/transPost' element={<TransPost userInfo={userInfo} isLoading={isLoading} setIsLoading={setIsLoading} />} />
        <Route path='/transDetail/:id' element={<TransDetail userInfo={userInfo} trans={trans} />} />
        <Route path='/mypage' element={<MyPage list={list} userInfo={userInfo} />}></Route>
        <Route path='/updateInfo' element={<UpdateInfo userInfo={userInfo} />}></Route>
        <Route path='/deleteInfo' element={<DeleteInfo userInfo={userInfo} />}></Route>
        <Route path='/listPages/:id' element={<ListPages list={list} userInfo={userInfo} testTrans={testTrans} />}></Route> {/* 보내주는 값들이 다 다름 */}
        <Route path='/mileage' element={<Mileage userInfo={userInfo} setUserInfo={setUserInfo} />}></Route>
        <Route path="/signup-success" element={<SignupSuccess />} />
        <Route path='/testTrans' element={<TestTrans userInfo={userInfo} testTrans={testTrans} setTestTrans={setTestTrans}></TestTrans>}></Route>

      </Routes>
    </div>

  );
}

export default App;
