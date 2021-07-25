import React, {Component} from 'react';

import SideBar from './SideBar';
import {Get} from '../../Services/axios';
import Posts from './Posts';
class Main extends Component {
	state = {
		posts: [],
		comments: [],
		sideBarPost: [],
	};
	getData = async () => {
		const postResponse = await Get('http://localhost:3002/posts');
		console.log(postResponse);
		const commentsResponse = await Get('http://localhost:3002/comments');
		this.setState((prevState) => {
			return {
				...prevState,
				posts: postResponse.data,
				sideBarPost: postResponse.data,
				comments: commentsResponse.data,
			};
		});
	};

	getPostIdFromSideBar = async (id) => {
		const postResponse = await Get(`http://localhost:3002/posts/${id}`);
		const commentsResponse = await Get(`http://localhost:3002/comments/${id}`);
		this.setState({
			posts: [postResponse.data],
			comments: [commentsResponse.data],
		});
	};

	componentDidMount() {
		this.getData();
	}

	render() {
		return (
			<>
				<SideBar posts={this.state.sideBarPost} getPostId={this.getPostIdFromSideBar} />
				<Posts posts={this.state.posts} comments={this.state.comments} />
			</>
		);
	}
}

export default Main;
