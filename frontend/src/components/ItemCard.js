import React, { useEffect, useState } from 'react';
import Gravatar from 'react-gravatar';
import Ratings from 'react-ratings-declarative';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { withRouter } from 'react-router-dom';

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

const ItemCard = (props) => {
  const classes = useStyles();

  const [email, setEmail] = useState('notset');
  const [rating, setRating] = useState(0);
  const [img, setImg] = useState(null);

  useEffect(() => {
    axios.post(`http://localhost:4002/api/getPosterInfo`, {
      userId: props.post.userId
    }).then(res => {
      setEmail(res.data.email);
      setRating(res.data.rating);
    }).catch(err => console.log(err));
  });

  const handleCardClick = () => {
    props.history.push(`/listing/${props.post.postId}`);
  }

	return (
	<Card className={classes.root} elevation={6}>
    <img src={img} />
		<CardActionArea onClick={() => handleCardClick()}>
			<CardMedia
				component="img"
				alt={props.post.title}
				height="200"
				image={`http://localhost:4005/api/getPostImg?filename=${props.post.filename}`}
				title={props.post.title}
			/>
			<CardContent>
			<Typography gutterBottom variant="h5" component="h2">
					{props.post.title}
			</Typography>
			<Typography variant="body2" color="textSecondary" component="p" display="inline">
				Date posted: {new Date(props.post.createTime).toString().substr(0, 24)}
			</Typography>
			</CardContent>
		</CardActionArea>

		<CardActions>
			<Gravatar email={email} className={`${classes.avatar}`}/>
			<Ratings
				rating={rating}
				widgetDimensions="20px"
				widgetSpacings="0px"
			>
				<Ratings.Widget widgetRatedColor="#FF5722" />
				<Ratings.Widget widgetRatedColor="#FF5722" />
				<Ratings.Widget widgetRatedColor="#FF5722" />
				<Ratings.Widget widgetRatedColor="#FF5722" />
				<Ratings.Widget widgetRatedColor="#FF5722" />
			</Ratings>
	
		</CardActions>
	</Card>
	)
}

export default withRouter(ItemCard);
