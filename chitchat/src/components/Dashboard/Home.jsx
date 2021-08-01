import React from 'react';

const Home = (props) => {
	const {title} = props;
	return (
		<div>
			<h1>welcome to {title} </h1>
		</div>
	);
};

export default Home;
