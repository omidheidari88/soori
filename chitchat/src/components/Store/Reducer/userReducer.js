import actions from '../actions/actions';

export const userReducer = (state, action) => {
	let result = null;
	console.log(action.payload.user);
	switch (action?.type) {
		case actions.ADD_USER:
			result = {...state, ...action.payload.user};
			break;
		default:
			result = state;
			break;
	}

	return result;
};
