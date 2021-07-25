import React from 'react';

const Item = ({post}) => {
	return (
		<div className='item-1'>
			<a href='https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852' className='card'>
				<div
					className='thumb'
					style={{
						backgroundImage: `url(${post.image})`,
					}}
				></div>
				<article>
					<h1>{post.title}</h1>
					<span>{post.summary}</span>
				</article>
			</a>
		</div>
	);
};

export default Item;
