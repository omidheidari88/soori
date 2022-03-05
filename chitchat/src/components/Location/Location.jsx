import axios from 'axios';
import React, {Component} from 'react';
import Loading from '../../Services/Loader';
import Info from './Info';
import './Style.css';
class Location extends Component {
	state = {
		isMounted: true,
		myLocation: '',
	};
	getIp = async () => {
		try {
			const response = await axios.get(`http://ipwhois.app/json/`);
			const {city, country_code, country_flag, country, isp, ip, latitude, longitude, success} = response.data;
			this.setState((prevState) => {
				return {
					...prevState,
					myLocation: {
						city,
						country_flag,
						country,
						isp,
						ip,
						latitude,
						longitude,
						country_code,
					},
				};
			});

			if (success) {
				this.setState((prevState) => {
					return {
						...prevState,
						isMounted: true,
					};
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
	componentDidMount() {
		this.getIp();
	}
	render() {
		return <>{this.state.isMounted ? <Info item={this.state.myLocation} /> : <Loading />}</>;
	}
}

export default Location;
