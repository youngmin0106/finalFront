import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";
import Reply from "../Reply/Reply";

function OnetoOneDetail({ userInfo, cs }) {

  const { no } = useParams();
  const [oneDetail, setOneDetail] = useState();
  const [loding, setLoding] = useState(true);
  const navigate = useNavigate();

  const onetooneupdatebtn = () => {
    navigate(`/onetoone/${no}/update`);
  }

  const backbtn = () => {
    navigate("/onetoone");
  }

  useEffect(() => {
    axiosInstance.get(`/onetoone/${no}`)
      .then(response => {
        setOneDetail(response.data);
        setLoding(false);
      }).catch(error => {
        console.log(error);
        setLoding(false);
      })
  }, [no])
  if (loding)
    return <div>로딩중</div>


  return (
    <>
    <div className="WriteNotice">
    <div className="table">
      <div className="title">
        <p className="th">제목</p>
        <input className="writetitle" type="text" name="title" value={oneDetail.title} disabled />
      </div>
      <div className="writer">
        <p className="th">작성자</p>
        <p className="writename">{oneDetail.member.name}</p>
      </div>
    </div>
    <div className="content">
      <textarea
        value={oneDetail.content}
        disabled
        name="content"
      ></textarea>
    </div>
      <div className="clickbtn">
        {cs.member.username == oneDetail.member.username ?
          <button className="click" onClick={onetooneupdatebtn}>수정</button>
          :
          <div></div>
        }
        {cs.member.username == oneDetail.member.username ?

          <button  className="noClick" type="reset"
            onClick={() => {
            
              axiosInstance.delete('/onetoone', { params: { 'no': oneDetail.no } })
                .then(response => {
                  alert(response.data);
                  navigate('/onetoone');
                }).catch(error => {
                  console.log(error);
                })
            }}
          >삭제</button>
          :
          <div></div>
        }
        <button  className="backClick" onClick={backbtn}>목록</button>{' '}
      </div>
    </div>
        {
          cs.member.username == oneDetail.member.username ?
          <Reply oneDetail={oneDetail} cs={cs}/>
          :
          <div></div>
          
        }
        </>
    

  );
}

export default OnetoOneDetail;