import {Route} from 'react-router-dom';
import routes from './routes';

export const Routes = () => {
	const result = routes.map(({path, component}) => {
		return (
			<Route exact path={path}>
				{component}
			</Route>
		);
	});

	return <>{result}</>;
};
