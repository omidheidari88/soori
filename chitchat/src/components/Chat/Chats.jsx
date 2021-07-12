import React, {Component} from 'react';
import Footer from './Footer';
import Header from './Header';
import Chat from './Chat';
import avatar1 from './img/avatar1.png';
import {fakerMessages} from './faker';
export class index extends Component {
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
			<div className='container bootstrap snippets'>
				<h1>how are you</h1>
				<div className='col-md-7 col-xs-12 col-md-offset-2'>
					<div class='panel' id='chat'>
						<Header title={this.state.title} />
						<Chat chatList={this.state.chatAttribute} scrollHandler={this.scrollHandler} />
						<Footer getValue={this.messageDataHandler} />
					</div>
				</div>
			</div>
		);
	}
}

export default index;
