import './Header.css';

function Header() {
	return (
		<div className='headercontainer'>
			<div className="wrapper row0">
				<div id="topbar" className="hoc clear">
					<div className="fl_left">
						<ul className="nospace">
							<li><a href="/"><i className="fa fa-lg fa-home"></i>HOME</a></li>
							<li><i className="fa fa-envelope-o"><img src="img/minilogo.png" /></i></li>
						</ul>
					</div>
					<div className="fl_right">
						<ul className="topnav">
							<li><a href="/main"><i className="fa fa-lg fa-home"></i>고객센터</a></li>
							<li><a href="#">마이페이지</a></li>
							<li><a href="#">물품등록</a></li>
							<li><a href="#">채팅내역</a></li>
							<li><a href="#">로그인</a></li>
							<li><a href="#">회원가입</a></li>
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
								<li className='one'><a href="/" >판매등록</a></li>
							
								<li className='one'><a href="#">캐릭터거래</a></li>
						
								<li className='one'><a href="left-sidebar.html">마이페이지</a></li>
							
								<li className='one'><a href="right-sidebar.html">마일리지</a></li>
							
								<li className='two'><a href="no-sidebar.html">채팅</a></li>
							</ul>
						</nav>
						</div>
		</div>
	);
}

export default Header;