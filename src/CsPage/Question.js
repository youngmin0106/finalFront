
import Search from "../component/Search";

function Questions() {
    return (
        <div className="notice">
            <ul className="ulList">
                <h2 style={{ fontSize: "25px" }}>- 자주묻는질문</h2>
                <li><a href="/questions">자주묻는질문</a></li>
                <li><a href="/cs">공지사항</a></li>
                <li><a href="/onetoone">1:1문의</a></li>
            </ul>

            <section className="noti">
                <div className="page-title">
                    <div className="container">
                        <h3>자주묻는질문</h3>
                    </div>
                </div>
                <Search />
            </section>
        </div>
    );
}

export default Questions;