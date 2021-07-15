import React from 'react';
import ImageMapper from 'react-image-mapper';
import IMAGE_URL from './img/world-political-maps.jpeg';
const Maps = () => {
	const MAP = {
		areas: [
			{name: '1', shape: 'poly', coords: [25, 33, 27, 300, 128, 240, 128, 94], preFillColor: 'green', fillColor: 'blue'},
			{name: '2', shape: 'poly', coords: [219, 118, 220, 210, 283, 210, 284, 119], preFillColor: 'pink'},
			{name: '3', shape: 'poly', coords: [381, 241, 383, 94, 462, 53, 457, 282], fillColor: 'yellow'},
			{name: '4', shape: 'poly', coords: [245, 285, 290, 285, 274, 239, 249, 238], preFillColor: 'red'},
			{name: '5', shape: 'circle', coords: [170, 100, 25]},
		],
	};
	return (
		<div>
			<ImageMapper width={500} heigth={500} src={IMAGE_URL} map={MAP} />
		</div>
	);
};

export default Maps;
