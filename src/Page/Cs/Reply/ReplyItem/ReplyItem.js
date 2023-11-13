// ReplyItem.js
import React, { useState } from "react";
import "./Replyitem.css";
import axiosInstance from "../../../../axiosInstance";

function ReplyItem({ reply, oneDetail, setReply }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(reply.content);


  const handleEditClick = () => {
    setIsEditing(true);
    setEditedContent(reply.content);
  };

  const handleSaveClick = () => {
    // 수정된 내용을 서버에 저장하고 상태를 업데이트
    axiosInstance
      .put(`/reply`, { ...reply, content: editedContent })
      .then((response) => {
        alert(response.data);
        setReply((prevReplyList) =>
        prevReplyList.map((r) =>
          r.id === reply.id ? { ...r, content: editedContent } : r
        )
      );
      setIsEditing(false);
    })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleCancelClick = () => {
    setIsEditing(false);
  };
  return (
    <div className="reply-item">
      <div className="replyListBox">

        <div>
          작성자: {oneDetail.member.name}
        </div>
        <div>

          {isEditing ? (
            <div className="replyFlex ">
              <textarea
                className="reply-submit"
                type="text"
                rows={2}
                cols={50}
                onChange={(e) => setEditedContent(e.target.value)}
              > value={reply.content}</textarea>{" "}
              <button className="click" onClick={handleSaveClick}>
                저장
              </button>
              <button className="noClick" onClick={handleCancelClick}>
                취소
              </button>
            </div>
          ) : (
            <div className="replyFlex">
              <textarea
                className="reply-content"
                type="text"
                rows={2}
                cols={50}
                value={reply.content}
                readOnly
              ></textarea>{" "}
              <div className="btn">
                <button onClick={handleEditClick} className="click">
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
                        setReply((deleteReplyList) => deleteReplyList.filter((r) => r.id !== reply.id));
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }}
                >
                  삭제
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReplyItem;
