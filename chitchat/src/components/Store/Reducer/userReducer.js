import actions from "../actions/actions";

export const userReducer = (state, action) => {
  let result = null;
  switch (action?.type) {
    case actions.ADD_USER:
      result = { ...state, ...action.payload };
      break;
    default:
      result = state;
      break;
  }

  return result;
};
