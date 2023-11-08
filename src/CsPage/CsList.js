import CsMain from "./Notice/NoticeMain";
import OnetoOneMain from "./OnetoOne/OnetoOneMain";
import QuestionMain from "./Question/QuestionMain";

function CsList({cs,setCs}){
  return(
    <div className="csList">
    <CsMain cs={cs} setCs={setCs} />
    <QuestionMain cs={cs} setCs={setCs} />
    <OnetoOneMain cs={cs} setCs={setCs} />
    </div>
  );
}

export default CsList;