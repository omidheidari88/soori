import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Nav from './routes/NavBar/Nav';
import {Routes} from './routes/Router';

const App = () => {
	return (
		<>
			<Router>
				<Nav />
				<Switch>
					<Routes />
				</Switch>
			</Router>
		</>
	);
};

export default App;
