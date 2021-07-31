import React from 'react';
import Post from './Post';
import Comments from './Comments';
import './Style.css';
const Posts = ({posts, comments}) => {
	const postsData = posts?.map((post) => {
		return <Post post={post} />;
	});
	const commentsData = comments?.map((comment) => {
		return <Comments comment={comment} />;
	});
	return (
		<div className='container'>
			{postsData}
			{commentsData}
		</div>
	);
};

export default Posts;
