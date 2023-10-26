
import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import UpdateInfo from './UpdateInfo/UpdateInfo';
import DeleteInfo from './DeleteInfo/DeleteInfo';
import MyPage from './MyPage/MyPage';
import ListPages from './MyPage/ListPages';
import Mileage from './Mileage/Mileage';
import MyPageBar from './MyPage/MyPageBar';

  // listOption : 마이페이지 좌측 리스트 나의 판매/구매 물품 항목들 눌렀을때 상단에 뜨는 문구 state로 저장
const listOption = [
  // 나의 판매 물품 항목
  {
    id : 1,
    name : '등록한'
  },
  {
    id : 2,
    name : '거래중인'
  },
  {
    id : 3,
    name : '판매 취소된'
  },
  {
    id : 4,
    name : '판매 완료된'
  },
  // 나의 구매 물품 항목
  {
    id : 5,
    name : '구매중인'
  },
  {
    id : 6,
    name : '구매 취소된'
  },
  {
    id : 7,
    name : '구매 완료된'
  }
]

const tsPoints = 301;

function App() {
  const [isAuth, setAuth] = useState(false);  // 로그아웃상태
  const [userInfo, setUserInfo] = useState({
    username:'',
  }); // 서버로부터 받아온 사용자 정보를 저장할 state 생성

  const [point, setPoints] = useState(tsPoints);

  const [list, setList] = useState(listOption);

  return (

    <div className="App">
      
    {/* <MyPage></MyPage> */}
      <Routes>
        {/* <Route path='' element={<MyPageBar point={point}/>}></Route> */}
        <Route path='/mypage' element={<MyPage list={list} point={point}/>}></Route>
        <Route path='/updateInfo' element={<UpdateInfo />}></Route>
        <Route path='/deleteInfo' element={<DeleteInfo point={point}/>}></Route>
        <Route path='/listPages/:id' element={<ListPages list={list} point={point}/>}></Route> {/* 보내주는 값들이 다 다름 */}
        <Route path='/mileage' element={<Mileage />}></Route>
     </Routes>

    </div>

  );
}

export default App;
