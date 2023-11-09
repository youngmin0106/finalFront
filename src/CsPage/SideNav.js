import { Link } from "react-router-dom";

function SideNav(){
  return(
    <div className="sidebar">
    <h2 style={{ marginLeft: "64%", marginBottom: "1%", fontSize: "25px", marginTop: "10%", width : "37%"}}>- 고객센터</h2>
    <ul className='ulListcs'>
      <li><Link to={"/cs"}>공지사항</Link></li>
      <li><Link to={"/questions"}>자주묻는질문</Link></li>
      <li><Link to={"/onetoone"}>1:1문의</Link></li>
    </ul>
    </div>
  );
}
export default SideNav;