// ReplyItem.js

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../CsCss/Replyitem.css";
import axiosInstance from "../../axiosInstance";

function ReplyItem({ reply, oneDetail, isCurrentUserComment }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(reply.content);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // 수정된 내용을 서버에 저장하고 상태를 업데이트
    axiosInstance
      .put(`/reply`, { ...reply, content: editedContent })
      .then((response) => {
        alert(response.data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="reply-item">
      <div className="comment-author">
        작성자: {reply.memberid}
      </div>
      <br />
      {isEditing ? (
        <div>
          <textarea
            className="reply-content"
            type="text"
            rows={2}
            cols={50}
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          ></textarea>{" "}
          <Button variant="outline-success" onClick={handleSaveClick}>
            저장
          </Button>
        </div>
      ) : (
        <div>
          <textarea
            className="reply-content"
            type="text"
            rows={2}
            cols={50}
            value={reply.content}
            disabled={!isCurrentUserComment} // 현재 사용자의 댓글이면 활성화, 아니면 비활성화
          ></textarea>{" "}
          {isCurrentUserComment && (
            <Button variant="outline-primary" onClick={handleEditClick} className="replyupdate">
              수정
            </Button>
          )}{" "}
          <Button
            className="replydelete"
            variant="outline-danger"
            type="reset"
            onClick={() => {
              axiosInstance
                .delete(`/reply/${reply.id}`)
                .then((response) => {
                  alert(response.data);
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            삭제
          </Button>
        </div>
      )}
    </div>
  );
}

export default ReplyItem;
