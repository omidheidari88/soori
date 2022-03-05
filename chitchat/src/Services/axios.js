import axios from 'axios';

// axios.defaults.baseURL = process.env.REACT_APP_BASEURL;
// axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_TOKEN;

export const Get = async (url, config = {}) => {
	const promise = new Promise((reslove, reject) => {
		try {
			const response = axios.get(url, config);
			return reslove(response);
		} catch (error) {
			reject(error);
		}
	});
	return promise;
};

export const Post = (url, data, config = {}) => {
	const promise = new Promise((reslove, reject) => {
		try {
			const response = axios.post(url, data, config);
			return reslove(response);
		} catch (error) {
			reject(error);
		}
	});
	return promise;
};
