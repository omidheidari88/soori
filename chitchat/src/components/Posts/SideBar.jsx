import React from "react";

const SideBar = ({ posts, getPostId }) => {
  const postHandler = (id) => getPostId(id);

  const postList = posts?.map((post) => {
    return (
      <ul>
        <li onClick={() => postHandler(post.id)}>{post.title}</li>
      </ul>
    );
  });
  return <aside>{postList}</aside>;
};

export default SideBar;
