import React from 'react';
import {useMyContext} from '../Store/Context/Context';

import './Style.css';
import {Redirect, useLocation} from 'react-router-dom';
const Home = () => {
	const location = useLocation();
	const [state] = useMyContext();
	const token = state.auth.token;
	const checkHandler = () => {
		if (token === process.env.REACT_APP_TOKEN) {
			return (
				<>
					<h1>welcome</h1>
				</>
			);
		} else {
			return <Redirect to={{pathname: './login', state: {from: location}}} />;
		}
	};
	return <>{checkHandler()}</>;
};

export default Home;
