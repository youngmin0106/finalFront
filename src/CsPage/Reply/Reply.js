import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../CsCss/Reply.css";
import ReplyItem from "./ReplyItem";
import axiosInstance from "../../axiosInstance";

function Reply({ oneDetail, userInfo }) {

  const [reply, setReply] = useState({
    content: "",
    member : userInfo, // 로그인한 사용자의 ID를 사용
    oneid: oneDetail.no
  });
  // 댓글 목록 상태 추가
  const [commentList, setCommentList] = useState([]);

  // 현재 사용자와 댓글 작성자를 비교하기 위한 상태 추가
  const [isCurrentUserComment, setIsCurrentUserComment] = useState(false);

  // const fetchCurrentUser = async () => {
  //   setIsCurrentUserComment(userInfo.id === reply.memberid);
  // };

  // useEffect(() => {
  //   fetchCurrentUser();

  //   axiosInstance
  //     .get(`/reply/${oneDetail.id}`) 
  //     .then((response) => {
  //       setCommentList(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("댓글 목록을 불러오는 데 실패했습니다: ", error);
  //     });
  // }, [oneDetail, userInfo]);

  // 로그인하지 않은 경우 댓글 작성 못하게
  const handleAddComment = () => {
    if (!userInfo.isAuth) {
      // 로그인하지 않은 경우에는 댓글 작성 막음
      alert("댓글을 작성하려면 로그인이 필요합니다.");
    } else {
      // 댓글 작성 
      axiosInstance
        .post(`/reply/${oneDetail.no}`, reply)
        .then((response) => {
          alert(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="write">
      <div className="reply-section">
        <div className="add-reply">
          <textarea
            value={reply.content}
            onChange={(e) => setReply({ ...reply, content: e.target.value })}
            className="reply-textarea"
            placeholder="댓글을 입력하세요"
          ></textarea>
          <Button
            variant="outline-success"
            className="reply-btn"
            onClick={handleAddComment}
          >
            등록
          </Button>
        </div>

        {commentList.length > 0 && (
          <div className="comment-list">
            <h4>댓글 목록</h4>
            {commentList.map((comment) => (
              <ReplyItem
                key={comment.id}
                reply={comment}
                oneDetail={oneDetail}
                isCurrentUserComment={isCurrentUserComment}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Reply;
