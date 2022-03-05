import React, {useEffect, useRef, useState} from 'react';
import BuyClass from './BuyClass';
import BuyFun from './BuyFun';
import Count from './Count';
const Buy = ({name, id}) => {
	const [max, setMax] = useState(0);
	const ref = useRef(max);
	const clickHandler = () => {
		setMax((max) => max + 1);
	};
	// useEffect(() => {
	// 	const prevState = ref.current;
	// 	ref.current = max;
	// });
	return (
		<div className='badge-wrapper'>
			<Count />
			count is : {max}
			<br />
			<button className='badge ' onClick={clickHandler}>
				click
			</button>
			<BuyClass name={name} />
		</div>
	);
};

export default Buy;
