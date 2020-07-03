import React from 'react';

import Gravatar from 'react-gravatar';
import Ratings from 'react-ratings-declarative';
import AccountOptions from './AccountOptions';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import StarsIcon from '@material-ui/icons/Stars';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CategoryIcon from '@material-ui/icons/Category';

const useStyles = makeStyles({
	root: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    minWidth: 350,
    maxWidth: 800,
    flexGrow: 1,
    marginRight: '5%',
    marginTop: 35,
    minHeight: 325,
    marginLeft: '5%',
    backgroundColor: "#ededed",
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  header: {
    paddingTop: 7,
    paddingLeft: 20,
    paddingRight: 20,
  },
  content: {
    paddingTop: 15,
    paddingLeft: 15,
    maxWidth: 500,
    minWidth: 300,
  },
  info: {
    paddingLeft: 5,
  },
  details: {
    width: "100%",
  },
  updateDetails: {
    alignSelf: 'flex-end',
    width: "25%",
  }
});

const UserDetailsCard = () => {
	const classes = useStyles();

	{/*fetch actual user rating from hook for given card later*/}
	const [rating, setRating] = React.useState(3.5);

	return (
    <Card className={classes.root} className={classes.root} elevation={6}>
      <div className={classes.details}>
          <div className={classes.headerContainer}>
            <Typography className={classes.header} variant="h3">
              Account Details
            </Typography>
            <div style={{marginLeft: 'auto'}}><AccountOptions/></div>
            
          </div>
          <hr style={{width: 350, float: 'left'}}/>
          <br />
          <Typography variant="h6" className={classes.content}>
              <MailOutlineIcon color="primary" /><span className={classes.info}>&nbsp;ChunkySmalls@gmail.com</span>
          </Typography>
          <Typography variant="h6" className={classes.content}>
              <SentimentVerySatisfiedIcon color="primary"/><span className={classes.info}>&nbsp;I like long walks on the beach and Baseball baby! I stream on twitch for a living.</span>
          </Typography>
          <br /><br />
          <Typography variant="h6" className={classes.content}>
              <StarsIcon color="primary"/><span className={classes.info}>&nbsp;Average Rating: 0.69&nbsp;&nbsp;</span><br />
              <CheckBoxIcon color="primary"/><span className={classes.info}>&nbsp;Completed Swaps: 10</span>
          </Typography>
          <Typography variant="h6" style={{paddingBottom: 8}} className={classes.content}>
              <CategoryIcon color="primary"/><span className={classes.info}>&nbsp;Favorite Categories: Sports, Furniture, clothing.</span>
          </Typography>
      </div> 
    </Card>
	);
}

export default UserDetailsCard;
