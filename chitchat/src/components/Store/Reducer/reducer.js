import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";

export const initState = {
  auth: {
    success: false,
    user: null,
    error: null,
    token: null,
    status: false,
  },
  user: null,
};
export const reducer = (state = initState, action) => {
  return {
    auth: authReducer(state.auth, action),
    user: userReducer(state.user, action),
  };
};
