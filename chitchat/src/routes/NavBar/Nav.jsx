import React from 'react';
import './style.css';
const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<a href='/'>Home</a>
				</li>
				<li>
					<a href='/blog'>Blog</a>
				</li>
				<li>
					<a href='/chat'>Chat</a>
				</li>
				<li>
					<a href='/login'>Login</a>
				</li>
				<li>
					<a href='/location'>Location</a>
				</li>
				<li>
					<a href='/clash'>Clash</a>
				</li>
				<li>
					<a href='/map'>Map</a>
				</li>
				<li>
					<a href='/post'>Post</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
