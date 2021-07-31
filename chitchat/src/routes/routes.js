import Blog from '../components/Blog/Blog';
import Chats from '../components/Chat/Chat';
import Login from '../components/Auth/Login';
import Clash from '../components/Clash/Clash';
import Map from '../components/Map/Maps';
import Location from '../components/Location/Location';
import List from '../components/List/List';
import Item from '../components/Blog/Item';
import Home from '../components/Dashboard/Home';

const routes = [
	{path: '/', component: <Home />, props: {exact: ''}},
	{path: '/blog', component: <Blog />},
	{path: '/chat', component: <Chats />},
	{path: '/login', component: <Login />},
	{path: '/clash', component: <Clash />},
	{path: '/location', component: <Location />},
	{path: '/map', component: <Map />},
	{path: '/list', component: <List />},
	{path: '/list/:id', component: <Item />},
];
export default routes;
