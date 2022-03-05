import React, {useState, useEffect} from 'react';

const Count = () => {
	const [count, setCount] = useState(0);

	const increment = () => setCount((count) => count + 1);

	const decrement = () => {
		if (count <= 0) {
			setCount((count) => count === 0);
		}
		setCount((count) => count - 1);
	};

	return (
		<div className='counter'>
			<button onClick={decrement} className='bg-info'>
				-
			</button>
			<p className='count'>{count}</p>
			<button onClick={increment} className='bg-success'>
				+
			</button>
		</div>
	);
};
export default Count;
