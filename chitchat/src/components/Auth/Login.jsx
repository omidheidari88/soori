import {Get, Post} from '../../Services/axios';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import actions from '../Store/actions/actions';
import {useMyContext} from '../Store/Context/Context';
import './Style.css';
import {Redirect, useHistory, useLocation} from 'react-router-dom';

const Login = () => {
	const [message, setMessage] = useState(null);
	const [state, dispatch] = useMyContext();
	const location = useLocation();
	const history = useHistory();
	const redirectUrl = location?.state?.from;
	const token = state.auth.token;
	const formSubmitted = async (e) => {
		e?.preventDefault();
		const username = document.querySelector('#username').value;
		const password = document.querySelector('#password').value;
		Post('http://localhost:4000/login', {data: {username, password}}).then((res) => {
			if (res.data.success) {
				console.log(res.data.user);
				dispatch({type: actions.USER_LOGIN_SUCCESS, payload: {token: res.data.token}});
				dispatch({type: actions.ADD_USER, payload: {user: res.data.user}});
				setMessage(null);
				history.replace(redirectUrl);
			} else {
				setMessage(res.data.message);
			}
		});
	};

	useLayoutEffect(() => {
		if (token === process.env.REACT_APP_TOKEN) {
			history.replace(redirectUrl);
		}
		if (token === process.env.REACT_APP_TOKEN && redirectUrl === undefined) {
			history.replace('/');
		}
	}, [token, redirectUrl, history]);
	return (
		<div className='login'>
			<h1>Login </h1>
			<form onSubmit={(e) => formSubmitted(e)} id='formSubmit' method='POST' action='http://localhost:4000/login' encType='application/json'>
				<input type='text' placeholder='Username' required='required' id='username' />
				<input type='password' placeholder='Password' required='required' id='password' />
				<button type='submit' className='btn btn-primary btn-block btn-large'>
					Let me in.
				</button>
			</form>
			<br />
			{message && <span className='messages'>{message}</span>}
		</div>
	);
};

export default Login;
