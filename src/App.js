
import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './component/header/Header';
import Main from './Page/Main/Main';

import CsList from './CsPage/CsList';
import Reply from './CsPage/Reply/Reply';
import Notice from './CsPage/Notice/Notice';
import NoticeDetail from './CsPage/Notice/NoticeDetail';
import NoticeUpdate from './CsPage/Notice/NoticeUpdate';
import Questions from './CsPage/Question/Question';
import QuestionDetail from './CsPage/Question/QuestionDetail';
import QuestionUpdate from './CsPage/Question/QuestionUpdate';
import Onetoone from './CsPage/OnetoOne/Onetoone';
import OnetoOneDetail from './CsPage/OnetoOne/OnetoOneDetail';
import OnetoOneUpdate from './CsPage/OnetoOne/OnetoOneUpdate';
import WriteNotice from './CsPage/Notice/WriteNotice';
import WriteQuestion from './CsPage/Question/WriteQuestion';
import WriteOnetoOne from './CsPage/OnetoOne/WriteOnetoOne';

import 'bootstrap/dist/css/bootstrap.min.css';
import MemberType from './SignUp/MemberType';
import MemberAgree from './SignUp/MemberAgree';
import MemberSignup from './SignUp/MemberSignup';
import SignupSuccess from './SignUp/SignUpSuccess';
import Login from './Login/Login';
import KakaoLogin from './Login/KakaoLogin';
import GoogleLogin from './Login/GoogleLogin';

import AccountSales from './Page/Account Sales/AccountSales'
import TransPost from './Page/Trans Post/TransPost'
import TransDetail from './Page/Trans Detail/TransDetail'

import UpdateInfo from './UpdateInfo/UpdateInfo';
import DeleteInfo from './DeleteInfo/DeleteInfo';
import MyPage from './MyPage/MyPage';
import ListPages from './MyPage/ListPages';
import Mileage from './Mileage/Mileage';
import TestTrans from './MyPage/TestTrans';
import Footer from './component/footer/Footer';

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
    buyerId: 'test1234',
    sellerId: '(k)celpic_@naver.com',
    transId: 1,
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
  const [transDetails, setTransDetails] = useState({
    id: '',
    title: '',
    content: '',
    game: '',
    server: '',
    member: '',
    price: ''
  });

  const [isLoading, setIsLoading] = useState(true);  // 로딩중
  const [isAuth, setIsAuth] = useState(false);  // 로그아웃상태
  const [userInfo, setUserInfo] = useState({ username: '', name: '' }); // 서버로부터 받아온 사용자 정보를 저장할 state 생성
  const [trans, setTrans] = useState({
    price: '',
    game: '',
    server: '',
    title: '',
    content: '',
    member: userInfo
  });
  const [cs, setCs] = useState({
    title: '',
    content: '',
    member: userInfo.username
  })


  const [startTransInfo, setStartTransInfo] = useState({
    sellerId: "",// 게시글 올린 사람 name
    buyerId: "",  //구매하려는 사용자 아이디 (현재 로그인 사용자)
    postId: '' // 원래 게시글 번호
  })

  const [testTrans, setTestTrans] = useState(testBoardList)
  const [list, setList] = useState(listOption);


  return (
    <div>
      <Header />
      <Routes>

        {/*  */}
        <Route path="/" element={<Main />} />
        <Route path="/member-type" element={<MemberType />} />
        <Route path="/member-agree" element={<MemberAgree />} />
        <Route path="/member-sign" element={<MemberSignup />} />

        {/* 회원가입, 로그인, 카카오 로그인, 구글 로그인 */}
        <Route path="/signup-success" element={<SignupSuccess />} />
        <Route path="/login-page" element={<Login setIsAuth={setIsAuth} setUserInfo={setUserInfo} userInfo={userInfo} setTrans={setTrans} setCs={setCs} />} />
        <Route path='/oauth/kakao' element={<KakaoLogin setIsAuth={setIsAuth} setUserInfo={setUserInfo} setTrans={setTrans} setCs={setCs}/>} />
        <Route path='/oauth/google' element={<GoogleLogin setIsAuth={setIsAuth} setUserInfo={setUserInfo} setTrans={setTrans} setCs={setCs} />} />

        <Route path='' element={<testTrans trans={trans} userInfo={userInfo}></testTrans>} />

        {/* 게시글작성, 게시글 목록, 게시글 상세정보 */}
        <Route path='/insertTrans' element={<AccountSales userInfo={userInfo} trans={trans} setTrans={setTrans} />} />
        <Route path='/transPost' element={<TransPost userInfo={userInfo} isLoading={isLoading} setIsLoading={setIsLoading} />} />
        <Route path='/transDetail/:id' element={<TransDetail userInfo={userInfo} trans={trans} startTransInfo={startTransInfo} setStartTransInfo={setStartTransInfo} transDetails={transDetails} setTransDetails={setTransDetails} />} />

        {/* 마이페이지, 회원정보 수정, 회원탈퇴, 마이페이지 물품탭, 마일리지 충전,  */}
        <Route path='/mypage' element={<MyPage list={list} userInfo={userInfo} />}></Route>
        <Route path='/updateInfo' element={<UpdateInfo userInfo={userInfo} />}></Route>
        <Route path='/deleteInfo' element={<DeleteInfo userInfo={userInfo} />}></Route>
        <Route path='/listPages/:id' element={<ListPages list={list} userInfo={userInfo} testTrans={testTrans} trans={trans} />}></Route> {/* 보내주는 값들이 다 다름 */}
        <Route path='/mileage' element={<Mileage userInfo={userInfo} setUserInfo={setUserInfo} />}></Route>
        <Route path='/testTrans' element={<TestTrans userInfo={userInfo} trans={trans} testTrans={testTrans} startTransInfo={startTransInfo} setStartTransInfo={setStartTransInfo} setTestTrans={setTestTrans}></TestTrans>}></Route>

        {/* 헤더, 고객센터 . . */}
        <Route path='/' element={<Header isAuth={isAuth} setIsAuth={setIsAuth} />}></Route>
        <Route path='/csList' element={<CsList setIsAuth={setIsAuth} userInfo={userInfo} cs={cs} setCs={setCs} />} />
        <Route path='/cs' element={<Notice setIsAuth={setIsAuth} userInfo={userInfo} />} />
        <Route path='/questions' element={<Questions setIsAuth={setIsAuth} userInfo={userInfo} />} />
        <Route path='/onetoone' element={<Onetoone setIsAuth={setIsAuth} userInfo={userInfo} />} />
        <Route path='/onetoonewrite' element={<WriteOnetoOne userInfo={userInfo} cs={cs} setCs={setCs} />} />
        <Route path='/noticewirte' element={<WriteNotice userInfo={userInfo} cs={cs} setCs={setCs} />} />
        <Route path='/questionwrite' element={<WriteQuestion  userInfo={userInfo} cs={cs} setCs={setCs}/>} />
        <Route path='/questions/:no' element={<QuestionDetail  userInfo={userInfo} cs={cs}/>} />
        <Route path='/notice/:no' element={<NoticeDetail  cs={cs}/>} />
        <Route path='/onetoone/:no' element={<OnetoOneDetail userInfo={userInfo} cs={cs}/>} />
        <Route path="/notice/:no/update" element={<NoticeUpdate   userInfo={userInfo} cs={cs}/>} />
        <Route path='/questions/:no/update' element={<QuestionUpdate  cs={cs}/>} />
        <Route path='/onetoone/:no/update' element={<OnetoOneUpdate  cs={cs}/>} />
      </Routes>

      <Footer />
    </div>



  );
}

export default App;
