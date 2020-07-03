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

const useStyles = makeStyles((theme) => ({
	root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 350,
        maxWidth: 350,
        flexGrow: 1,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 35,
        minHeight: 350,
        backgroundColor: "#ededed",
	},
	avatar: {
        paddingTop: 15,
        marginTop: -50,
        borderRadius: 200,
        width: 200,
        height: 200,
    },
    username: {
        paddingTop: 15,
        paddingBottom: 3,
        fontWeight: "bold",
    },
    rating: {
        paddingLeft: 3,
        fontWeight: "bold",
    }
}));

const UserProfileCard = () => {
	const classes = useStyles();

	{/*fetch actual user rating from hook for given card later*/}
	const [rating, setRating] = React.useState(0.5);

	return (
	<Card className={classes.root} elevation={6}>
		<div>
			<Gravatar email="a-email@example.com" className={`${classes.avatar}`}/>
		</div>
        <Typography variant="h5" className={classes.username}>
            ChunkySmalls
        </Typography>
        <div>
            <Ratings
                    rating={rating}
                    widgetDimensions="30px"
                    widgetSpacings="0px"
                >
                    <Ratings.Widget widgetRatedColor="#FF5722" />
                    <Ratings.Widget widgetRatedColor="#FF5722" />
                    <Ratings.Widget widgetRatedColor="#FF5722" />
                    <Ratings.Widget widgetRatedColor="#FF5722" />
                    <Ratings.Widget widgetRatedColor="#FF5722" />
            </Ratings>
            <span className={classes.rating}>(69)</span>
        </div>
	</Card>
	)
}

export default UserProfileCard;
