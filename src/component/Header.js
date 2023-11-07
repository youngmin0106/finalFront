import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ isAuth, setIsAuth, userInfo }) {

	const navigate = useNavigate();

	const handleLogout = () => {
		setIsAuth(false);
		sessionStorage.removeItem("jwt");
		navigate("/");
	};

	return (
		<div className='headercontainer'>
			<div className="wrapper row0">
				<div id="topbar" className="hoc clear">
					<div className="fl_left">
						<ul className="nospace">
							<li><Link to={"/"}><i className="fa fa-lg fa-home"></i>HOME</Link></li>
							<li><i className="fa fa-envelope-o"><img src="img/minilogo.png" alt="logo" /></i></li>
						</ul>
					</div>
					<div className="fl_right">
						<ul className="topnav">
							<li><Link to={"/csList"}><i className="fa fa-lg fa-home"></i>고객센터</Link></li>
							<li><Link to={"/mypage"}>마이페이지</Link></li>
							<li><Link to={"/insertTrans"}>물품등록</Link></li>
							<li><Link to={"#"}>채팅내역</Link></li>

							{isAuth ?
								<li>{userInfo.name}님 환영합니다.</li>
								:
								<li><Link to={"/login-page"}>로그인</Link></li>
							}
							{isAuth ? <li style={{ cursor: 'pointer' }} onClick={handleLogout}>로그아웃</li> : ""}
							<li><Link to={"/member-sign"}>회원가입</Link></li>
						</ul>
					</div>
				</div>
			</div>
			<div className='headsh'>
				<img className='mainlogo' src="/img/mainlogo.png" alt="logo" />
				<input id="search" type="search" name="" placeholder="검색어를 입력해주세요." />
				<button type="submit" className="searchButton">검색</button>
			</div>
			<div className='bigheader'>
				<nav id="nav">
					<ul>
						<li className='one'><Link to={"/insertTrans"}>판매등록</Link></li>
						<li className='one'><Link to={"/transPost"}>계정거래</Link></li>
						<li className='one'><Link to={"/mypage"}>마이페이지</Link></li>

						<li className='one'><Link to={"/mileage"}>마일리지</Link></li>
						<li className='two'><Link to={"#"}>채팅</Link></li>
					</ul>
				</nav>
			</div>
		</div>
	);

}

export default Header;


