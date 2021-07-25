import Blog from '../components/Blog/Blog';
import Chats from '../components/Chat/Chats';
import Login from '../components/Auth/Login';
import Clash from '../components/Clash/Main';
import Map from '../components/Map/Maps';
import Location from '../components/Location/IpInfo';
import Post from '../components/Posts/Main';

export const router = {
	'/': () => <h1>home page</h1>,
	'/blog': () => <Blog />,
	'/chat': () => <Chats />,
	'/login': () => <Login />,
	'/clash': () => <Clash />,
	'/location': () => <Location />,
	'/map': () => <Map />,
	'/post': () => <Post />,
};
