import React, {Component} from 'react';
import Footer from './Footer';
import Header from './Header';
import avatar1 from './img/avatar1.png';
import './Style.css';
import {fakerMessages} from './faker';
import ChatItem from './ChatItem';

export class Chat extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Random Chat',
			chatAttribute: fakerMessages(8),
		};
	}

	messageDataHandler = (message) => {
		this.setState((prevState) => {
			return {
				...prevState,
				chatAttribute: [
					...prevState.chatAttribute,
					{
						message,
						time: new Date().toLocaleString(),
						image1: avatar1,
					},
				],
			};
		});
	};
	scrollHandler = (e) => {
		if (e.target.scrollTop === 0) {
			this.setState((prevState) => {
				return {
					...prevState,
					chatAttribute: [...fakerMessages(5), ...prevState.chatAttribute],
				};
			});
		}
	};

	render() {
		return (
			<div className='chitchat'>
				<div className='col-md-7 col-xs-12 col-md-offset-2'>
					<div className='panel' id='chat'>
						<Header />
						<ChatItem chatList={this.state.chatAttribute} scrollHandler={this.scrollHandler} />
						<Footer getValue={this.messageDataHandler} />
					</div>
				</div>
			</div>
		);
	}
}
export default Chat;
