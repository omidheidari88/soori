import React, {Component} from 'react';

import SideBar from './SideBar';
import {Get} from '../../Services/axios';
import Posts from './Posts';

const url = process.env.REACT_APP_LIST_URL;
class List extends Component {
	state = {
		posts: [],
		comments: [],
		sideBarPost: [],
	};
	getData = async () => {
		const postResponse = await Get(`${url}/posts`);

		const commentsResponse = await Get(`${url}/comments`);
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
		const postResponse = await Get(`${url}/posts/${id}`);
		const commentsResponse = await Get(`${url}/comments/${id}`);
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

export default List;
