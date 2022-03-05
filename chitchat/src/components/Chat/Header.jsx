import React from 'react';
import {useMyContext} from '../Store/Context/Context';

const Header = () => {
	const [state] = useMyContext();

	return (
		<div className='panel-heading'>
			<h3 className='panel-title'>
				<i className='icon wb-chat-text' aria-hidden='true' />
				welcome {state?.user?.name}
			</h3>
		</div>
	);
};

export default Header;
