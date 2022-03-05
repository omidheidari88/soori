import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Description = ({summary, info, images}) => {
	const {leaderName1} = info;
	return (
		<Card sx={{maxWidth: 345}}>
			<CardMedia component='img' height='140' image={images} alt='green iguana' />
			<CardContent>
				<Typography gutterBottom variant='h4' component='div'>
					{leaderName1}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{summary}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Description;
