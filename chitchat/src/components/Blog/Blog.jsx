import {Get} from '../../Services/axios';
import React, {useEffect, useState} from 'react';
import './Style.css';
import Items from './Items';
import Loader from '../../Services/Loader';
const Blog = () => {
	const Url = process.env.REACT_APP_BLOG_URL;
	const [message, setMessage] = useState(null);

	const [posts, setPosts] = useState([]);
	useEffect(() => {
		Get(`${Url}/posts`)
			.then((response) => {
				setPosts(response?.data);
			})
			.catch((error) => {
				setMessage(error.message);
			});
	}, []);
	const items = posts?.map((post, index) => {
		const variant = index === 0 ? 1 : 2;
		return <Items post={post} variant={variant} />;
	});
	return (
		<>
			<div className='main'>
				{message && <span className='messages'>{message}</span>}
				<div className='band'>{items}</div>
			</div>
		</>
	);
};

export default Blog;
