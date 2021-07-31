import {A} from 'hookrouter';
import React from 'react';
import {Link} from 'react-router-dom';

const Items = ({post, variant}) => {
	return (
		<div className={`item-${variant}`}>
			<Link to={`list/${post.id}`} className='card'>
				<div
					className='thumb'
					style={{
						backgroundImage: `url(${post?.image})`,
					}}
				></div>
				<article>
					<h1>{post.title}</h1>
					<span>{post.summary}</span>
				</article>
			</Link>
		</div>
	);
};

export default Items;
