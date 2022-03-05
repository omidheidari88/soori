import React from 'react';
const Features = ({items}) => {
	return items?.map((item) => {
		return (
			<div className='one-third'>
				<div className='stat'>{item.number}</div>
				<div className='stat-value'>{item.title}</div>
			</div>
		);
	});
};

export default Features;
