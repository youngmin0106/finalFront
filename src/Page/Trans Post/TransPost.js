import TransPostList from "./TransPostList";
import TransSearch from "./TransSearch";

function TransPost ({ isLoading, setIsLoding }) {
  return(
    <div className="TransPost">
      <div>
      <h1 className="title">캐릭터 거래</h1>
        <TransSearch />
      </div>
      <div>
        <TransPostList isLoading={isLoading} setIsLoding={setIsLoding}/>
      </div>

    </div>
  )
}

export default TransPost;