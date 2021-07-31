import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
const NavBarHandler = ({title, path}) => {
	return <Link to={path}>{title}</Link>;
};
const Nav = () => {
	return (
		<nav>
			<ul id='nav'>
				<li>
					<NavBarHandler title={'Home'} path={'/'} />
					{/* <Link to={'/'}>Home</Link> */}
				</li>
				<li>
					<Link to={'/blog'}>Blog</Link>
				</li>
				<li>
					<Link to={'/chat'}>Chat</Link>
				</li>
				<li>
					<Link to={'/location'}>Location</Link>
				</li>
				<li>
					<Link to={'/clash'}>Clash</Link>
				</li>
				<li>
					<Link to={'/map'}>Map</Link>
				</li>
				<li>
					<Link to={'/list'}>List</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
