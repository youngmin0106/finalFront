import { Link } from "react-router-dom"

function Main () {
  return(
    <div style={{textAlign : "center"}}>
      <br></br>
      <Link to={'/insertTrans'} >글 작성</Link><br></br>
      <Link to={'/login-page'}>로그인 페이지</Link>
    </div>
  )
}

export default Main;