import { useState, useEffect } from "react";
import "./Reply.css";
import ReplyItem from "./ReplyItem/ReplyItem";
import axiosInstance from "../../../axiosInstance";

/////
function Reply({ oneDetail, cs }) {

  const [reply, setReply] = useState({
    content: "",
 
  });
  // 댓글 목록 상태 추가
  const [replyList, setReplyList] = useState([]);


  const handleAddComment = () => {
      // 댓글 작성 
      const replyData = {
        ...reply,
        no: oneDetail.no,
        member: {
          username: cs.member.username,
        },
      };
      axiosInstance
        .post(`/reply/${oneDetail.no}`, replyData)
        .then((response) => {
          axiosInstance
          .get(`/reply/${oneDetail.no}/list`)
          .then((response) => {
            setReplyList(response.data);
            setReply({ content: "" });
          })
          .catch((error) => {
            console.log(error);
          });
          
        alert(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });        
      };

        useEffect(() => {
          // 댓글 목록을 서버에서 가져오는 부분
          axiosInstance
            .get(`/reply/${oneDetail.no}/list`)
            .then((response) => {
              setReplyList(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }, [oneDetail.no]);

  return (
    <div className="replyWrite">
    <div className="reply-section">
        <div className="add-reply">
          <textarea
            value={reply.content}
            onChange={(e) => setReply({ ...reply, content: e.target.value })}
            className="reply-textarea"
            placeholder="댓글을 입력하세요"
          ></textarea>
          <button
            variant="outline-success"
            className="click"
            onClick={handleAddComment}
          >
            등록
          </button>
        </div>
        </div>
        {replyList.length > 0 && (
          <div className="comment-list">   
            <div className="replyListmap">
            {replyList.map((reply ,i) => (
              <ReplyItem
              key={i}
              reply={reply}
              oneDetail={oneDetail}
              setReply={setReplyList} //댓글 목록 업데이트
              />
              ))}
              </div>
          </div>
        )}
    </div>
  );
}

export default Reply;
