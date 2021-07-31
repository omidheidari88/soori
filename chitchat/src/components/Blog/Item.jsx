import React, {useEffect, useState} from 'react';
import {Get} from '../../Services/axios';

const Item = (props) => {
	console.log(props);
	const [post, setPost] = useState([]);

	// useEffect(() => {
	// 	Get(`posts/${id}`)
	// 		.then((response) => {
	// 			setPost(response?.data);
	// 		})
	// 		.catch((error) => console.log(error));
	// }, [id]);

	return (
		<div className='item-2'>
			<div
				className='thumb'
				style={{
					backgroundImage: `url(${post?.image})`,
				}}
			></div>
			<img src={post?.image} alt='' />
			<article>
				<h1>{post?.title}</h1>
				<span>{post?.summary}</span>
			</article>
		</div>
	);
};

export default Item;
