import React, {useEffect, useState} from 'react';
import './Style.css';
import ImageMapper from 'react-image-mapper';
import IMAGE_URL from './img/world-political-maps.jpeg';
import map from './coords/coords.json';
import wiki from 'wikijs';
import Description from './Description';
import {Redirect, useLocation} from 'react-router-dom';
import {useMyContext} from '../Store/Context/Context';
const Maps = () => {
	const [hoveredArea, setHoveredArea] = useState(null);
	const [summary, setSummary] = useState('nothing found');
	const [info, setInfo] = useState('nothing found');
	const [images, setImages] = useState(null);
	const enterArea = (area) => setHoveredArea(area);
	const leaveArea = () => setHoveredArea(null);
	const getTipPosition = (area) => ({top: `${area?.center[1]}px`, left: `${area?.center[0]}px`});
	useEffect(() => {
		if (hoveredArea) {
			async function fetchData() {
				const nameOfCountry = hoveredArea?.name;
				const countries = await wiki()?.page(nameOfCountry);
				if (nameOfCountry !== undefined) {
					const [summary, info, images] = await Promise.all([countries.summary(), countries.info(), countries.images()]);
					if (summary) {
						setSummary(summary);
					}
					if (info) {
						setInfo(info);
					}
					const image = info?.imageFlag;
					const countryPrfix = image?.replace(/\s/g, '_');
					images?.some((image) => {
						if (image.includes(countryPrfix)) {
							setImages(image);
							return true;
						}
						return false;
					});
				}
			}
			fetchData();
		}
	}, [hoveredArea?.name]);

	const location = useLocation();
	const [state] = useMyContext();
	const token = state.auth.token;
	const page = () => {
		if (token === process.env.REACT_APP_TOKEN) {
			return (
				<div className='container'>
					<div>
						<ImageMapper onMouseEnter={(area) => enterArea(area)} onMouseLeave={() => leaveArea()} width={1000} imageWidth={1000} src={IMAGE_URL} map={map} />
						{hoveredArea && (
							<span className='tooltips' style={{...getTipPosition(hoveredArea)}}>
								{hoveredArea && hoveredArea.name}
							</span>
						)}
					</div>
					<Description summary={summary} info={info} images={images} />
				</div>
			);
		} else {
			return <Redirect to={{pathname: './login', state: {from: location}}} />;
		}
	};

	return <>{page()}</>;
};

export default Maps;
