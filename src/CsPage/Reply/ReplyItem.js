// ReplyItem.js

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../CsCss/Replyitem.css";
import axiosInstance from "../../axiosInstance";

function ReplyItem({ reply, oneDetail , setReply }) {
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
        setReply(response.data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="reply-item">
      <div className="comment-author">
        작성자: {reply.username}
      </div>
      <br />
      {isEditing ? (
        <div>
          <textarea
            className="reply-content"
            type="text"
            rows={2}
            cols={50}
            value={reply.content}
            onChange={(e) =>  setEditedContent(e.target.value)}
          ></textarea>{" "}
          <button className="click" onClick={handleSaveClick}>
            저장
          </button>
        </div>
      ) : (
        <div>
          <textarea
            className="reply-content"
            type="text"
            rows={2}
            cols={50}
            value={reply.content}     
          ></textarea>{" "}
            <button  onClick={handleEditClick} className="click">
              수정
            </button>{" "}
          <button
            className="noClick"
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
          </button>
        </div>
      )}
    </div>
  );
}

export default ReplyItem;
