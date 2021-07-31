import {Get} from '../../Services/axios';
import React, {useEffect, useState} from 'react';
import Card from './Card';
import './Style.css';
const Clash = () => {
	const [heros, setHeros] = useState([]);
	const [current, setCurrent] = useState(0);
	const arrowHandler = (direction) => {
		if (direction === 'prev') {
			setCurrent(current - 1 < 0 ? heros.length - 1 : current - 1);
		}
		if (direction === 'next') {
			setCurrent(current + 1 < heros.length ? current + 1 : 0);
		}
	};

	useEffect(() => {
		const url = process.env.REACT_APP_CLASH_URL;
		return Get(`${url}/heroes`).then((response) => setHeros(response.data));
	}, []);
	return (
		<>
			<div className='slide-container'>{heros?.length ? <Card hero={heros[current]} arrow={arrowHandler} /> : <h1 className='loader'>Loading...</h1>}</div>
		</>
	);
};

export default Clash;
