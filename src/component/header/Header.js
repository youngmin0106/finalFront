import { Link } from 'react-router-dom';
import './Header.css';

function Header({ isAuth, setIsAuth }) {
	return (
		<div className='headercontainer'>
			<div className="wrapper row0">
				<div id="topbar" className="hoc clear">
					<div className="fl_left">
						<ul className="nospace">
							<li><Link to={"/"}><i className="fa fa-lg fa-home"></i>HOME</Link></li>
							<li><i className="fa fa-envelope-o"><img src={`${process.env.PUBLIC_URL}/img/minilogo.png`} /></i></li>
						</ul>
					</div>
					<div className="fl_right">
						<ul className="topnav">
							{/* <li><Link to={"/csList"}><i className="fa fa-lg fa-home"></i>고객센터</Link></li>
							<li><Link to={"/mypage"}>마이페이지</Link></li>
							<li><Link to={"/insertTrans"}>물품등록</Link></li> */}
							<li><Link to={"/login-page"}>로그인</Link></li>
							<li><Link to={"/member-type"}>회원가입</Link></li>
						</ul>
					</div>
					<div>
					</div>
				</div>
			</div>
			<div className='headsh'>
				{/* <Link to={'/'}>
					<img src="/img/로고.png" className='gameimg' />
					<br />
					<input id="search" type="search" name="" placeholder="바로그인" disabled />
					<button type="submit" className="searchButton" disabled>검색</button>
				</Link> */}
				<Link to={'/'}>
				<img src='/img/헤더4.jpg'/>
				</Link>
			</div>
			<div className='bigheader'>
				<nav id="nav">
					<ul>
						<li className='one'><Link to={"/insertTrans"} >판매등록</Link></li>

						<li className='one'><Link to={"/transPost"}>계정거래</Link></li>

						<li className='one'><Link to={"/mypage"}>마이페이지</Link></li>

						<li className='one'><Link to={"/mileage"}>마일리지</Link></li>

						<li className='two'><Link to={"/csList"}>고객센터</Link></li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Header;