import React from 'react';
import Gravatar from 'react-gravatar';
import Ratings from 'react-ratings-declarative';

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		maxWidth: 350,
		minWidth: 250,
		paddingTop: 12,
		backgroundColor: '#F2EFEB',
		margin: 15,
	},
	avatar: {
		borderRadius: 50,
	}
});

const ItemCard = () => {
	const classes = useStyles();

	{/*fetch actual user rating from hook for given card later*/}
	const [rating, setRating] = React.useState(3.5);

	return (
	<Card className={classes.root} elevation={6}>
		<CardActionArea>
			<CardMedia
				component="img"
				alt="name of image"
				height="200"
				image={process.env.PUBLIC_URL + '/img/postImages/image.png'}
				title="title of post"
			/>
			<CardContent>
			<Typography gutterBottom variant="h5" component="h2">
					Title of Post
			</Typography>
			<Typography variant="body2" color="textSecondary" component="p" display="inline">
				Date posted: 
			</Typography>
			</CardContent>
		</CardActionArea>

		<CardActions>
			<Gravatar email="a-email@example.com" className={`${classes.avatar}`}/>
			<Ratings
				rating={rating}
				widgetDimensions="20px"
				widgetSpacings="0px"
			>
				<Ratings.Widget widgetRatedColor="orange" />
				<Ratings.Widget widgetRatedColor="orange" />
				<Ratings.Widget widgetRatedColor="orange" />
				<Ratings.Widget widgetRatedColor="orange" />
				<Ratings.Widget widgetRatedColor="orange" />
			</Ratings>
	
		</CardActions>
	</Card>
	)
}

export default ItemCard;
