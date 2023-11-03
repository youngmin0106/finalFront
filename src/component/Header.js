import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
	return (
		<div className='headercontainer'>
			<div className="wrapper row0">
				<div id="topbar" className="hoc clear">
					<div className="fl_left">
						<ul className="nospace">
							<li><Link to={"/"}><i className="fa fa-lg fa-home"></i>HOME</Link></li>
							<li><i className="fa fa-envelope-o"><img src="img/minilogo.png" /></i></li>
						</ul>
					</div>
					<div className="fl_right">
						<ul className="topnav">
							<li><Link to={"/main"}><i className="fa fa-lg fa-home"></i>고객센터</Link></li>
							<li><Link to={"#"}>마이페이지</Link></li>
							<li><Link to={"#"}>물품등록</Link></li>
							<li><Link to={"#"}>채팅내역</Link></li>
							<li><Link to={"login-page"}>로그인</Link></li>
							<li><Link to={"#"}>회원가입</Link></li>
						</ul>
					</div>
					<div>
					</div>
				</div>
			</div>
			<div className='headsh'>
				<img className='mainlogo' src="/img/mainlogo.png"/>
				<input id="search" type="search" name="" placeholder="검색어를 입력해주세요." />
				<button type="submit" className="searchButton">검색</button>
			</div>
			<div className='bigheader'>
					<nav id="nav">
							<ul>
								<li className='one'><Link to={"#"} >판매등록</Link></li>
							
								<li className='one'><Link to={"#"}>캐릭터거래</Link></li>
						
								<li className='one'><Link to={"#"}>마이페이지</Link></li>
							
								<li className='one'><Link to={"#"}>마일리지</Link></li>
							
								<li className='two'><Link to={"#"}>채팅</Link></li>
							</ul>
						</nav>
						</div>
		</div>
	);
}

export default Header;