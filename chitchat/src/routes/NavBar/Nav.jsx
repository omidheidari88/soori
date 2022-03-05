import React from 'react';
import './style.css';
import {Link, NavLink} from 'react-router-dom';

const Nav = () => {
	return (
		<nav>
			<ul id='nav'>
				<li>
					<NavLink exact activeClassName='activeLink' to={'/'}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName='activeLink' to={'/login'}>
						Login
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName='activeLink' to={'/blog'}>
						Blog
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName='activeLink' to={'/chat'}>
						Chat
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName='activeLink' to={'/location'}>
						Location
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName='activeLink' to={'/clash'}>
						Clash
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName='activeLink' to={'/map'}>
						Map
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName='activeLink' to={'/list'}>
						List
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName='activeLink' to={'/task'}>
						Task
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
