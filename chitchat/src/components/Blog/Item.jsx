import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Get} from '../../Services/axios';

const Item = () => {
	const {id} = useParams();

	const [post, setPost] = useState([]);

	useEffect(() => {
		Get(`http://localhost:3003/posts/${id}`)
			.then((response) => {
				setPost(response?.data);
			})
			.catch((error) => console.log(error));
	}, [id]);

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
