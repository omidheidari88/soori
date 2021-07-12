import React from "react";
const Post = ({ post }) => {
  return (
    <div className="post" id={post.id}>
      <img width="250" height="150" src={`/assets/${post.image}`} alt />
      <h1>{post.title}</h1>
      <h3>{post.author}</h3>
      <div>{post.body}</div>
    </div>
  );
};

export default Post;
