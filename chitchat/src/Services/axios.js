import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASEURL;
// axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_TOKEN;

export const Get = async (url, config = {}) => {
	try {
		return await axios.get(url, config);
	} catch (error) {
		console.log(error);
	}
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
