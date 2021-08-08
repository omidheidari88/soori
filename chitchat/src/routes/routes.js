import Blog from '../components/Blog/Blog';
import Chats from '../components/Chat/Chat';
import Login from '../components/Auth/Login';
import Clash from '../components/Clash/Clash';
import IMap from '../components/Map/Maps';
import Location from '../components/Location/Location';
import List from '../components/List/List';
import Item from '../components/Blog/Item';
import Home from '../components/Dashboard/Home';

const routes = [
	{path: '/', Component: Home, props: {title: 'React App'}},
	{path: '/blog', Component: Blog},
	{path: '/blog/:id', Component: Item},
	{path: '/chat', Component: Chats},
	{path: '/login', Component: Login},
	{path: '/clash', Component: Clash},
	{path: '/location', Component: Location},
	{path: '/map', Component: IMap},
	{path: '/list', Component: List},
];
export default routes;
