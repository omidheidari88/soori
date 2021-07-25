import {Get} from '../../Services/axios';
import React, {useEffect, useState} from 'react';
import './Style.css';
import Item from './Item';

const Blog = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		Get('posts')
			.then((response) => {
				setPosts(response.data);
			})
			.catch((error) => console.log(error));
	}, []);
	const item = posts.map((post) => <Item post={post} />);
	return (
		<>
			<div className='main'>
				<div className='band'>{item}</div>
			</div>
		</>
	);
};

export default Blog;
