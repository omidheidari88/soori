import React from "react";

const Comments = ({ comment }) => {
  return (
    <div className="comments" id={comment.id}>
      <div className="comment" id={comment["post-id"]}>
        <p>{comment.body}</p>
      </div>
    </div>
  );
};

export default Comments;
