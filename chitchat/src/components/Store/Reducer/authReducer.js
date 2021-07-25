import actions from '../actions/actions';
//  state = {
//  {
//   success:false,
//   user:null,
//   errorMessage:null,
//   token:null
// },
// };
export const authReducer = (state, action) => {
	let result = null;

	switch (action?.type) {
		case actions.USER_LOGIN_SUCCESS:
			const {data, token, status} = action.payload;
			result = {...state, success: true, user: data, token, status};
			break;
		case actions.USER_LOGIN_FAILED:
			result = {...state, success: false, errorMessage: action.payload?.errorMessage};
			break;
		default:
			result = state;
			break;
	}

	return result;
};
