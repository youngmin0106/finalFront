import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { useEffect } from 'react';
import { useState } from 'react';

function Header({ isAuth, setIsAuth, userInfo }) {

	const navigate = useNavigate();

	useEffect(() => {
		const storedIsAuth = sessionStorage.getItem("jwt");
		if (storedIsAuth) {
			setIsAuth(true);
		}
	}, [setIsAuth]);

	const handleLogout = () => {
		setIsAuth(false);
		sessionStorage.removeItem("jwt");
		navigate("/");
	};

	const notLoginAlert = () => {
		alert("로그인 후 이용하세요");
		navigate("/login-page");
	}

	const [username, setUsername] = useState("");  // username 추가
	useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      const parsedUserInfo = JSON.parse(storedUserInfo);
      setUsername(parsedUserInfo.name || ""); // userInfo.name이 null이면 빈 문자열로 설정
    }
  }, []);

  useEffect(() => {
    if (userInfo.name) {
      setUsername(userInfo.name);
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }
  }, [userInfo]);

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

							{isAuth ?
								<>
								
									{/* <li>{userInfo.name}님 환영합니다.</li> */}
									{userInfo.name && <li>{userInfo.name}님 환영합니다.</li>}
									<li style={{ cursor: 'pointer' }} onClick={handleLogout}>로그아웃</li>
								</>
								:
								<>
									<li><Link to={"/login-page"}>로그인</Link></li>
									<li><Link to={"/member-type"}>회원가입</Link></li>
								</>
							}
						</ul>
					</div>
				</div>
			</div>
			<div className='headsh'>
				<Link to={'/'}>
				<img src='/img/헤더4.jpg'/>
				</Link>
			</div>
			<div className='bigheader'>
				<nav id="nav">
					<ul>
						{isAuth ? <li style={{ cursor: 'pointer' }} className='one'> <Link to={"/insertTrans"}>판매등록</Link></li>
							: <li onClick={notLoginAlert} className='one'> <Link>판매등록</Link></li>}

						<li className='one'><Link to={"/transPost"}>물품목록</Link></li>

						{isAuth ? <li className='one'><Link to={"/mypage"}>마이페이지</Link></li>
							: <li onClick={notLoginAlert} className='one'><Link>마이페이지</Link></li>}

						{isAuth ? <li className='one'><Link to={"/mileage"}>마일리지 충전</Link></li>
							: <li onClick={notLoginAlert} className='one'><Link>마일리지 충전</Link></li>}

						<li className='one'><Link to={"/csList"}>고객센터</Link></li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Header;




