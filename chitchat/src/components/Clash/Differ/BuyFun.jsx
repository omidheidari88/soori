import React from 'react';

const BuyBtn = ({name}) => {
	const handleClick = () => {
		setTimeout(() => {
			alert(name);
		}, 2000);
	};
	return (
		<div>
			<span className='badge ' onClick={handleClick}>
				Buy
			</span>
			<br /> <br />
		</div>
	);
};
export default BuyBtn;
