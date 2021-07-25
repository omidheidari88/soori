import {router} from './routes/router';
import {useRoutes} from 'hookrouter';
import Nav from './routes/NavBar/Nav';

// import Chats from './components/Chat/Chats';
// import actions from './components/Store/actions/actions';
// import {useMyContext} from './components/Store/Context/Context';
const App = () => {
	const routeResult = useRoutes(router);
	//this is for authenication
	// const [state, dispatch] = useMyContext();
	// const status = state.auth.status;
	// useLayoutEffect(() => {
	// 	const token = localStorage.getItem('token');
	// 	const user = JSON.parse(localStorage.getItem('user'));
	// 	if (token) {
	// 		dispatch({type: actions.USER_LOGIN_SUCCESS, payload: {status: true}});
	// 		dispatch({type: actions.ADD_USER, payload: user});
	// 	}
	// }, [dispatch]);
	return (
		<>
			<Nav />
			{routeResult || <h1>not found any page</h1>}
		</>
	);
};

export default App;
