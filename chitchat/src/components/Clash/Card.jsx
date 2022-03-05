import React from 'react';
import Arrow from './Arrow';
import Features from './Features';
import Buy from './Differ/Buy';

const Card = ({hero, arrow}) => {
	return (
		<div className='wrapper'>
			<Arrow direction={'prev'} arrow={arrow} />
			<div className={`clash-card ${hero.name}`}>
				<div className={`clash-card__image clash-card__image__${hero.name}`}>
					<img src={hero.img} alt={hero.name} />
				</div>
				<div className={`clash-card__level clash-card__level--${hero.name}`}>{hero.level}</div>
				<div className='clash-card__unit-name'>{hero.name}</div>
				<div className='clash-card__unit-description'>{hero.description}</div>
				<Buy name={hero.name} id={hero.id} />
				<div className={`clash-card__unit-stats clash-card__unit-stats--${hero.name} clearfix`}>
					<Features items={hero.items} />
				</div>
			</div>

			<Arrow direction={'next'} arrow={arrow} />
		</div>
	);
};

export default Card;
